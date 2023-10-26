rank("Super-Papito",87, 32); // aqui você coloca o nome do herói e quantas vitorias e derrotas ele tem.

function rank(nameHero, vitorias, derrotas){
    let xp = vitorias - derrotas;
    if (xp < 10){
        console.log("O Herói " + nameHero + " tem um saldo de " + vitorias + " vitorias, e está no nível Ferro (" + xp + "xp)")
    }else if (xp >= 11, xp <= 20){
        console.log("O Herói " + nameHero + " tem um saldo de " + vitorias + " vitorias, e está no nível Bronze (" + xp + "xp)")
    }else if (xp >= 21, xp <= 50){
        console.log("O Herói " + nameHero + " tem um saldo de " + vitorias + " vitorias, e está no nível Prata (" + xp + "xp)")
    }else if (xp >= 51, xp <= 80){
        console.log("O Herói " + nameHero + " tem um saldo de " + vitorias + " vitorias, e está no nível Ouro (" + xp + "xp)")
    }else if (xp >= 81, xp <= 90){
        console.log("O Herói " + nameHero + " tem um saldo de " + vitorias + " vitorias, e está no nível Diamante (" + xp + "xp)")
    }else if (xp >= 91, xp <= 100){
        console.log("O Herói " + nameHero + " tem um saldo de " + vitorias + " vitorias, e está no nível Lendário (" + xp + "xp)")
    }else if (xp >= 101){
        console.log("O Herói " + nameHero + " tem um saldo de " + vitorias + " vitorias, e está no nível Imortal (" + xp + "xp)")
    }
}
