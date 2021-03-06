"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

module.exports = {

	communityCreated: function (community) {
		return {
			type: constants.COMMUNITY_CREATED,
			community: community
		};
	},

	communitiesReceived: function (communities) {
		return {
			type: constants.COMMUNITIES_RECEIVED,
			communities: communities
		};
	},

	postsReceived: function (posts) {
		return {
			type: constants.POSTS_RECEIVED,
			posts: posts
		};
	},

	postCreated: function (post) {
		return {
			type: constants.POST_CREATED,
			post: post
		};
	},

	currentUserReceived: function (user) {
		return {
			type: constants.CURRENT_USER_RECEIVED,
			user: user
		};
	}


};