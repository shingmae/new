import React from 'react';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Quiz from '../Pages/Quiz';
import MyVerticallyCenteredModal from './Modal';

export default function Buttons() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="container">
      <div className="row mt-5 mb-5 d-flex justify-content-center">
        <div className="col-12 col-lg-3 d-flex justify-content-center">
          <Button
            className=" buttons text-center"
            onClick={() => setModalShow(true)}
          >
            Take a quiz
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
        <div className="col-12 col-lg-3 text-center">or</div>
        <div className="col-12 col-lg-3 d-flex justify-content-center">
          <a href="#continue">
            <Button id="continue" className="buttons">
              Continue
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
