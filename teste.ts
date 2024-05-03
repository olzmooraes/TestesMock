import { describe } from "node:test"
import { resourceLimits } from "node:worker_threads"
import { text } from "stream/consumers"

export interface Personagem {
    nome: string,
    vida: number,
    defesa: number,
    força: number
}

describe("Teste unitario validaCharacter",()=>{
    test("Teste valores personagem",()=>{
        const valor: Personagem = {
            "nome": "",
            "vida": 1,
            "defesa":1,
            "força": 1 
        }
        const result = validateCharacter(valor)
        expect(result.isValid).toBe(false)
        const valor: Personagem = {
            "nome": "L",
            "vida": 0,
            "defesa":1,
            "força": 1 
        }
        const result = validateCharacter(valor)
        expect(result.isValid).toBe(false)
        const valor: Personagem = {
            "nome": "L",
            "vida": 1,
            "defesa":1,
            "força": 0 
        }
        const result = validateCharacter(valor)
        expect(result.isValid).toBe(false)
    })
})

const validateCharacter: any = (input:any) => {
    const arrayError = []
    for(const valor as input){
        if(input[valor] === "" || input[valor] === 0){
            arrayError.push({
                valor,
                valorCampo: input[valor]
            })
        }
    }