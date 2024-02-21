import React, { useEffect } from "react";
import axios from "axios";

const Cert = () => {
  const API_SERVER = process.env.REACT_APP_API_SERVER;
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "http://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "http://cdn.iamport.kr/js/iamport.payment-1.1.8.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const requestCert = () => {
    const { IMP } = window;
    IMP.init("imp72857613");

    IMP.certification(
      {
        pg: "MIIiasTest",
        merchant_uid: `mid_${new Date().getTime()}`,
        m_redirect_url: "http://localhost:3000/cert", //리다이렉트 페이지
      },
      function (rsp) {
        if (rsp.success) {
          console.log("success");
          console.log(rsp);

          axios({
            method: "post",
            url: API_SERVER + "/getCert.do",
            data: { imp_uid: rsp.imp_uid, memberId: "user3" },
          })
            .then((res) => {
              console.log(res.data); //본인인증한 사람의 이름이 나와
              console.log("성공 성공 성공 성공 성공 성공");
            })
            .catch((err) => {
              console.log(err);
              console.log("실패 실패 실패 실패 실패 실패");
            });
        }
      }
    );
  };

  return (
    <div>
      <button onClick={requestCert}>본인인증</button>
    </div>
  );
};

export default Cert;
