
function Build-Protofiles {
    protoc --proto_path=../proto --go_out=./proto --go_opt=paths=source_relative ../proto/examples.proto ../proto/keys.proto ../proto/proofs.proto ../proto/transport.proto ../proto/pbmse/pbmse.proto
}

Build-Protofiles