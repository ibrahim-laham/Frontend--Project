import CarouselComp from "../components/CarouselComp";
import Button from "react-bootstrap/Button";

import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "90vh",
        marginBottom: "5vh"
      }}
    >
      <CarouselComp />
      <div className="my-5">
        <Link to="/products" >
        <Button variant="warning" size="lg">
          Take a look on our products
        </Button></Link>
      </div>
    </div>
  );
}
