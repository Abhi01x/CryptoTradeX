const coins = [
    { name: 'BTC', symbol: 'BTCUSDT', logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' },
    { name: 'ETH', symbol: 'ETHUSDT', logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' },
    { name: 'ADA', symbol: 'ADAUSDT', logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png' },
    { name: 'BNB', symbol: 'BNBUSDT', logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png' },
    { name: 'XRP', symbol: 'XRPUSDT', logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png' },
    { name: 'SOL', symbol: 'SOLUSDT', logo: 'https://cryptologos.cc/logos/solana-sol-logo.png' },
    { name: 'TRX', symbol: 'TRXUSDT', logo: 'https://cryptologos.cc/logos/tron-trx-logo.png' },
    { name: 'APT', symbol: 'APTUSDT', logo: 'https://cryptologos.cc/logos/apecoin-ape-logo.png' },
    { name: 'DOT', symbol: 'DOTUSDT', logo: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png' },
    { name: 'DOGE', symbol: 'DOGEUSDT', logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png' },
    { name: 'LTC', symbol: 'LTCUSDT', logo: 'https://cryptologos.cc/logos/litecoin-ltc-logo.png' },
    { name: 'AVAX', symbol: 'AVAXUSDT', logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png' },
    { name: 'ATOM', symbol: 'ATOMUSDT', logo: 'https://cryptologos.cc/logos/cosmos-atom-logo.png' },
    { name: 'MATIC', symbol: 'MATICUSDT', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png' },
    { name: 'UNI', symbol: 'UNIUSDT', logo: 'https://cryptologos.cc/logos/uniswap-uni-logo.png' },
    { name: 'FIL', symbol: 'FILUSDT', logo: 'https://cryptologos.cc/logos/filecoin-fil-logo.png' },
    { name: 'ALGO', symbol: 'ALGOUSDT', logo: 'https://cryptologos.cc/logos/algorand-algo-logo.png' },
    { name: 'NEAR', symbol: 'NEARUSDT', logo: 'https://cryptologos.cc/logos/near-protocol-near-logo.png' },
    { name: 'XTZ', symbol: 'XTZUSDT', logo: 'https://cryptologos.cc/logos/tezos-xtz-logo.png' },
    { name: 'EOS', symbol: 'EOSUSDT', logo: 'https://cryptologos.cc/logos/eos-eos-logo.png' }
];

function populateDashboard() {
    const dashboard = document.getElementById('cryptoDashboard');
    dashboard.innerHTML = ''; // Clear existing cards

    coins.forEach((coin) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${coin.logo}" class="crypto-logo" alt="${coin.name}">
            <div class="crypto-name">${coin.name}</div>
            <div class="price" id="price${coin.name}">Price: --</div>
            <div class="change" id="change${coin.name}">Change: --</div>
            <div class="volume" id="volume${coin.name}">Volume: --</div>
            <div class="high-low" id="highLow${coin.name}">High: --, Low: --</div>
        `;
        dashboard.appendChild(card);
    });
}

function fetchPrices() {
    coins.forEach((coin) => {
        fetch(`https://api.binance.com/api/v3/ticker/24hr?symbol=${coin.symbol}`)
            .then(response => response.json())
            .then(data => {
                document.getElementById(`price${coin.name}`).innerText = `Price: $${parseFloat(data.lastPrice).toFixed(2)}`;
                const change = parseFloat(data.priceChangePercent).toFixed(2);
                const changeElement = document.getElementById(`change${coin.name}`);
                changeElement.innerText = `Change: ${change}%`;
                changeElement.className = `change ${change >= 0 ? 'up' : 'down'}`;
                document.getElementById(`volume${coin.name}`).innerText = `Volume: ${parseFloat(data.volume).toLocaleString()}`;
                document.getElementById(`highLow${coin.name}`).innerText = `High: $${parseFloat(data.highPrice).toFixed(2)}, Low: $${parseFloat(data.lowPrice).toFixed(2)}`;
            })
            .catch(err => console.error(`Error fetching data for ${coin.name}:`, err));
    });
}

populateDashboard();  // Ensure cards are populated initially
fetchPrices();  // Fetch the prices after populating
setInterval(fetchPrices, 10000); // Update every 10 seconds
