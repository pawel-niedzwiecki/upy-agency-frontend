import styled, { css } from "styled-components";
import { Link } from "gatsby";

export const Section = styled.section`
  padding: 2rem 0;

  @media all and (max-width: 767px) {
    .menu {
      left: 0;
      bottom: 0;
      width: 100%;
      z-index: 99;
      display: flex;
      position: fixed;
      background: ${({ theme }) => theme.colorGray};
      padding: ${({ theme }) => theme.break.big} ${({ theme }) => theme.break.main};
    }
  }
`;

export const SelectBox = styled.div`
  left: 0;
  bottom: 0;
  top: 8rem;
  width: 100%;
  z-index: 10;
  display: flex;
  position: sticky;
  align-items: center;

  @media all and (min-width: 768px) {
    flex-wrap: wrap;
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

type ItemType = {
  active?: boolean;
};

export const Item = styled.li<ItemType>`
  position: relative;

  padding-right: ${({ theme }) => theme.break.main};

  @media all and (min-width: 768px) {
  }

  a {
    display: block;
    font-size: 1.4rem;
    white-space: nowrap;
    border-radius: 0.3rem;
    padding: ${({ theme }) => theme.break.main};

    ${({ active, theme }) =>
      active
        ? css`
            cursor: no-drop;
            color: ${theme.colorWhite};
            background: ${theme.colorBlack};
          `
        : null}

    span {
      opacity: 0.4;
    }

    @media all and (min-width: 768px) {
      padding: ${({ theme }) => theme.break.main} 0;
    }
  }
`;

export const Article = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  overflow: hidden;
  position: relative;
  border-radius: 0.3rem;
  flex-direction: column;
  background: ${({ theme }) => theme.colorGray};
  margin-bottom: ${({ theme }) => theme.break.big};
`;

export const ArticleImage = styled(Link)`
  width: 100%;
  height: 25rem;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media all and (min-width: 768px) {
    height: 40rem;
  }
`;

export const ArticleContentBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  padding: ${({ theme }) => theme.break.big};

  .link {
    margin-left: auto;
    font-weight: bold;
    padding-top: ${({ theme }) => theme.break.big};
  }
`;

export const ArticleTitle = styled.h2`
  width: 100%;
  font-size: 3.6rem;
  font-weight: bold;
`;

export const ArticleTags = styled.ul`
  width: 100%;
  display: flex;
  padding: ${({ theme }) => theme.break.main} 0;
`;

export const Tag = styled.li`
  position: relative;
  padding-right: ${({ theme }) => theme.break.main};
  span {
    opacity: 0.4;
  }
`;

export const AuthorBox = styled.div`
  flex: 100%;
  display: flex;
  padding: ${({ theme }) => theme.break.big} 0;
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
  font-weight: bold;
`;

export const AuthorBoxDataAdded = styled.p`
  width: 100%;
  display: block;
  font-size: 1rem;
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
    fill: ${({ theme }) => theme.colorWhite};
  }
`;

export const Description = styled.div`
  width: 100%;
  line-height: 1.5;
  text-align: left;
  overflow: hidden;
  position: relative;
  padding: ${({ theme }) => theme.break.main} 0;

  a {
    font-weight: bold;
  }

  p {
    display: block;
    padding-bottom: ${({ theme }) => theme.break.big};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 2;
    font-weight: bold;
  }

  h1 {
    font-size: 3.6rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2.6rem;
  }

  h4 {
    font-size: 2.4rem;
  }

  h5 {
    font-size: 2rem;
  }

  h6 {
    font-size: 1.6rem;
  }

  ul {
    list-style: inherit;
    padding: ${({ theme }) => theme.break.main} ${({ theme }) => theme.break.big};
  }

  ol {
    list-style: decimal-leading-zero;
    padding: ${({ theme }) => theme.break.main} 3rem;
  }

  ul,
  ol {
    li {
      padding: ${({ theme }) => theme.break.small} 0;
    }
  }
`;

export const ImgeBox = styled.div`
  width: 100%;
  display: block;
  padding: 4rem 0;
  position: relative;

  @media all and (min-width: 768px) {
    padding: 6rem 0;
  }

  img {
    width: 100%;
  }
`;
