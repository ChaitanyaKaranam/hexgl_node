const express = require('express');
const router = express.Router();

router.get('/game_details', (req, res) => {
    if(res.locals.gameManager){
        res.send(res.locals.gameManager.getGameDetails())
    }else{
        res.status(500).send('Error')
    }
})

module.exports = router;