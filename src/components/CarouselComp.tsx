import Carousel from "react-bootstrap/Carousel";

import FirstSlide from "../Assets/portrait-handsome-smiling-model-sexy-stylish-man-dressed-summer-clothes-fashion-hipster-male-posing-near-yellow-wall-studio.jpg";
import SecondSlide from "../Assets/pretty-red-head-woman-yellow-dress-posing-yellow-summer-mood.jpg";
import ThirdSlide from "../Assets/dreamy-young-woman-sunglasses-looking-front.jpg";

export default function CarouselComp() {
  return (
    <div style={{ width: "60vw" }}>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={FirstSlide} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={SecondSlide} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={ThirdSlide} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
