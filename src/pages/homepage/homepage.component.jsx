import React, { useEffect, useState } from 'react';
import './homepage.styles.scss'

import Header from '../../components/header/header.component'
import HomeScreen from '../../components/homescreen/homescreen.component'
import MidSection from '../../components/mid-section/mid-section.component'
import LowerMidSection from '../../components/lower-mid-section/lower-mid-section.component'
import BottomLanding from '../../components/bottom-landing-section/bottom-landing-page.component'
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

    const [scrollTop, setScrollTop] = useState(0);

    const onScroll = (e) => {
        setScrollTop(e.target.documentElement.scrollTop);
    }

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, []);


    return (
        <div className='homepage-container'>
            <Header scrollLocation={scrollTop} />
            <HomeScreen />
            <MidSection scrollLocation={scrollTop} />
            <LowerMidSection />
            <BottomLanding />
            <Footer />
        </div>
    )
}



// 
export default HomePage;