const request = require('request');

// Define the URLs of the dummy APIs
const api1Url = 'https://jsonplaceholder.typicode.com/posts/1';
const api2Url = 'https://jsonplaceholder.typicode.com/posts/2';

const proxyOptions = {
  proxy: 'http://127.0.0.1:4780' // Proxy server address
}

// Function to make a GET request to an API
function callApi(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(body);
            }
        });
    });
}

// Call the APIs sequentially
async function main() {
    try {
        const response1 = await callApi(api1Url);
        console.log('API 1 Response:', response1);

        const response2 = await callApi(api2Url);
        console.log('API 2 Response:', response2);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Start the main function
main();
