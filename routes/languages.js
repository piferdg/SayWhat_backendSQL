const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get("/languages", (request, response, next) => {
    queries.list('languages').then(languages => {
        response.json({languages});
    }).catch(next);
});


module.exports = router;



