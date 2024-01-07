import React, { useEffect, useState } from 'react';
// import { category } from '../assets/data/data';
import Accordion from 'react-bootstrap/Accordion';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import { data } from 'autoprefixer';

function PageContent_2() {
  const [postsKpop, setPostKpop] = useState([]);
  const [postsTravel, setPostTravel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/postsKpop`);
      setPostKpop(result.data);
      const resultTravel = await axios(`/postsTravel`);
      setPostTravel(resultTravel.data);
    };
    fetchData();
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <a class="nav-link" onClick={handleShow}>
        Page Content
      </a>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <b>Page Content</b>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="1">
              <Accordion.Header>Trending</Accordion.Header>
              <Accordion.Body>
                {/* TRAVEL LIST STARTS HERE */}
                <Accordion defaultActiveKey="0" className="insideList">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Philippines</Accordion.Header>
                  </Accordion.Item>
                </Accordion>
                {/* TRAVEL LIST STOPS HERE */}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Entertainment</Accordion.Header>
              <Accordion.Body>
                {/* KPOP CONTENT */}
                <Accordion defaultActiveKey="0" className="insideList">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>KPOP</Accordion.Header>
                    <Accordion.Body>
                      <ul style={{ listStyleType: 'none' }}>
                        <li onClick={() => setShow(false)}>
                          {postsKpop.map((item) => (
                            <Link
                              key={item._id}
                              to={{
                                pathname: `/postsKpop/${item._id}`,
                              }}
                            >
                              <div>
                                <p>{item.title}</p>
                              </div>
                            </Link>
                          ))}
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* KPOP CONTENT STOPS HERE */}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Travel</Accordion.Header>
              <Accordion.Body>
                {/* TRAVEL LIST STARTS HERE */}
                <Accordion defaultActiveKey="0" className="insideList">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Philippines</Accordion.Header>
                    <Accordion.Body>
                      <ul style={{ listStyleType: 'none' }}>
                        <li onClick={() => setShow(false)}>
                          {postsTravel.map((item) => (
                            <Link
                              key={item._id}
                              to={{
                                pathname: `/postsTravel/${item._id}`,
                              }}
                            >
                              <div>
                                <p>{item.title}</p>
                              </div>
                            </Link>
                          ))}
                        </li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                {/* TRAVEL LIST STOPS HERE */}
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default PageContent_2;
