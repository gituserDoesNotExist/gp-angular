import { Game } from "../model/game";
import { Status } from "../model/status";

export class GameFactory {

    public static aCompleteGame(): Game {
        return new Game(1,"lastModified","a description", new Status(2, "new game"));
    }
}