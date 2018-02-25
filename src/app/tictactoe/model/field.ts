
export class Field {
    private id: number;
    private lastModified: string;
    private gameId: number;
    private fieldId: number;
    private value: string;

    constructor(id: number, lastModified: string, gameId: number, fieldId: number, value: string) {
        this.id=id;
        this.lastModified=lastModified;
        this.gameId=gameId;
        this.fieldId=fieldId;
        this.value=value;
    }

    public getId(): number {
        return this.id;
    }

    public getLastModified():string {
        return this.lastModified;
    }
}