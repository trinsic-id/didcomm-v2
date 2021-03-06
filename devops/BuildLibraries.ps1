param
(
    [ValidateSet('Windows','MacOS','Linux', 'iOS', 'Android')]
    $Platform,
    $OutLocation,
    $AndroidNdkHome
)

$ErrorActionPreference = "Stop"

# Ensure target directory exists and gather invocation info
$InvocationPath = (Get-Item .).FullName
$TargetOutput = $ExecutionContext.SessionState.Path.GetUnresolvedProviderPathFromPSPath([IO.Path]::Combine($InvocationPath, $OutLocation))
mkdir -p $TargetOutput

if ($null -eq $Platform) { throw "Parameter -Platform must be specified." }
if ($null -eq $OutLocation) { throw "Parameter -OutLocation must be specified." }

# Allows to execute this script from any context
Set-Location $PSScriptRoot/../native

try {
    switch ($Platform) {
        Windows {
            rustup target add x86_64-pc-windows-msvc
            cargo build --release --target x86_64-pc-windows-msvc

            Copy-Item -Path .\target\x86_64-pc-windows-msvc\release\okapi.dll -Destination $TargetOutput
            break
        }
        Linux {
            rustup target add x86_64-unknown-linux-gnu
            cargo build --release --target x86_64-unknown-linux-gnu

            Copy-Item -Path .\target\x86_64-unknown-linux-gnu\release\libokapi.so -Destination $TargetOutput
            break
        }
        MacOS {
            rustup target add x86_64-apple-darwin
            cargo build --release --target x86_64-apple-darwin

            Copy-Item -Path .\target\x86_64-apple-darwin\release\libokapi.dylib -Destination $TargetOutput
            break
        }
        iOS {
            cargo install cargo-lipo
            rustup target install x86_64-apple-ios aarch64-apple-ios
            cargo lipo --release
            Copy-Item -Path "./target/universal/release/libokapi.a" -Destination $TargetOutput/
            break
        }
        Android {
            if ($null -eq $AndroidNdkHome) { throw "Parameter -AndroidNdkHome must be specified." }

            $AndroidNdkHome = Resolve-Path $AndroidNdkHome

            mkdir -p ~/.NDK

            & (Resolve-Path "$AndroidNdkHome/build/tools/make_standalone_toolchain.py") --api 26 --arch arm64 --install-dir ~/.NDK/arm64;
            & (Resolve-Path "$AndroidNdkHome/build/tools/make_standalone_toolchain.py") --api 26 --arch arm --install-dir ~/.NDK/arm;
            & (Resolve-Path "$AndroidNdkHome/build/tools/make_standalone_toolchain.py") --api 26 --arch x86 --install-dir ~/.NDK/x86;

            Get-Content "../devops/android-cargo-config" | Out-File "~/.cargo/config"

            rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android

            cargo build --target aarch64-linux-android --release
            cargo build --target armv7-linux-androideabi --release
            cargo build --target i686-linux-android --release

            mkdir -p $TargetOutput/arm64-v8a/
            mkdir -p $TargetOutput/armeabi-v7a/
            mkdir -p $TargetOutput/x86/
            Copy-Item -Path ./target/aarch64-linux-android/release/libokapi.so -Destination $TargetOutput/arm64-v8a/
            Copy-Item -Path ./target/armv7-linux-androideabi/release/libokapi.so -Destination $TargetOutput/armeabi-v7a/
            Copy-Item -Path ./target/i686-linux-android/release/libokapi.so -Destination $TargetOutput/x86/
            break
        }
    }
}
finally {
    # Return to invocation context
    Set-Location $InvocationPath
}