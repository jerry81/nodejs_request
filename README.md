# nodejs_request

- let's learn node request library and call the netilion api

## steps

- set environment variable AUTHORIZATION_EDGE to base64 encoded u:p, and apikey
```console
echo {username}:{password} -n | base64
export AUTHORIZATION_EDGE={above_result}
export APIKEY_EDGE={ak...}
```

## auth with netilion

- apparently all that is needed to sandbox the api is basic auth username:password base64 encoded and a valid api key.
- set the headers as such and you are good to go.
```js
const HEADERS = {
  'accept': 'application/json',
  'Authorization': AUTH,
  'Api-Key': AK
}
```

## proxy

- declare
```js
const proxyOptions = {
  proxy: 'http://127.0.0.1:4780' // Proxy server address
};
```
- then use
```js
request('https://example.com', proxyOptions, function(error, response, body) {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Response:', response);
    console.log('Body:', body);
  }
});
```

## capture elapsed time

- before the request goes out capture time
```js
  const startTime = Date.now();
```
- after the callback, capture the time
```js
  const endTime = Date.now();
```


## TIL

- in linux to append to a file instead of overwrite contents

```console
cmd >> file
```