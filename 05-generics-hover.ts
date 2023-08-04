const returnWhatIPassIn = <T>(arg: T) => {
  return arg;
};

const result = returnWhatIPassIn(1);
const result2 = returnWhatIPassIn("hello!");

const wrapWithArg = <T>(arg: T) => {
  return {
    arg,
  };
};

wrapWithArg(1);
wrapWithArg("Hello!");
