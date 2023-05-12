// populates data for each field in schema
const resolvers = {
    Query: {
        // returns an array of Tracks 
        // to be used to populate homepage 
        // grid of our client
        // (parent, args, contextValue, info)
        // deconstruct dataSources from contextVal
        tracksForHome: (_, __, { dataSources }) => {
            // interacts with our data source
            return dataSources.trackAPI.getTracksForHomepage()
        }
    },
    // indicates this is for the Track type in the schema
    Track: {
        // destructure authorId from author's parent (Track)
        author: ({ authorId }, _, { dataSources }) => {
            return dataSources.trackAPI.getAuthor(authorId);
        }
    }
};

module.exports = resolvers;