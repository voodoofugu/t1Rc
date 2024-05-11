import transformCssFileNames from "../scripts/templateScripts/transformCssFileNames";

describe(`jest test`, () => {
  test("Transform css File Names to Camel Case and remove first number", () => {
    expect(transformCssFileNames(["01-all"])).toStrictEqual(["all"]);
  });
});
