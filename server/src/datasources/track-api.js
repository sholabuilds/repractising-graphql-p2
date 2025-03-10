const { RESTDataSource } = require("@apollo/datasource-rest");

class TrackAPI extends RESTDataSource {
    baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";

    // appends to baseURL to get tracks
    getTracksForHomepage() {
        return this.get("tracks");
    }

    getAuthor(authorId) {
        return this.get(`author/${authorId}`);
    }
}

module.exports = TrackAPI;