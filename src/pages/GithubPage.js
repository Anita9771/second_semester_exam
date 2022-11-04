import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { Error404 } from "../components";
// import { Error404 } from '../components';
// import { getRepos } from './GithubList'

const GithubPage = () => {
  // const id = props.id;
  const [reposId, setReposId] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reposDesc, setReposDesc] = useState(null);
  const params = useParams();
  const { repoId } = params;
  // console.log(params)
  // const [reposit, setReposit] = useState(null);

  // https://api.github.com/repositories/20633049

  useEffect(() => {
    const fetchRepo = async () => {
      setLoading(true);

      const res = await fetch(`https://api.github.com/repositories/${repoId}`);
      const data = await res.json();
      setReposId(data);

      setLoading(false);
    };

    fetchRepo();
  }, []);

  // console.log(id)
  return (
    <div className="github-page">
      {loading ? (
        <>
          <PulseLoader
            loading={loading}
            size={100}
            color="#fff"
            className="loader"
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </>
      ) : (
        
          reposId.name === reposDesc ? <Error404 /> : <h1 style={{ color: "white" }}>{reposId.name}</h1>
        
      )}

      {reposId.description === reposDesc ? (
        <h4 style={{ color: "white" }}>
          There is no description for this repository
        </h4>
      ) : (
        <h4 style={{ color: "white" }}>{reposId.description}</h4>
      )}
      <i>{reposId.html_url}</i>
      <Link className="link" to="/repositories">
        Go Back
      </Link>
    </div>
  );
};

export default GithubPage;

// {
//     reposit ? <div className="output">
//         <div>
//           {/* <li>{repo.name}</li>
//           <p>{repo.description}</p> */}
//         </div>
//     </div> : <Error404 />
//    }
