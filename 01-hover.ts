const object = {
  name: "John",
  age: 30,
} as const;

const onlyAcceptsJohn = (name: "John") => {};

onlyAcceptsJohn(object.name);
