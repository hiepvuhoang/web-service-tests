import katalon from "katalon";

export default katalon.testCase("New Test Case", async ({ local, web }) => {
  await web.openBrowser("https://testops.qa.katalon.com/");
  await web.closeBrowser();
});