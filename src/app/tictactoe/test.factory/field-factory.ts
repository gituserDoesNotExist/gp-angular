import { Field } from "../model/field";

export class FieldFactory {

    public static  aCompleteField(): Field {
        return new Field(1, "lastModified", 2, 3, "value");
    }
}