import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { getQuestionAndAnswer, getWrongAnswer } from '../../functions/apiCalls'
import { addTenCarTickets, addToCount } from '../../redux/car-quiz/car-quiz.actions';

import './quiz-modal.styles.scss';

const QuizModal = ({ addTenCarTickets, addToCount }) => {
    let count = 1;
    const [question, setQuestion] = useState([]);
    const [isRadioChecked, setCheckedRadio] = useState('1');
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const [incorrectAnswer1, setIncorrectAnswer1] = useState([]);
    const [incorrectAnswer2, setIncorrectAnswer2] = useState([]);
    const [incorrectAnswer3, setIncorrectAnswer3] = useState([]);
    const [incorrectAnswer4, setIncorrectAnswer4] = useState([]);
    const [answerLocation, setAnswerLocation] = useState(1);
    

    


    const nextQuestion = () => {
        if(isRadioChecked == answerLocation) {
            console.log('correct', isRadioChecked,  answerLocation, count);
            addToCount();
            addTenCarTickets();
            getAPICallResponse();
        } else {
            console.log('incorrect', isRadioChecked,  answerLocation, count)
            addToCount();
            getAPICallResponse();
        }
        
    }

    const getAPICallResponse = async () => {

        const questionAndAnswer = await getQuestionAndAnswer();
        setQuestion(questionAndAnswer[0]);
        setCorrectAnswer(questionAndAnswer[1]);

        const allWrongAnswers = await getWrongAnswer();
        setIncorrectAnswer1(allWrongAnswers[0]);
        setIncorrectAnswer2(allWrongAnswers[1]);
        setIncorrectAnswer3(allWrongAnswers[2]);
        setIncorrectAnswer4(allWrongAnswers[3]);
    }

    useEffect(() => {
        getAPICallResponse();
    }, []);


    return (
        <div className='styled-modal'>
            <div className='modal-container'>
                <div className='question-header'> NAME THE TITLE OF THIS VIDEO </div>
                <div className='modal-warning'> {question}
                </div>
                <div className='modal-section-wrapper'>
                    <div className='radio-answer'>
                        <input type="radio" value="1" onChange={() => setCheckedRadio("1")} checked={isRadioChecked === '1'} />
                        {answerLocation === 1 ? correctAnswer : incorrectAnswer1}
                    </div>
                    <div className='radio-answer'>
                        <input type="radio" value="2" onChange={() => setCheckedRadio("2")} checked={isRadioChecked === '2'}/>
                        {answerLocation === 2 ? correctAnswer : incorrectAnswer2}
                    </div>
                    <div className='radio-answer'>
                        <input type="radio" value="3" onChange={() => setCheckedRadio("3")} checked={isRadioChecked === '3'}/>
                        {answerLocation === 3 ? correctAnswer : incorrectAnswer3}
                    </div>
                    <div className='radio-answer'>
                        <input type="radio" value="4" onChange={() => setCheckedRadio("4")} checked={isRadioChecked === '4'}/>
                        {answerLocation === 4 ? correctAnswer : incorrectAnswer4}
                    </div>

                </div>
                <div className='next-button'> Next Question </div>
            </div>
        </div>
)
}

const mapDispatchToProps = dispatch => ({
    addTenCarTickets: () => dispatch(addTenCarTickets()),
    addToCount: () => dispatch(addToCount())
   });


export default connect(null, mapDispatchToProps)(QuizModal);