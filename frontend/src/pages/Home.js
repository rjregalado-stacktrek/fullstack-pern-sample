import React from 'react';
import "../styles/InputProduct.css"

const Home = () => {
  return (
    <React.Fragment>
      <section>
        <div className="mt-5 px-10 text-bold">
          <h1 className='text-4xl'>Welcome to the Basketball Tournament!</h1>
          <p className='mt-5 text-green-600'>
            Join us for an exciting basketball tournament where teams from all over the world will compete
            to win the championship.
          </p>
          <p className='mt-5 text-red-400'>
            Check out the <strong>Teams</strong> page to see the list of participating teams and their logos.
          </p>
          <p className='mt-5 text-ellipsis'>
            Don't miss any action! View the <strong>Matches</strong> page to see the schedule of all the
            exciting matches.
          </p>
        </div>
      </section>
    </React.Fragment>
    
  );
};

export default Home;

