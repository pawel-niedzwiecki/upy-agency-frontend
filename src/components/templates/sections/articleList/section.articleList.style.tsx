import styled, { css } from "styled-components";

export const Section = styled.section``;

export const SelectBox = styled.div`
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  position: fixed;
  align-items: center;
  border-radius: 0.3rem;
  padding: ${({ theme }) => theme.break.big};
  background: ${({ theme }) => theme.colorBlue};
  border-top: 0.3rem solid ${({ theme }) => theme.colorBorder};

  @media all and (min-width: 768px) {
    border-top: none;
    position: relative;
    display: inline-block;
  }
`;

export const List = styled.ul`
  width: 100%;
  display: flex;
  overflow: scroll;
  margin-left: 2rem;
  position: relative;

  @media all and (min-width: 768px) {
    width: 100%;
    display: block;
    overflow: auto;
    margin-left: 0;
  }
`;

export const Item = styled.li`
  position: relative;

  a {
    display: block;
    font-size: 1.4rem;
    white-space: nowrap;
    padding: ${({ theme }) => theme.break.main} ${({ theme }) => theme.break.big};

    @media all and (min-width: 768px) {
      margin: ${({ theme }) => theme.break.main} 0;
      padding: ${({ theme }) => theme.break.main} ${({ theme }) => theme.break.big};
    }

    &:hover {
      background: ${({ theme }) => theme.colorBlueDark};
    }
  }
`;

export const Header = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  white-space: nowrap;

  @media all and (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

export const Article = styled.div``;
export const ArticleImage = styled.div``;
export const ArticleTitle = styled.div``;
export const ArticleTags = styled.div``;
export const Tag = styled.div``;

export const AuthorBox = styled.div`
  flex: 100%;
  display: flex;
  padding-bottom: 2rem;
`;
export const BoxAvatar = styled.div`
  max-width: 6rem;
  max-height: 6rem;
  min-width: 6rem;
  min-height: 6rem;
  display: block;
  overflow: hidden;
  position: relative;
  margin-right: 2rem;
  border-radius: 100%;
`;
export const AuthorBoxData = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AuthorBoxName = styled.p`
  width: 100%;
  display: block;
  font-size: 1.4rem;
`;

export const AuthorBoxDataAdded = styled.p`
  width: 100%;
  display: block;
  font-size: 1.4rem;
  text-transform: uppercase;
`;

export const AuthorBoxRangeArticle = styled.ul`
  display: flex;
  padding-top: 0.5rem;
`;

export const AuthorBoxRangeArticleStar = styled.li`
  padding-right: 0.5rem;
  svg {
    width: 1.5rem;
    fill: ${({ theme }) => theme.colorAqua};
  }
`;
