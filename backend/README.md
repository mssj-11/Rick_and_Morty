#   Backend - Rick and Morty
##  Create project
```sh
mkdir RickAndMortyBackend
cd RickAndMortyBackend
```

*   ### Initialize the Node project:
```sh
npm init -y
```



##  Install
*   ### 1. Instala las dependencias necesarias:
```sh
npm install express axios dotenv cors
```
*   ### 2. Instala nodemon como una dependencia de desarrollo:
```sh
npm install --save-dev nodemon
```

##  Config
File `.env`
```sh
PORT=3001
```
File `package.json`
```sh
"scripts": {
  "start": "nodemon index.js"
}
```