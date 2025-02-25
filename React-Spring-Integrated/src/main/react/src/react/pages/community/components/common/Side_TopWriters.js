import {
  TopWritersContainer,
  TopWritersTitle,
  TopWritersList,
  TopWritersEach,
  TopWritersImg,
  TopWritersId,
  TopWritersPoint,
} from "../../../../styles/community/TopWriters";
import AxiosApi from "../../../../../api/AxiosApi";
import { useEffect, useState } from "react";

const TopWriters = () => {
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    const readTopWriters = async () => {
      try {
        const response = await AxiosApi.gettopwriter();
        setWriters(response);
        console.log("받은 데이터 : ", response);
        console.log("저장된 데이터 : ", writers);
      } catch (error) {
        console.error("불러오는 중 오류 발생 : ", error);
      }
    };
    readTopWriters();
  }, []);

  return (
    <>
      <TopWritersContainer>
        <TopWritersTitle>Top Writers</TopWritersTitle>
        {writers.map((writer, index) => (
          <TopWritersList key={index}>
            <TopWritersEach>
              <TopWritersImg isProfile={writer.profileUrl} />
              <TopWritersId>{writer.name}</TopWritersId>
              <TopWritersPoint>{writer.postCnt}</TopWritersPoint>
            </TopWritersEach>
          </TopWritersList>
        ))}
      </TopWritersContainer>
    </>
  );
};

export default TopWriters;
