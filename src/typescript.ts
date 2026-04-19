// Tipos primitivos
let valor: number = 3000;
let nome: string = "";
let isPago: boolean = false;
let qualquer: any = "";
qualquer = 22;

// Arrays
const lista: number[] = [];
lista.push(13, 22);

//Enum
enum tipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

// Tipos personalizados (Type Alias)
type Transacao = {
    tipoTransacao: tipoTransacao;
    data: Date;
    valor: number;
}

const novaTransacao: Transacao = {
    tipoTransacao: tipoTransacao.DEPOSITO,
    data: new Date(),
    valor:0
}