type ToUppercaseWithPrefix<T extends string> = `PREFIX:${Uppercase<T>}`;

type Example1 = ToUppercaseWithPrefix<"hello">;
// ^?

type Example2 = ToUppercaseWithPrefix<"goodbye">;
// ^?
