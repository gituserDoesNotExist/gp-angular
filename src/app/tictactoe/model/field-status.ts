import { Field } from "./field";
import { GameStatus } from "./game-status";

export class FieldStatus {

    constructor(private field: Field, private gameStatus: GameStatus) {

    }

    public getField(): Field {
        return this.field;
    }

    public getGameStatus() {
        return this.gameStatus;
    }

}