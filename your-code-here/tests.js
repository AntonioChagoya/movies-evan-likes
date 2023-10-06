// Test Runner: https://mochajs.org
// DOM helpers: https://testing-library.com/docs/intro
// Assertions: https://unexpected.js.org/assertions/any/to-be/

const { expect } = weknowhow;
const { getByText } = TestingLibraryDom;

beforeEach(function () {
  this.app = document.querySelector("#user-app");
});

it("shows the default starting message", function () {
  getByText(this.app, "(this file can be found at ./your-code-here/app.js)");
});
