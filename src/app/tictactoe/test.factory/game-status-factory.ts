import { GameStatus } from "../model/game-status";

export class GameStatusFactory {

    public static aAiHatGewonnen(): GameStatus {
        return new GameStatus(2,"AI hat gewonnen");
    }

    public static aSpielLaeuftNoch(): GameStatus {
        return new GameStatus(5,"Spiel läuft noch");
    }

}