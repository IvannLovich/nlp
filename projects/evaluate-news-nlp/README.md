# Natural Language Processing Project

## Overview

Welcome to the Natural Language Processing (NLP) project! This application leverages the MeaningCloud API to analyze sentiment in text content. The project includes a frontend developed with HTML, SCSS, and JavaScript, a Node.js backend for server-side operations, and the MeaningCloud API for NLP.

## Project Structure

### Frontend

- **index.js:** The main JavaScript file orchestrating the interaction between user input, form submission, and API calls. It dynamically updates the webpage with NLP results and includes an image depicting Natural Language Processing.

### Backend

- **server/index.js:** The Node.js server file responsible for handling requests and interacting with the MeaningCloud API. Key functionalities include serving the HTML page, processing form submissions, and communicating with the MeaningCloud API to analyze sentiment.

### JavaScript Modules

- **formHandler.js:** Manages the form submission process, handles user input validation, and orchestrates API calls to MeaningCloud. It dynamically updates the webpage with sentiment analysis results.
- **nameChecker.js:** Validates user input, specifically ensuring that the provided input is a valid URL using the `valid-url` library.
- **responseMapping.js:** Maps the numerical results received from the MeaningCloud API to human-readable sentiment, subjectivity, and irony labels.

## Getting Started

1. Install project dependencies:

   ```bash
   npm install

   ```

2. Start the development server:

   ```bash
   npm run build-dev

   ```

3. Access the application at http://localhost:8080.

## How to Use

- Enter a valid URL in the provided form.
- Click the "Submit" button to initiate sentiment analysis.
- View the analyzed results, including sentiment, subjectivity, irony, and confidence level.

## MeaningCloud API Integration

The project integrates the MeaningCloud API for sentiment analysis. The API key is included in the `server/index.js` file for easy access.

## Additional Notes

- The project includes a loader to indicate ongoing API requests.
- Make sure to provide a valid URL for accurate sentiment analysis.

## Acknowledgments

Special thanks to MeaningCloud for providing a powerful API for NLP tasks.

Feel free to explore and enhance the project further!
