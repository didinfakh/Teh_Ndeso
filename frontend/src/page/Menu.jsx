import { useEffect, useState } from 'react';
import Container_menu from './component/MenuComponent/Container_menu';
import Modal from './component/MenuComponent/Modal';

const Menu = () => {
  const [product, setProduct] = useState([]);
  const [coba, setCoba] = useState(null);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = async () => {
    const response = await fetch('http://localhost:4000/menu');
    const data = await response.json();
    console.log(data);
    setProduct(data);
  };

  const getBoolean = (data) => {
    data == true ? setCoba(<Modal klik={getBoolean} idProduct={idProduct} />) : setCoba();
  };

  return (
    <div id="#Menu">
      <div>{coba}</div>
      <Container_menu product={product} />
    </div>
  );
};
export default Menu;
