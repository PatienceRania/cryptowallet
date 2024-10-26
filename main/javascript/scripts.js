const text = "Make Secure Exchanges via CryptoWallet!";
let index = 0;
const speed = 100;

function typeWriter() {
    if (index < text.length) {
        document.querySelector('.typed-text').innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

document.querySelector('.account').addEventListener('click', function () {
    window.location.href = 'index.html';
});



document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function () {

        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));

        this.classList.add('active');
    });
});


function showEthereum(event) {
    event.preventDefault();

    document.getElementById('Bitcoin').style.display = 'none';
    document.getElementById('Tron').style.display = 'none';
    document.getElementById('USDT').style.display = 'none';
    document.getElementById('Ethereum').style.display = 'block';
}

function showTron(event) {
    event.preventDefault();

    document.getElementById('Bitcoin').style.display = 'none';
    document.getElementById('Ethereum').style.display = 'none';
    document.getElementById('USDT').style.display = 'none';
    document.getElementById('Tron').style.display = 'block';
}

document.querySelector('.bitcoin').addEventListener('click', function () {
    document.getElementById('Ethereum').style.display = 'none';
    document.getElementById('Tron').style.display = 'none';
    document.getElementById('Bitcoin').style.display = 'block';
});

function showUSDT(event) {
    event.preventDefault();

    document.getElementById('Bitcoin').style.display = 'none';
    document.getElementById('Ethereum').style.display = 'none';
    document.getElementById('Tron').style.display = 'none';
    document.getElementById('USDT').style.display = 'block';
}

document.querySelector('.bitcoin').addEventListener('click', function () {
    document.getElementById('Ethereum').style.display = 'none';
    document.getElementById('Tron').style.display = 'none';
    document.getElementById('USDT').style.display = 'none';
    document.getElementById('Bitcoin').style.display = 'block';
});

document.querySelector('.send').addEventListener('click', function () {
    const tenantContent = document.querySelector('.Tenant').outerHTML;
    document.getElementById('mainContent').innerHTML = `
     <div class="Tenant">
                    <img src="images/exchange.webp" style="width: 80px;">
                    <div class="staticText">Make Secure Exchanges via CryptoWallet!</div>

                </div>
            <div class="container mt-5 Send">
                <form  class="card" style="width: 900px">
                    <h4 class="card-title">Send Assets</h4>
                    <div class="mb-3 row">
                        <label for="Select_Assets" class="col-sm-2 col-form-label">Select Assets</label>
                        <div class="col-sm-4">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Bitcoin</option>
                                <option value="1">Etherum</option>
                                <option value="2">Tron</option>
                                <option value="3">USDT</option>
                            </select>
                        </div>
                        <label for="Select_Assets" class="col-sm-2 col-form-label"
                            style="margin-left: 30px; margin-right: -100px;">Bal:</label>
                        <div class="col-sm-4" style="display: inline-block; width: auto;">
                            <input type="number" class="form-control balance" placeholder="0.00$" style="margin-left: 0;">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Receiver Details</span>
                        <input type="number" class="form-control" placeholder="Account Number">
                        <input type="text" class="form-control" placeholder="Account Name">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Amount to send</span>
                        <input type="number" class="form-control" placeholder="Amount in USD">
                        <input type="number" class="form-control" placeholder="Amount in UGX">
                    </div>
                    <div class="btns">
                        <button type="button" class="sendBtn btn"  onclick="Sending(event) ">Send</button>
                        <button type="button" class="cancelBtn btn" onclick="Canceling(event) ">Cancel</button>
                    </div>
                  
                </form>
            </div>
        `;

    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapLink);

    const sendCssLink = document.createElement('link');
    sendCssLink.rel = 'stylesheet';
    sendCssLink.href = 'css/send.css';
    document.head.appendChild(sendCssLink);
});

