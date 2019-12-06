import React, { useEffect, useRef, useState } from 'react';

import './quiz-modal.styles.scss';

const QuizModal = () => {
    const [question, setQuestion] = useState([])
    const quizResults = useRef();

    const getContent = () => {
        let allResults = [];
        const url = new URL('https://itunes.apple.com/search');
        const params = { term: 'beyonce', media: 'musicVideo'};
        url.search = new URLSearchParams(params);
        fetch(url, { method: 'POST' })
            .then(results => results.json())
            .then(data => {
                let getQuestion = () => {
                    return ( <div> {data.results[12].trackCensoredName} </div> )
                }
                // allResults = [
                // data.results[0].artworkUrl100,
                // data.results[1].trackCensoredName,
                // data.results[12].trackCensoredName,
                // data.results[23].trackCensoredName,
                // data.results[44].trackCensoredName
            //];
            setQuestion(getQuestion)
            })
    };

    useEffect(() => {
        const quizSetUp = getContent();
        //quizResults.current = quizSetUp;
        console.log(quizSetUp)
    }, [])

    

    return (
    <div className='styled-modal'>
        <div className='modal-container'>
            <div className='modal-warning'> {question}
            </div>
            <div className='modal-section-wrapper'>

            </div>
        </div>
    </div>
)
}


export default QuizModal;