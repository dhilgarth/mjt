import {SomeClass} from "../src/some-class";

describe("My test", () => {
    it("should be ok", () => {
        expect(SomeClass.foo()).toEqual("bar");
    });

    it("should execute the helper", ()=>{
        expect(helperExecuted).toEqual(1);
    })
});