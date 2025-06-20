const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post('/auth/login', {
      email,
      password,
      role,
      brand: role === 'brandUser' ? selectedBrand : null,
    });
    localStorage.setItem('token', response.data.token);
    // Redirect based on role
    if (role === 'superAdmin') navigate('/admin-dashboard');
    else navigate(`/brand-dashboard/${selectedBrand}`);
  } catch (error) {
    alert('Login failed!');
  }
};