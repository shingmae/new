import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TooltipPositioned() {
  return (
    <>
      <div className="row_social">
        <div className="col-3 left">
          <div
            class="btn-group-vertical position-fixed"
            role="group"
            aria-label="Basic example"
          >
            {['right'].map((placement) => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                    <strong>Youtube</strong>
                  </Tooltip>
                }
              >
                <a
                  href="https://www.youtube.com/channel/UCtg2yEBq8ZunUmLMPal-KBw"
                  target="_blank"
                >
                  <button type="button" class="btn-danger social-media">
                    <i class="fa-brands fa-youtube yt"></i>
                  </button>
                </a>
              </OverlayTrigger>
            ))}

            {['right'].map((placement) => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                    <strong>Tiktok</strong>
                  </Tooltip>
                }
              >
                <a
                  href="https://www.instagram.com/bluephilyt/?hl=en"
                  target="_blank"
                >
                  <button type="button" class="btn-secondary social-media">
                    <i class="fa-brands fa-tiktok"></i>
                  </button>
                </a>
              </OverlayTrigger>
            ))}

            {['right'].map((placement) => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                    <strong>Facebook</strong>
                  </Tooltip>
                }
              >
                <a
                  href="https://web.facebook.com/BluePhilYoutube"
                  target="_blank"
                >
                  <button type="button" class="btn-primary social-media">
                    <i
                      class="fa-brands fa-facebook-f fb"
                      style={{
                        color: 'white',
                        textShadow:
                          '1px 0 black, 0 1.5px black, 2.5px 0 black, 0 -0.5px black',
                      }}
                    ></i>
                  </button>
                </a>
              </OverlayTrigger>
            ))}

            {['right'].map((placement) => (
              <OverlayTrigger
                key={placement}
                placement={placement}
                overlay={
                  <Tooltip id={`tooltip-${placement}`}>
                    <strong>Buy me coffee</strong>
                  </Tooltip>
                }
              >
                <a
                  href="https://web.facebook.com/BluePhilYoutube"
                  target="_blank"
                  className="mt-lg-5"
                >
                  <button type="button" class="btn-success social-media">
                    <i
                      class="fa-solid fa-mug-saucer"
                      style={{
                        color: 'white',
                      }}
                    ></i>
                  </button>
                </a>
              </OverlayTrigger>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TooltipPositioned;
