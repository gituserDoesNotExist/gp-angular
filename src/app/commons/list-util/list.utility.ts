import { Validations } from "../validation/validations";

export class ListUtility {

    private static readonly INDEX_ELEMENT_NOT_FOUND: number = -1;

    public static isEmpty(list: any[]) {
        return list.length === 0;
    }

    public static getIndexOf<ITEM>(item: ITEM, list: ITEM[]): number {
        let index = list.indexOf(item);
        Validations.checkNot(index === ListUtility.INDEX_ELEMENT_NOT_FOUND, "element not found");
        return index;
    }

}