import { GameStatus } from "./game-status";
import { Field } from "./field";

export class GameWithFields {

        
    constructor(private _id: number, private _lastModified: string, public _description: string, private _status: GameStatus, private _fields: Array<Field>) {
    }

    get id() {
        return this._id;
    }

    get fields() {
        return this._fields;
    }

    get description() {
        return this._description;
    }
}