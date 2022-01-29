const { Router } = require('express');
const router = Router();
const fs = require('fs-extra');
const path = require('path');

const Game = require('../models/Game');

router.get('/', async(req, res) => {
    const games = await Game.find();
    res.json(games);
});

router.post('/', async(req, res) => {
    const { title, developer, category, year } = req.body;
    const imagePath = '/uploads/' + req.file.filename;
    const newGame = new Game({ title, developer, category, year, imagePath });
    await newGame.save();
    res.json({message: "Game saved"});
});

router.delete('/:id', async(req, res) => {
    const game = await Game.findByIdAndDelete(req.params.id); 
    fs.unlink(path.resolve('./backend/public' + game.imagePath));
    res.json({message: "Game deleted"});
});


module.exports = router;