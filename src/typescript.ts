// Tipos primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista: number[] = [];
lista.push(13, 22);

// Tipos personalizados (Type Alias)
type Transacao = {
    tipoTransacao: string;
    data: Date;
    valor: number;
}


const novaTransacao: Transacao = {
    tipoTransacao: "",
    data: new Date(),
    valor:0
}