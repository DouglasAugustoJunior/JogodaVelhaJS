
#[Douglas Augusto](http://github.com/DouglasAugustoJunior)- Outros projetos. # 
 
![VERSÃO DO SW](https://img.shields.io/badge/Version-1.0-blue.svg)
 
![LINGUAGEM FINALIDADE](https://img.shields.io/badge/javascript-test-orange.svg)
 
O **Jogo da Velha JS** é um projeto simples que utilizei para aprimorar meus conhecimentos em JS.

![Imagem](https://github.com/DouglasAugustoJunior/JogodaVelhaJS/blob/master/_images/game.PNG?raw=true)

Desenvolvido em HTML5,CSS3 e JS, ele traz diversas situações interessantes para utilizar diversos recursos.
 
## O game
 

    function game(id){
        let src = verificaSrc(id); // pega valor do src
        let ia = document.getElementById('ia').checked; // atribui valor do checkbox
        if (src == 'branco.png'){ // verifica se está vazio
            document.getElementById(id).src  = '_images/'+player+'.png'; // coloca imagem correspondente
            jogada++; // incrementa jogada
            if(verificaVencedor()){
                alert('O jogador '+player+' venceu!');
                location.reload(); // recarrega game
                return false;
            }// verifica se alguém venceu
            if (jogada>=9){
                alert('Velha!');
                location.reload();
            } // verifica se deu velha
            if (player == 'x'){ // verifica se o player atual é o X
                player = 'o'; // passa a vez ao O
            }else{
                player = 'x'; // passa vez ao X
            } // passa a vez
        }
        if ((ia) && (player=='o')){
            game(jogadaComputador());
        }
    }

##Verificando vencedor

    function verificaVencedor(){
        if ((verificaSrc('1') == verificaSrc('2')) && (verificaSrc('2') == verificaSrc('3')) && (verificaSrc('1') != 'branco.png')){ // verifica 1 2 3
            return true;
        }else if ((verificaSrc('4') == verificaSrc('5')) && (verificaSrc('5') == verificaSrc('6')) && (verificaSrc('4') != 'branco.png')){ // verifica 4 5 6
            return true;
        }else if ((verificaSrc('7') == verificaSrc('8')) && (verificaSrc('8') == verificaSrc('9')) && (verificaSrc('7') != 'branco.png')){ // verifica 7 8 9
            return true;
        }else if ((verificaSrc('1') == verificaSrc('4')) && (verificaSrc('4') == verificaSrc('7')) && (verificaSrc('1') != 'branco.png')){ // verifica 1 4 7
            return true;
        }else if ((verificaSrc('2') == verificaSrc('5')) && (verificaSrc('5') == verificaSrc('8')) && (verificaSrc('2') != 'branco.png')){ // verifica 2 5 8
            return true;
        }else if ((verificaSrc('3') == verificaSrc('6')) && (verificaSrc('6') == verificaSrc('9')) && (verificaSrc('3') != 'branco.png')){ // verifica 4 6 9
            return true;
        }else if ((verificaSrc('1') == verificaSrc('5')) && (verificaSrc('5') == verificaSrc('9')) && (verificaSrc('1') != 'branco.png')){ // verifica 1 5 9
            return true;
        }else if ((verificaSrc('3') == verificaSrc('5')) && (verificaSrc('5') == verificaSrc('7')) && (verificaSrc('3') != 'branco.png')){ // verifica 3 5 7
            return true;
        }else{
            return false;
        }
    } // verifica se já existe um vencedor

 
Para mais informações acesse [meus repositórios](http://github.com/DouglasAugustoJunior).