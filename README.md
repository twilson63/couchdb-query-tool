# Relaxing with Couchdb Query Tool

This is a simple query tool for 
couchdb.

## How to query local couchdb databases

You can run a local couchdb using docker

```
docker run -d -p 5984:5984 klaemo/couchdb:2.0-dev --with-haproxy --with-admin-party-please -n 1
```

Then you can make it available using ngrok

```
ngrok http 5984
```


## Enjoy!

