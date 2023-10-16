import styled from "styled-components";

const MainSection = ({ children }) => {
  return <StyledMain>{children}</StyledMain>;
};

export default MainSection;

const StyledMain = styled.div`
  min-height: 80vh;
  margin-bottom: 10px;
  background: transparent linear-gradient(180deg, #f1f8ff 0%, #ffffff 100%) 0%
    0% no-repeat padding-box;
`;
