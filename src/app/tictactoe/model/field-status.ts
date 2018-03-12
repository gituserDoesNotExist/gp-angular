import { Field } from "./field";
import { GameStatus } from "./game-status";

export class FieldStatus {

    constructor(private _field: Field, private _status: GameStatus) {

    }

    get field(): Field {
        return this._field;
    }

    get status() {
        return this._status;
    }

}