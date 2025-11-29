import cors from "cors";
import express from "express";
import dataArtist from "./artist.data.js";

const api = express();
const PORT = 3000;
api.use(cors());
api.get("/", (req, res) => {
    res.send("los apostoles");
});

api.get("/dataArtist", (req, res) => {
    res.json(dataArtist);
});

api.listen(PORT, () => {
console.log(`API server running at http://localhost:${PORT}`);
});