import { FieldStatus } from "./field-status";
import { FieldFactory } from "../test.factory/field-factory";
import { GameStatus } from "./game-status";

describe("FieldStatus", () => {

    it("should create the FieldStatus-Object", () => {
        let status: FieldStatus = new FieldStatus(FieldFactory.aCompleteField(), new GameStatus(1,"text"));

        expect(status).toBeDefined();
        expect(status.getField().value).toEqual("value");
        expect(status.getGameStatus().getText()).toEqual("text");
    });
});