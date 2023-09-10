import gambar_outlet1 from '../../../image/gambar_outlet1.jpeg';

const ContainerOutlet = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 bg-light" id="containerOtletKiri"></div>
        <div className="col-md-6 bg-dark pb-5" id="containerOtletKanan">
          <div className="row mt-5">
            <div className="col mt-3">
              <h1 className="text-center text-white" id="Title_outlet">
                Outlet
              </h1>
            </div>
          </div>
          <div className="row d-flex justify-content-center mt-5">
            <div className="col-9 col-md-7 rounded card_outlet ">
              <a href="https://goo.gl/maps/FmQ2pXq56pVwPuh6A" style={{ textDecoration: 'none' }}>
                <div className="row">
                  <div className="col-3 p-0">
                    <img src={gambar_outlet1} alt="" className="gambar_kecil_outlet" />
                  </div>
                  <div className="col-9 d-flex flex-column justify-content-around">
                    <h3 className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      outlet 1
                    </h3>
                    <p className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      Jl. Trunojoyo, Mekah, Madinah, Kec. Ngawi
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-9 col-md-7 rounded card_outlet mt-4">
              <a href="https://goo.gl/maps/FmQ2pXq56pVwPuh6A" style={{ textDecoration: 'none' }}>
                <div className="row">
                  <div className="col-3 p-0">
                    <img src={gambar_outlet1} alt="" className="gambar_kecil_outlet" />
                  </div>
                  <div className="col-9 d-flex flex-column justify-content-around">
                    <h3 className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      outlet 2
                    </h3>
                    <p className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      Jl. Albert, london, doengoes, Kec. Ngawi
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-9 col-md-7 rounded card_outlet mt-4">
              <a href="https://goo.gl/maps/FmQ2pXq56pVwPuh6A" style={{ textDecoration: 'none' }}>
                <div className="row">
                  <div className="col-3 p-0">
                    <img src={gambar_outlet1} alt="" className="gambar_kecil_outlet" />
                  </div>
                  <div className="col-9 d-flex flex-column justify-content-around">
                    <h3 className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      outlet 3
                    </h3>
                    <p className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      Jl. Pancarana, Geneng, Geneng, Kec. Geneng
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-9 col-md-7 rounded card_outlet mt-4">
              <a href="https://goo.gl/maps/FmQ2pXq56pVwPuh6A" style={{ textDecoration: 'none' }}>
                <div className="row">
                  <div className="col-3 p-0">
                    <img src={gambar_outlet1} alt="" className="gambar_kecil_outlet" />
                  </div>
                  <div className="col-9 d-flex flex-column justify-content-around">
                    <h3 className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      outlet 4
                    </h3>
                    <p className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      Jl. Majalengka, Tokyo, Hirosima, Kec. Jogorogo
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContainerOutlet;
