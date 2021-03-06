import { Contract, Signer } from "ethers"
import * as ZkProofTestingOutput from "../abis/ZkProofTesting.json"
import providerFactory from "../provider/providerFactory"
import { ZkProofTesting } from "../types"

export const compilerOutput = ZkProofTestingOutput

export default async (
    signer: Signer | null = null,
    ensOrAddress?: string
): Promise<ZkProofTesting> => {
    const provider = await providerFactory()
    const instance = new Contract(ensOrAddress, compilerOutput.abi, provider)
    const signerInstance = signer ? instance.connect(signer) : instance
    return signerInstance as ZkProofTesting
}
