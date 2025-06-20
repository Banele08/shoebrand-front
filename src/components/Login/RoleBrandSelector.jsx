const [role, setRole] = useState('brandUser');
const [selectedBrand, setSelectedBrand] = useState('');

return (
  <div>
    <select onChange={(e) => setRole(e.target.value)}>
      <option value="brandUser">Brand User</option>
      <option value="superAdmin">Super Admin</option>
    </select>

    {role === 'brandUser' && (
      <select onChange={(e) => setSelectedBrand(e.target.value)}>
        <option value="">Select Brand</option>
        <option value="nike">Nike</option>
        <option value="adidas">Adidas</option>
        <option value="puma">Puma</option>
      </select>
    )}
  </div>
);