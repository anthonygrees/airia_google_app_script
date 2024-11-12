function airia(userInput) {
  var url = 'https://AIRIA-AGENT-URL-GOES-HERE'; // Replace with your API URL
  var apiKey = 'ak-REAL_AIRIA_API_KEY_GOES_HERE'; // Replace with your Airia Agent Key
  var body = {
    "userInput": userInput
  };
  try {
    var response = UrlFetchApp.fetch(url, {
      'headers': {
        'X-API-KEY': apiKey,
        'Content-Type': 'application/json'
      },
      'method': 'post',
      'payload': JSON.stringify(body)
    });
    
    var data = response.getContentText();
    // Parse the JSON response
    var jsonData = JSON.parse(data);
    
    var resultValue = jsonData["result"];
 
    return resultValue;
 
  } catch (error) {
    // Handle errors here, e.g., log the error or display a message to the user
    Logger.log(error.message);
    return "Error: " + error.message;
  }
}
