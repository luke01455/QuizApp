import React from 'react';
import './homepage.styles.scss'
import { BrowserView } from 'react-device-detect'
import Footer from '../../components/footer/footer.component'



const HomePage = () => {
  //  const [quizzes, setQuizzes] = useState([]);
  //  const { loading, data } = useQuery(FETCH_QUIZZES_QUERY)

    // const sportImg = 'https://www.proprofs.com/quiz-school/topic_images/p18lq7ediepl816p6s04171vo23.jpg'
    // const musicImg = 'https://www.holmfirthevents.co.uk/wp-content/uploads/2016/03/993564_10156503496795467_8252929934433432258_n.jpg'

    

    // useEffect(() => {
    //     if (data) {
    //         setQuizzes(data.getQuiz);
    //     }
    // }, [data]);

    return (
        <div className='homepage-container'>
            <BrowserView>
            {/* <ControllCarousel /> */}
            </BrowserView>
            {/* <div className='prize-option-container'>
                {loading ? 
                (<Spinner />) :
                 (
                    quizzes &&
                    quizzes.map(quiz => {
                        return quiz.isActive === 'filling' &&
                        ( 
                        <PrizeOption 
                        size='large' 
                        key={quiz.id} 
                        userCount={quiz.userCount} 
                        maxUsers={quiz.maxUsers} id={quiz.id} 
                        imageUrl={quiz.quizType === 'Music' ? midthird : topthird} 
                        title={quiz.quizType === 'Music' ? 'Music' : 'Sport'}/>
                        ) 
                    })
            )}
    
            </div> */}


            <Footer />
        </div>
    )
}



// 
export default HomePage;