// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: security.proto

// This CPP symbol can be defined to use imports that match up to the framework
// imports needed when using CocoaPods.
#if !defined(GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS)
 #define GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS 0
#endif

#if GPB_USE_PROTOBUF_FRAMEWORK_IMPORTS
 #import <Protobuf/GPBProtocolBuffers.h>
#else
 #import "GPBProtocolBuffers.h"
#endif

#if GOOGLE_PROTOBUF_OBJC_VERSION < 30004
#error This file was generated by a newer version of protoc which is incompatible with your Protocol Buffer library sources.
#endif
#if 30004 < GOOGLE_PROTOBUF_OBJC_MIN_SUPPORTED_VERSION
#error This file was generated by an older version of protoc which is incompatible with your Protocol Buffer library sources.
#endif

// @@protoc_insertion_point(imports)

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"

CF_EXTERN_C_BEGIN

@class EncryptionHeader;
@class EncryptionRecipient;
@class Signature;

NS_ASSUME_NONNULL_BEGIN

#pragma mark - Enum EncryptionMode

typedef GPB_ENUM(EncryptionMode) {
  /**
   * Value used if any message's field encounters a value that is not defined
   * by this enum. The message will also have C functions to get/set the rawValue
   * of the field.
   **/
  EncryptionMode_GPBUnrecognizedEnumeratorValue = kGPBUnrecognizedEnumeratorValue,
  EncryptionMode_Direct = 0,
  EncryptionMode_ContentEncryptionKey = 1,
};

GPBEnumDescriptor *EncryptionMode_EnumDescriptor(void);

/**
 * Checks to see if the given value is defined by the enum or was not known at
 * the time this source was generated.
 **/
BOOL EncryptionMode_IsValidValue(int32_t value);

#pragma mark - Enum EncryptionAlgorithm

typedef GPB_ENUM(EncryptionAlgorithm) {
  /**
   * Value used if any message's field encounters a value that is not defined
   * by this enum. The message will also have C functions to get/set the rawValue
   * of the field.
   **/
  EncryptionAlgorithm_GPBUnrecognizedEnumeratorValue = kGPBUnrecognizedEnumeratorValue,
  EncryptionAlgorithm_Xchacha20Poly1305 = 0,
  EncryptionAlgorithm_AesGcm = 1,
};

GPBEnumDescriptor *EncryptionAlgorithm_EnumDescriptor(void);

/**
 * Checks to see if the given value is defined by the enum or was not known at
 * the time this source was generated.
 **/
BOOL EncryptionAlgorithm_IsValidValue(int32_t value);

#pragma mark - SecurityRoot

/**
 * Exposes the extension registry for this file.
 *
 * The base class provides:
 * @code
 *   + (GPBExtensionRegistry *)extensionRegistry;
 * @endcode
 * which is a @c GPBExtensionRegistry that includes all the extensions defined by
 * this file and all files that it depends on.
 **/
GPB_FINAL @interface SecurityRoot : GPBRootObject
@end

#pragma mark - SignedMessage

typedef GPB_ENUM(SignedMessage_FieldNumber) {
  SignedMessage_FieldNumber_Payload = 1,
  SignedMessage_FieldNumber_SignaturesArray = 2,
};

GPB_FINAL @interface SignedMessage : GPBMessage

@property(nonatomic, readwrite, copy, null_resettable) NSData *payload;

