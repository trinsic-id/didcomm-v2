import { expect } from "chai";
import {
  BasicMessage,
  pack,
  unpack,
  PackRequest,
  UnpackRequest,
} from "../index";
import { Alice, Bob } from "./test-keys";
describe("Pack and unpack demo", () => {
  it("pack and unpack basic message", () => {
    let message = new BasicMessage().setText("Hi there");
    let encryptedMessage = pack(
      new PackRequest()
        .setPlaintext(message.serializeBinary())
        .setSenderKey(Alice.secretKey)
        .setReceiverKey(Bob.publicKey)
    );

    let decryptedMessage = unpack(
      new UnpackRequest()
        .setMessage(encryptedMessage.getMessage())
        .setReceiverKey(Bob.secretKey)
        .setSenderKey(Alice.publicKey)
    );

    let reply = BasicMessage.deserializeBinary(
      decryptedMessage.getPlaintext_asU8()
    );

    expect(reply.getText()).equal("Hi there");
  });
});
