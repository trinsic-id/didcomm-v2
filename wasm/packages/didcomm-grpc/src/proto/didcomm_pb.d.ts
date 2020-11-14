// package: didcomm.messaging
// file: didcomm.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as security_pb from "./security_pb";

export class CoreMessage extends jspb.Message { 
    getId(): string;
    setId(value: string): CoreMessage;

    getType(): string;
    setType(value: string): CoreMessage;

    getBody(): Uint8Array | string;
    getBody_asU8(): Uint8Array;
    getBody_asB64(): string;
    setBody(value: Uint8Array | string): CoreMessage;

    clearToList(): void;
    getToList(): Array<string>;
    setToList(value: Array<string>): CoreMessage;
    addTo(value: string, index?: number): string;

    getFrom(): string;
    setFrom(value: string): CoreMessage;

    getCreated(): number;
    setCreated(value: number): CoreMessage;

    getExpires(): number;
    setExpires(value: number): CoreMessage;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CoreMessage.AsObject;
    static toObject(includeInstance: boolean, msg: CoreMessage): CoreMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CoreMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CoreMessage;
    static deserializeBinaryFromReader(message: CoreMessage, reader: jspb.BinaryReader): CoreMessage;
}

export namespace CoreMessage {
    export type AsObject = {
        id: string,
        type: string,
        body: Uint8Array | string,
        toList: Array<string>,
        from: string,
        created: number,
        expires: number,
    }
}

export class NoOp extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): NoOp.AsObject;
    static toObject(includeInstance: boolean, msg: NoOp): NoOp.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: NoOp, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): NoOp;
    static deserializeBinaryFromReader(message: NoOp, reader: jspb.BinaryReader): NoOp;
}

export namespace NoOp {
    export type AsObject = {
    }
}