document.querySelector('.buy').addEventListener('click', function () {
    const tenantContent = document.querySelector('.Tenant').outerHTML;
    document.getElementById('mainContent').innerHTML = `
      <div class="Tenant">
                    <img src="images/exchange.webp" style="width: 80px;">
                    <div class="staticText">Make Secure Exchanges via CryptoWallet!</div>

                </div>
            <div class="container mt-5 Buy">
                <form  class="card" style="width: 900px">
                    <h4 class="card-title">Buy Assets</h4>
                    <div class="mb-3 row">
                        <label for="Select_Assets" class="col-sm-2 col-form-label">Select Assets</label>
                        <div class="col-sm-4">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Bitcoin</option>
                                <option value="1">Etherum</option>
                                <option value="2">Tron</option>
                                <option value="3">USDT</option>
                            </select>
                        </div>
                        <label for="Select_Assets" class="col-sm-2 col-form-label"
                            style="margin-left: 30px; margin-right: -100px;">Bal:</label>
                        <div class="col-sm-4" style="display: inline-block; width: auto;">
                            <input type="number" class="form-control balance" placeholder="0.00$" style="margin-left: 0;">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Account Details</span>
                        <input type="number" class="form-control" placeholder="Account Number">
                        <input type="text" class="form-control" placeholder="Account Name">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Amount to Buy</span>
                        <input type="number" class="form-control" placeholder="Amount in USD">
                        <input type="number" class="form-control" placeholder="Amount in UGX">
                    </div>
                    <div class="btns">
                        <button type="button" class="sendBtn btn"  onclick="Sending(event) ">Buy</button>
                        <button type="button" class="cancelBtn btn" onclick="Canceling(event) ">Cancel</button>
                    </div>
                  
                </form>
            </div>
        `;

    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapLink);

    const sendCssLink = document.createElement('link');
    sendCssLink.rel = 'stylesheet';
    sendCssLink.href = 'css/send.css';
    document.head.appendChild(sendCssLink);
});


document.querySelector('.receive').addEventListener('click', function () {
    const tenantContent = document.querySelector('.Tenant').outerHTML;
    document.getElementById('mainContent').innerHTML = `
      <div class="Tenant">
                    <img src="images/exchange.webp" style="width: 80px;">
                    <div class="staticText">Make Secure Exchanges via CryptoWallet!</div>

                </div>
            <div class="container mt-5">
                <form  class="card" style="width: 900px">
                    <h4 class="card-title">Receive Assets</h4>
                    <div class="mb-3 row">
                        <label for="Select_Assets" class="col-sm-2 col-form-label">Select Assets</label>
                        <div class="col-sm-4">
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Bitcoin</option>
                                <option value="1">Etherum</option>
                                <option value="2">Tron</option>
                                <option value="3">USDT</option>
                            </select>
                        </div>
                        <label for="Select_Assets" class="col-sm-2 col-form-label"
                            style="margin-right: -80px;">Amount:</label>
                        <div class="col-sm-4" style="display: inline-block; width: auto;">
                            <input type="number" class="form-control balance" placeholder="0.00$" style="margin-left: 0;">
                        </div>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Share link to receive Assets</span>
                        <input type="text" class="form-control" id="shareLink" placeholder="Enter Address to generate link">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Receive by Qr Code </span>
                        <input type="number" id="walletAddress" class="form-control" placeholder="Enter wallet address to generate Qr code">
                    </div>
                    <div class="btns">
                        <button type=" button" class="sendBtn btn">Send</button>
                        <button type="button" class="cancelBtn btn" onclick="Canceling(event) " >Cancel</button>
                    </div>
                  
                </form>
            </div>

                 <div class="modal fade" id="qrcodeModal" tabindex="-1" aria-labelledby="qrCodeModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="qrCodeModalLabel">Receive Crypto via QR Code</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body text-center">
                        <div id="qrcodeContainer" style="margin-bottom: 20px;"></div> <!-- QR code will be displayed here -->
                        <p id="walletAddressDisplay"></p> <!-- Display the wallet address below the QR code -->
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
            `;
    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapLink);

    const sendCssLink = document.createElement('link');
    sendCssLink.rel = 'stylesheet';
    sendCssLink.href = 'css/send.css';
    document.head.appendChild(sendCssLink);

    const input = document.getElementById('shareLink');

    input.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const address = input.value.trim();
            if (address) {
                const shareLink = `https://example.com/share?address=${encodeURIComponent(address)}`;
                input.value = shareLink;
                input.readOnly = true;
            } else {
                alert("Please enter a valid address.");
            }
        }
    });

    document.getElementById('walletAddress').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            generateQRCode();
        }
    });
});

