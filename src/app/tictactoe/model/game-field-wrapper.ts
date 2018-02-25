import { Game } from "./game";
import { Field } from "./field";

export class GameFieldWrapper {

    constructor(private _game: Game, private _fields: Array<Field>) {

    }

    get game() {
        return this._game;
    }

    get fields() {
        return this._fields;
    }

}