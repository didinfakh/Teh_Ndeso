import gambar1 from '../../../image/gambar1.png';
import daun from '../../../image/daun.png';
const Container1 = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="">
          <div className="row">
            <div className="col-12 d-flex justify-content-center align-items-md-end align-items-center position-absolute containerHeight">
              <div className="row d-flex justify-content-center align-items-md-end align-items-center">
                <div className="col-2 mt-5">
                  <img src={gambar1} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-md-end align-items-center containerHeight">
            <div className="col-12 d-flex align-items-md-end align-items-center justify-content-center mt-5">
              <h1 className="m-0 p-0  bigFont">LEMON</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-center align-items-start containerBottom">
            <div className="col-12 ">
              <div className="row d-flex justify-content-center align-items-start">
                <div className="col-md-4">
                  <h1 className="text-center" style={{ fontFamily: "'Quicksand', sans-serif" }}>
                    Lemon Tea
                  </h1>
                  <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ea tenetur tempore. Quam tempore, quaerat nobis laudantium minus consequuntur saepe.</p>
                  <div className="row">
                    <div className="col-12 d-flex justify-content-center">
                      <a href="#Menu" className="btn btn-dark px-5 text-decoration-none" style={{ borderRadius: '100px' }}>
                        Our Menu
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Container1;
