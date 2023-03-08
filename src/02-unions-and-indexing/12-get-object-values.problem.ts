import { Equal, Expect } from "../helpers/type-utils";

const frontendToBackendEnumMap = {
	singleModule: "SINGLE_MODULE",
	multiModule: "MULTI_MODULE",
	sharedModule: "SHARED_MODULE",
} as const;

type FrontendToBackendEnumMap = typeof frontendToBackendEnumMap;

type FrontToBackendKeys = keyof FrontendToBackendEnumMap;

type BackendModuleEnum = FrontendToBackendEnumMap[FrontToBackendKeys];

type tests = [
	Expect<
		Equal<BackendModuleEnum, "SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE">
	>
];
