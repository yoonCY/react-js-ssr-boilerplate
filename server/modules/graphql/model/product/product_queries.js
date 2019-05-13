const { GraphQLList,
        GraphQLID,
        GraphQLString,
        GraphQLFloat } = require('graphql')
const type = require('./product_types')
// const mutation = require('./user_mutations')
const user = require("./product")

// Defines the queries
module.exports = {
    users: {
        type: new GraphQLList(type),
        args: {
            device_uuid: {
                type: GraphQLString
            },
            user_no: {
                type: GraphQLID
            }
        },
        resolve: user.findMatching.bind(user)
    },
    user: {
        type,
        args: {
            device_uuid: {
                type: GraphQLString
            },
            user_no: {
                type: GraphQLID
            }
        },
        resolve: user.getByUUID.bind(user)
    }
}