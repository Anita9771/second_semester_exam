import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Error404, HomeNav } from './components';
import { GithubList, HomePage } from './pages';

function App() {

  return (
    <div className="App">
       <Router>
        <HomeNav />
        <Routes>
          <Route path='/' element={<HomePage />} /> 
          <Route path='/repositories' element={<GithubList />} /> 
          <Route path='/*' element={<Error404 />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
