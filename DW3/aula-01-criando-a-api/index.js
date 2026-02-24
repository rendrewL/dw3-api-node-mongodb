import express from "express";
import mongoose from "mongoose";
import Game from "./models/games.js"

const app = express();

//Configurações do Express
app.use(express.json()) //Permite o uso de json na aplicação

//Iniciando a conexão com o banco de dados MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games")

app.get("/", (req,res) => {
 const games = [
  {
    title: "game 1",
    year: "2020",
    plataforma:"PC",
    price: 20
  },
  {
    title: "game 2",
    year: "2022",
    plataforma:"Xbox",
    price: 30
  }
 ]
 res.status(200).json(games)
});

const port = 4000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`API rodando em http://localchost:${port}`);
  }
});
;