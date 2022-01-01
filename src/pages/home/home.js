import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch} from "react-redux";
import { setData } from "../../action";
import { Nav, Card, Col, Row, Container } from "react-bootstrap";
import { restaurants } from "../../restaurants";
import "./home.css";

let items = [...restaurants];
items = items.splice(5, 3); //choice 4 items from restaurants

function Home() {
  const dispatch = useDispatch();
  const submitOrder = (item, menu) => {
    let order = { itemID: item, ...menu };
    dispatch(setData(order));
  };

  // ----------- favorit restaurants -----------------
  let favRestaurant = items.map((item, index) => {
    return (
      <Col key={index} md={4} sm={6}>
        <Card className="m-3 " role="presentation">
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <address className="pt-4 pull-right">
              {" "}
              نشانی :{item.address.details}
            </address>
            <Nav.Link
              className="bg-orange text-white rounded"
              as={NavLink}
              to={`collection/${item.ID}`}
            >
              لیست غذا ها
            </Nav.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  // ------------ favorit food items ----------------
  let favFoods = items.map((item, index) => {
    return (
      <Col key={index} md={4} sm={6}>
        <Card className="m-3" role="presentation">
          <Card.Img variant="top" src={item.menu[0].image} />
          <Card.Body>
            <Card.Title>{item.menu[0].name}</Card.Title>
            <p className="pt-4"> مجموعه :{item.title}</p>
            <p className="">
              قیمت :‌ <small>{item.menu[0].price}</small> تومان
            </p>
            <Nav.Link
              onClick={() => submitOrder(item.ID, item.menu[0])}
              className="bg-orange text-white rounded"
            >
              افزودن به سبد
            </Nav.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <main>
      <div className="w-100 mb-5">
        <div className="mainBanner"></div>
      </div>
      <Container>
        <Row className="mx-0">
          <h3 className="text-orange my-4 mainTitles">محبوب ترین ها</h3>
          {favRestaurant}
        </Row>
        <Row className="mx-0">
          <h3 className="text-orange my-4 mainTitles">محبوب ترین سفارشات</h3>
          {favFoods}
        </Row>
      </Container>
    </main>
  );
}

export default React.memo(Home);
