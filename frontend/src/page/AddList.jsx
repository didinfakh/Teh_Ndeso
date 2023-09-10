import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddList = () => {
  const [nama, setNama] = useState('');
  const [gambar, setGambar] = useState('');
  const [harga, setHarga] = useState('');
  const Navigate = useNavigate();
  const addData = async (e) => {
    e.preventDefault();
    const result = { nama, gambar, harga };
    await fetch('http://localhost:4000/menu', {
      method: 'POST',
      body: JSON.stringify(result),
      headers: {
        'content-type': 'application/json',
      },
    });
    Navigate('/List');
  };

  return (
    <div className="container">
      <h1 className="text-center">Tambahkan Menu</h1>
      <form onSubmit={addData}>
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input
            type="text"
            value={nama}
            name="prodduct_name"
            className="form-control"
            onChange={(e) => {
              setNama(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Gambar</label>
          <input
            type="text"
            className="form-control"
            name="gambar"
            value={gambar}
            onChange={(e) => {
              setGambar(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Harga</label>
          <input
            type="text"
            className="form-control"
            name="harga"
            value={harga}
            onChange={(e) => {
              setHarga(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default AddList;
