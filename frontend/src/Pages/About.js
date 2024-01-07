import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BiCoffeeTogo } from 'react-icons/bi';

export default function About() {
  return (
    <div className="container small-container">
      <Helmet>
        <title>About</title>
      </Helmet>
      <h1 className="title">About page</h1>
      <div className="text-center about">
        <p>
          Hi there! I'm SMA, the creator of this website.<br></br>
          My mission is to make websites that are easy and accessible for users.
          <br></br>
          I'm a civil engineering graduate that has a huge passion for coding.
          <br></br>I like to code for frontend right now and I'm studying more
          to be fullstack.
          <br></br>
          With the use of technologies today, I've made this website with VScode
          as coding editor and React + React Bootstrap as library and framework.
          <br></br>
          This is for the reason for faster loading and the freedom to design
          the website from scratch.
        </p>
        <p>
          This website will continually grow and will evolve thru time.
          <br></br>
          Please help me in my Journey by buying me a cup of
          <a
            href="https://www.buymeacoffee.com/gogodeetsa2"
            style={{ textDecoration: 'none' }}
            className="fw-bold"
            target="_blank"
          >
            {' '}
            coffee
          </a>
          .
        </p>
        <a
          href="https://www.buymeacoffee.com/gogodeetsa2"
          style={{ textDecoration: 'none' }}
          target="_blank"
        >
          <BiCoffeeTogo style={{ fontSize: '70px' }} />
        </a>
      </div>
    </div>
  );
}
