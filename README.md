# Airia Function for Google Apps Script
Google App Script function to call the Airia API and populate a Google Sheet cell.  
  
This README provides information about the `airia` function, which is designed to interact with the Airia API using Google Apps Script.

## What the Code Does

The `airia` function is a Google Apps Script function that sends a user input to the Airia API and returns the result. Here's a breakdown of its functionality:

1. It takes a `userInput` parameter, which is the text to be sent to the Airia API.
2. It sends a POST request to the Airia API with the user input.
3. It handles the API response and returns the result.
4. If an error occurs, it logs the error and returns an error message.

## How to Use

To use this function in your Google Apps Script project:

1. Open your Google Apps Script project.
2. Create a new script file or use an existing one.
3. Copy and paste the `airia` function into your script.
4. Replace the placeholder values:
   - Replace `'https://AIRIA-AGENT-URL-GOES-HERE'` with your actual Airia API URL.
   - Replace `'ak-REAL_AIRIA_API_KEY_GOES_HERE'` with your actual Airia Agent Key.
5. Save your script.

### Example Usage
In the Google Sheet, use the function with the following command and reference the cell with the question:  
```javascript
=airia(A1)
```

Run the `testAiria` function to test the Airia integration.

## Important Notes

- Ensure you have the necessary permissions to make external API calls in your Google Apps Script project.
- Keep your API key secure and do not share it publicly.
- This function requires an active internet connection to communicate with the Airia API.

## Error Handling

If an error occurs during the API call, the function will log the error message and return a string starting with "Error: " followed by the error message.

## Customization

You can modify the function to handle the API response differently or add additional error handling as needed for your specific use case.
