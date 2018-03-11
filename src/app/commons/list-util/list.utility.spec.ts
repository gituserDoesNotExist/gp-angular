import { ListUtility } from "./list.utility";
import { TestObject } from "./test-object";

describe("ListUtility", () => {

    let filledList: number[] = [ 1, 2, 3, 4];
    let emptyList: number[] = [];

    it("should check if the list is empty", () => {
        expect(ListUtility.isEmpty(filledList)).toBe(false);
        expect(ListUtility.isEmpty(emptyList)).toBe(true);
    });

    it("should return the index of the element", () => {
        let list: TestObject[]= [new TestObject(1,"object1"),new TestObject(2,"object2"),new TestObject(3,"object3")];

        let index: number = ListUtility.getIndexOf(list[0], list);

        expect(index).toEqual(0);
    });

    it("should throw an exception when the element is not found", () => {
        let list: TestObject[]= [new TestObject(1,"object1"),new TestObject(2,"object2"),new TestObject(3,"object3")];

        expect(() => ListUtility.getIndexOf(new TestObject(5, "object not in list"), list)).toThrowError("element not found");
    });
});