import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './assets/css/style.css';
import Home from './Pages/Home';
import About from './Pages/About';
import TermsAndCondition from './Pages/TermsAndCondition';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Disclaimer from './Pages/Disclaimer';
import logo from './images/logo_2.png';
import TooltipPositioned from './Components/ToolTip';
import Footer from './Components/Footer';
import { ContactUs } from './Components/Email';
import PageContent_2 from './Components/PageContent_2';
import Details from './Pages/Details';
import $ from 'jquery';
import { useEffect, useState } from 'react';
import KpopProfile, { YourComponent } from './Pages/KpopProfile';
import TravelPage from './Pages/TravelPage';

function App() {
  return (
    <BrowserRouter>
      <header className="mb-5">
        <Nav className="menu shadow fixed-top navbar navbar-expand-lg navbar-light bg-light">
          <div class="container-fluid">
            <Link className="navbar-brand" to="/Home">
              <img src={logo} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse justify-content-end" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link
                    to="/Home"
                    className="nav-link"
                    style={{ textDecoration: 'none' }}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <PageContent_2 />
                </li>

                <li className="nav-item">
                  <Link class="nav-link" to="/About">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <ContactUs />
                </li>
              </ul>
            </div>
          </div>
        </Nav>
      </header>

      {/* SOCIAL MEDIA ICONS */}
      <section>
        <TooltipPositioned />
      </section>

      <main>
        <Container className="mt-3">
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route
              exact
              path="/postsKpop/:_id"
              element={<KpopProfile />}
              target="_blank"
            />
            <Route
              exact
              path="/postsTravel/:_id"
              element={<TravelPage />}
              target="_blank"
            />
            <Route
              exact
              path="/details/:id"
              element={<Details />}
              target="_blank"
            />
            <Route path="/Terms&Condition" element={<TermsAndCondition />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/Disclaimer" element={<Disclaimer />} />
          </Routes>
        </Container>
      </main>
      <a href="#" class="shadow back-to-top border-light">
        <span>
          <i class="fas fa-chevron-up"></i>
        </span>
        <span class="border-animation border-animation--border-1"></span>
        <span class="border-animation border-animation--border-2"></span>
      </a>
      <section>
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
