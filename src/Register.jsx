import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function Registration() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegistration = () => {
    // Create a new user account with custom User ID and Password
    firebase
      .auth()
      .createUserWithEmailAndPassword(`${userId}@example.com`, password)
      .then((userCredential) => {
        // User registered successfully
        const user = userCredential.user;
        console.log('User registered:', user);
      })
      .catch((error) => {
        // Handle registration error
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <h2>Registration</h2>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Registration;
