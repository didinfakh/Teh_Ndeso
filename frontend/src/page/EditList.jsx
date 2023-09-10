import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditList = () => {
  const Navigate = useNavigate();
  const [nama, setNama] = useState('');
  const [gambar, setGambar] = useState('');
  const [harga, setHarga] = useState('');
  const { id } = useParams();
  const getProduct = async () => {
    const response = await fetch(`http://localhost:4000/menu/${id}`);
    const data = await response.json();
    setNama(data.nama);
    setGambar(data.gambar);
    setHarga(data.harga);
    console.log(data.nama);
  };
  useEffect(() => {
    getProduct();
  }, []);
  const updateData = async (e) => {
    e.preventDefault();
    const result = { nama, gambar, harga };
    await fetch(`http://localhost:4000/menu/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(result),
      headers: {
        'content-type': 'application/json',
      },
    });
    Navigate('/List');
  };
  return (
    <>
      <div className="container">
        <h1 className="text-center">Edit Menu</h1>
        <form onSubmit={updateData}>
          <div className="mb-3">
            <label className="form-label">Nama</label>
            <input
              type="text"
              value={nama}
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
    </>
  );
};
export default EditList;
