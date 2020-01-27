import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { Table } from 'semantic-ui-react'
import { MY_SCORES_QUERY } from '../../util/graphql'
import './account-page.styles.scss';

const AccountPage = () => {

    const [quizzes, setQuizzes] = useState([]);
    const { loading, data } = useQuery(MY_SCORES_QUERY)

    useEffect(() => {
        if (data) {
            setQuizzes(data.getQuiz);
        }
    }, [data]);

    return (
        <div>
            <p> Username</p>
            <h1> My Quizzes </h1>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>QuizId?</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                        <Table.HeaderCell>Tickets</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <Table.Row key={1}>
                        <Table.Cell></Table.Cell>
                        <Table.Cell color='green'></Table.Cell>
                        <Table.Cell></Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>


        </div>
    )

};



export default AccountPage;