import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed; /* Add this line */
  top: 0; /* Add this line */
  left: 0; /* Add this line */
  width: 100%; /* Add this line */
  z-index: 1000; /* Add this line to ensure it's on top */
  margin: 0 auto;
  display: flex;
  justify-content: space-between; /* Changed from "justify-content: between" to correct the property */
  padding: 1rem 0.25rem;
  color: var(--stone-600);
  background-color: var(--orange-200);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid var(--stone-400);
  height: 113px !important;

  @media (min-width: 640px) {
    padding: 1rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between; /* Changed from "justify-content: between" to correct the property */
  margin: 0 auto;
  padding: 0 0.5rem;
`;

export const LogoLink = styled(Link)`
  z-index: 5000;
  width: 400px !important;
  align-items: center;

  img {
    width: 300px !important;
    height: 86.422px;
    margin-left: 0.75rem;
    max-width: none !important;

    @media screen and (max-width: 468px) {
      width: 250px !important;
      height: 72.0185px;
    }
    @media screen and (max-width: 368px) {
      width: 200px !important;
      height: 57.6148px;
    }
  }
`;

export const NavContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  align-items: flex-end; /* Changed from "align-items: end" to correct the property */
  margin: 0 auto 0 auto;

  > div {
    // Menu container
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
  }
`;
