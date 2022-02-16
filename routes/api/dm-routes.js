const router = require('express').Router();
const { DungeonMaster } = require('../../models');

//this route will return all DungeonMasters (Dms)
router.get('/', (req, res) => {
    DungeonMaster.findAll()
    .then(dbDungeonMasterData => res.json(dbDungeonMasterData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// this route is used to find a single DM
router.get('/:id', (req, res) => {
    DungeonMaster.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbDungeonMasterData => {
        if(!dbDungeonMasterData) {
            res.status(404).json({ message: 'No DungeonMaster found with that id'});
            return;
        }
        res.json(dbDungeonMasterData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//this route creates new DungeonMasters
router.post('/', (req, res) => {
    DungeonMaster.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
    .then(dbDungeonMasterData => res.json(dbDungeonMasterData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
    DungeonMaster.findOne({
        where: {
            email: req.body.email
        }
    }).then(dbDungeonMasterData => {
        if (!dbDungeonMasterData) {
            res.status(400).json({ message: 'No DungeonMaster with that email address!' });
            return;
        }

        const validPassword = dbDungeonMasterData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        res.json({ Dm: dbDungeonMasterData, message: 'You are now logged in! '});
    });
});

module.exports = router;