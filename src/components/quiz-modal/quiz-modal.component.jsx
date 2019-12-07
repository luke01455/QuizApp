import React, { useEffect, useState } from 'react';

import { musiciansAndBands } from '../../data/musicians-bands'
import './quiz-modal.styles.scss';

const QuizModal = () => {
    const [question, setQuestion] = useState([]);
    const [answers, setAnswers] = useState([]);

    const getContent = () => {
        // musicians and bands length - find random artist
        let randomArtist = Math.floor(Math.random() * 69 + 1);
        

        //const url = new URL('https://itunes.apple.com/lookup');
        const url = new URL('https://itunes.apple.com/search');
        console.log()
        const params = { term: `${musiciansAndBands[randomArtist]}`, media: 'musicVideo'};
        //const params = { amgArtistId: 468743 }
        url.search = new URLSearchParams(params);
        fetch(url, { method: 'POST' })
            .then(results => results.json())
            .then(data => {
                let randomTrack = Math.floor(Math.random() * data.results.length + 1);
                let getQuestion = () => {
                    return ( <div> 
                        <img src={data.results[randomTrack].artworkUrl100}></img>
                    </div> )
                }
                

                let getAnswers = () => {
                    return (
                        <div>
                            <div>{data.results[randomTrack].trackCensoredName}</div>
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