let player = 'x',jogada=0; // jogo inicia com jogador X

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

function verificaSrc(id){
    let src = document.getElementById(id).src;
    return src.substring(src.length-10, src.length);
} //  pega ultimos 10 caracteres do src

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

function jogadaComputador(){
    return Math.floor(Math.random()*9)+1;
} // cria jogada do computador