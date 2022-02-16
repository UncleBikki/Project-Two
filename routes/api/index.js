const router = require('express').Router();
//need to require dm routes , post routes, 
const DungeonMasterRoutes = require('./dm-routes.js');

router.use('/DungeonMasters', DungeonMasterRoutes);

module.exports = router;