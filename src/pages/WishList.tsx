import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import WishItem from "../components/WishItem";

import Row from "react-bootstrap/Row";

import wishListImg from "../Assets/Wavy_Gen-04_Single-06.jpg";

import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { Link } from "react-router-dom";

export default function WishList() {
  const wishList = useSelector((state: RootState) => state.products.wishes);
  if (wishList.length === 0) {
    return (
      <Stack className="align-items-center">
        <p className="h5">
          The WishList is empty, click on the heart in the products page to add
          items to the WishList
        </p>
        <div className="w-50">
          <img className="object-fit-cover w-50" src={wishListImg} alt="wishList"/>
        </div>
        <Link to="/products" className="w-25 my-5">
        <style type="text/css">
            {`
              .btn-flat {
                background-color: purple;
                color: white;
              }
            `}
          </style>
          <Button variant="flat" size="lg" className="w-75">
            Back
          </Button>
        </Link>
      </Stack>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Row xs={1} md={1} className="g-4 w-75">
          {wishList?.map((wish) => {
            return <WishItem wish={wish} key={wish.id} />;
          })}
        </Row>
      </div>
    );
  }
}
