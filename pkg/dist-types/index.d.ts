export declare type PlaceholderType = typeof Number | typeof String | typeof Object | typeof JSON | string | number | any;
/**
 * creates a reuseable template literal that can be called with the arguements to fill in the types
 */
export default function fmt(strings: TemplateStringsArray, ...placeholderTypes: PlaceholderType[]): (...placeholders: any[]) => string;
