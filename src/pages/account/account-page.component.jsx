import React, { useState, useEffect, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { Table } from 'semantic-ui-react'
import { MY_SCORES_QUERY } from '../../util/graphql'
import { Link } from 'react-router-dom'
import './account-page.styles.scss';

import Header from '../../components/header/header.component'
import { AuthContext } from '../../context/auth'


const AccountPage = () => {

    const { user } = useContext(AuthContext)

    const [myScores, setMyScores] = useState([])
    const { loading, data } = useQuery(MY_SCORES_QUERY)

    useEffect(() => {
        if (data) {
            setMyScores(data.getMyScores);
        }
    }, [data]);


    return (
        <div className='account-page-container'>
            <div className='account-page-wrapper'>
                <Header transparency='nontransparent' />
                <p className='username-display'> {user.username.toUpperCase()}</p>
                <h1> My Quizzes </h1>
                <Table celled className="ui inverted table">
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Quiz Id</Table.HeaderCell>
                            <Table.HeaderCell>Quiz Type</Table.HeaderCell>
                            <Table.HeaderCell>Quiz Price</Table.HeaderCell>
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
                                myScores &&
                                myScores.map(userScore => (
                                    (
                                        <Table.Row key={userScore.id}>
                                            <Table.Cell className='selectable'><Link to={`quiz/${userScore.quizType}/${userScore.quiz}`}>{userScore.quiz}</Link></Table.Cell>
                                            <Table.Cell >{userScore.quizType}</Table.Cell>
                                            <Table.Cell>{userScore.price}</Table.Cell>
                                            <Table.Cell color='green'>{userScore.score}</Table.Cell>
                                            <Table.Cell>{userScore.ticketsLow} - {userScore.ticketsHigh}</Table.Cell>
                                        </Table.Row>
                                    )
                                ))
                            )}
                    </Table.Body>
                </Table>

            </div>
        </div>
    )

};



export default AccountPage;