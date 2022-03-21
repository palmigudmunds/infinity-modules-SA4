import React, { useState, useEffect, useLayoutEffect } from "react";

import Layout from "./components/Layout";
import Modal from './components/Modal';
import useModal from './components/useModal';
import Carousel from "./components/Carousel";
import Row from "./components/Row";
import Col from "./components/Col";
import CartoonNetworkSpinner from "./components/CartoonNetworkSpinner";
import DatePicker from "./components/DatePicker";

import style from './components/Layout/layout.module.css'


function App() {
  const {isOpen, toggle} = useModal();
  const [date, setDate] = useState('');

  return (
    <div>
      <Layout>
        <h1>Infinity Modules</h1>
        <h2>1. Modal</h2>
        <button className={style["button-default"]} onClick={toggle}>Show Modal</button>
        <Modal
          isOpen={isOpen}
          onClose={toggle}>
          <Modal.Title>My Modal Title</Modal.Title>
          <Modal.Body>My Modal Body</Modal.Body>
          <Modal.Body>My Modal Body</Modal.Body>
          <Modal.Body>My Modal Body</Modal.Body>
          <Modal.Footer>My Modal Footer</Modal.Footer>
        </Modal>
        <h2>2. Carousel</h2>
        <Carousel
          images={[
            'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2NzA3MjE1MzQyNzczNTQw/lebron-james-photo-by-streeter-lecka_getty-images.jpg',
            'https://www.sandfmeatshop.com/wp-content/uploads/2021/10/4488.jpg',
            'https://hoopshype.com/wp-content/uploads/sites/92/2021/11/i_f3_20_84_michael-jordan.png?w=1000&h=600&crop=1'
          ]}
          size="medium" />
        <h2>3, 4. Row and Col</h2>
        <Row>
          <Col size={4}>1</Col>
          <Col size={4}>2</Col>
          <Col size={4}>3</Col>
          <Col size={7}>4</Col>
          <Col size={3}>5</Col>
          <Col size={2}>6</Col>
        </Row>
        <h2>5. Date Picker</h2>
        <DatePicker
          onDatePick={newdate => setDate(newdate)}
          locale="en-EN"/>
        <h2>6. Cartoon Network Spinner</h2>
        <CartoonNetworkSpinner 
          interval={3}/>
      </Layout>
    </div>
  );
}

export default App;