@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<Signature*> *signaturesArray;
/** The number of items in @c signaturesArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger signaturesArray_Count;

@end

#pragma mark - Signature

typedef GPB_ENUM(Signature_FieldNumber) {
  Signature_FieldNumber_Header = 1,
  Signature_FieldNumber_Signature = 3,
};

GPB_FINAL @interface Signature : GPBMessage

@property(nonatomic, readwrite, copy, null_resettable) NSData *header;

@property(nonatomic, readwrite, copy, null_resettable) NSData *signature;

@end

#pragma mark - SignatureHeader

typedef GPB_ENUM(SignatureHeader_FieldNumber) {
  SignatureHeader_FieldNumber_Algorithm = 1,
  SignatureHeader_FieldNumber_KeyId = 2,
};

GPB_FINAL @interface SignatureHeader : GPBMessage

@property(nonatomic, readwrite, copy, null_resettable) NSString *algorithm;

@property(nonatomic, readwrite, copy, null_resettable) NSString *keyId;

@end

#pragma mark - EncryptedMessage

typedef GPB_ENUM(EncryptedMessage_FieldNumber) {
  EncryptedMessage_FieldNumber_Iv = 1,
  EncryptedMessage_FieldNumber_Aad = 2,
  EncryptedMessage_FieldNumber_Ciphertext = 3,
  EncryptedMessage_FieldNumber_Tag = 4,
  EncryptedMessage_FieldNumber_RecipientsArray = 5,
};

GPB_FINAL @interface EncryptedMessage : GPBMessage

@property(nonatomic, readwrite, copy, null_resettable) NSData *iv;

@property(nonatomic, readwrite, copy, null_resettable) NSData *aad;

@property(nonatomic, readwrite, copy, null_resettable) NSData *ciphertext;

@property(nonatomic, readwrite, copy, null_resettable) NSData *tag;

@property(nonatomic, readwrite, strong, null_resettable) NSMutableArray<EncryptionRecipient*> *recipientsArray;
/** The number of items in @c recipientsArray without causing the array to be created. */
@property(nonatomic, readonly) NSUInteger recipientsArray_Count;

@end

#pragma mark - EncryptionHeader

typedef GPB_ENUM(EncryptionHeader_FieldNumber) {
  EncryptionHeader_FieldNumber_Mode = 1,
  EncryptionHeader_FieldNumber_Algorithm = 2,
  EncryptionHeader_FieldNumber_KeyId = 3,
  EncryptionHeader_FieldNumber_SenderKeyId = 4,
};

GPB_FINAL @interface EncryptionHeader : GPBMessage

@property(nonatomic, readwrite) EncryptionMode mode;

@property(nonatomic, readwrite) EncryptionAlgorithm algorithm;

@property(nonatomic, readwrite, copy, null_resettable) NSString *keyId;

@property(nonatomic, readwrite, copy, null_resettable) NSString *senderKeyId;

@end

/**
 * Fetches the raw value of a @c EncryptionHeader's @c mode property, even
 * if the value was not defined by the enum at the time the code was generated.
 **/
int32_t EncryptionHeader_Mode_RawValue(EncryptionHeader *message);
/**
 * Sets the raw value of an @c EncryptionHeader's @c mode property, allowing
 * it to be set to a value that was not defined by the enum at the time the code
 * was generated.
 **/
void SetEncryptionHeader_Mode_RawValue(EncryptionHeader *message, int32_t value);

/**
 * Fetches the raw value of a @c EncryptionHeader's @c algorithm property, even
 * if the value was not defined by the enum at the time the code was generated.
 **/
int32_t EncryptionHeader_Algorithm_RawValue(EncryptionHeader *message);
/**
 * Sets the raw value of an @c EncryptionHeader's @c algorithm property, allowing
 * it to be set to a value that was not defined by the enum at the time the code
 * was generated.
 **/
void SetEncryptionHeader_Algorithm_RawValue(EncryptionHeader *message, int32_t value);

#pragma mark - EncryptionRecipient

typedef GPB_ENUM(EncryptionRecipient_FieldNumber) {
  EncryptionRecipient_FieldNumber_Header = 1,
  EncryptionRecipient_FieldNumber_ContentEncryptionKey = 2,
};

GPB_FINAL @interface EncryptionRecipient : GPBMessage

@property(nonatomic, readwrite, strong, null_resettable) EncryptionHeader *header;
/** Test to see if @c header has been set. */
@property(nonatomic, readwrite) BOOL hasHeader;

@property(nonatomic, readwrite, copy, null_resettable) NSData *contentEncryptionKey;

@end

NS_ASSUME_NONNULL_END

CF_EXTERN_C_END

#pragma clang diagnostic pop

// @@protoc_insertion_point(global_scope)
