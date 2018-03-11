import { Field } from "../model/field";

export class FieldFactory {

    private static readonly TIMESTAMP: string = "2018-10-02T10:02:03.123456";
    private static readonly FIELD_ID = 3;
    private static readonly GAME_ID = 4;
    private static readonly ID = 1;

    public static  aCompleteField(): Field {
        return new Field(FieldFactory.ID, FieldFactory.TIMESTAMP, FieldFactory.GAME_ID, FieldFactory.FIELD_ID, "value");
    }

    public static  aCompleteFieldWithFieldIdAndValue(fieldId: number, value: string): Field {
        return new Field(FieldFactory.ID, FieldFactory.TIMESTAMP, FieldFactory.GAME_ID, fieldId, value);
    }

    public static aFieldWith(lastModified: string, value: string) {
        return new Field(FieldFactory.ID, lastModified, FieldFactory.GAME_ID, FieldFactory.FIELD_ID, value);
    }
}
