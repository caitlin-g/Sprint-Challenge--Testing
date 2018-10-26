const express = require("express");

const server = express();

server.use(express.json());

const games = [];

//Post Endpoint
server.post("/games", (req, res) => {
  const { title, genre, releaseYear } = req.body;

  if (!title || !genre || !releaseYear) {
    return res
      .status(422)
      .json({ error: "Please provide a title, genre, and release year." });
  }
  games.push({ title: title, genre: genre, releaseYear: releaseYear });
  res
    .status(200)
    .json({ title: title, genre: genre, releaseYear: releaseYear });
});

module.exports = server;