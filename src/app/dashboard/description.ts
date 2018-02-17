export class Description {
    
    constructor(private name: string, private numberOfPlayers: string) {
        this.name = name;
        this.numberOfPlayers = numberOfPlayers;
    }

    public getName() {
        return this.name;
    }

    public getNumberOfPlayers() {
        return this.numberOfPlayers;
    }

}