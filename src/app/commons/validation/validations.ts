export class Validations {

    public static checkNot(condition: boolean, errorMessage: string) {
        if(condition) {
            throw new Error(errorMessage);
        }
    }

}