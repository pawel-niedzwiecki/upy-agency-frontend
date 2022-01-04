import styled from "styled-components";

export const Section = styled.section`
  padding: 10rem 0;
`;

export const Title = styled.h2`
  font-size: 2.4rem;
`;

export const BoxListArticle = styled.div`
  margin: 0 auto;
  padding: 5rem 0;
  max-width: 160rem;
`;

export const Article = styled.div`
  padding: 4rem;
  display: flex;
  flex-wrap: wrap;
  background: ${({ theme }) => theme.colorBlue};

  .link {
    margin-left: auto;
  }
`;
export const TitleArticle = styled.h2`
  flex: 100%;
  font-size: 2rem;
  padding-bottom: 1rem;
  color: ${({ theme }) => theme.colorWhite};
`;

export const ListTags = styled.ul`
  flex: 100%;
  display: flex;
  padding-bottom: 1rem;
`;

export const Tag = styled.li`
  font-size: 1.2rem;
  padding-right: 1rem;
  color: ${({ theme }) => theme.colorWhite};

  span {
    color: ${({ theme }) => theme.colorPurple};
  }
`;

export const DescriptionArticle = styled.p`
  flex: 100%;
  font-size: 1.4rem;
  padding-bottom: 2rem;
  color: ${({ theme }) => theme.colorWhite};
`;

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
