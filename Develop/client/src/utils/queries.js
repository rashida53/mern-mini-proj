import { gql } from '@apollo/client';

export const QUERY_TECH = gql`
query getTechs {
    techs {
        _id
        name
    }
}
`;

export const QUERY_MATCHUP = gql`
query getMatchups {
    matchups {
        _id
        tech1
        tech2
        tech1_votes
        tech2_votes
    }
}
`;

export const QUERY_SINGLE_MATCHUP = gql`
query getSingleMatchup($_id: ID!) {
    matchup(_id: $_id) {
        _id
        tech1
        tech2
        tech1_votes
        tech2_votes
    }
}
`;