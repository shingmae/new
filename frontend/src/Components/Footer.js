import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import TermsAndCondition from '../Pages/TermsAndCondition';

function Footer() {
  return (
    <footer class="shadow-lg foot foot-1">
      <div class="container-fluid">
        <div class="row mb-2 mt-2">
          <div class="col-12 col-sm-6 col-lg-6 mx-auto about-footer_1">
            <h6>About</h6>
            <hr
              class="bg-white d-inline-block mb-4"
              style={{ width: '60px', height: '2px' }}
            />
            <p class="lh-lg">
              Deet is a slang for Details.
              <br />
              Sauce is a slang for Source.
              <br />
              Get your specific Details here on DeetSauce.
            </p>
          </div>
          <div class="col-12 col-sm-6 col-lg-2 mx-auto about-footer">
            <h6
              class="text-capitalize"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="products used in the featured videos & YT channel"
            >
              Contact
            </h6>
            <hr
              class="bg-white d-inline-block mb-4"
              style={{ width: '60px', height: '2px' }}
            />
            <ul class="list-inline company-list">
              <li>
                <a href="mailto:gogodeetsauce@gmail.com">
                  Email
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-envelope-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-sm-6 col-lg-2 mb-4 mx-auto about-footer">
            <h6
              class="text-capitalize"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="products and links used in this web"
            >
              Content
            </h6>
            <hr
              class="bg-white d-inline-block mb-4"
              style={{ width: '60px', height: '2px' }}
            />
            <ul class="list-inline company-list">
              <li>
                <a
                  href="https://www.deetsauce.com/kpop/bts/index.html"
                  target="_blank"
                >
                  Entertainment
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Information
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  Technical
                </a>
              </li>
            </ul>
          </div>

          <div class="col-12 col-sm-6 col-lg-2 mb-4 mx-auto about-footer">
            <h6
              class="text-capitalize"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="products and links used in this web"
            >
              Useful Sites
            </h6>
            <hr
              class="bg-white d-inline-block mb-4"
              style={{ width: '60px', height: '2px' }}
            />
            <ul class="list-inline company-list">
              <li>
                <a href="https://ce.deetsauce.com/" target="_blank">
                  Estimates
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="col-12 end-footer">
        <hr class="bg-white" style={{ height: '2px' }} />
        <span class="px-2">
          {' '}
          <Link to="/Terms&Condition" style={{ textDecoration: 'none' }}>
            {' '}
            Terms and Conditions{' '}
          </Link>
        </span>
        <span class="px-3">|</span>
        <span>
          {' '}
          <Link to="/PrivacyPolicy" style={{ textDecoration: 'none' }}>
            {' '}
            Privacy Policy{' '}
          </Link>
        </span>
        <span class="p-3">|</span>
        <span>
          {' '}
          <Link to="/Disclaimer" style={{ textDecoration: 'none' }}>
            {' '}
            &copy; 2023 DeetSauce Webs{' '}
          </Link>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
