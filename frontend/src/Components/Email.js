import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';

export const ContactUs = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const form = useRef();

  // Clear form
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_m7xojqj',
        'template_lsvbeo7',
        form.current,
        'GLprOeM3PAvydaK8a'
      )
      .then(
        (result) => {
          Swal.fire('Oh yeah!', 'You have sent a message!', 'success');
          setTimeout(() => {
            Swal.close();
          }, 3000);
          setName('');
          setEmail('');
          setMessage('');
          console.log(result.text);
          console.log('message');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <a class="nav-link" onClick={handleShow}>
        Contact
      </a>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <Modal
          show={show}
          onHide={handleClose}
          //   backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Email Me!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-content">
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <label className="mb-2" style={{ fontSize: '1.3rem' }}>
                  Name:{' '}
                </label>
                <input
                  type="text"
                  name="user_name"
                  onChange={(e) => setName(e.target.value)}
                  value={Name}
                  className="col-12"
                  style={{ height: '40px' }}
                />
              </div>
              <div>
                <label className="mb-2 mt-2" style={{ fontSize: '1.3rem' }}>
                  Email:{' '}
                </label>
                <input
                  type="email"
                  name="user_email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={Email}
                  className="col-12"
                  style={{ height: '40px' }}
                />
              </div>
              <div>
                <label className="mb-2 mt-2" style={{ fontSize: '1.3rem' }}>
                  Message:{' '}
                </label>
                <textarea
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  value={Message}
                  className="col-12"
                  style={{ height: '150px', resize: 'none' }}
                />
              </div>
              <div className="mt-3">
                <input type="submit" value="Send" />
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};
