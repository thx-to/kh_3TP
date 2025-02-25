import styled from "styled-components";

export const Wrap = styled.div.attrs({
  id: "wrap",
})`
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  justify-content: center;
  align-items: top;
  align-items: center;
`;

export const Container = styled.div.attrs({
  id: "container",
})`
  max-width: 1280px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 0;
  gap: 25px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`;
export const IconOuterContainer = styled.div.attrs({
  id: "iconoutercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
  /* &::after {
    content: "";
    margin-top: 50px;
    width: 100%;
    height: 1px;
    background-color: black;
    transform: scaleY(0.5);
  } */
`;
export const IconContainer1 = styled.div.attrs({
  id: "iconcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 25px;
  margin-bottom: 25px;
`;
export const IconContainer2 = styled.div.attrs({
  id: "iconcontainer2",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 25px;
  margin-bottom: 25px;
`;
export const EachIconContainer = styled.div.attrs({
  id: "eachiconcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

export const JavaIcon = styled.div.attrs({
  id: "javaicon",
})`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  background-image: url("/images/program/java_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;

export const PythonIcon = styled.div.attrs({
  id: "pythonicon",
})`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  background-image: url("/images/program/python_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;
export const CIcon = styled.div.attrs({
  id: "cicon",
})`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  background-image: url("/images/program/c_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;
export const CPlusIcon = styled.div.attrs({
  id: "cplusicon",
})`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  background-image: url("/images/program/cplus_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;
export const JSIcon = styled.div.attrs({
  id: "jsicon",
})`
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: center;
  background-image: url("/images/program/js_full.png");
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;

export const IconTextContainer = styled.div.attrs({
  id: "icontextcontainer",
})`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const IconTitle = styled.div.attrs({
  id: "icontext",
})`
  align-items: left;
  font-size: 16px;
  font-family: "medium", sans-serif;
  color: black;
`;

export const IconContents = styled.div.attrs({
  id: "iconcontents",
})`
  align-items: left;
  font-size: 14px;
  font-family: "regular", sans-serif;
  color: black;
`;

export const CTOuterContainer = styled.div.attrs({
  id: "ctoutercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  gap: 50px;
  &::after {
    content: "";
    margin-top: 50px;
    width: 100%;
    height: 1px;
    background-color: black;
    transform: scaleY(0.5);
  }
`;

export const CTImage = styled.div.attrs({
  id: "ctimage",
})`
  width: 100%;
  height: auto;
  aspect-ratio: 13 / 9; /* 원하는 비율을 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("/images/main/main_ct.jpg");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CTTextContainer = styled.div.attrs({
  id: "cttextcontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
export const CTTitle = styled.div.attrs({
  id: "cttitle",
})`
  width: 100%;
  align-items: left;
  font-size: 24px;
  font-family: "bold", sans-serif;
  color: black;
  text-align: center;
`;

export const CTContents = styled.div.attrs({
  id: "ctcontents",
})`
  width: 100%;
  align-items: left;
  font-size: 16px;
  font-family: "regular", sans-serif;
  color: black;
  text-align: center;
`;

export const CTButton = styled.div.attrs({
  id: "ctbutton",
})`
  width: 200px;
  height: 50px;
  font-size: 16px;
  font-family: "medium", sans-serif;
  color: #333333;
  background-color: #f1f1f1;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #333333;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: #333333;
  }
`;

export const CommunityOuterContainer = styled.div.attrs({
  id: "communityoutercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: top;
  margin-bottom: 50px;
  gap: 25px;
`;

export const CommunityInnerLeft = styled.div.attrs({
  id: "communityinnerleft",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  position: relative;
`;

export const CommunityInnerRight = styled.div.attrs({
  id: "communityinnerright",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  position: relative;
`;

export const CommunityTitle = styled.div.attrs({
  id: "communitytitle",
})`
  padding: 10px 30px;
  align-items: left;
  font-size: 24px;
  font-family: "bold", sans-serif;
  color: black;
  text-align: center;
  /* border-radius: 30px;
  border: 1px solid #333333; */
`;

export const RoadmapOuterContainer = styled.div.attrs({
  id: "roadmapoutercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: top;
  margin-bottom: 50px;
  gap: 25px;
`;

export const RoadmapImage = styled.div.attrs({
  id: "roadmapimage",
})`
  width: 100%;
  height: auto;
  aspect-ratio: 13 / 9; /* 원하는 비율을 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("/images/main/main_roadmap.jpg");
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const RoadmapInnerContainer = styled.div.attrs({
  id: "roadmapinnercontainer",
})`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const RoadmapInnerPart = styled.div.attrs({
  id: "roadmapinnerpart",
})`
  width: 50%;
  display: flex;
  flex-direction: row;
  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const RoadmapEachContents = styled.div.attrs({
  id: "roadmapeachcontents",
})`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const RoadmapIcon = styled.div.attrs({
  id: "roadmapicon",
})`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f1f1f1;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const RoadnmapTitle = styled.div.attrs({
  id: "roadmaptitle",
})`
  width: 100%;
  align-items: left;
  font-size: 18px;
  font-family: "bold", sans-serif;
  color: black;
  text-align: center;
  cursor: pointer;
`;

export const RoadmapContents = styled.div.attrs({
  id: "roadmapcontents",
})`
  width: 100%;
  align-items: left;
  font-size: 14px;
  font-family: "regular", sans-serif;
  color: black;
  text-align: center;
  cursor: pointer;
`;
