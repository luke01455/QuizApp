import React from 'react';
import { musiciansAndBands } from '../data/musicians-bands';

const url = new URL('https://api-football-v1.p.rapidapi.com/v2/teams/search/');

const getParams = () => {
    // musicians and bands length - find random artist
    //let randomArtist = Math.floor(Math.random() * 69 + 1);
    // search from a randomly generated artist from the musician and bands object
    const params = 'real_madrid';
    return params
}
export const getQuestionAndAnswer = async () => {
    const newParams = getParams();
    url.search = new URLSearchParams(newParams);

        const questionResponse = await fetch(url, { method: 'POST' })
        .then(results => results.json())
        .then(data => {
            let finalQuestionAndAnswer = data;
            // get a still from the random song of the random artist
            let getQuestion = () => {
                return ( <div> 
                    <img className='question-image' src={data.results[randomTrack].artworkUrl100} alt='questionImg'></img>
                </div> )
            }
            console.log(data);
            return finalQuestionAndAnswer;
        });
    console.log('questionResponse', questionResponse);
    return questionResponse;
};


// export const getWrongAnswer = async () => {
//     const newParams = getParams();
//     url.search = new URLSearchParams(newParams);

//         const answersResponse = await fetch(url, { method: 'POST' })
//         .then(results => results.json())
//         .then(data => {
//             let finalWrongAnswers = ['', '', '', '', '']
//             // find a random song from the random artist - temporarily as i dont want to make too many calls
//             let randomTrack1 = Math.floor(Math.random() * data.results.length);
//             let randomTrack2 = Math.floor(Math.random() * data.results.length);
//             let randomTrack3 = Math.floor(Math.random() * data.results.length);
//             let randomTrack4 = Math.floor(Math.random() * data.results.length);
//             // get the name of the random song from the random artist aka the correct answer to the question
//             let getIncorrectAnswer = ( randomTrack ) => {
//                 return (
//                     <div>
//                         <div className='incorrect answer'>{data.results[randomTrack].trackCensoredName.toUpperCase()}</div>
//                     </div>
//                 )
//             }
//             if(data.results[randomTrack1]) {
//                 if (data.results[randomTrack1].artworkUrl100) {
//                     finalWrongAnswers = [
//                     getIncorrectAnswer(randomTrack1), 
//                     getIncorrectAnswer(randomTrack2), 
//                     getIncorrectAnswer(randomTrack3),
//                     getIncorrectAnswer(randomTrack4),
//                 ]
//                 finalWrongAnswers[4] = false;
//                 } else {
//                     getWrongAnswer();
//                 }
                
//             } else {
//                 getWrongAnswer();
//             }
//             return finalWrongAnswers
//         })
//     return answersResponse
// }