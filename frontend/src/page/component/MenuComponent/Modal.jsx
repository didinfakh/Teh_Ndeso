import { useState } from 'react';
import '../../../main.css';
const Modal = ({ klik, idProduct }) => {
  const [boolean, setBoolean] = useState({ klik });
  return (
    <>
      <div className="d-fixed">
        <div className="container-fluid d-flex align-items-center" id="cardModal">
          <div className="container bg-dark rounded pb-3">
            <div className="row">
              <div className="col">
                <p className="text-center text-white fs-3">Anda akan memesan menu {idProduct} silahkan tuliskan nama anda dan isi catatan bila perlu</p>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-md-9">
                <form method="POST" action="https://formspree.io/f/xleyeeaq">
                  <div className="mb-3">
                    <label className="form-label text-white">Menu</label>
                    <input type="text" name="subject" value={idProduct} className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white">Nama</label>
                    <input type="text" name="name" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label text-white">Catatan</label>
                    <input type="text" name="message" className="form-control" />
                  </div>
                  <div className="container-fluid d-flex justify-content-center">
                    <button type="submit" className="btn btn-light ">
                      Pesan
                    </button>
                    <button
                      className="btn btn-light ms-3"
                      onClick={() => {
                        setBoolean(!boolean);
                        klik(boolean);
                      }}
                    >
                      Batal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
