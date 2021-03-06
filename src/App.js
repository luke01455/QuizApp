import React,  { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth'
import './App.scss'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'


import Login from './pages/login/login'
import Register from './pages/register/register'
import HomePage from './pages/homepage/homepage.component'
import QuizPage from './pages/quiz-page/quiz-page.component'
import QuizSelect from './pages/quiz-select/quiz-select.component'
import ShopPage from './pages/shop/shop-page.component'
import FaqPage from './pages/faq/faq-page.component'
import ContactPage from './pages/contact/contact.component'
import AccountPage from './pages/account/account-page.component'
import Spinner from './components/spinner/spinner.component'
import MenuModal from './components/menu-modal/menu-modal.component'



const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={HomePage} />
            <Route path="/" component={MenuModal} />
            <Route path="/quiz" component={QuizPage} />
            <Route path="/quizselect" component={QuizSelect} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/account" component={AccountPage} />
            <Route exact path="/faqs" component={FaqPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/shop" component={ShopPage} />
          </Suspense>
        </Switch>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
};

export default App;
