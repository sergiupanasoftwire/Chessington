import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        const availableMoves = new Array<Square>();
        const currentPosition = board.findPiece(this);
        let squareInFront: Square;

        if (this.player === Player.WHITE) {
            squareInFront = Square.at(currentPosition.row + 1, currentPosition.col);
        } else {
            squareInFront = Square.at(currentPosition.row - 1, currentPosition.col);
        }

        const pieceInFront = board.getPiece(squareInFront);

        if (!pieceInFront) {
            availableMoves.push(squareInFront);
        }

        return availableMoves;
    }
}
