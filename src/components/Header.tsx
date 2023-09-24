import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <img src="/assets/images/vector/logo.svg" alt="" />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  width: 100%;
  padding: 3rem 0;
`;

export default Header;
