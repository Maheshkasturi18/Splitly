const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: "Success! You have access to the protected dashboard.",
        user: req.user 
    });
});


module.exports = router;