import { validateConfig } from "@angular/router/src/config";


export class Field {
    private _id: number;
    private _lastModified: string;
    private _gameId: number;
    private _fieldId: number;
    private _value: string;

    constructor(id: number, lastModified: string, gameId: number, fieldId: number, value: string) {
        this._id=id;
        this._lastModified=lastModified;
        this._gameId=gameId;
        this._fieldId=fieldId;
        this._value=value;
    }

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get lastModified() {
        return this._lastModified;
    }

    set value(value: string) {
        this._value = value;
    }

    get gameId() {
        return this._gameId;
    }

    get value() {
        return this._value;
    }

    get fieldId() {
        return this._fieldId;
    }

}