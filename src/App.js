import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {
BrowserRouter as Router,
Route
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesList from './pages/ArticlesList';
import NavBar from './components/NavBar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      listOfSkills: ['Redux', 'PixiJS', 'JavaScript']
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <div id="page-body">
            <Route path="/" component={HomePage} exact/>
            <Route path="/about" component={AboutPage}/>
            <Route path="/articles-list" component={ArticlesList}/>
            <Route path="/article" component={ArticlePage}/>
          </div>
        </div>
      </Router>
      // <div className="App">
      //   <HomePage />
      //   <body className='primary'>
      //     {this.state.listOfSkills.map((skill) => <li>{`${skill}`}</li>)}
      //   </body>
      //   <body >
      //     <ol style ={style}>
      //     {this.state.listOfSkills.map((skill) => <li>{`${skill}`}</li>)}
      //     </ol>
      //   </body>
      // </div>
    )  

  } 
}

export default App;
