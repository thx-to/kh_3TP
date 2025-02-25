import { useState, useEffect } from "react";

import {
  CarouselContainer,
  CarouselOuter,
  CarouselInner,
  CarouselTextBox,
  CarouselTextCategory,
  CarouselTextTitle,
  CarouselTextContents,
  CarouselImage,
  ArrowBox,
  LeftArrow,
  ArrowText,
  ArrowSlash,
  RightArrow,
} from "../../styles/main/Carousel";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      backgroundColor: "#f1f1f1",
      category: "roadmap",
      title: `개발, 어디서부터 시작해야 할까?\n개발 입문자를 위한 로드맵 🚀`,
      contents: `프로그래밍을 배우고 싶지만 어디서 시작해야 할지 막막하다면?\n초보자를 위한 필수 개념, 추천 언어, 학습 로드맵을 확인하세요!`,
      image: "/images/general/mainbanner_01.png",
      link: "/roadmap/frontend",
    },
    {
      backgroundColor: "#6281e6",
      category: "coding test",
      title: `코딩 테스트, 이렇게 준비하면 합격한다!\n코딩 테스트 대비 전략`,
      contents: `알고리즘, 데이터 구조, 실전 문제 풀이까지!!\n코딩 테스트 유형과 필수 문제를 한곳에서 준비하세요.`,
      image: "/images/general/mainbanner_02.png",
      textColor: "white",
      link: "/codingtest/practice",
    },
    {
      backgroundColor: "#383838",
      category: "community",
      title: `실무 개발자에게 코드 리뷰 받기 💡\n여러분을 기다리고 있어요!`,
      contents: `혼자 공부하는 것보다 전문가의 피드백이 중요합니다.\n코드 리뷰를 통해 더 나은 개발자로 성장하세요!`,
      image: "/images/general/mainbanner_03.png",
      textColor: "white",
      link: "community/coding",
    },
  ];

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const currentSlide = slides[currentIndex];

  const handleSlideClick = () => {
    navigate(currentSlide.link);
  };

  return (
    <CarouselContainer>
      <CarouselOuter
        style={{
          backgroundColor: currentSlide.backgroundColor,
          transition: "background-color 0.5s ease",
        }}
      >
        <CarouselInner>
          <CarouselTextBox>
            <CarouselTextCategory textColor={currentSlide.textColor}>
              {currentSlide.category}
            </CarouselTextCategory>
            <CarouselTextTitle
              style={{ cursor: "pointer" }}
              onClick={handleSlideClick}
              textColor={currentSlide.textColor}
            >
              {currentSlide.title.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </CarouselTextTitle>
            <CarouselTextContents
              style={{ cursor: "pointer" }}
              onClick={handleSlideClick}
              textColor={currentSlide.textColor}
            >
              {currentSlide.contents.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </CarouselTextContents>
            <ArrowBox>
              <LeftArrow onClick={handlePrev} />
              <ArrowText>{currentIndex + 1}</ArrowText>
              <ArrowSlash>/</ArrowSlash>
              <ArrowText>{slides.length}</ArrowText>
              <RightArrow onClick={handleNext} />
            </ArrowBox>
          </CarouselTextBox>
          <CarouselImage
            style={{
              backgroundImage: `url(${currentSlide.image})`,
              transition: "opacity 0.5s ease",
              opacity: isAnimating ? 0.5 : 1,
            }}
          />
        </CarouselInner>
      </CarouselOuter>
    </CarouselContainer>
  );
};

export default Carousel;
