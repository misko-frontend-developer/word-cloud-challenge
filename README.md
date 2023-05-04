📖 Documentation for Word Cloud Project

🚀 Introduction

The Word Cloud Project is an application that displays a word cloud from data fetched from a Github Gist. Each word represents a topic from the topics.json file in the Gist. The text size of the topic is dependent on the popularity of the topic, with the most popular topics displayed in a larger text size and the least popular topics displayed in a smaller text size. Additionally, topics with a sentiment score greater than 60 are displayed in green, topics with a sentiment score less than 40 are displayed in red, and other topics are displayed in grey.

📥 Installation

To install the Word Cloud Project, clone the repository and run the following command:


npm install
💻 Usage

To run the application, execute the following command:


npm start
The application will fetch data from the Github Gist and display the word cloud.

When a label is clicked, metadata about the topic is displayed, including the total volume of the topic and how that volume is broken down into positive, neutral, and negative sentiment.

🧪 Testing

One test is included in the tests folder that tests fetching data from the Github Gist. To run the test, execute the following command:

npm test
📃 Conclusion

The Word Cloud Project is a simple and intuitive application that provides a clear visualization of topic popularity and sentiment.
