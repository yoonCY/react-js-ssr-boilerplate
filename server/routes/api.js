import graphqlHTTP from 'express-graphql';
import schema from 'server/modules/graphql/schema';
import express from 'express';

const router = express.Router();

// require('dotenv').config();
// const router = require('express').Router()

// require('dotenv').config();

router.get('/', graphqlHTTP({
    schema,
    graphiql: false
}))

router.post('/', graphqlHTTP({
    schema,
    graphiql: false
}))

router.get('/dev', graphqlHTTP({
    schema,
    graphiql: true
}))

router.post('/dev', graphqlHTTP({
    schema,
    graphiql: false
}))


module.exports = router
