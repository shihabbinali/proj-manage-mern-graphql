const express = require("express");
require('dotenv').config();
const schema = require('./schema/schema');
const {graphqlHTTP} = require('express-graphql');
const port = process.env.PORT || 8000;
const app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
    }))
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
