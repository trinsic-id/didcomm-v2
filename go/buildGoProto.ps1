protoc --proto_path=../proto --go_out=messaging --go_opt=paths=source_relative ../proto/keys.proto ../proto/proofs.proto ../proto/transport.proto ../proto/examples.proto ../proto/pbmse/pbmse.proto
# TODO - Copy pbmse up one level