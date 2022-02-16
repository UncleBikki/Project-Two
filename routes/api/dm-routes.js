const router = require('express').Router();
const { DungeonMaster } = require('../../models');

router.get('/', (req, res) => {
    DungeonMaster.findall({

    })
});