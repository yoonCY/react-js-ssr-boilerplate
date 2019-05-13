let {
    GraphQLID,
    GraphQLString,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLList
} = require('graphql')

// Defines the type
module.exports = new GraphQLObjectType({
    name: 'User',
    description: 'A user',
    fields: {
        user_no: {
            type: new GraphQLNonNull(GraphQLID)
        },
        device_uuid: {
            type: new GraphQLNonNull(GraphQLString)
        },
        device_os: {
            type: new GraphQLNonNull(GraphQLString)
        },
        device_name: {
            type: new GraphQLNonNull(GraphQLString)
        },
        device_vesion: {
            type: new GraphQLNonNull(GraphQLString)
        },
        app_vesion: {
            type: new GraphQLNonNull(GraphQLString)
        }
    }
})