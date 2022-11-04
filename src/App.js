import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Error404, ErrorBoundary, HomeNav } from './components';
import { GithubList, GithubPage, HomePage, Services } from './pages';
// import {getRepos} from './pages/GithubList'

function App() {
  // const [id, setId] = useState(null);

  return (
    <div className="App">
       <Router>
        <HomeNav />
        <Routes>
          <Route path='/' element={<HomePage />} /> 
          <Route exact path='/repositories' element={<GithubList />} /> 
            <Route exact path='repositories/:repoId' element={<GithubPage />} />
          <Route path='/services' element={<ErrorBoundary><Services /></ErrorBoundary>} />
          
          <Route path='/*' element={<Error404 />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
