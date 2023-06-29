import { TextField } from '@mui/material';
import ProductList from '../../components/productList'
import { ReactElement, useState } from "react";


export default function Home(): ReactElement {
  const [query, setQuery] = useState('');
  const handleSearch = (e: any) => {
    setQuery(e.target.value)
  }
  return (
    <div>
      <TextField sx={{ marginTop: 3 }} value={query} onChange={handleSearch} fullWidth label="Search product name ..." variant="outlined" />
      <ProductList query={query} />
    </div>
  )
}
