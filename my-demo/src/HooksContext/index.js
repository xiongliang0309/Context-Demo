import React from 'react';
import HomePage from './HomePage'
import { UserProvider } from './UserContext';


const TestContext = () => {

  const user = { title: 'I am HooksContext' };

  return (
    <UserProvider value={user}>
      <HomePage />
    </UserProvider>
  );
};

export default TestContext;