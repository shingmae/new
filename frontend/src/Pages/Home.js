import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Router } from 'react-router-dom';
import CategoriesTravel from '../Components/CategoriesTravel';
import CategoriesEntertainment from '../Components/CategoriesEntertainment';
import CategoriesInfo from '../Components/CategoriesInfo';
import CategoriesTrending from '../Components/CategoriesTrending';
import Card from '../Components/Card';
import axios from 'axios';

function Home() {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get('/posts');
  //     setPosts(result.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      <Helmet>
        <title>Deetsauce</title>
      </Helmet>
      <section className="welcome">
        <h1 class="main">WELCOME</h1>
        <h2>
          to
          <br /> <br />
          <span class="em" id="home">
            <strong> DEETSAUCE </strong>
          </span>
        </h2>
        <h3>
          DETAILED SOURCE for
          <a href="#trending" style={{ textDecoration: 'none' }}>
            {' '}
            Trending &nbsp;
          </a>
          |
          <a href="#entertainment" style={{ textDecoration: 'none' }}>
            {' '}
            Enertainment &nbsp;
          </a>
          |
          <a href="#travel" style={{ textDecoration: 'none' }}>
            {' '}
            &nbsp; Travel &nbsp;
          </a>
          |
          <a href="#information" style={{ textDecoration: 'none' }}>
            {' '}
            &nbsp; Information
          </a>
        </h3>
        <center class="mt-5">
          <a href="#article">
            <button
              type="button"
              class="rounded-pill btn-rounded mt-1 mb-1 text-center"
              data-bs-target="#staticBackdrop"
            >
              START HERE
              <span>
                <i class="fas fa-arrow-down"></i>
              </span>
            </button>
          </a>
        </center>
      </section>
      <center>
        <section id="article" className="article allarticle small-container">
          <p class="convert text-center fw-bold">Google Language Translate</p>
          <div class="text-center mb-5" id="google_translate_element"></div>
          <Helmet>
            <script
              type="text/javascript"
              src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
            ></script>
          </Helmet>
          <hr />
          <main>
            <CategoriesTrending />
            <hr />
            <CategoriesEntertainment />
            <hr />
            <CategoriesTravel />
            <section className="small container mb-5">
              <div class="container-fluid">
                <div class="row mt-5 mb-4">
                  <div class="col-12 size justify-content-center align-items-center d-flex">
                    <iframe
                      width="1000"
                      height="394"
                      src="https://www.youtube.com/embed/dk9RDYnT2uI?controls=0&loop=1&mute=1&autoplay=1&amp;"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <p className="travelDetail">
                Wondering where you want to go next in your dream vacation?
                <br />
                Lacking of budget due to pandemic?
                <br />
                Looking for that beautiful but very affordable beach resort?
                <br />
                If you're in the Philippines, and you're looking for new
                affordable resorts within budget. Then maybe this is the place
                for you.
              </p>
            </section>
            <hr />
            <CategoriesInfo />
            <section className="small container">
              <div class="container-fluid">
                <div class="row mt-5 mb-5">
                  <div class="col-12 size justify-content-center align-items-center d-flex">
                    <iframe
                      width="1000"
                      height="394"
                      src="https://www.youtube.com/embed/4CXnKPd4FNY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </section>
            <hr />
            <section className="small container">
              <div class="container-fluid">
                <div class="row mb-4">
                  <div class=" size justify-content-center align-items-center d-flex">
                    <Card />
                  </div>
                </div>
              </div>
            </section>
          </main>
        </section>
      </center>
    </div>
  );
}

export default Home;
