import React,  { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth'
import './App.scss'
import 'semantic-ui-css/semantic.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Spinner from './components/spinner/spinner.component'
import Header from './components/header/header.component'
import Login from './pages/login/login'
import Register from './pages/register/register'
import HomePage from './pages/homepage/homepage.component'
import QuizPage from './pages/quiz-page/quiz-page.component'
import AccountPage from './pages/account/account-page.component'
import HomeScreen from './components/homescreen/homescreen.component'
import MidSection from './components/mid-section/mid-section.component'

const App = () => {
  
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
        
        <Switch>
          <Suspense fallback={<Spinner />}>
            <Route exact path="/" component={Header} />
            <Route path="/quiz" component={QuizPage} />
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/" component={MidSection} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/account" component={AccountPage} />
          </Suspense>
        </Switch>
        </BrowserRouter>
        </AuthProvider>
    </div>
  );
};

export default App;
