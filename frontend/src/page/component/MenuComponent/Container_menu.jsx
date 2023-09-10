import { useState } from 'react';
import Modal from './Modal';
const Container_menu = ({ product }) => {
  const [boolean, setBoolean] = useState(false);
  const [productNama, setProductNama] = useState('');

  return (
    <>
      {boolean == true && <Modal klik={(bool) => setBoolean(bool)} idProduct={productNama} />}
      <div className="container-fluid mt-5 p-3">
        <div className="container mt-5">
          <h1 className="text-center mt-5 mb-3" style={{ fontFamily: "'Quicksand', sans-serif" }}>
            Menu
          </h1>
          <div className="row d-flex justify-content-center">
            <div className="col-md-4">
              <p className="text-center">Klik pesan supaya anda bisa langsung ambil minuman anda tanpa harus antri</p>
            </div>
          </div>
          <div className="row d-flex justify-content-md-between justify-content-around">
            {product.map((product) => {
              return (
                <div className="btn btn-light border-light col-md-3 col-5 ms-md-5 mb-5 shadow ">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={product.gambar} alt="" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-7 d-flex align-items-around flex-column">
                      <div className="row">
                        <p className="text-center fs-6" style={{ fontFamily: 'quicksand' }}>
                          {product.nama}
                        </p>
                      </div>
                      <div className="row">
                        <button
                          className="btn btn-dark btn-fluid me-md-2 "
                          onClick={() => {
                            setBoolean(!boolean);
                            setProductNama(product.nama);
                          }}
                        >
                          Pesan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Container_menu;
