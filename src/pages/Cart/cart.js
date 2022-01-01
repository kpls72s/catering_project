import React ,{useState}from "react";
import { useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom'
import {changeCount,changeData, cleanState} from "../../action";
import { v4 as uuidv4 } from 'uuid';
import { Modal, Container } from "react-bootstrap";
import { Col, Row, Image } from "react-bootstrap";
import "./cart.css";
function Cart() {

    const [orderShow, setOrderShow] = useState(false);
    const [userlogin,setUserLogin] = useState(false);
    const dispatch = useDispatch();
    const data = useSelector(state => state);
    const user = data.user;
    const orders  = {...data};
    delete orders.total;
    let allOrders = [];
    let total = [];




    const deleteHandle = (e) => {
      let resturantID = parseInt(e.target.dataset.restid);
      let foodid = e.target.dataset.foodid;
      dispatch(changeCount(resturantID,foodid))
    }


    const changeCountHandler = (e) => {
      let resturantID = parseInt(e.target.dataset.restid);
      let foodid = parseInt(e.target.dataset.foodid);
      let value = parseInt(e.target.value);
      if(value > 0){
        dispatch(changeData(resturantID,foodid,value));
      }
    }

    const submitHandler = async (e) => {
      if(user){
       await setOrderShow(true);
       await dispatch(cleanState());
      }else{
        setUserLogin(true);
      }
    }


    for(let item in orders){
        let itemLength = orders[item].length;
        for(let i=0 ; i < itemLength ; i++){
            let order = orders[item][i];
            for(let row in order ){
              total.push(parseInt(order[row].price) * parseInt(order[row].count));
              allOrders.push(<Row key={uuidv4()} className="align-items-center my-3 border-bottom py-2">
                <Col xs="12" md="6">
                  <div className="cart-img-box">
                    <Image width={75} roundedCircle height={75} src={order[row].image} />
                    <div className="px-3"><p>{order[row].name}</p>قارچ ، پنیر پیتزا ،فلفل دلمه ،گوجه فرنگی ،فیله مرغ ، ...</div>
                  </div>
                </Col>
                <Col xs>
                  <div className="cart-body-price-box my-4 my-md-0">
                    <p>{order[row].price}</p>
                    <p>
                      <input type="number" min={1} onChange={changeCountHandler}  data-restid = {item} data-foodid={row} value={order[row].count} />
                    </p>
                    <div className="delete-box mr-auto">
                    <button onClick={deleteHandle} type="button" data-restid = {item} data-foodid={row} className="delete-icon">
                      حذف
                    {/* × */}
                    </button>
                  <span className="d-md-block cart-total-price">{parseInt(order[row].price) * parseInt(order[row].count)} تومان</span>
                    </div>
                  </div>
                </Col>
              </Row>)
            }
        }
    }

  return (
    <main>
      <Container>
        <div className="cart">
          <div className="cart-header">
            <Row>
              <Col xs="12" md="6">
                <h2>سبد خرید شما</h2>
              </Col>
              <Col xs>
                <div className="price-box d-none d-md-flex">
                  <p>قیمت</p>
                  <p>تعداد</p>            
                  <div className="d-md-block  cart-total-price px-4">جمع</div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="cart-body">
            {allOrders}
            <div className="totalpay py-2 d-flex justify-content-between my-4 border">
            <p>جمع مبلغ پرداختی</p>
            <p>{total.reduce((prev,nex) => prev + nex,0)} تومان</p>
            </div>
          </div>
          <Modal
        size="sm"
        show={orderShow}
        onHide={() => setOrderShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            سفارش شما ثبت شد
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>ممنون از خرید شما</Modal.Body>
      </Modal>
      <Modal
        size="sm"
        show={userlogin}
        onHide={() => setUserLogin(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            <Link to="/register">ثبت  اطلاعات</Link>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>ابتدا باید اطلاعات وآدرس خود را وارد کنید</Modal.Body>
      </Modal>
          <button onClick={submitHandler} className="bg-orange text-white p-3 rounded">ثبت سفارش</button>
        </div>
      </Container>
    </main>
  );
}

export default React.memo(Cart);
