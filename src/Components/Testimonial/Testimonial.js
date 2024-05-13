import React from "react";
// import Testimonial from '..//../assets/img/testimonialpic.jpg.webp'
import {
  MDBCarousel,
//   MDBCarouselInner,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  
} from "mdb-react-ui-kit";
// import { CarouselInner } from "mdb-react-ui-kit";

 function Testimonial() {
  return (
    <MDBContainer className="my-5">
      <MDBCarousel showControls dark>
        {/* <MDBContainer> */}
          <MDBCarouselItem className="active text-center">
            {/* <img
              src={Testimonial}
              alt="avatar"
              className="rounded-circle shadow-1-strong mb-4"
              style={{ width: "150px" }}
            /> */}
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <h5 className="mb-3">Maria Kate</h5>
                <p>Photographer</p>
                <p className="text-muted">
                  <MDBIcon fas icon="quote-left" className="pe-2" />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
              </MDBCol>
            </MDBRow>
            <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon fas icon="star" size="sm" />
              </li>
              <li>
                <MDBIcon far icon="star" size="sm" />
              </li>
            </ul>
          </MDBCarouselItem>
        {/* </MDBContainer> */}
      </MDBCarousel>
    </MDBContainer>
  );
}
export default Testimonial;