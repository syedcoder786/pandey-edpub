const express = require('express');
const Vedio = require('../modals/Vedio');
const router = express.Router();
// const auth = require('../middleware/auth')


router.get('/', (req,res) => {
    Vedio.find()
        // .sort({ date: -1 })
        .then(vedios => {
            // console.log(vedios)
            res.json(vedios)
        })

})

module.exports = router;