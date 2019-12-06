import React, { useEffect } from 'react';

import './quiz-modal.styles.scss';

const QuizModal = () => {
    useEffect(() => {
        const getContent = () => {
            const url = new URL('https://itunes.apple.com/search');
            const params = { term: 'beyonce', media: 'musicVideo'};
            url.search = new URLSearchParams(params);
            fetch(url, { method: 'POST' })
                .then(results => results.json())
                .then(data => {
                    
                })
        };
    }, [])
    return (
    <div className='styled-modal'>
        <div className='modal-container'>
            <div className='modal-warning'> question
            </div>
            <div className='modal-section-wrapper'>
                answers
                answers
                answers
                answers
            </div>
        </div>
    </div>
)
}


export default QuizModal;