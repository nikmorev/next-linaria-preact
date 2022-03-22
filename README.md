# next-linaria-preact
Boilerplate for a project on nextjs + typescript + linaria + preact. 

## How to run app
1. Go to **config** folder and run there: `docker compose up` for production or 
`docker compose --env-file .env.local up` for development.<br/><br/>
2. Go to **app** folder and run there `npm ci` to get the typescript support. App is running in a 
container, all node_modules are installed there as well therefore node_modules are not 
reachable by default and for ts support node_modules should be installed outside the container as well.

