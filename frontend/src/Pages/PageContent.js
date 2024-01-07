import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Route, Routes } from 'react-router-dom';
import CivilEngineering from './CivilEngineering';

export default function PageContent() {
  return (
    <div>
      <Helmet>
        <title>Page Content</title>
      </Helmet>
      <center>
        <div id="head"> Page Content: </div>
        <div class="content">
          <ul class="ul-list">
            <Link to="/CivilEngineering">
              <li>Civil Engineering</li>
            </Link>
            <hr></hr>
            <li>Mechanical Engineering</li>
            <hr></hr>
            <li>Electrical Engineering</li>
            <hr></hr>
            <li>Electronics Engineering</li>
            <hr></hr>
            <li>Education</li>
            <hr></hr>
            <li>Criminology</li>
            <hr></hr>
            <li>Plumbing</li>
          </ul>
        </div>
      </center>
      <main>
        <Routes>
          <Route path="/CivilEngineering" element={<CivilEngineering />} />
        </Routes>
      </main>
    </div>
  );
}
