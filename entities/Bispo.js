

class Bispo extends Piece {

    constructor(background, width, height, x, y, team, canvas) {
        super(background, width, height, x, y, team, canvas);
    }

    mover(x, y) {
        let auxX = x - (x % 60);
        let auxY = y - (y % 60);


        //Criar aqui a regra de movimento da peça
        super.mover(auxX, auxY);
    }

}