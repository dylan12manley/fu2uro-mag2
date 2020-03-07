import React from 'react';
import { Link } from 'react-router-dom';

function Error404(props){
  const styledErrors = {
    backgroundColor: 'orange',
    padding: '50px'
  }
  return (
    <div style={styledErrors}>
      <h2>The page you are looking for does not exist!</h2>
      <h3>Would you like to return <Link to="/home">home</Link> instead?</h3>
    </div>
  );
}

export default Error404;
