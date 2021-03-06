import { Contract, Signer } from "ethers"
import * as AceCompilerOutput from "../abis/ACE.json"
import providerFactory from "../provider/providerFactory"
import { ACE } from "../types"

export const compilerOutput = AceCompilerOutput

export default async (
    signer: Signer | null = null,
    ensOrAddress?: string
): Promise<ACE> => {
    const provider = await providerFactory()
    const instance = new Contract(ensOrAddress, compilerOutput.abi, provider)
    const signerInstance = signer ? instance.connect(signer) : instance
    return signerInstance as ACE
}
