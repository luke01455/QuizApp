import gql from 'graphql-tag'

export const FETCH_QUIZZES_QUERY = gql`
{
  getQuiz {
    id
    maxUsers
    userCount
    isActive
    type
    usersScores {
      id
      username
      score
      createdAt
      userId
    }
  }
}
`



