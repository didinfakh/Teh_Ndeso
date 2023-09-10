const ContainerKritik = () => {
  return (
    <>
      <div className="container-fluid bg-dark pt-5 " style={{ height: '100vh', paddingBottom: '0px' }}>
        <div className="container">
          <h1 className="text-center text-white" style={{ fontFamily: 'quicksand' }}>
            Kritik
          </h1>
          <div className="row d-flex justify-content-center">
            <div className="col-md-7">
              <form action="https://formspree.io/f/xleyeeaq" method="POST">
                <div className="mb-5">
                  <label className="form-label text-white">Email address</label>
                  <input type="text" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                  <label className="form-label text-white">Kritik</label>
                  <input type="text" className="form-control" name="kritik" />
                </div>
                <button type="submit" className="btn btn-light">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContainerKritik;
