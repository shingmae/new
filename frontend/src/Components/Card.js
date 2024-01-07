import React from 'react';
import { blog } from '../assets/data/data';
import {
  AiOutlineClockCircle,
  AiOutlineComment,
  AiOutlineShareAlt,
  AiOutlineTags,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { FcOvertime, FcPositiveDynamic } from 'react-icons/fc';

export default function Card() {
  return (
    <>
      {/* <section className="col-12">
        <h1 className="em" id="information">
          {' '}
          <FcPositiveDynamic className="mx-2 mb-2" />
          Recent Post
        </h1>
        <p>Get to know your favorite artist only here !</p>
      </section> */}
      <section className="blog">
        <h1 className="em" id="information">
          {' '}
          <FcOvertime className="mx-2 mb-2" />
          Recent Post
        </h1>
        <p>Know the latest!</p>
        <div className=" grid3">
          {blog.map((item) => (
            <div className="box boxItems" key={item.id}>
              <Link
                to={`/details/${item.id}`}
                className="link"
                style={{ textDecoration: 'none' }}
              >
                <div className="img">
                  <img src={item.cover} alt="" />
                </div>
                <div className="details">
                  <div className="tag">
                    <AiOutlineTags className="icon" />
                    <a href="/">#{item.category}</a>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc.slice(0, 180)}...</p>
                  <div className="date">
                    <AiOutlineClockCircle className="icon" />
                    <label htmlFor="">{item.date}</label>
                    <AiOutlineComment className="icon" />
                    <label htmlFor="">27</label>
                    <AiOutlineShareAlt className="icon" />{' '}
                    <label htmlFor="">SHARE</label>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
