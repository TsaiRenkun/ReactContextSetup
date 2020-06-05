const express = require('express');
const router = express.Router();

//@route    POST api/name
//@desc     ACTION
//@access   PRIVATE/PUBLIC
router.post('/', (req,res)=> {
    res.send('route working');
});

module.exports = router;