import React, {useEffect, useState} from 'react'
import { Link, useParams  } from 'react-router-dom';
// import { Error404 } from '../components';
// import { getRepos } from './GithubList'

const GithubPage = () => {
    // const id = props.id;
    const params = useParams();
    const {repoId} = params
    // console.log(params)
    // const [reposit, setReposit] = useState(null);

    // useEffect(() => {
    //     // let reposit = getRepos.find(repo.id === parseInt(id));

    //     if(reposit){
    //         setReposit(reposit)
    //     }
    // }, [])

    // console.log(id)
  return (
    <div className="github-page">
        <h1 style={{color: 'white'}}>{repoId.name}</h1>
       <Link to='/repositories'>Go Back</Link>
    </div>
  )
}

export default GithubPage



// {
//     reposit ? <div className="output">
//         <div>
//           {/* <li>{repo.name}</li>
//           <p>{repo.description}</p> */}
//         </div>
//     </div> : <Error404 />
//    }