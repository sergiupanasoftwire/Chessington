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
        let firstMoveTwoSquares: Square | null = null;

        if (this.player === Player.WHITE) {
            squareInFront = Square.at(currentPosition.row + 1, currentPosition.col);
            if (currentPosition.row === 1) {
                firstMoveTwoSquares = Square.at(currentPosition.row + 2, currentPosition.col);
            }
        } else {
            squareInFront = Square.at(currentPosition.row - 1, currentPosition.col);
            if (currentPosition.row === 6) {
                firstMoveTwoSquares = Square.at(currentPosition.row - 2, currentPosition.col);
            }
        }

        const pieceInFront = board.getPiece(squareInFront);
        const canMoveTwoSquares: boolean = firstMoveTwoSquares !== null;

        if (!pieceInFront) {
            availableMoves.push(squareInFront);
        }

        if (canMoveTwoSquares) {
            const pieceInFrontTwoSquares = board.getPiece(firstMoveTwoSquares!);
            if (!pieceInFrontTwoSquares) {
                availableMoves.push(firstMoveTwoSquares!);
            }
        }

        return availableMoves;
    }
}
