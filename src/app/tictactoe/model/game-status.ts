export class GameStatus {

    constructor(private id: number, private text: string) {
    }

    public getId(): number {
        return this.id;
    }

    public getText(): string {
        return this.text;
    }

}