import React, {useEffect } from "react";
import { NavLink } from "react-router-dom";
import { categories } from "../../restaurants";
import { MAX_ITEMS } from "../../Utitlitys";
import usePagination from "../../component/pagination/usePagination";
import { Row, Col, Container, Nav, Card, Pagination } from "react-bootstrap";
import "./collection.css";

function CollectionsByCatID(props) {
  let lists = props.lists;

  const {currentPage,currentData,maxPage,Gopage,setCurrentpage} = usePagination(lists,MAX_ITEMS);

  const handlePageClick = (e) => {
     Gopage(e.target.dataset.id);
  };

  function Items(data) {
    return data.map((item, index) => {
      return (
        <Col key={index} md={4} sm={6}>
          <Card className="m-3" role="presentation">
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
                to={"../collection/" + item.ID}
              >
                لیست غذا ها
              </Nav.Link>
            </Card.Body>
          </Card>
        </Col>
      );
    });
  }

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
  }, [lists,setCurrentpage]);


  return (
    <>
      <div className="collection-banner"></div>
      <Container>
        <h4 className="collections-h">{categories[props.title]}</h4>
        <div className="items-container">
          <Row>{Items(currentData(lists))}</Row>
        </div>
        <Row>
          <Pagination className="justify-content-center my-4">
            <PaginationItems click={handlePageClick} pageCount={lists.length} />
          </Pagination>
        </Row>
      </Container>
    </>
  );
}

export default React.memo(CollectionsByCatID);
