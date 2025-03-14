# CryptoTradeX - Cryptocurrency Dashboard
A modern and responsive cryptocurrency dashboard with real-time data integration.
CryptoTradeX is a dynamic, real-time cryptocurrency dashboard that displays live data for the top 50 trending cryptocurrencies. The dashboard fetches live data for the coins' prices, 24-hour price changes, trading volumes, and high/low prices. It provides a simple yet informative interface for cryptocurrency enthusiasts and traders to keep track of the latest market trends.

Features
Top 50 Trending Coins: Displays real-time data for the top 50 cryptocurrencies based on trading volume.

Real-Time Data: Continuously updates the price, volume, 24-hour change, high, and low values for each cryptocurrency.

Responsive Design: The dashboard adapts seamlessly across various screen sizes, whether desktop or mobile.

User-Friendly Interface: Clean and intuitive layout for easy navigation.

Data Update: Prices and other coin data are automatically updated every 10 seconds.

Technologies Used

HTML5: For structure and layout.
CSS3: For styling and responsive design.
JavaScript (ES6): For fetching live data from the Binance API and dynamically updating the dashboard.
Binance API: Used for fetching live cryptocurrency data.


How It Works
1. Fetching Data:
The JavaScript file uses the Binance API to fetch real-time data for cryptocurrency prices, volume, and other relevant statistics.

2. Sorting and Displaying Coins:
The Binance API returns data for all cryptocurrency pairs, but only the top 50 coins are selected based on trading volume. These selected coins are displayed in a card format.

3. Real-Time Updates:
The prices, 24-hour change percentage, high, low, and volume values are updated every 10 seconds, ensuring real-time market information.

4. Responsive Design:
The layout adapts to different screen sizes using CSS Grid and Media Queries, making the dashboard mobile-friendly.

Example Dashboard


How to Contribute
Fork the repository.
Create a new branch (git checkout -b feature-xyz).
Make your changes.
Commit your changes (git commit -am 'Add feature xyz').
Push to the branch (git push origin feature-xyz).
Open a pull request.**

Support
If you have any questions or need further help, feel free to create an issue in the GitHub Issues section.

