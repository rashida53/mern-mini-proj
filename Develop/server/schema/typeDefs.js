const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Tech {
    name: String
}

type Matchup {
    tech1: String
    tech2: String
    tech1_votes: Int
    tech2_votes: Int
}

type Query {
    techs: [Tech]
    matchups(_id: ID!):[Matchup]
}`

module.exports = typeDefs;