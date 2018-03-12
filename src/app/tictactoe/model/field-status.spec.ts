import { FieldStatus } from "./field-status";
import { FieldFactory } from "../test.factory/field-factory";
import { GameStatus } from "./game-status";

describe("FieldStatus", () => {

    it("should create the FieldStatus-Object", () => {
        let fieldStatus: FieldStatus = new FieldStatus(FieldFactory.aCompleteField(), new GameStatus(1,"text"));

        expect(fieldStatus).toBeDefined();
        expect(fieldStatus.field.value).toEqual("value");
        expect(fieldStatus.status.text).toEqual("text");
    });
});