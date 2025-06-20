useEffect(() => {
  axios.get('/api/shoes')
    .then(res => setShoes(res.data));
}, []);