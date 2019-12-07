import React, { useEffect, useState } from 'react';

import './quiz-modal.styles.scss';

const QuizModal = () => {
    const [question, setQuestion] = useState([]);
    const [answers, setAnswers] = useState([]);

    const getContent = () => {
        
        const url = new URL('https://itunes.apple.com/lookup');
        //const params = { term: 'beyonce', media: 'musicVideo'};
        const params = { amgArtistId: 468743 }
        url.search = new URLSearchParams(params);
        fetch(url, { method: 'POST' })
            .then(results => results.json())
            .then(data => {
                let getQuestion = () => {
                    return ( <div> 
                        <img src={data.results[0].artworkUrl100}></img>
                    </div> )
                }

                let getAnswers = () => {
                    return (
                        <div>
                            <div>{data.results[0].trackCensoredName}</div>
                            <div>{data.results[12].trackCensoredName}</div>
                            <div>{data.results[23].trackCensoredName}</div>
                            <div>{data.results[44].trackCensoredName}</div>
                        </div>
                    )
                }
            setQuestion(getQuestion);
            setAnswers(getAnswers);
            })
    };

    useEffect(() => {
        getContent();
    }, [])

    return (
    <div className='styled-modal'>
        <div className='modal-container'>
            <div className='modal-warning'> {question}
            </div>
            <div className='modal-section-wrapper'>
                {answers}
            </div>
        </div>
    </div>
)
}


export default QuizModal;