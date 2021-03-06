using Okapi.Transport;

namespace Okapi.Proofs
{
    public class LDProofs
    {
        /// <summary>
        /// Generate new key
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        public static CreateProofResponse CreateProof(CreateProofRequest request) =>
            Native.Call<CreateProofRequest, CreateProofResponse>(request, Native.ldproofs_create_proof);

        public static VerifyProofResponse VerifyProof(VerifyProofRequest request) =>
            Native.Call<VerifyProofRequest, VerifyProofResponse>(request, Native.ldproofs_verify_proof);
    }
}
