const { Tech, Matchup } = require('../models');

const resolvers = {
    Query: {
        techs: async () => {
            return Tech.find()
        },
        matchups: async (parent, { _id }, context) => {
            const params = _id ? { _id } : {};
            return Matchup.find(params)
        }

    }
};

module.exports = resolvers;