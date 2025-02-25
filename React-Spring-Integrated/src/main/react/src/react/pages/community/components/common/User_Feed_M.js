import {
  FeedContainer,
  FeedContents,
  FeedContentsContainer,
  FeedTitle,
} from "../../../../styles/community/User_M";

const User_Feed_M = ({ intro }) => {
  return (
    <>
      <FeedContainer>
        <FeedTitle>소개</FeedTitle>
        <FeedContentsContainer>
          <FeedContents>{intro}</FeedContents>
        </FeedContentsContainer>
      </FeedContainer>
    </>
  );
};

export default User_Feed_M;
