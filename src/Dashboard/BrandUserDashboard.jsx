const { brand } = useParams();
const [shoes, setShoes] = useState([]);

useEffect(() => {
  axios.get(`/api/shoes?brand=${brand}`)
    .then(res => setShoes(res.data));
}, [brand]);