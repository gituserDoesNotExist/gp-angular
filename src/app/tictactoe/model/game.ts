import { GameStatus } from "./game-status";

export class Game {
    
    constructor(private _id: number, private _lastModified: string, private _description: string, private _gameStatus: GameStatus) {
    }

    get id() {
        return this._id;
    }

    get lastModified() {
        return this._lastModified;
    }
    get description() {
        return this._description;
    }
    get gameStatus() {
        return this._gameStatus;
    }

}