import {
  MiddleDot,
  PostBottomRepliesBox,
  PostBottomRepliesImg,
  PostBottomRepliesText,
  PostBottomViewsBox,
  PostBottomViewsImg,
  PostBottomViewsText,
  RelatedPostContents,
  RelatedPostContentsBottom,
  RelatedPostContentsText,
  RelatedPostContentsTitle,
  RelatedPostEach,
  RelatedPostsContainer,
  RelatedPostsList,
  RelatedPostsTitle,
} from "../../../../styles/community/Post";

const Post_RelatedPosts = () => {
  return (
    <>
      <RelatedPostsContainer>
        <RelatedPostsTitle>비슷한 질문</RelatedPostsTitle>
        <RelatedPostsList>
          <RelatedPostEach>
            <RelatedPostContents>
              <RelatedPostContentsTitle>JSP 질문</RelatedPostContentsTitle>
              <RelatedPostContentsText>
                서블릿에서는 request, response로 직접 응답 정보를 설정하고
                화면에 어떻게 뿌려주는 지를 설정해줬었는데 JSP는 이 과정을
                저희가 작성해줄 필요 없이 JS ..
              </RelatedPostContentsText>
            </RelatedPostContents>
            <RelatedPostContentsBottom>
              <PostBottomRepliesBox>
                <PostBottomRepliesImg />
                <PostBottomRepliesText>28 replies</PostBottomRepliesText>
              </PostBottomRepliesBox>
              <MiddleDot />
              <PostBottomViewsBox>
                <PostBottomViewsImg />
                <PostBottomViewsText>875 views</PostBottomViewsText>
              </PostBottomViewsBox>
            </RelatedPostContentsBottom>
          </RelatedPostEach>

          <RelatedPostEach>
            <RelatedPostContents>
              <RelatedPostContentsTitle>
                클라이언트 컴포넌트에서의 서버컴포넌트 재호출에 대한 질문
              </RelatedPostContentsTitle>
              <RelatedPostContentsText>
                어? 그럼 클라이언트 컴포넌트에서, post요청을 날리면 서버컴포넌트
                업데이트를 어떻게 치지? 방금 설명해주신것처럼 모든 post 요청을
                서버액션으로 만든 ..
              </RelatedPostContentsText>
            </RelatedPostContents>
            <RelatedPostContentsBottom>
              <PostBottomRepliesBox>
                <PostBottomRepliesImg />
                <PostBottomRepliesText>28 replies</PostBottomRepliesText>
              </PostBottomRepliesBox>
              <MiddleDot />
              <PostBottomViewsBox>
                <PostBottomViewsImg />
                <PostBottomViewsText>875 views</PostBottomViewsText>
              </PostBottomViewsBox>
            </RelatedPostContentsBottom>
          </RelatedPostEach>

          <RelatedPostEach>
            <RelatedPostContents>
              <RelatedPostContentsTitle>
                App 라우터 쿼리스트링
              </RelatedPostContentsTitle>
              <RelatedPostContentsText>
                App 라우터 방식에서 쿼리 스트링을 불러오는 방식이 강의를 보니까
                두 가지로 확인 됩니다. 두 가지의 차이점이 무엇 인지와 두 개를
                병행하면서 사용해도 상관 ..
              </RelatedPostContentsText>
            </RelatedPostContents>
            <RelatedPostContentsBottom>
              <PostBottomRepliesBox>
                <PostBottomRepliesImg />
                <PostBottomRepliesText>28 replies</PostBottomRepliesText>
              </PostBottomRepliesBox>
              <MiddleDot />
              <PostBottomViewsBox>
                <PostBottomViewsImg />
                <PostBottomViewsText>875 views</PostBottomViewsText>
              </PostBottomViewsBox>
            </RelatedPostContentsBottom>
          </RelatedPostEach>

          <RelatedPostEach>
            <RelatedPostContents>
              <RelatedPostContentsTitle>
                서버 개발 시 언어는 어떤걸로
              </RelatedPostContentsTitle>
              <RelatedPostContentsText>
                안녕하세요. 서버 개발시에는 저스팩 서버로 최대 효율을 내려면
                node로 가야할거같은데 제가 주 언어가 자바라서 고민입니다. 서버는
                어떤 프레임워크로 구성 ..
              </RelatedPostContentsText>
            </RelatedPostContents>
            <RelatedPostContentsBottom>
              <PostBottomRepliesBox>
                <PostBottomRepliesImg />
                <PostBottomRepliesText>28 replies</PostBottomRepliesText>
              </PostBottomRepliesBox>
              <MiddleDot />
              <PostBottomViewsBox>
                <PostBottomViewsImg />
                <PostBottomViewsText>875 views</PostBottomViewsText>
              </PostBottomViewsBox>
            </RelatedPostContentsBottom>
          </RelatedPostEach>

          <RelatedPostEach>
            <RelatedPostContents>
              <RelatedPostContentsTitle>
                koreanjson 관련 사이트가 접속이 안되어 postman으로 실행이 안 ..
              </RelatedPostContentsTitle>
              <RelatedPostContentsText>
                koreanjson 관련 사이트가 접속이 안되어 postman으로 실행이
                안되네요
              </RelatedPostContentsText>
            </RelatedPostContents>
            <RelatedPostContentsBottom>
              <PostBottomRepliesBox>
                <PostBottomRepliesImg />
                <PostBottomRepliesText>28 replies</PostBottomRepliesText>
              </PostBottomRepliesBox>
              <MiddleDot />
              <PostBottomViewsBox>
                <PostBottomViewsImg />
                <PostBottomViewsText>875 views</PostBottomViewsText>
              </PostBottomViewsBox>
            </RelatedPostContentsBottom>
          </RelatedPostEach>
        </RelatedPostsList>
      </RelatedPostsContainer>
    </>
  );
};

export default Post_RelatedPosts;
