import React, { useEffect, useState } from 'react';
// import { category } from '../assets/data/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { FcFilmReel, FcPositiveDynamic } from 'react-icons/fc';
import axios from 'axios';
import { data } from 'autoprefixer';

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next" style={{ color: 'white' }}>
        <MdNavigateNext className="icon" />
      </button>
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev" style={{ color: 'white' }}>
        <MdNavigateBefore className="icon" />
      </button>
    </div>
  );
};

export default function CategoriesEntertainment() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/category');
      setCategory(result.data);
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <h1 className="em" id="entertainment">
        {' '}
        <FcFilmReel className="mx-2 mb-2" />
        Entertainment
      </h1>
      <p>Get to know your favorite artist only here !</p>
      <section className="category">
        <div className="content">
          <Slider {...settings}>
            {category.map((item) => (
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="boxs" key={item._id}>
                  <div className="box">
                    <img src={item.photo} alt={''} />

                    <div className="overlay">
                      <div>
                        <h4>{item.name}</h4>
                      </div>
                      {/* <div>
                        <p>{item.title}</p>
                      </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
