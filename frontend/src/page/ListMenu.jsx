import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ListMenu = () => {
  const Navigate = useNavigate();
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProductList();
  }, []);
  const getProductList = async () => {
    const response = await fetch('http://localhost:4000/menu');
    const data = await response.json();
    setProductList(data);
  };

  const deleteData = async (id) => {
    await fetch(`http://localhost:4000/menu/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    });
    getProductList();
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center">DAFTAR MENU</h1>
        <div className="row">
          <div className="col">
            <table className="table align-middle">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Id</th>
                  <th scope="col">Gambar</th>
                  <th scope="col">Nama</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {productList.map((product, index) => {
                  return (
                    <tr>
                      <th key={index} scope="row">
                        {index + 1}
                      </th>
                      <td>{product.id}</td>
                      <td>
                        <img src={product.gambar} alt="" style={{ width: '100px' }} />
                      </td>
                      <td>{product.nama}</td>
                      <td>{product.harga}</td>
                      <td>
                        <button
                          className="btn btn-success"
                          onClick={() => {
                            Navigate(`/Edit/${product.id}`);
                          }}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger ms-1"
                          onClick={() => {
                            deleteData(product.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="row">
              <div className="col">
                <button
                  className="btn btn-dark btn-fluid"
                  onClick={() => {
                    Navigate('/Add');
                  }}
                >
                  Tambahkan Menu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListMenu;
