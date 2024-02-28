const request = require('request');

// Define the URLs of the dummy APIs
const api2Url = 'https://jsonplaceholder.typicode.com/posts/1';
const api1Url = 'https://staging-env.api.netilion.endress.com.cn/v1/api_keys';
const AUTH = `Basic ${process.env.AUTHORIZATION_EDGE}`;
const AK = process.env.APIKEY_EDGE;

const PROXY_OPTIONS = {
  proxy: 'http://127.0.0.1:4780' // Proxy server address
}

const HEADERS = {
  'accept': 'application/json',
  'Authorization': AUTH,
  'Api-Key': AK
}

// Function to make a GET request to an API
function callApi(url, o = {}) {
    const startT = Date.now();
    return new Promise((resolve, reject) => {
        request(url,o, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                const endTime = Date.now();
                const elapsed = endTime - startT;
                const extraText = o.proxy?"":"(no proxy)";
                console.log(`API call to ${url}${extraText} took ${elapsed} milliseconds`);
                resolve(body);
            }
        });
    });
}

// Call the APIs sequentially
async function main() {
    try {
        const opt = {
          // timeout:100,
          headers: HEADERS,
          ...PROXY_OPTIONS
        }

        const response1 = await callApi(api1Url, opt);
        console.log('API 1 Response:', response1);

        const response2 = await callApi(api2Url);
        console.log('API 2 Response no proxy:', response2);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Start the main function
main();
