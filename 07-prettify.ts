export type Prettify<T> = {
  [K in keyof T]: T[K];
} & unknown;

type Intersected = {
  a: number;
} & {
  b: string;
} & {
  c: boolean;
} & {
  d: number[];
};

type Example = Prettify<Intersected>;
