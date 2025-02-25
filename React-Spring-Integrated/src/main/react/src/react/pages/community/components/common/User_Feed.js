import {
  FeedContainer,
  FeedContents,
  FeedTitle,
} from "../../../../styles/community/User";

const User_Feed = ({ intro }) => {
  return (
    <>
      <FeedContainer>
        <FeedTitle>소개</FeedTitle>
        <FeedContents>{intro}</FeedContents>
      </FeedContainer>
    </>
  );
};

export default User_Feed;
