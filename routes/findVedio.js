const express = require('express');
const router = express.Router();
const Cake = require('../modals/Vedio');


router.post('/',(req,res) => {
    const { id } = req.body
    console.log(id)
    Vedio.findById(id)
        // .sort({ date: -1 })
        .then(vedio => {
            // console.log(product)
            res.json(vedio)
        }).catch(err => {
            console.log(err)
            res.json(err)
        })
            

})

module.exports = router;