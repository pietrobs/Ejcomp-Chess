class Piece {

    constructor(background, width, height, x, y, team, canvas) {

        let piece = new Image();

        piece.src = background;

        this.ctx = canvas;

        this.attr = {
            img: piece,
            positionx: 0,
            positiony: 0,
            x: x,
            y: y,
            width: width,
            height: height,
            team: team
        };
    }

    mover(x, y) {
        this.attr.x = x;
        this.attr.y = y;
    }

    verificaClique(x, y) {
        if (x > this.attr.x && x < this.attr.x + 60 && y > this.attr.y && y < this.attr.y + 60) {
            return true;
        }
        return false;
    }

    getX() {
        return this.attr.x;
    }

    getY() {
        return this.attr.y;
    }

    getTeam() {
        return this.attr.team;
    }

}