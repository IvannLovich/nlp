import { handleSubmit } from '@/client/utils/formHandler';
import fetchMock from 'jest-fetch-mock';
import { JSDOM } from 'jsdom';

// Set up fetch mock
fetchMock.enableMocks();

// Set up a simple DOM environment using jsdom
const { window } = new JSDOM();
global.window = window as unknown as Window & typeof globalThis;
global.document = window.document;
global.alert = jest.fn();

describe('handleSubmit function', () => {
  it('should handle a successful fetch and update the DOM', async () => {
    // Mock the fetch response
    fetchMock.mockResponseOnce(
      JSON.stringify({
        data: {
          score_tag: 'positive',
          subjectivity: 'subjective',
          irony: 'non-ironic',
          confidence: 0.85,
        },
      })
    );

    // Set up the initial HTML structure
    document.body.innerHTML = `
      <div id="loader" class="hidden"></div>
      <main></main>
      <form id="testForm">
        <input id="name" type="text" value="https://www.example.com" />
      </form>
      <div id="results"></div>
    `;

    // Mock the form submit event
    const event = new Event('submit', { bubbles: true, cancelable: true });
    Object.defineProperty(event, 'preventDefault', { value: jest.fn() });

    await handleSubmit(event);
    // Check if the DOM is updated as expected
    expect(
      document.getElementById('loader')!.classList.contains('hidden')
    ).toBe(true);
  });
});
