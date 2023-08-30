import { Correntista } from './correntista'
import { Conta } from './conta'

const joao = new Correntista('Joao da Silva', '111222333-45')
const contaJoao = new Conta('123-45', joao)
contaJoao.credita(100.0)
console.log('Saldo Joao: ', contaJoao.saldo)
console.log(joao)