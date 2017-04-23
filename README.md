# Relaxing with Couchdb Query Tool

demo at https://couchdb-query.now.sh

query tool for couchdb.

```
npm install
npm start
```

## How to query local couchdb databases

You can run a local couchdb using docker

```
docker run -d -p 5984:5984 klaemo/couchdb:2.0-dev --with-haproxy --with-admin-party-please -n 1
```

Then you can make it available using ngrok

```
npm i ngrok -g
ngrok http 5984
```


## Enjoy!
