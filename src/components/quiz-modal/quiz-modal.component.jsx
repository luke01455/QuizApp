import React, { useEffect, useState } from 'react';

import { musiciansAndBands } from '../../data/musicians-bands'
import './quiz-modal.styles.scss';

const QuizModal = () => {
    const [question, setQuestion] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState([]);

    const getQuestionAndAnswer = () => {
        // musicians and bands length - find random artist
        let randomArtist = Math.floor(Math.random() * 69 + 1);
        const url = new URL('https://itunes.apple.com/search');
        // search from a randomly generated artist from the musician and bands object
        const params = { term: `${musiciansAndBands[randomArtist]}`, media: 'musicVideo'};
        url.search = new URLSearchParams(params);
        console.log(url)
        try {
            fetch(url, { method: 'POST' })
            .then(results => results.json())
            .then(data => {
                
                // find a random song from the random artist
                let randomTrack = Math.floor(Math.random() * data.results.length + 1);

                // get a still from the random song of the random artist
                let getQuestion = () => {
                    return ( <div> 
                        <img src={data.results[randomTrack].artworkUrl100}></img>
                    </div> )
                }
                // get the name of the random song from the random artist aka the correct answer to the question
                let getCorrectAnswer = () => {
                    return (
                        <div>
                            <div>{data.results[randomTrack].trackCensoredName}</div>
                        </div>
                    )
                }
                
                if(data.results[randomTrack]) {
                    if (data.results[randomTrack].artworkUrl100) {
                        setQuestion(getQuestion);
                        setCorrectAnswer(getCorrectAnswer);
                    } else {
                        getQuestionAndAnswer();
                    }
                    
                } else {
                    getQuestionAndAnswer();
                }
                
            })
        }
        catch(error) {
            console.log('catch', error)
        }
        

    };

    const getWrongAnswer = () => {

    }

    useEffect(() => {
        getQuestionAndAnswer();
    }, [])

    return (
    <div className='styled-modal'>
        <div className='modal-container'>
            <div className='modal-warning'> {question}
            </div>
            <div className='modal-section-wrapper'>
                {correctAnswer}
            </div>
        </div>
    </div>
)
}


export default QuizModal;