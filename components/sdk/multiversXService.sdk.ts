/**
* This is an auto generated code. This code should not be modified since the file can be overwriten 
* if new genezio commands are executed.
*/
     
import { Remote } from "./remote"

export type Response = {
  nonce: number;
  balance: number;
};;



export class MultiversXService {
    static remote = new Remote("https://6ix5m63wbo2ilup2arzisublzu0isdcz.lambda-url.us-east-1.on.aws/")

    static async queryAddress(address: string): Promise<Response> {
        return await MultiversXService.remote.call("MultiversXService.queryAddress", address)  
  }

  static async mintNft(address: string, tokenId: number): Promise<any> {
        return await MultiversXService.remote.call("MultiversXService.mintNft", address, tokenId)  
  }

  

}

export { Remote };
