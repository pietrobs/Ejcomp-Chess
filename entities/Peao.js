

class Peao extends Piece {

    constructor(background, width, height, x, y, team, canvas) {
        super(background, width, height, x, y, team, canvas);
    }

    mover(x, y) {
        let auxX = x - (x % 60);
        let auxY = y - (y % 60);

        // console.log(super.getX(), auxX, super.getY(), auxY);

        // Só em linha reta (eixo X sempre igual)
        if (super.getX() == auxX) {

            // Se for do time de cima, só pode descer
            if (super.getTeam() == 0) {
                if (super.getY() < auxY) {
                    super.mover(auxX, auxY);
                }
            } else {
                // Se for do time de baixo, só pode subir
                if (super.getY() > auxY) {
                    super.mover(auxX, auxY);
                }
            }
        }

    }

}