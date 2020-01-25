import React from 'react';
import { Table } from 'semantic-ui-react'
import './account-page.styles.scss';

const AccountPage = () => {

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