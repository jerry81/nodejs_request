const request = require('request');

// Define the URLs of the dummy APIs
const api1Url = 'https://jsonplaceholder.typicode.com/posts/1';
const api2Url = 'https://jsonplaceholder.typicode.com/posts/2';

const PROXY_OPTIONS = {
  proxy: 'http://127.0.0.1:4780' // Proxy server address
}

// Function to make a GET request to an API
function callApi(url, po = {}) {
    const startT = Date.now();
    return new Promise((resolve, reject) => {
        request(url,po, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                const endTime = Date.now();
                const elapsed = endTime - startT;
                const extraText = JSON.stringify(po)==="{}"?"(no proxy)":"";
                console.log(`API call to ${url}${extraText} took ${elapsed} milliseconds`);
                resolve(body);
            }
        });
    });
}

// Call the APIs sequentially
async function main() {
    try {
        const response1 = await callApi(api1Url, PROXY_OPTIONS);
        console.log('API 1 Response:', response1);

        const response2 = await callApi(api2Url);
        console.log('API 2 Response no proxy:', response2);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Start the main function
main();
