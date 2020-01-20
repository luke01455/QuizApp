import React, { lazy, Suspense, useState, useContext, useEffect } from 'react'
import './quiz-page.styles.scss'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import { useMutation } from "@apollo/react-hooks"
import { AuthContext } from "../../context/auth"
import { Link } from 'react-router-dom'
import { Table } from 'semantic-ui-react'
import PrizeOption from '../../components/prize-option/prize-option.component'

import Spinner from '../../components/spinner/spinner.component'

const QuizModalMusic = lazy(() => import('../../components/quiz-modal-music/quiz-modal-music.component'))
const QuizModalSport = lazy(() => import('../../components/quiz-modal-sport/quiz-modal-sport.component'))



const QuizPage = (props) => {
    const { user } = useContext(AuthContext)
    const strArr = window.location.href.split("/")
    const arrLength = strArr.length
    const quizId = strArr[arrLength - 1]
    const quizTitle = strArr[arrLength - 2]
    const [modalOnOff, setModalOnOff] = useState(false)

    const [thisQuiz, setThisQuiz] = useState([]);
    const { loading, data } = useQuery(FETCH_QUIZ_QUERY, {
        variables: { quizId }
    })


    useEffect(() => {
        if (data) {
            setThisQuiz(data.getThisQuiz.usersScores)
        }
    }, [data]);


    const [beginQuiz] = useMutation(ENTER_QUIZ_MUTATION, {
        update(proxy, { data }) {
            props.history.push(`/quiz/${quizTitle}/${quizId}/${data.createScore.usersScores[0].id}`)
        },
        variables: {
            quizId,
            score: 0
        }
    })

    const onStart = () => {
        beginQuiz()
        setModalOnOff(!modalOnOff)
    }

    return (
        <div className='quiz-page-container'>
            <div> Get all the questions right to win the Prize</div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Username</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                        <Table.HeaderCell>Tickets</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>

                    {loading ?
                        (
                            <Table.Row>
                        <Table.Cell> Loading... </Table.Cell>
                        </Table.Row>
                        ) :
                        (
                            thisQuiz &&
                            thisQuiz.map(userScore => (
                                (
                                    <Table.Row key={userScore.id}>
                                        <Table.Cell>{userScore.username}</Table.Cell>
                                        <Table.Cell><a href='#'>{userScore.score}</a></Table.Cell>
                                        <Table.Cell>{userScore.ticketsLow} / {userScore.ticketsHigh}</Table.Cell>
                                    </Table.Row>
                                )
                            ))
                        )}

                </Table.Body>
            </Table>



            {
                user ? (<button className='start-quiz-button' onClick={() => onStart()}> START QUIZ </button>) :
                    (<Link className='start-quiz-button' to='/signin'> START QUIZ </Link>)
            }

            {
                modalOnOff ? <Suspense fallback={<Spinner />}> {quizTitle === 'MUSIC' ? <QuizModalMusic /> : <QuizModalSport />} </Suspense> : <div></div>
            }
        </div>
    )
}

const ENTER_QUIZ_MUTATION = gql`
mutation createScore($quizId: String!, $score: Int!){
    createScore(quizId: $quizId, score: $score){
        id
        usersScores {
            id
            score
            createdAt
        }
    }
}
`
const FETCH_QUIZ_QUERY = gql`
query getThisQuiz($quizId: String!)
{
  getThisQuiz(quizId: $quizId) {
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
      ticketsLow
      ticketsHigh
    }
  }
}
`

export default QuizPage;
