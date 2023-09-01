import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Log in the user with custom User ID and Password
    firebase
      .auth()
      .signInWithEmailAndPassword(`${userId}@example.com`, password)
      .then((userCredential) => {
        // User logged in successfully
        const user = userCredential.user;
        console.log('User logged in:', user);
      })
      .catch((error) => {
        // Handle login error
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;
