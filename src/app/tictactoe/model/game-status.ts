export class GameStatus {

    constructor(private _id: number, private _text: string) {
    }

    get id(): number {
        return this._id;
    }

    get text(): string {
        return this._text;
    }

}