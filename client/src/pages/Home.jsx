import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to My Portfolio!</h1>
      </div>
      <div className="card-body m-5">
        <h2>About Me</h2>
        <p>
          Hello, I'm [Your Name]. I specialize in [Your Specialization].
        </p>
        <h2>Skills</h2>
        <ul className="square">
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          {/* Add more skills here */}
        </ul>
      </div>
      <div className="card-footer text-center m-3">
        <h2>Interested in working with me?</h2>
        <Link to="/contactme">
          <button className="btn btn-lg btn-danger">Contact Me!</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
