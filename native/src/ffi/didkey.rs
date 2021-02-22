use crate::*;
use ffi_support::{ByteBuffer, ExternError};

#[no_mangle]
pub extern "C" fn didkey_generate(request: ByteBuffer, response: &mut ByteBuffer, err: &mut ExternError) -> i32 {
    c_impl!(GenerateKeyRequest, DIDKey, generate, request, response, err)
}
