const generateColor = () => {

    let random = (Math.random() * 0xFFFFFF << 0).toString(16);
    document.body.style.backgroundColor ="#" + random;
    

    let randomblague = (blague) => {
        return blague[Math.floor(Math.random()*blague.length)];
    }

    document.querySelector('.blague').innerText = randomblague(blague) ;

}

var blague = [
    "C'est l'histoire du ptit dej, tu la connais ? Pas de bol.",
    "Qu'est ce qui n'est pas un steak ? Une pastèque.",
    "Qu'est-ce qui est vert avec une cape ? Un concombre qui imite Super Tomate.",
    "Quoi ? Feur. C’est gratuit pour les chauves.",
    "Un mec rentre dans un café. Et plouf.",
    "Que fait un poussin de 200kg ? PIOUUUU! PIOUUUU!",
];


