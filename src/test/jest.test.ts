import transformCssFileNames from "../scripts/templateScripts/transformCssFileNames";
import createStyleText from "../scripts/templateScripts/createStyleText";

describe(`work with css`, () => {
  test("Convert css file names to Camel case and delete all first numbers", () => {
    expect(transformCssFileNames(["01-all"])).toStrictEqual(["all"]);
  });

  test("Convert css file names to import", async () => {
    const cssText = await createStyleText(["01-all"]);
    expect(cssText).toEqual([{}]);
  });
});
