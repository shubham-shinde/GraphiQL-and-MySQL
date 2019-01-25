import express from 'express';
import GraphQLHTTP from 'express-graphql';
import schema from './schema';

const APP_PORT = 3001
const app = express()

app.use('/graphql', GraphQLHTTP({
    schema,
    pretty: true,
    graphiql: true
}))

app.listen(APP_PORT, () => {
    return console.log(`App listening on port ${APP_PORT}`)
})