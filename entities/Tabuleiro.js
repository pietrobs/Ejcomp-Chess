class Tabuleiro{

    constructor(background, width, height) {

        let tabuleiro = new Image();
        
        tabuleiro.src = background;

        this.attr = {
            img: tabuleiro,
            positionx: 0,
            positiony: 0,
            x: 0,
            y: 0,
            width: width,
            height: height
        };
    }
}