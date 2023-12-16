#   Backend - Rick and Morty
##  Create project
```sh
mkdir backend
cd backend
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


##  Documentation API 
In the browser
```sh
http://localhost:3001
```
Response: `¡Welcome to the Rick and Morty API!`
<br>

In the browser enter character name `http://localhost:3001/api/search?characterName={name}` for example:
```sh
http://localhost:3001/api/search?characterName=Rick
```
Response: `Character information`