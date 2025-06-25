import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authService';

function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { token, user } = await login(formData);
      localStorage.setItem('token', token);
      // Redirect based on role
      if (user.role === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate(`/brand/${user.brand}`);
      }
    } catch (err) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form inputs */}
      {error && <div className="error">{error}</div>}
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginPage;