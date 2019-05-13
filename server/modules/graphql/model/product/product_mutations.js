const { 
    GraphQLNonNull,
    GraphQLString,
    GraphQLList,
    GraphQLID,
    GraphQLFloat,
    GraphQLInt
} = require('graphql')
const type = require('./product_types')
const User = require('./product')

// Defines the mutations
module.exports = {
    addUser: {
        type,
        args: {
            device_uuid:   { type: new GraphQLNonNull(GraphQLString) },
            device_os:  { type: new GraphQLNonNull(GraphQLString) },
            device_name:  { type: new GraphQLNonNull(GraphQLString) },
            device_version:  { type: new GraphQLNonNull(GraphQLString) },
            app_version:  { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: User.createEntry.bind(User)
    },
    updateUser: {
        type,
        args: {
            user_no:     { type: new GraphQLNonNull(GraphQLInt) },
            device_uuid:   { type: new GraphQLNonNull(GraphQLString) },
            device_os:  { type: new GraphQLNonNull(GraphQLString) },
            device_name:  { type: new GraphQLNonNull(GraphQLString) },
            device_version:  { type: new GraphQLNonNull(GraphQLString) },
            app_version:  { type: new GraphQLNonNull(GraphQLString) },
        },
        resolve: User.updateEntry.bind(User)
    }
}
