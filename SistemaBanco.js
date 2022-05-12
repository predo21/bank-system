let saldo, pix, pixs, deposito, sair, sistema, telaPrincipal;







saldo = 1000

alert("Olá, Bem-vindo ao banco Connect+")





tela()


function tela() {




    telaPrincipal = Number(prompt("Em qual área você deseja entrar? \nSaldo(1)\nPix(2)\nDepósito(3)\nSair(4)"))





    switch (telaPrincipal) {
        case 1:
            alert(saldo)

            if (saldo <= 0) {
                saldo = 0
            }



            tela()

            break;

        case 2:

            pix = Number(prompt("Quanto deseja enviar?"))

            if (saldo >= pix)


            {


                saldo = saldo - pix


                alert(`Pix feito com sucesso,Seu saldo atual é ${saldo}`)


            } else if (pix > saldo) {
                alert(`Dinheiro insuficiente`)

            }
            tela()

            break;

        case 3:
            deposito = Number(prompt("Digite quanto deseja depositar:"))

            saldo += deposito

            alert(`Deposito feito com sucesso, valor atual ${saldo}`)
            tela()
        case 4:


            break;

        default:
            alert("Digite uma das opções")
            tela()



    }

}