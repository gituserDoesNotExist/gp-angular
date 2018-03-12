import { Game } from "../model/game";
import { GameStatus } from "../model/game-status";

export class GameFactory {

    public static aCompleteGame(): Game {
        return new Game(1,"lastModified","a description", new GameStatus(2, "new game"));
    }
}