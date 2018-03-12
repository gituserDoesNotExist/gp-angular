import { GameWithFields } from "../model/game-with-fields";
import { GameStatus } from "../model/game-status";
import { FieldFactory } from "./field-factory";

export class GameWithFieldsFactory {

    public static aGameWithFieldsWithOneField(): GameWithFields {
        return new GameWithFields(1,"lastModified","a description",new GameStatus(2,"new game"), [FieldFactory.aCompleteField()]);
    }

    public static aCompleteGameWithFields(): GameWithFields {
        return new GameWithFields(1,"lastModified","a description",new GameStatus(2,"new game"), 
        [FieldFactory.aCompleteFieldWithFieldIdAndValue(1,"val1"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(2,"val2"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(3,"val3"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(4,"val4"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(5,"val5"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(6,"val6"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(7,"val7"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(8,"val8"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(9,"val9")]);
    }

    public static aCompleteGameWithFieldsWithUnorderedFields(): GameWithFields {
        return new GameWithFields(1,"lastModified","a description",new GameStatus(2,"new game"), 
        [FieldFactory.aCompleteFieldWithFieldIdAndValue(7,"val1"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(6,"val2"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(4,"val3"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(2,"val4"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(1,"val5"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(3,"val6"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(8,"val7"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(9,"val8"),
        FieldFactory.aCompleteFieldWithFieldIdAndValue(5,"val9")]);
    }
}