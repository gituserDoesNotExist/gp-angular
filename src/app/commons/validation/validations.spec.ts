import { Validations } from "./validations";

describe("Validations", () => {

    const ERROR_MESSAGE: string = "error thrown";

    it("should throw an error", () => {
        expect(() => Validations.checkNot(true,ERROR_MESSAGE)).toThrowError(ERROR_MESSAGE);
    });

    it("should not throw an error", () => {
        expect(() => Validations.checkNot(false, ERROR_MESSAGE)).not.toThrow();
    });

});