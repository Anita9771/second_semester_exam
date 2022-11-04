import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'
export class ErrorBoundary extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       error: null,
    }
  }

  componentDidCatch(error, errorInfo){
    console.log({error, errorInfo});
  }

  static getDerivedStateFromError(error){
    return {error};
  }
  

  render() {
    if(this.state.error)
    return <div className='error-boundary'>Oops! Something went wrong!
    <Link className='link' to='/'>GO HOME</Link>
    </div>;

    return this.props.children;
  }
}

export default ErrorBoundary;