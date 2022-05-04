import React, { useState, useContext } from 'react';
import { creatorContext } from '../../context/creatorContext';

const SignUpForm = () => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const { createPage } = useContext(creatorContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    setUsername(event.target.value);
  };

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!username) {
      setError('Please provide a username');
      return;
    }

    createPage(username);
  };

  return (
    <form className="pt-4 sm:pt-8" onSubmit={handleSubmit}>
      <div className="mb-6 sm:mb-10">
        <span className="py-3 px-6 sm:py-6 sm:px-12 shadow-[0px_4px_20px_rgba(0,0,0,0.2)] rounded-full font-semibold ">
          <span>tossmeacoin.com/</span>{' '}
          <input
            className="focus:outline-none sm:w-1/5"
            type="text"
            minLength={3}
            maxLength={18}
            placeholder="Your Username"
            value={username}
            onChange={handleChange}
          />{' '}
        </span>
      </div>
      {error && <p>{error}</p>}
      <input
        className="text-md sm:text-xl md:text-2xl bg-lightBlue hover:bg-darkBlue transition text-white font-bold py-2 px-4 rounded-full"
        type="submit"
        value="Start My Page"
      />
    </form>
  );
};

export default SignUpForm;
