const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat } = require('graphql')
const type = require('./type')
const mutation = require('./mutations')
const Bacon = require("./bacon")

const start = new Bacon( "bacons" );

// Defines the queries
module.exports = {
    bacons: {
        type: new GraphQLList(type),
        args: {
            type: {
                type: GraphQLString
            },
            price: {
                type: GraphQLFloat
            }
        },
        resolve: Bacon.findMatching.bind(Bacon)
    },
    bacon: {
        type,
        args: {
            id: {
                type: GraphQLID
            }
        },
        resolve: Bacon.getByID.bind(Bacon)
    },
    baconInsert: {
        type,
        args: {
            id: {
                type: GraphQLID
            },
            test: {
                type: GraphQLString
            }
        },
        resolve: async( test, test2 ) => {
            console.log('test', test, test2);
        }
    }
}