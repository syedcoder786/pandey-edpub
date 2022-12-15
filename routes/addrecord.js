const express = require('express');
const router = express.Router();
const Vedio = require('../modals/Vedio');
// const auth = require('../middleware/auth')


router.post('/',  (req,res) => {
    const {img_path,rname,discp,link} = req.body;

    console.log(rname)

    if(!img_path || !rname || !discp || !link){
        return res.status(400).json({ msg: 'Please enter all fields' })
    }

    const newVedio = new Vedio({
        img_path, 
        name:rname, 
        discp, 
        link
    });

    newVedio.save()
        .then(vedio => {
            res.json(vedio)
        })

})

module.exports = router;