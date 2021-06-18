# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: proofs.proto
"""Generated protocol buffer code."""
from google.protobuf.internal import enum_type_wrapper
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


import src.okapi.keys_pb2 as keys__pb2
from google.protobuf import struct_pb2 as google_dot_protobuf_dot_struct__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='proofs.proto',
  package='okapi.proofs',
  syntax='proto3',
  serialized_options=b'\n\014Okapi.ProofsB\003APIZ\"github.com/trinsic-id/okapi/proofs\252\002\014Okapi.Proofs',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\x0cproofs.proto\x12\x0cokapi.proofs\x1a\nkeys.proto\x1a\x1cgoogle/protobuf/struct.proto\"\x8a\x01\n\x12\x43reateProofRequest\x12)\n\x08\x64ocument\x18\x01 \x01(\x0b\x32\x17.google.protobuf.Struct\x12#\n\x03key\x18\x03 \x01(\x0b\x32\x16.okapi.keys.JsonWebKey\x12$\n\x05suite\x18\x04 \x01(\x0e\x32\x15.okapi.proofs.LdSuite\"G\n\x13\x43reateProofResponse\x12\x30\n\x0fsigned_document\x18\x01 \x01(\x0b\x32\x17.google.protobuf.Struct\"\x14\n\x12VerifyProofRequest\"\x15\n\x13VerifyProofResponse*&\n\x07LdSuite\x12\x1b\n\x17JcsEd25519Signature2020\x10\x00\x42\x46\n\x0cOkapi.ProofsB\x03\x41PIZ\"github.com/trinsic-id/okapi/proofs\xaa\x02\x0cOkapi.Proofsb\x06proto3'
  ,
  dependencies=[keys__pb2.DESCRIPTOR,google_dot_protobuf_dot_struct__pb2.DESCRIPTOR,])

_LDSUITE = _descriptor.EnumDescriptor(
  name='LdSuite',
  full_name='okapi.proofs.LdSuite',
  filename=None,
  file=DESCRIPTOR,
  create_key=_descriptor._internal_create_key,
  values=[
    _descriptor.EnumValueDescriptor(
      name='JcsEd25519Signature2020', index=0, number=0,
      serialized_options=None,
      type=None,
      create_key=_descriptor._internal_create_key),
  ],
  containing_type=None,
  serialized_options=None,
  serialized_start=331,
  serialized_end=369,
)
_sym_db.RegisterEnumDescriptor(_LDSUITE)

LdSuite = enum_type_wrapper.EnumTypeWrapper(_LDSUITE)
JcsEd25519Signature2020 = 0



_CREATEPROOFREQUEST = _descriptor.Descriptor(
  name='CreateProofRequest',
  full_name='okapi.proofs.CreateProofRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='document', full_name='okapi.proofs.CreateProofRequest.document', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='key', full_name='okapi.proofs.CreateProofRequest.key', index=1,
      number=3, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='suite', full_name='okapi.proofs.CreateProofRequest.suite', index=2,
      number=4, type=14, cpp_type=8, label=1,
      has_default_value=False, default_value=0,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=73,
  serialized_end=211,
)


_CREATEPROOFRESPONSE = _descriptor.Descriptor(
  name='CreateProofResponse',
  full_name='okapi.proofs.CreateProofResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='signed_document', full_name='okapi.proofs.CreateProofResponse.signed_document', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=213,
  serialized_end=284,
)


_VERIFYPROOFREQUEST = _descriptor.Descriptor(
  name='VerifyProofRequest',
  full_name='okapi.proofs.VerifyProofRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=286,
  serialized_end=306,
)


_VERIFYPROOFRESPONSE = _descriptor.Descriptor(
  name='VerifyProofResponse',
  full_name='okapi.proofs.VerifyProofResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=308,
  serialized_end=329,
)

_CREATEPROOFREQUEST.fields_by_name['document'].message_type = google_dot_protobuf_dot_struct__pb2._STRUCT
_CREATEPROOFREQUEST.fields_by_name['key'].message_type = keys__pb2._JSONWEBKEY
_CREATEPROOFREQUEST.fields_by_name['suite'].enum_type = _LDSUITE
_CREATEPROOFRESPONSE.fields_by_name['signed_document'].message_type = google_dot_protobuf_dot_struct__pb2._STRUCT
DESCRIPTOR.message_types_by_name['CreateProofRequest'] = _CREATEPROOFREQUEST
DESCRIPTOR.message_types_by_name['CreateProofResponse'] = _CREATEPROOFRESPONSE
DESCRIPTOR.message_types_by_name['VerifyProofRequest'] = _VERIFYPROOFREQUEST
DESCRIPTOR.message_types_by_name['VerifyProofResponse'] = _VERIFYPROOFRESPONSE
DESCRIPTOR.enum_types_by_name['LdSuite'] = _LDSUITE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

CreateProofRequest = _reflection.GeneratedProtocolMessageType('CreateProofRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEPROOFREQUEST,
  '__module__' : 'proofs_pb2'
  # @@protoc_insertion_point(class_scope:okapi.proofs.CreateProofRequest)
  })
_sym_db.RegisterMessage(CreateProofRequest)

CreateProofResponse = _reflection.GeneratedProtocolMessageType('CreateProofResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEPROOFRESPONSE,
  '__module__' : 'proofs_pb2'
  # @@protoc_insertion_point(class_scope:okapi.proofs.CreateProofResponse)
  })
_sym_db.RegisterMessage(CreateProofResponse)

VerifyProofRequest = _reflection.GeneratedProtocolMessageType('VerifyProofRequest', (_message.Message,), {
  'DESCRIPTOR' : _VERIFYPROOFREQUEST,
  '__module__' : 'proofs_pb2'
  # @@protoc_insertion_point(class_scope:okapi.proofs.VerifyProofRequest)
  })
_sym_db.RegisterMessage(VerifyProofRequest)

VerifyProofResponse = _reflection.GeneratedProtocolMessageType('VerifyProofResponse', (_message.Message,), {
  'DESCRIPTOR' : _VERIFYPROOFRESPONSE,
  '__module__' : 'proofs_pb2'
  # @@protoc_insertion_point(class_scope:okapi.proofs.VerifyProofResponse)
  })
_sym_db.RegisterMessage(VerifyProofResponse)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
