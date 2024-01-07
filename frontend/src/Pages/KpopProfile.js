import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import CategoriesEntertainment from '../Components/CategoriesEntertainment';

function KpopProfile() {
  const { _id } = useParams();
  const [postsKpop, setPostKpop] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/postsKpop/${_id}`);
      console.log(result.data);
      setPostKpop(result.data);
    };
    fetchData();
  }, [_id]);

  return (
    <>
      {postsKpop.metatag &&
        postsKpop.metatag.map((meta) => (
          <>
            <meta name="description" content={meta.description}></meta>
            <meta name="keyword" content={meta.keyword}></meta>
            {/* Facebook Social Media */}
            <meta property="og:title" content={meta.description} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={meta.url} />
            <meta property="og:image" content={meta.image} />
          </>
        ))}
      <h1 className="title">{postsKpop.title}</h1>
      <section className="allarticle_article">
        <img src={postsKpop.photo}></img>
        <div className="encrypt">{postsKpop.encrypt}</div>
        <div className="license">{postsKpop.license}</div>
        <div className="members">
          From left to right:
          <br />
          {postsKpop.members}
        </div>
        <p className="desc">{postsKpop.desc}</p>
        <hr className="mt-5" />
        <h2>Members:</h2>

        {/* Get the specific data within an object */}
        {postsKpop.membersInfo &&
          postsKpop.membersInfo.map((memberInfo) => (
            <>
              <div className="container">
                <div className="row mt-5">
                  <div className="col-12 col-lg-6 mb-lg-5 mb-2 d-flex justify-content-center flex-row align-items-center">
                    <img src={memberInfo.memberPic}></img>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12 px-lg-5 mb-lg-0 mb-5 mt-3 mt-lg-5 d-flex justify-content-md-center justify-content-center flex-column align-items-md-center align-items-center description-title__content">
                    <div>
                      <h3 class="kpop_name">
                        <i class="fa-solid fa-heart mt-0"></i>
                        {memberInfo.infoMember[0].stageName}
                      </h3>
                    </div>
                    <ul>
                      <li>Stage Name: {memberInfo.infoMember[0].stageName}</li>
                      <li style={{ backgroundColor: '#20c3bb' }}>
                        Real Name: {memberInfo.infoMember[0].realName}
                      </li>
                      <li>
                        Nationality: {memberInfo.infoMember[0].nationality}
                      </li>
                      <li style={{ backgroundColor: '#20c3bb' }}>
                        Position: {memberInfo.infoMember[0].position}
                      </li>
                      <li>Birthday: {memberInfo.infoMember[0].birthday}</li>
                      <li style={{ backgroundColor: '#20c3bb' }}>
                        Birthplace: {memberInfo.infoMember[0].birthplace}
                      </li>
                      <li>Religion: {memberInfo.infoMember[0].religion}</li>
                      <li style={{ backgroundColor: '#20c3bb' }}>
                        Zodiac Sign: {memberInfo.infoMember[0].zodiacSign}
                      </li>
                      <li>
                        Chinese Zodiac: {memberInfo.infoMember[0].chineseZodiac}
                      </li>
                      <li style={{ backgroundColor: '#20c3bb' }}>
                        Height: {memberInfo.infoMember[0].height}
                      </li>
                      <li>Weight: {memberInfo.infoMember[0].weight}</li>
                      <li style={{ backgroundColor: '#20c3bb' }}>
                        Blood type: {memberInfo.infoMember[0].blood}
                      </li>
                      <li>
                        Siblings:{' '}
                        {memberInfo.infoMember[0].siblings[0].sibling1}
                      </li>
                      <li style={{ backgroundColor: '#20c3bb' }}>
                        Ideal:
                        <br />
                        ❤️
                        {memberInfo.infoMember[0].ideal[0].ideal1}
                        <br />
                        ❤️
                        {memberInfo.infoMember[0].ideal[0].ideal2}
                      </li>
                      <li>
                        instagram:{' '}
                        <a href={memberInfo.infoMember[0].link} target="_blank">
                          {memberInfo.infoMember[0].instagram}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ))}
        {postsKpop.facebook &&
          postsKpop.facebook.map((facebook) => (
            <>
              <div id="fb-root"></div>
              <script
                async
                defer
                crossorigin="anonymous"
                src={facebook.srcFb}
                nonce={facebook.nonceFb}
              ></script>
              <div class="container-fluid">
                <div class="row mt-5 mb-5">
                  <div class="col-12 d-flex flex-column justify-content-center align-items-center">
                    <h4 class="mb-5 bias">
                      Who's your favorite member (bias)?
                    </h4>
                    <div
                      class="fb-comments"
                      data-href={facebook.dataFb}
                      data-width=""
                      data-numposts="5"
                    ></div>
                  </div>
                </div>
              </div>
            </>
          ))}
        <div className="carouselComponent">
          <CategoriesEntertainment />
        </div>
      </section>
    </>
  );
}
export default KpopProfile;
