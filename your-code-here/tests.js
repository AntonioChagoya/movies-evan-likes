// Test Runner: https://mochajs.org
// DOM helpers: https://testing-library.com/docs/intro
// Assertions: https://unexpected.js.org/assertions/any/to-be/

const { getByText } = TestingLibraryDom;
const expect = weknowhow.expect;

beforeEach(function () {
  this.app = document.querySelector("#user-app");
  this.moviesList = Array.from(document.querySelector("#MoviesList").childNodes);
});

it("Step 1 - list element should show at least on child element", function () {
  expect(this.moviesList.length, 'to be greater than', 0);
});

it("Step 2 - should have an <a> tag", function () {
  this.moviesList.forEach((childElement)=>{
      const linkElement = childElement.querySelector('a');
      expect(linkElement,'to be defined');
  })
});

it("Step 2 - <a> tag should have valid href attribute", function () {
  this.moviesList.forEach((childElement)=>{
      const linkElement = childElement.querySelector('a');
      expect(linkElement.getAttribute('href'), 'to match', /^https?:\/\/.+/);
  })
});

it("Step 8 - When a movie row is clicked, expand the row to show what Evan's comments ", function () {
  const selectedMovie = this.moviesList[Math.floor(Math.random() * this.moviesList.length)];

  selectedMovie.click();

  const articleElement = selectedMovie.querySelector('article');
  expect(articleElement, 'to be defined');
});