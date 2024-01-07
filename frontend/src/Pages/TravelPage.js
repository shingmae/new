import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AdSenseRectangle from '../Components/AdsenseRectangle';
import AdSenseSquare from '../Components/AdsenseSquare';
import AdSense from '../Components/AdsenseSquare';
import CategoriesEntertainment from '../Components/CategoriesEntertainment';

function TravelPage() {
  const { _id } = useParams();
  const [postsTravel, setPostTravel] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/postsTravel/${_id}`);
      console.log(result.data);
      setPostTravel(result.data);
    };
    fetchData();
  }, [_id]);

  const glow = {
    color: 'white',
    animation: 'glow 1s ease-in-out infinite alternate',
    '@-webkit-keyframes': {
      from: {
        textShadow:
          '0 0 10px #fff, 0 0 20px #fff, 0 0 30px gold, 0 0 40px gold, 0 0 50px gold, 0 0 60px gold, 0 0 70px gold',
      },
      to: {
        textShadow:
          '0 0 20px #fff, 0 0 30px gold, 0 0 40px gold, 0 0 50px gold, 0 0 60px gold, 0 0 70px gold, 0 0 80px gold',
      },
    },
  };

  return (
    <>
      <h1 className="title">{postsTravel.title}</h1>
      <section className="allarticle_article">
        {postsTravel.multi &&
          postsTravel.multi.map((multi) => (
            <>
              <img src={multi.photo[0].photoSub}></img>
              <p>{multi.desc[0].descSub}</p>
              {/* Youtube Video */}

              <div class="row mt-4 mb-4">
                <div class="col-12 col-lg-6 mb-lg-5 mb-2 d-flex justify-content-center flex-row align-items-center">
                  <iframe
                    width="700"
                    height="394"
                    src={multi.video[0].videoSub}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-12 px-lg-5 mb-lg-0 mb-5 mt-3 mt-lg-5 d-flex justify-content-md-center justify-content-center flex-column align-items-md-center align-items-center">
                  {/* <AdSenseSquare /> */}
                  <img src={multi.photo[1].photoSub}></img>
                </div>
              </div>
              <div class="row">
                <p>{multi.desc[1].descSub}</p>
              </div>
              <div className="mt-5">{/* <AdSenseRectangle /> */}</div>
              <div class="d-flex justify-content-center mb-3 foods_place mt-5">
                <h4>
                  Scroll down to know the location and what's my take on it
                </h4>
              </div>
              {postsTravel.place &&
                postsTravel.place.map((place) => (
                  <>
                    <div class="parts text-center mb-3 mt-3">{place.title}</div>
                    <img src={place.photo}></img>
                    <p>{place.desc}</p>
                    <h4 className="verdict mt-5 mb-4">
                      Verdict: <span className="rate">{place.verdict}</span>
                    </h4>
                    {/* <span className="rate mb-2">{postsTravel.place[0].verdict}</span> */}
                    <div className="row">
                      <div className="col-lg-6 col-12">
                        <h6 className="pros">(pros)</h6>
                        <p className="mb-5">{place.pros}</p>
                        <h6 className="cons">(cons)</h6>
                        <p className="mb-5">{place.cons}</p>
                        <h6 className="tips">(tips)</h6>
                        <p className="mb-5">{place.tips}</p>
                      </div>
                      <div className="col-lg-6 col-12">
                        {/* <AdSenseSquare /> */}
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
              <div class="points-box">
                <div className="points text-center">
                  {postsTravel.finalPoints}
                </div>
                <div class="row ">
                  <div class="col-12 d-flex justify-content-center align-items-center rating">
                    <span class="final-rating text-center">
                      {postsTravel.finalVerdict &&
                        postsTravel.finalVerdict.map((final) => (
                          <span>
                            <i
                              className={final.icon}
                              style={{
                                color: 'gold',
                              }}
                            ></i>
                          </span>
                        ))}
                      <h3 className="final-verdict">Final Verdict</h3>
                    </span>
                  </div>
                </div>

                <div style={{ paddingBottom: '2rem' }}>
                  {postsTravel.finalSay}
                </div>
              </div>
              <hr />
              <h3 className="how mt-5 mb-3">How to get there?</h3>
              {postsTravel.contact &&
                postsTravel.contact.map((contact) => (
                  <>
                    <div className="row">
                      <div className="col-12 col-lg-6 p-2 my-lg-0 my-3 d-flex justify-content-end align-items-center">
                        <iframe
                          src={contact.map}
                          width="540"
                          height="570"
                        ></iframe>
                      </div>
                      <div class="col-12 col-lg-6 d-flex justify-content-around align-items-center">
                        <div class="container">
                          <div class="row mb-2">
                            <span class="col-12 col-lg-4 px-2 d-flex justify-content-center align-items-center">
                              <img
                                class="rounded shadow option-image"
                                height="120"
                                width="180"
                                style={{
                                  paddingBottom: '0px',
                                  objectFit: 'cover',
                                }}
                                src="https://images.pexels.com/photos/1521580/pexels-photo-1521580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="taxi"
                              />
                            </span>
                            <div
                              class="col-12 col-lg-8 d-flex align-items-start mt-lg-0 mt-2 py-1 d-flex align-items-center option1"
                              style={{ textIndent: '0px' }}
                            >
                              🚕 Want to get there by taxi?
                              <br />
                              {contact.taxi}
                            </div>
                          </div>
                          <hr />
                          <div class="row mb-2">
                            <span class="col-12 col-lg-4 px-2 d-flex justify-content-center align-items-center">
                              <img
                                class="rounded shadow option-image"
                                height="120"
                                width="180"
                                style={{
                                  paddingBottom: '0px',
                                  objectFit: 'cover',
                                }}
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Jeepney%2C_Magallanes_Drive%2C_Intramuros%2C_2018_%2801%29.jpg/2560px-Jeepney%2C_Magallanes_Drive%2C_Intramuros%2C_2018_%2801%29.jpg"
                                alt="jeepney"
                              />
                            </span>
                            <span
                              class="col-12 col-lg-8 d-flex align-items-start mt-lg-0 mt-2 py-1 d-flex align-items-center option1"
                              style={{ textIndent: '0px' }}
                            >
                              🚙 Want to feel local?
                              <br />
                              {contact.local}
                            </span>
                          </div>
                          <hr />
                          <div class="row mb-2">
                            <span class="col-12 col-lg-4 px-2 d-flex justify-content-center align-items-center">
                              <img
                                class="rounded shadow option-image"
                                height="120"
                                width="180"
                                style={{
                                  paddingBottom: '0px',
                                  objectFit: 'cover',
                                }}
                                src="https://images.pexels.com/photos/804981/pexels-photo-804981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2g"
                                alt="boat"
                              />
                            </span>
                            <span
                              class="col-12 col-lg-8 d-flex align-items-start mt-lg-0 mt-2 py-1 d-flex align-items-center option1"
                              style={{ textIndent: '0px' }}
                            >
                              ⛵ At the location of the boat
                              <br />
                              {contact.boat}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 d-flex justify-content-center align-items-center">
                        <h3 class="contactInfo mt-5 ">Contact Info</h3>
                      </div>
                      <div className="col-12 d-flex justify-content-center align-items-center">
                        <ul
                          class="mb-5 text-center"
                          style={{ listStyleType: 'none', textIndent: '0px' }}
                        >
                          <li>
                            <b>Office Hours: </b>
                            {contact.officeHours}
                          </li>
                          <li>
                            <b>Landline: </b>
                            {contact.landline}
                          </li>
                          <li>
                            <b>Mobile: </b>
                            {contact.mobile}
                          </li>
                          <li>
                            <b>Email: </b>
                            {contact.email}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </>
                ))}
            </>
          ))}
        <hr />
        <div className="carouselComponent">
          <CategoriesEntertainment />
        </div>
      </section>
    </>
  );
}

export default TravelPage;
