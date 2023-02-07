


let pedra = document.getElementById("pedra");
let papel = document.getElementById("papel");
let tesoura = document.getElementById("tesoura");

let resultado = document.getElementById("resultado");
let pontos_jogador = 0;
let pontos_robo = 0;
let rodada = 0;



//função que inicia o jogo
function inicio() {

    if (document.getElementById("btn-jogar").value == "Jogar") {

        jogar();

    } else if (document.getElementById("btn-jogar").value == "Proxima rodada") {

        proximaRodada();

    } else {

        novoJogo();
    }
}



function jogar() {

    if (papel.checked == false && pedra.checked == false && tesoura.checked == false) {

        alert("Por favor, selecione uma opção!");

    } else {

        //sorteando aleatorimente a escolha do robo
        var sorteio = Math.floor(Math.random() * 3);

        switch (sorteio) {

            case 0:
                document.getElementById("opcao-robo").src = "img/icon-rock.svg";
                break;
            case 1:
                document.getElementById("opcao-robo").src = "img/icon-paper1.png";
                break;
            case 2:
                document.getElementById("opcao-robo").src = "img/icon-scissors1.png";
                break;


        }
        // analizar empate
        if ((pedra.checked == true && sorteio == 0) || (papel.checked == true && sorteio == 1) || (tesoura.checked == true && sorteio == 2)) {

            document.getElementById("resultado").innerHTML = "Empate";
            document.getElementById("btn-jogar").value = "Proxima rodada";


            //analizar se o jogador ganhou a rodada
        } else if ((pedra.checked == true && sorteio == 2) || (papel.checked == true && sorteio == 0) || (tesoura.checked == true && sorteio == 1)) {

            document.getElementById("resultado").innerHTML = "Jogador Venceu!";
            pontos_jogador++;
            //analinar se o jogador ganhou o jogo
            if (pontos_jogador == 3) {
                document.getElementById("placar-jogador").innerHTML = pontos_jogador + "/3";
                document.getElementById("btn-jogar").value = "Novo jogo";
                alert("jogou terminou, jogador venceu");

            } else {
                document.getElementById("placar-jogador").innerHTML = pontos_jogador + "/3";
                document.getElementById("btn-jogar").value = "Proxima rodada";
            }



        } else {

            document.getElementById("resultado").innerHTML = "Robô Venceu!";
            pontos_robo++;

            if (pontos_robo == 3) {
                document.getElementById("placar-robo").innerHTML = pontos_robo + "/3";
                document.getElementById("btn-jogar").value = "Novo jogo";
                alert("jogou terminou, Robo venceu.");

            } else {
                document.getElementById("placar-robo").innerHTML = pontos_robo + "/3";
                document.getElementById("btn-jogar").value = "Proxima rodada";
            }

        }

    }

}







/* Função responsavel por mostra  a opção(pedra, papel ou tesoura) escolhida pelo jogador */
function opcao() {
    if (pedra.checked == true) {
        document.getElementById("opcao-jogador").src = "img/icon-rock.svg";

    } else if (papel.checked == true) {
        document.getElementById("opcao-jogador").src = "img/icon-paper1.png";
    } else {
        document.getElementById("opcao-jogador").src = "img/icon-scissors1.png";
    }
}




function proximaRodada() {

    document.getElementById("resultado").innerHTML = " ";
    document.getElementById("btn-jogar").value = "Jogar";
    document.getElementById("opcao-robo").src = "img/icon-hold.png";
    document.getElementById("opcao-jogador").src = "img/icon-hold.png";
    papel.checked = false;
    pedra.checked = false;
    tesoura.checked = false;

}




function novoJogo() {

    pontos_jogador = 0;
    pontos_robo = 0;

    document.getElementById("placar-robo").innerHTML = pontos_robo + "/3";
    document.getElementById("placar-jogador").innerHTML = pontos_jogador + "/3";
    document.getElementById("resultado").innerHTML = " ";
    document.getElementById("btn-jogar").value = "Jogar";
    document.getElementById("opcao-robo").src = "img/icon-hold.png";
    document.getElementById("opcao-jogador").src = "img/icon-hold.png";
    papel.checked = false;
    pedra.checked = false;
    tesoura.checked = false;

}




