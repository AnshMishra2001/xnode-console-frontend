// Add support for bigint encoding and decoding in JSON (assumes no actual string will start with prefix "bigint:")

export const replacer = (key: string, value: any) => (typeof value === "bigint" ? `bigint:${value.toString()}` : value);

export const reviver = (key: string, value: any) => (typeof value === "string" && value.startsWith("bigint:") ? BigInt(value.replace("bigint:", "")) : value);
