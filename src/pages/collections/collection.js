import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setData } from "../../action";
import { getById } from "../../restaurants";
import { MAX_ITEMS } from "../../Utitlitys";
import usePagination from "../../component/pagination/usePagination";
import { Card, Row, Container, Col, Button,Pagination } from "react-bootstrap";
import "./collection.css";

function Collection() {
  const params = useParams();
  const restaurant = getById(params.ID);
  const menus = restaurant.menu;
  const dispatch = useDispatch();
  const {currentPage,currentData,maxPage,Gopage,setCurrentpage} = usePagination(menus,MAX_ITEMS);

  const handlePageClick = (e) => {
     Gopage(e.target.dataset.id);
  };
  
  function PaginationItems({ click }) {
    const paginations = [];
    for (let i = 1; i <= maxPage; i++) {
      paginations.push(
        <Pagination.Item data-id = {i} active={i === parseInt(currentPage)} onClick={click} key={i}>
          {i}
        </Pagination.Item>
      );
    }
    return paginations;
  }

  useEffect(() => {
    setCurrentpage(1);
  }, [setCurrentpage]);

  const submitOrder = (item, menu) => {
    let order = { itemID: item, ...menu };
    dispatch(setData(order));
  };
  const items =currentData().map((item, index) => {
    return (
      <Col key={index} sm={6} md={4}>
        <Card text="dark" className="m-3 rounded menu-card border-0 text-right ">
          <Card.Img variant="top" src={item.image} />
          <Card.Body className="menu-body">
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              <small>قیمت :&nbsp;&nbsp;{item.price}&nbsp;تومان</small>
              <br />
              <small>
                قارچ ، پنیر پیتزا ،فلفل دلمه ،گوجه فرنگی ،فیله مرغ ، ...
              </small>
            </Card.Text>
            <Button
              onClick={() => submitOrder(restaurant.ID, item)}
              className="bg-orange text-white rounded d-block mx-auto"
            >
              افزودن به سبد
            </Button>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <main>
      <div
        className="collection-image"
        style={{ backgroundImage: `url(${restaurant.image})` }}
      >
        <span></span>
      </div>
      <Container>
        <Row>
          <div className="restaurant-info">
            <h2>{restaurant.title}</h2>
            <p>آدرس : {restaurant.address.details}</p>
            <p>تلفن : {restaurant.tel}</p>
          </div>
        </Row>
        <div className="items-container">
          <Row>{items}</Row>
        </div>
        <Row>
          <Pagination className="justify-content-center my-4">
            <PaginationItems click={handlePageClick} pageCount={menus.length} />
          </Pagination>
        </Row>
      </Container>
    </main>
  );
}

export default React.memo(Collection)
