import { GameWithFields } from "../model/game-with-fields";
import { Status } from "../model/status";
import { FieldFactory } from "./field-factory";

export class GameWithFieldsFactory {

    public static aCompleteGameWithFields(): GameWithFields {
        return new GameWithFields(1,"lastModified","a description",new Status(2,"new game"), [FieldFactory.aCompleteField()]);
    }
}