import styled from "styled-components";

export const BreadcrumbBox = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding: 2rem 1rem;
  border-radius: 0.3rem;

  background: linear-gradient(90deg, rgb(25, 32, 55) 20%, rgb(10, 18, 42) 100%);
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
    color: ${({ theme }) => theme.colorWhite};

    &:hover {
      color: ${({ theme }) => theme.colorAqua};
    }
  }

  &::after {
    right: 0.8rem;
    content: "/";
    position: absolute;
    color: ${({ theme }) => theme.colorGray};
  }

  &:nth-last-child(1) {
    &::after {
      display: none;
    }
  }
`;
