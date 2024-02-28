# nodejs_request

- let's learn node request library and call the netilion api

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

## TIL

- in linux to append to a file instead of overwrite contents

```console
cmd >> file
```