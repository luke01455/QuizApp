import React, { useEffect, useState } from 'react';

import { musiciansAndBands } from '../../data/musicians-bands'
import './quiz-modal.styles.scss';

const QuizModal = () => {
    const url = new URL('https://itunes.apple.com/search');

    const [question, setQuestion] = useState([]);
    const [correctAnswer, setCorrectAnswer] = useState([]);
    const [inccorrectAnswer1, setIncorrectAnswer1] = useState([]);
    const [inccorrectAnswer2, setIncorrectAnswer2] = useState([]);
    const [inccorrectAnswer3, setIncorrectAnswer3] = useState([]);
    

    const getParams = () => {
        // musicians and bands length - find random artist
        let randomArtist = Math.floor(Math.random() * 69 + 1);
        const url = new URL('https://itunes.apple.com/search');
        // search from a randomly generated artist from the musician and bands object
        const params = { term: `${musiciansAndBands[randomArtist]}`, media: 'musicVideo'};
        return params
    }
    const getQuestionAndAnswer = () => {
        const newParams = getParams();
        url.search = new URLSearchParams(newParams);

        try {
            fetch(url, { method: 'POST' })
            .then(results => results.json())
            .then(data => {
                // find a random song from the random artist - temporary because i dont want to make too many calls
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
        const newParams = getParams();
        url.search = new URLSearchParams(newParams);

        try {
            fetch(url, { method: 'POST' })
            .then(results => results.json())
            .then(data => {
                // find a random song from the random artist - temporarily as i dont want to make too many calls
                let randomTrack1 = Math.floor(Math.random() * data.results.length + 1);
                let randomTrack2 = Math.floor(Math.random() * data.results.length + 1);
                let randomTrack3 = Math.floor(Math.random() * data.results.length + 1);

                // get the name of the random song from the random artist aka the correct answer to the question
                let getIncorrectAnswer1 = () => {
                    return (
                        <div>
                            <div>{data.results[randomTrack1].trackCensoredName}</div>
                        </div>
                    )
                }
                let getIncorrectAnswer2 = () => {
                    return (
                        <div>
                            <div>{data.results[randomTrack2].trackCensoredName}</div>
                        </div>
                    )
                }
                let getIncorrectAnswer3 = () => {
                    return (
                        <div>
                            <div>{data.results[randomTrack3].trackCensoredName}</div>
                        </div>
                    )
                }

                if(data.results[randomTrack1]) {
                    if (data.results[randomTrack1].artworkUrl100) {
                        setIncorrectAnswer1(getIncorrectAnswer1);
                        setIncorrectAnswer2(getIncorrectAnswer2);
                        setIncorrectAnswer3(getIncorrectAnswer3)
                    } else {
                        getWrongAnswer();
                    }
                    
                } else {
                    getWrongAnswer();
                }
                
            })
        }
        catch(error) {
            console.log('catch', error)
        }
    }

    useEffect(() => {
        getQuestionAndAnswer();
        getWrongAnswer();
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