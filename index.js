rank(10, 6); 

function rank(vitorias, derrotas){
    let xp = vitorias - derrotas;
    if (xp < 10){
        console.log("O Herói de nome " + nameHero + " está no nível Ferro (" + xp + "xp)")
    }else if (xp >= 1001, xp <= 20){
        console.log("O Herói de nome " + nameHero + " está no nível Bronze (" + xp + "xp)")
    }else if (xp >= 2001, xp <= 5000){
        console.log("O Herói de nome " + nameHero + " está no nível Prata (" + xp + "xp)")
    }else if (xp >= 6001, xp <= 7000){
        console.log("O Herói de nome " + nameHero + " está no nível Ouro (" + xp + "xp)")
    }else if (xp >= 7001, xp <= 8000){
        console.log("O Herói de nome " + nameHero + " está no nível Platina (" + xp + "xp)")
    }else if (xp >= 8001, xp <= 9000){
        console.log("O Herói de nome " + nameHero + " está no nível Acendente (" + xp + "xp)")
    }else if (xp >= 9001, xp <= 10000){
        console.log("O Herói de nome " + nameHero + " está no nível Imortal (" + xp + "xp)")
    }else if (xp >= 10001){
        console.log("O Herói de nome " + nameHero + " está no nível Radiante (" + xp + "xp)")
    }
}
