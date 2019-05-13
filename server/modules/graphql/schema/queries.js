const { GraphQLObjectType } = require('graphql')
const baconQueries = require('../model/bacon/queries')
const UserQueries = require('../model/user/user_queries')

module.exports = new GraphQLObjectType({
    name: 'query',
    fields: {
        bacon: baconQueries.bacon,
        bacons: baconQueries.bacons,
        user : UserQueries.user,
        users : UserQueries.users
    }
})