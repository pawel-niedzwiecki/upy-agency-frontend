import styled from "styled-components";

export const BreadcrumbBox = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  border-radius: 0.3rem;
`;

export const ListPath = styled.ul`
  height: 4rem;
  display: flex;
  overflow: scroll;
  align-items: center;

  @media all and (min-width: 768px) {
    height: auto;
  }
`;
export const Path = styled.li`
  padding-right: 2rem;
  position: relative;
  white-space: nowrap;

  a {
    font-size: 1.4rem;
  }

  &::after {
    top: 0.2rem;
    content: "/";
    right: 0.8rem;
    font-size: 1.4rem;
    position: absolute;
    color: ${({ theme }) => theme.colorGray};
  }

  &:nth-last-child(1) {
    a {
      cursor: no-drop;
      color: ${({ theme }) => theme.colorWhite};
    }
    &::after {
      display: none;
    }
  }
`;
