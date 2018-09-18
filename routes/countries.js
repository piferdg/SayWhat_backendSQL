const express = require('express');
const router = express.Router();
const queries = require('../queries');

router.get("/countries", (request, response, next) => {
    queries.list('countries').then(countries => {
        response.json({countries});
    }).catch(next);
});

router.get("/countries/:id", (request, response, next) => {
    queries.read("countries", request.params.id).then(countries => {
        countries
            ? response.json({countries})
            : response.status(404).json({message: 'Country not found'})
    }).catch(next);
});

router.post("/country", (request, response, next) => {
    queries.post("countries", request.body).then(country => {
        response.status(201).json({country});
    }).catch(next);
});

router.delete("/countries/:id", (request, response, next) => {
    queries.delete("countries", request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/countries/:id", (request, response, next) => {
    queries.update("countries", request.params.id, request.body).then(newUpdate => {
        response.json({newUpdate});
    }).catch(next);
});

module.exports = router;