function generateQRCode() {
    const walletAddress = document.getElementById('walletAddress').value;

    if (walletAddress.trim() === '') {
        alert('Please enter a valid wallet address.');
        return;
    }

    document.getElementById('qrcodeContainer').innerHTML = '';

    const qrcode = new QRCode(document.getElementById('qrcodeContainer'), {
        text: walletAddress,
        width: 150,
        height: 150
    });

    document.getElementById('walletAddressDisplay').innerText = `Wallet Address: ${walletAddress}`;


    const qrModal = new bootstrap.Modal(document.getElementById('qrcodeModal'));
    qrModal.show();
}

function Canceling(event) {
    event.preventDefault();
}



function Sending(event) {
    event.preventDefault()

    const isConfirmed = confirm("Confirm transaction.");

    if (!isConfirmed) {
        return;
    }
    const tenantContent = document.querySelector('.Tenant').outerHTML;
    const SendContent = document.querySelector('.Send').outerHTML;
    document.getElementById('mainContent').innerHTML = `
            ${tenantContent}
             ${SendContent}
            <div class="card" style="width:400px">
                <div class="card-title"> <img src="images/success.webp"> </div>
                <div class="card-body">
                    <p class="card-text">Transaction was successful!</p>
                    <a href="index.html" class="btn btn-primary">View Balance</a>
                </div>
            </div>
        `;

    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapLink);

    const receiptCssLink = document.createElement('link');
    receiptCssLink.rel = 'stylesheet';
    receiptCssLink.href = 'css/receipt.css';
    document.head.appendChild(receiptCssLink);
};

// function Sending(event) {
//     event.preventDefault()

//     const isConfirmed = confirm("Confirm transaction.");

//     if (!isConfirmed) {
//         return;
//     }
//     const tenantContent = document.querySelector('.Tenant').outerHTML;
//     const SendContent = document.querySelector('.Buy').outerHTML;
//     document.getElementById('mainContent').innerHTML = `
//             ${tenantContent}
//              ${SendContent}
//             <div class="card" style="width:400px">
//                 <div class="card-title"> <img src="images/success.webp"> </div>
//                 <div class="card-body">
//                     <p class="card-text">Transaction was successful!</p>
//                     <a href="index.html" class="btn btn-primary">View Balance</a>
//                 </div>
//             </div>
//         `;

//     const bootstrapLink = document.createElement('link');
//     bootstrapLink.rel = 'stylesheet';
//     bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
//     document.head.appendChild(bootstrapLink);

//     const receiptCssLink = document.createElement('link');
//     receiptCssLink.rel = 'stylesheet';
//     receiptCssLink.href = 'css/receipt.css';
//     document.head.appendChild(receiptCssLink);
// };
function Canceling(event) {
    event.preventDefault();
    const isConfirmed = confirm("Cancel transaction.");

    if (!isConfirmed) {
        return;
    }
    alert('Transaction canceled.');

    const form = document.querySelector('.card');
    if (form) {
        form.reset();
    }
}


