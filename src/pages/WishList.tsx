import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

import WishItem from "../components/WishItem";

import Row from "react-bootstrap/Row";

export default function WishList() {
  const wishList = useSelector((state: RootState) => state.products.wishes);
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
