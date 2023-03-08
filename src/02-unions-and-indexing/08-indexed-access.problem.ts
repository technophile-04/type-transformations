import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
	String: "Default string",
	Int: 1,
	Float: 1.14,
	Boolean: true,
	ID: "id",
};

type FakeDataType = typeof fakeDataDefaults;

export type StringType = FakeDataType["String"];
export type IntType = FakeDataType["Int"];
export type FloatType = FakeDataType["Float"];
export type BooleanType = FakeDataType["Boolean"];
export type IDType = FakeDataType["ID"];

type tests = [
	Expect<Equal<StringType, string>>,
	Expect<Equal<IntType, number>>,
	Expect<Equal<FloatType, number>>,
	Expect<Equal<BooleanType, boolean>>,
	Expect<Equal<IDType, string>>
];
