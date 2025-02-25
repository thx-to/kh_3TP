import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Base64 } from "js-base64";

import JwtDecoding from "../../../../api/JwtDecode";
import AxiosApi from "../../../../api/AxiosApi";
import { challengeIoExamples } from "../constant/examples";

import { CodeChallengeInfoStyles as CssWrapper } from "../../../styles/codingtest/CodeChallengeInfoStyles";

const CodeChallengeInfo = ({ setHeaderTitle, setCodeEditorValue }) => {
  const [challengeDetail, setChallengeDetail] = useState({
    title: "Loading...",
    description: "Loading...",
    cond: "Loading...",
    limits: "Loading...",
  });

  const { questionId } = useParams();

  const accessToken = useSelector((state) => state.auth.accesstoken);
  const userId = accessToken
    ? JwtDecoding.getFieldFromToken(accessToken, "sub")
    : null;

  useEffect(() => {
    const fetchChallengeDetail = async () => {
      const responseData = await AxiosApi.getChallengeDetail(
        questionId,
        userId
      );

      if (responseData["error"]) {
        const errorMessage = responseData["error"];
        alert(errorMessage);
        return;
      }

      setHeaderTitle(responseData["title"]);

      if (responseData["lastSubmittedCode"])
        setCodeEditorValue(Base64.decode(responseData["lastSubmittedCode"]));
      setChallengeDetail((prev) => ({
        ...prev,
        title: responseData["title"],
        description: responseData["description"],
        cond: responseData["cond"],
        limits: `메모리 제한: ${responseData["memoryLimit"]}mb\n실행 시간: ${
          parseInt(responseData["runningTimeLimit"]) / 1000
        }초 이내`,
      }));
    };

    fetchChallengeDetail();
  }, []);

  return (
    <CssWrapper>
      <div className="challenge-title">
        <div>
          <span>제목</span>
        </div>
        <div>
          <p>{challengeDetail.title}</p>
        </div>
      </div>
      <div className="challenge-desc">
        <div>
          <span>설명</span>
        </div>
        <div>
          <span>문제 상세</span>
          <p>{challengeDetail.description}</p>
          <span>조건</span>
          <p>{challengeDetail.cond}</p>
          <span>시스템 제한사항</span>
          <p>{challengeDetail.limits}</p>
        </div>
      </div>
      <div className="challenge-io-example">
        <div>
          <span>정답 예시</span>
        </div>
        <div>
          <table>{challengeIoExamples[questionId]}</table>
        </div>
      </div>
    </CssWrapper>
  );
};

export default CodeChallengeInfo;
