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
              <a
                href="https://www.google.com/maps/place/All+Time+Ngawi+Dr.Soetomo/@-7.3985958,111.4456944,17z/data=!3m1!4b1!4m6!3m5!1s0x2e79e771403a43e9:0xa599dae831662c67!8m2!3d-7.3985958!4d111.4456944!16s%2Fg%2F11tt88gnvn?entry=ttu"
                style={{ textDecoration: 'none' }}
              >
                <div className="row">
                  <div className="col-3 p-0">
                    <img src={gambar_outlet1} alt="" className="gambar_kecil_outlet" />
                  </div>
                  <div className="col-9 d-flex flex-column justify-content-around">
                    <h3 className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      outlet 1
                    </h3>
                    <p className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      Jl. Letjend Sutoyo, Kerek, Margomulyo, Kec. Ngawi
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-9 col-md-7 rounded card_outlet mt-4">
              <a href="https://goo.gl/maps/2LLzs5vVH6hmCFhQ7" style={{ textDecoration: 'none' }}>
                <div className="row">
                  <div className="col-3 p-0">
                    <img src={gambar_outlet1} alt="" className="gambar_kecil_outlet" />
                  </div>
                  <div className="col-9 d-flex flex-column justify-content-around">
                    <h3 className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      outlet 2
                    </h3>
                    <p className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      Jl. Dr. Soetomo, Kluncing, Ketanggi, Kec. Ngawi
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-9 col-md-7 rounded card_outlet mt-4">
              <a href="https://goo.gl/maps/pZ9mTDe8D9NZRdvb7" style={{ textDecoration: 'none' }}>
                <div className="row">
                  <div className="col-3 p-0">
                    <img src={gambar_outlet1} alt="" className="gambar_kecil_outlet" />
                  </div>
                  <div className="col-9 d-flex flex-column justify-content-around">
                    <h3 className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      outlet 3
                    </h3>
                    <p className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      Jl. Raya Paron No.40, Kenaiban, Gelung, Kec. Paron
                    </p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-9 col-md-7 rounded card_outlet mt-4">
              <a href="https://goo.gl/maps/683Et8XaEdgEoW1A9" style={{ textDecoration: 'none' }}>
                <div className="row">
                  <div className="col-3 p-0">
                    <img src={gambar_outlet1} alt="" className="gambar_kecil_outlet" />
                  </div>
                  <div className="col-9 d-flex flex-column justify-content-around">
                    <h3 className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      outlet 4
                    </h3>
                    <p className="text-center text-white" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                      Jl. Majapahit, Genggong, Jogorogo, Kec. Jogorogo
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
