interface iSmartphone{
    credito:number
    numeroChiamate:number
    ricarica(ammontare:number): number
    chiamata(durataChiamata:number|string): (number|string)
    get chiama404(): number
    get getNumeroChiamata(): number
    azzeraChiamate(numeroChiamate:number): number
}

class User implements iSmartphone{
    nome:string
    cognome:string
    constructor(nome:string, cognome:string) {
        this.nome = nome
        this.cognome = cognome
    }
    credito:number = 0
    numeroChiamate:number = 0
    ricarica (ammontare:number): number {
        return ammontare+=this.credito
    }
    chiamata(durataChiamata: number|string):(number|string) {
        let creditoRimanente = (this.credito -= (durataChiamata*0.20))
        if (creditoRimanente<0) {
            return 'Credito insufficiente'
        }
        return creditoRimanente
    }
    get chiama404(): number {
        return this.credito
    }
    get getNumeroChiamata(): number {
        return this.numeroChiamate
    }
    azzeraChiamate(numeroChiamate: number): number {
        return numeroChiamate=0
    }
}

const mario = new User('mario','rossi')
console.log(mario.chiama404);
console.log(mario.getNumeroChiamata);




