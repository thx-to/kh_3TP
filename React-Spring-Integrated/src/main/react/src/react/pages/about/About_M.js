import { useLocation, useNavigate } from "react-router-dom";

import {
  Wrap,
  TopBoxWide,
  TopBox,
  Container,
  AboutTitle,
  AboutContents,
  TopBoxText,
  TopBoxArrow,
  AboutSubTitle,
  AboutListTitle,
  ImageContainer,
} from "../../styles/about/About_M";

import ScrollToTopButton from "../ScrollToTopButton";

const About_M = () => {
  const navigate = useNavigate();

  const handleRefresh = () => {
    navigate("/about");
  };

  return (
    <Wrap>
      <TopBoxWide>
        <TopBox>
          <TopBoxText onClick={() => handleRefresh()}>about</TopBoxText>
          <TopBoxArrow>{`>`}</TopBoxArrow>
          <TopBoxText onClick={() => handleRefresh()}>
            🔥 코디터 소개
          </TopBoxText>
        </TopBox>
      </TopBoxWide>
      <Container>
        <AboutTitle>About coditor</AboutTitle>
        <AboutContents>
          개발을 처음 시작할 때는 새로운 개념과 기술이 한꺼번에 쏟아져 들어오기
          때문에 무엇부터 학습해야 할지 막막할 때가 많습니다. 방대한 정보 속에서
          핵심을 파악하기 어렵고, 어디서부터 시작해야 할지 갈피를 잡기 힘든
          순간이 자주 찾아옵니다.
          <br />
          <br />
          어떤 프로그래밍 언어를 공부해야 할지, 코딩 테스트는 어떻게 준비해야
          하는지, 효율적인 코드 작성법은 무엇인지, 그리고 실무에서는 어떤 기술을
          활용하는지—이 모든 것이 낯설고 어렵게 느껴질 수 있습니다.
          <br />
          <br />
          물론, 코딩 테스트 플랫폼, 개발 강의 사이트, 코드 리뷰 서비스, 멘토링
          프로그램, 스터디 모집 커뮤니티 등 각각의 기능을 제공하는 다양한
          서비스가 존재하지만, 이 모든 것을 한곳에서 체계적으로 제공하는
          플랫폼은 흔치 않습니다. 각기 다른 사이트를 돌아다니며 정보를 찾아
          헤매는 대신, 한곳에서 종합적으로 학습하고 성장할 수 있다면 얼마나
          좋을까요?
          <br />
          <br />
          coditor는 초보 개발자부터 실무자까지, 누구나 체계적으로 성장할 수
          있도록 돕는 올인원 개발자 플랫폼입니다. 프로그래밍 언어 학습, 알고리즘
          문제 풀이, 실전 코드 리뷰, 실무 멘토링, 개발자 커뮤니티, 유용한 정보
          제공까지— 개발자가 되는 여정을 한곳에서 지원하는 공간을 만들어갑니다.
        </AboutContents>
        <AboutSubTitle>
          coditor에서는 다음과 같은 서비스를 제공합니다.
        </AboutSubTitle>
        <AboutContents>
          <AboutListTitle>✅ 프로그래밍 언어 학습</AboutListTitle>
          Python, Java, JavaScript 등 다양한 언어를 체계적으로 익힐 수 있도록
          돕습니다.
          <AboutListTitle>✅ 코딩 테스트 대비</AboutListTitle>
          실전 문제 풀이, 알고리즘 연습, 기업 코딩 테스트 대비 문제를
          제공합니다.
          <AboutListTitle>✅ 코드 리뷰 & 멘토링</AboutListTitle>더 좋은 코드를
          작성할 수 있도록 피드백을 받고, 실무자의 멘토링을 받을 수 있습니다.
          <AboutListTitle>✅ 스터디 및 프로젝트 모집</AboutListTitle>
          함께 공부하고 성장할 수 있도록 개발자 스터디 및 프로젝트 팀을 찾을 수
          있습니다.
          <AboutListTitle>✅ 개발자 커뮤니티</AboutListTitle>
          기술 트렌드 공유, 개발 고민 상담, 정보 공유 등 다양한 주제로 소통할 수
          있습니다.
        </AboutContents>
        <AboutContents>
          개발자가 되는 길은 결코 쉽지 않지만, 혼자가 아니라면 더 빠르고
          효율적으로 나아갈 수 있습니다.
          <br />
          혼자서 막막했던 순간을 coditor와 함께 극복하세요.
          <br />
          누구나 개발자가 될 수 있습니다. coditor가 함께하겠습니다.
        </AboutContents>
        <ImageContainer />
      </Container>
      <ScrollToTopButton />
    </Wrap>
  );
};

export default About_M;
