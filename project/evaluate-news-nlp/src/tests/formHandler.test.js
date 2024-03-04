import { handleSubmit } from "../client/js/formHandler";
import fetchMock from "jest-fetch-mock";
import { JSDOM } from "jsdom";

// Set up fetch mock
fetchMock.enableMocks();

// Set up a simple DOM environment using jsdom
const { window } = new JSDOM();
global.window = window;
global.document = window.document;

describe("handleSubmit function", () => {
  it("should handle a successful fetch and update the DOM", () => {
    // Mock the fetch response
    fetchMock.mockResponseOnce(
      JSON.stringify({
        data: {
          score_tag: "positive",
          subjectivity: "subjective",
          irony: "non-ironic",
          confidence: 0.85,
        },
      })
    );

    // Set up the initial HTML structure
    document.body.innerHTML = `
      <main></main>
      <div id="loader" class="hidden"></div>
      <form id="testForm">
        <input id="name" type="text" value="https://www.example.com" />
      </form>
      <div id="results"></div>
    `;

    // Mock the form submit event
    const event = { preventDefault: jest.fn() }; // Mock the preventDefault function

    return handleSubmit(event).then(() => {
      // Check if the DOM is updated as expected
      expect(
        document.getElementById("loader").classList.contains("hidden")
      ).toBe(true);
      expect(document.querySelector("ul")).not.toBeNull();
    });
  });

  // Add more test cases for different scenarios
});
