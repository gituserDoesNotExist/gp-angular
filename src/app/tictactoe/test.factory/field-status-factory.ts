import { FieldStatus } from "../model/field-status";
import { FieldFactory } from "./field-factory";
import { GameStatusFactory } from "./game-status-factory";
import { Field } from "../model/field";

export class FieldStatusFactory {

    public static aAiHatGewonnenFieldStatus(): FieldStatus {
        return FieldStatusFactory.aAiHatGewonnenWith(FieldFactory.aCompleteField());
    }

    public static aAiHatGewonnenWith(field: Field): FieldStatus {
        return new FieldStatus(field, GameStatusFactory.aAiHatGewonnen());
    }

    public static aUserHatGewonnenWith(field: Field): FieldStatus {
        return new FieldStatus(field, GameStatusFactory.aUserHatGewonnen());
    }

    public static aSpielLaeuftNochFieldStatus(field: Field): FieldStatus {
        return new FieldStatus(field, GameStatusFactory.aSpielLaeuftNoch());
    }

}