import React from "react";
import "./share.css";
import styled from "styled-components";
import axios from "axios";

axios
  .post("/member.do", {
    member_id: "user3",
  })
  .then(function (res) {
    console.log(res.data);
  })
  .catch(function (error) {
    console.log(error);
  });

const ShareBack = styled.div`
  width: auto;
  height: auto;
  position: relative;
  background: linear-gradient(
    355.98deg,
    #181048 99.92%,
    #0e0831 99.93%,
    #1b463b 200%
  );
  background-size: auto 100%;
`;

const ShareMain = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const HiSection = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

function Share(props) {
  return (
    <ShareBack>
      <ShareMain>
        <HiSection>
          <div className="auto-group-6kim-yss">
            <p className="ma-ah-share-tjw">Ma:ah Share</p>
            <p className="hi-card-name-1pZ">Hi:Card Name</p>
          </div>
          <div className="auto-group-qpdb-jEm">
            {/* <img className="right-Fyo" src="REPLACE_IMAGE:42:1680" />
            <img className="left-zwP" src="REPLACE_IMAGE:42:1679" /> */}
            <div className="frame-1000005675-uHf">
              <div className="learn-more-yoK">Learn More</div>
              {/* <img className="vector-7-WoF" src="REPLACE_IMAGE:13:2167" /> */}
            </div>
            <div className="group-1000003024-4iH">
              <p className="x-boost-y4Z">X BOOST</p>
              <div className="cards-vertical-34R">
                <div className="auto-group-v3ft-8rZ">
                  {/* <img
                    className="paste-image-here-Gxm"
                    src="./assets/paste-image-here-RLR.png"
                  /> */}
                  <div className="shape-CbX"></div>
                  <p className="card-name-VKj">Card Name</p>
                </div>
                <div className="card-description-zXP">card description</div>
              </div>
            </div>
            {/* <img className="group-1000003025-3Em" src="REPLACE_IMAGE:13:2158" /> */}
          </div>
        </HiSection>
        <div className="auto-group-wqkb-Zyo">
          {/* <img className="star-img-JwP" src="REPLACE_IMAGE:13:2329" /> */}
          <div className="auto-group-rnk7-Snh">
            <div className="group-1000003071-Cms">
              <div className="send-button-KLh">
                <div className="send-cqb">Card</div>
                {/* <img className="group-221-3R7" src="REPLACE_IMAGE:I48:1840;2:8" /> */}
              </div>
              <div className="group-1000003065-KdX">
                <p className="by-card-fhP">By:Card</p>
                <div className="group-1000003064-MKK">
                  <div className="group-1000003063-6Gu">
                    <div className="group-1000003060-E8D">
                      <div className="group-1000003028-m89">
                        <p className="the-blue-WbX">the Blue</p>
                        <div className="cards-vertical-ps7">
                          {/* <img
                            className="shape-aLV"
                            src="REPLACE_IMAGE:I42:1708;19:6230"
                          /> */}
                          <p className="card-name-hAD">Card Name</p>
                          <div className="card-description-N1T">
                            card description
                          </div>
                          <div className="noise-eDs"></div>
                        </div>
                      </div>
                      <div className="frame-23-Wms">
                        <p className="learn-more-oW5">Learn More</p>
                        {/* <img className="vector-7-wcH" src="REPLACE_IMAGE:42:1727" /> */}
                      </div>
                    </div>
                    <div className="group-1000003061-ouP">
                      <div className="group-1000003028-xXP">
                        <p className="the-blue-WJ1">the Blue</p>
                        <div className="cards-vertical-nFX">
                          {/* <img
                            className="shape-vcd"
                            src="REPLACE_IMAGE:I42:1731;19:6230"
                          /> */}
                          <p className="card-name-GRb">Card Name</p>
                          <div className="card-description-Z9o">
                            card description
                          </div>
                          <div className="noise-EFw"></div>
                        </div>
                      </div>
                      <div className="frame-23-tLV">
                        <p className="learn-more-NmT">Learn More</p>
                        {/* <img className="vector-7-iKX" src="REPLACE_IMAGE:42:1735" /> */}
                      </div>
                    </div>
                    <div className="group-1000003062-p7f">
                      <div className="group-1000003250-vRb">
                        <p className="the-blue-5ZP">the Blue</p>
                        <div className="auto-group-itay-zgM">
                          <div className="cards-vertical-kfX">
                            {/* <img
                              className="shape-tWq"
                              src="REPLACE_IMAGE:I42:1742;19:6230"
                            /> */}
                          </div>
                          <div className="frame-1000005679-z45">
                            <div className="frame-1000005677-RfB">
                              {/* <img
                                className="cart-pz9"
                                src="REPLACE_IMAGE:48:1869"
                              /> */}
                              <div className="item-10--KR7">
                                마트, 편의점 10% 할인
                              </div>
                            </div>
                            <div className="frame-34-Msb">
                              {/* <img
                                className="currency-coin-dollar-UhK"
                                src="REPLACE_IMAGE:48:1878"
                              /> */}
                              <div className="item-10--wqo">
                                공과금 10% 할인
                              </div>
                            </div>
                            <div className="frame-27-T3T">
                              {/* <img
                                className="note-02-zJH"
                                src="REPLACE_IMAGE:48:1894"
                              /> */}
                              <div className="item-5--uRF">영화 5% 할인</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="frame-23-cKf">
                        <p className="learn-more-Kjs">Learn More</p>
                        {/* <img className="vector-7-SpV" src="REPLACE_IMAGE:191:709" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="group-1000003059-tgV">
                    {/* <img className="icon-RRX" src="REPLACE_IMAGE:42:1722" /> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <img className="star-img-i9j" src="REPLACE_IMAGE:13:2330" /> */}
          </div>
        </div>
      </ShareMain>
    </ShareBack>
  );
}

export default Share;
