import React, { useState } from 'react';

interface LoginProps {
  onLogin: () => void;  // Callback to change login state
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Make API call to authenticate the user
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        // Store the token in localStorage
        localStorage.setItem('authToken', data.token);
        onLogin();  // Trigger the onLogin callback to update state
      } else {
        const errorData = await response.json();
        setError(errorData.msg || 'Login failed');
      }
    } catch (err) {
      setError('An error occurred');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Login</button>
      </form>
      <p className="text-center mt-4">Don't have an account? <a href="/register" className="text-blue-500">Register</a></p>
    </div>
  );
};

export default Login;