document.querySelector('.transaction').addEventListener('click', function () {
    const tenantContent = document.querySelector('.Tenant').outerHTML;
    document.getElementById('mainContent').innerHTML = `
       <div class="Trans">
        <div class="Tenant">
            <img src="images/exchange.webp" style="width: 80px;">
            <div class="staticText">Make Secure Exchanges via CryptoWallet!</div>
        </div>
      
        <div class="charts">
        <div class="card bit-chart chart" style="width:210px; height: 155px;">
        <div class="btc">
        <img src="images/Bitcoin.png" style="width: 30px; height:20px;">
        <p>BTC Price history</p>
        <p id="weekly-rates"> </p>
        </div>
            <canvas id="bit-chart" class="crypto-chart" ></canvas>
        </div>
        <div class="card ether-chart chart" style="width:210px; height: 155px;">
        <div class="btc">
        <img src="images/Ethereum.png" style="width: 10px; height:20px;">
        <p>Ether Price <br> history</p>
        <p id="week-rates"> </p>
        </div>
            <canvas id="ether-chart" class="crypto-chart"></canvas>
        </div>

       
        <div class="card tron-chart chart" style="width:210px; height:190px;">
        <div class="btc">
        <img src="images/Tron.webp" style="width: 15px; height:20px;">
        <p>Tron Price <br>history</p>
        <p id="week-rate"> </p>
         </div>
            <canvas id="tron-chart" class="crypto-chart"></canvas>
        </div>
        <div class="card usdt-chart chart" style="width:210px; height:190px;">
        <div class="btc">
        <img src="images/USDT.png" style="width: 15px; height:20px;">
        <p>USDT Price <br>history</p>
        <p id="week-rated"> </p>
         </div>
            <canvas id="usdt-chart" class="crypto-chart"></canvas>
        </div>
       </div>

       <div class="card transaction-table" style="width:465px; height:350px;">
        <table class="table table-hover">
         <thead>
           <tr>
            <th scope="col">Account</th>
            <th scope="col">Transaction</th>
            <th scope="col">Status</th>
            <th scope="col">Date</th>
           </tr>
         </thead>
         <tbody>
           <tr>
            <td>136598746755</td>
            <td>Sent</td>
            <td class="status">Completed</td>
            <td>@mdo</td>
           </tr>
           <tr>
            <td>134273484820</td>
            <td>Sent</td>
            <td class="status">Pending</td>
            <td>@fat</td>
           </tr>
           <tr>
            <td>264723695903</td>
            <td>Received</td>
            <td class="status">Failed</td>
            <td>@twitter</td>
           </tr>
           <tr>
            <td>185073376034</td>
            <td>Bought</td>
            <td class="status">Completed</td>
            <td>@twitter</td>
           </tr>
           <tr>
            <td>149865398725</td>
            <td>Received</td>
            <td class="status">Failed</td>
            <td>@twitter</td>
           </tr>
           <tr>
            <td>132093758376</td>
            <td>Bought</td>
            <td class="status">Pending</td>
            <td>@twitter</td>
           </tr>
         </tbody>
        </table>
       </div>
    </div>
    `;

    const bootstrapLink = document.createElement('link');
    bootstrapLink.rel = 'stylesheet';
    bootstrapLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
    document.head.appendChild(bootstrapLink);

    const sendCssLink = document.createElement('link');
    sendCssLink.rel = 'stylesheet';
    sendCssLink.href = 'css/send.css';
    document.head.appendChild(sendCssLink);


    const statuses = document.querySelectorAll('.status');
    statuses.forEach(status => {
        if (status.textContent === 'Completed') {
            status.style.color = 'green';
        } else if (status.textContent === 'Pending') {
            status.style.color = 'orange';
        } else if (status.textContent === 'Failed') {
            status.style.color = 'red';
        }
    });

    setTimeout(fetchCryptoPrices, 0);

    function fetchCryptoPrices() {

        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tron,tether&vs_currencies=usd')
            .then(response => response.json())
            .then(data => {
                const bitcoinPrice = data.bitcoin.usd;
                const ethereumPrice = data.ethereum.usd;
                const tronPrice = data.tron.usd;
                const usdtPrice = data.tether.usd;

                initializeChart('bit-chart', 'red', bitcoinPrice);
                initializeChart('ether-chart', 'blue', ethereumPrice);
                initializeChart('tron-chart', 'green', tronPrice);
                initializeChart('usdt-chart', 'purple', usdtPrice);


                document.getElementById('weekly-rates').textContent = `${bitcoinPrice.toFixed(2)}$`;
                document.getElementById('week-rates').textContent = `${ethereumPrice.toFixed(2)}$`;
                document.getElementById('week-rate').textContent = `${tronPrice.toFixed(2)}$`;
                document.getElementById('week-rated').textContent = `${usdtPrice.toFixed(2)}$`;

            })
            .catch(error => console.error('Error fetching prices:', error));
    }

    function initializeChart(canvasId, color, basePrice) {
        const ctx = document.getElementById(canvasId).getContext('2d');

        const zigzagData = Array.from({ length: 35 }, (_, index) => {
            const amplitude = 0.2;
            const frequency = 0.2;
            return basePrice + amplitude * Math.sin(frequency * index) + (Math.random() * 0.1);
        });

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({ length: 35 }, (_, index) => `${index + 1}h`),
                datasets: [{
                    label: 'Price',
                    data: zigzagData,
                    borderColor: color,
                    borderWidth: 1,
                    fill: true,
                    backgroundColor: `rgba(${color === 'red' ? '255,0,0' : color === 'blue' ? '0,0,255' : color === 'green' ? '0,255,0' : '128,0,128'},0.2)`,
                    tension: 0,
                    pointRadius: 0,
                    pointHoverRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 0
                },
                scales: {
                    x: {
                        display: true,
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 8
                            }
                        }
                    },
                    y: {
                        display: true,
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                size: 8
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    }


    // fetchCryptoPrices();
});


const bitcoinAddress = '1PuJjnF476W3zXfVYmJfGnouzFDAXakkL4';
const ethereumAddress = '0x4838b106fce9647bdf1e7877bf73ce8b0bad5f97';

const bitcoinBalanceUrl = `https://blockchain.info/balance?active=${bitcoinAddress}`;
const ethereumBalanceUrl = `https://api.blockcypher.com/v1/eth/main/addrs/${ethereumAddress}/balance`;

function fetchBitcoinBalance() {
    fetch(bitcoinBalanceUrl)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(data => {
            console.log("Bitcoin Balance Data:", data);
            if (data[bitcoinAddress]) {
                const balanceBTC = data[bitcoinAddress].final_balance / 100000000;
                const balanceUSD = balanceBTC * 20000;
                const balanceUGX = balanceUSD * 3700;

                document.querySelector(".balance").textContent = `${balanceUSD.toLocaleString()}`;
                document.querySelector(".balances").textContent = `${balanceUGX.toLocaleString()}`;
            } else {
                console.error("Bitcoin address not found in response");
            }
        })
        .catch(error => console.error('Error fetching Bitcoin balance:', error));
}

function fetchEthereumBalance() {
    fetch(ethereumBalanceUrl)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok");
            return response.json();
        })
        .then(data => {
            console.log("Ethereum Balance Data:", data);
            const balanceETH = data.balance / 1e18; // Convert wei to ETH
            const balanceUSD = balanceETH * 1600; // Example conversion rate
            const balanceUGX = balanceUSD * 3700; // Example conversion rate

            document.querySelector(".bal").textContent = `${balanceUSD.toLocaleString()} `;
            document.querySelector(".bals").textContent = `${balanceUGX.toLocaleString()} `;
        })
        .catch(error => console.error('Error fetching Ethereum balance:', error));
}

fetchBitcoinBalance();
fetchEthereumBalance();
