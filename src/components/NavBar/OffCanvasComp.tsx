import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Offcanvas from "react-bootstrap/Offcanvas";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import  ListGroup from "react-bootstrap/ListGroup";
import  Stack  from "react-bootstrap/Stack";
import  Image  from "react-bootstrap/Image";

type Prop = {
  show: boolean;
  handleClose: () => void;
  changeColorHandler: () => void ;
}

export default function OffcanavasComp({show, handleClose, changeColorHandler}:Prop) {
  const wishList = useSelector((state: RootState) => state.products.wishes);

  return (
    <Offcanvas show={show} onHide={handleClose} placement={"end"}>
      <Offcanvas.Header closeButton>
        <Container fluid>
          <Row>
            <Col>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                WishList
              </Offcanvas.Title>
            </Col>
            <Col>
              <Button onClick={changeColorHandler} variant="primary">
                Change Color
              </Button>
            </Col>
          </Row>
        </Container>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup>
          {wishList.map((item) => (
            <ListGroup.Item variant="info" className="my-1" key={item.id}>
              <Stack direction="horizontal">
                <div
                  className="w-25"
                  style={{ overflow: "hidden", marginRight: "1vw" }}
                >
                  <Image
                    roundedCircle
                    src={item.thumbnail}
                    style={{ objectFit: "cover" }}
                    className="w-100"
                  />
                </div>
                <div className="w-50">{item.title}</div>
                <div className="w-25">Price: {item.price} </div>
              </Stack>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
