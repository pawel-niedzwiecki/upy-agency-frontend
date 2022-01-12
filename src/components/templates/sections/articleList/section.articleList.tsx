import lodash from "lodash";
import Star from "assets/media/icon/star.svg";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import StarEmpty from "assets/media/icon/starEmpty.svg";
import React, { useContext, useState, useEffect } from "react";
import { Button, ButtonInLink } from "components/atoms/button/component.button";
import { SquareConent } from "components/atoms/animation/index.comonent.animation";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import {
  Section,
  SelectBox,
  List,
  Item,
  Header,
  Article,
  ArticleImage,
  ArticleTitle,
  ArticleTags,
  Tag,
  AuthorBox,
  BoxAvatar,
  AuthorBoxData,
  AuthorBoxName,
  AuthorBoxDataAdded,
  AuthorBoxRangeArticle,
  AuthorBoxRangeArticleStar,
} from "./section.articleList.style";

const SectionArticleListComponent = () => {
  const [sendRequest, setSendRequest] = useState(false);
  const [activeMobileSticky, setActiveMobileSticky] = useState(false);

  const { circle, executions } = useStaticQuery(
    graphql`
      query {
        circle: file(name: { eq: "circle" }) {
          id
          name
          publicURL
        }
      }
    `
  );

  const calcDate = (addDate: Date) => {
    const daysHavePassedSinceDonation: number = Math.floor((new Date().getTime() - new Date(addDate).getTime()) / 86400000);
    if (daysHavePassedSinceDonation == 0) return "dziś ";
    else if (daysHavePassedSinceDonation == 1) return "wczoraj ";
    else if (daysHavePassedSinceDonation == 2) return "przedwczoraj";
    else if (daysHavePassedSinceDonation > 2 && daysHavePassedSinceDonation <= 7) return "tydzień temu";
    else if (daysHavePassedSinceDonation > 7 && daysHavePassedSinceDonation <= 14) return "dwa tygodnie temu";
    else if (daysHavePassedSinceDonation > 14 && daysHavePassedSinceDonation <= 21) return "trzy tygodnie temu";
    else if (daysHavePassedSinceDonation > 21 && daysHavePassedSinceDonation <= 31) return "miesiac temu";
    else if (daysHavePassedSinceDonation > 31 && daysHavePassedSinceDonation <= 365) return "kilka miesięcy temu";
    else if (daysHavePassedSinceDonation > 365 && daysHavePassedSinceDonation <= 730) return "rok temu";
    else return "kilka lat temu";
  };

  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <SelectBox className={activeMobileSticky ? "sticky" : null}>
              <Header>Popularne Tagi</Header>
              <List>
                <Item>
                  <Link to="/">
                    <span>#</span>Wszystko
                  </Link>
                  <Link to="/">
                    <span>#</span>Pozycjonwoanie
                  </Link>
                  <Link to="/">
                    <span>#</span>Adwords
                  </Link>
                  <Link to="/">
                    <span>#</span>Optymalizacja
                  </Link>
                </Item>
              </List>
            </SelectBox>
          </Col>
          <Col xs={12} md={8} lg={9} style={{ zIndex: 1 }}>
            <Row>
              <Col xs={12}>
                <Article>
                  <ArticleImage></ArticleImage>
                  <ArticleTitle>Uzupełnianie komend Git na Mac OS X</ArticleTitle>
                  <ArticleTags>
                    <Tag>
                      <span>#</span>css
                    </Tag>
                  </ArticleTags>
                </Article>
                <AuthorBox>
                  <BoxAvatar>{/* <GatsbyImage alt={art.users_permissions_user.username} image={art.users_permissions_user.avatar.localFile.childImageSharp.gatsbyImageData} /> */}</BoxAvatar>
                  <AuthorBoxData>
                    <AuthorBoxName>Paweł Niedźwiecki</AuthorBoxName>
                    <AuthorBoxDataAdded>{calcDate(new Date())}</AuthorBoxDataAdded>
                    <AuthorBoxRangeArticle>
                      <AuthorBoxRangeArticleStar>
                        <Star />
                      </AuthorBoxRangeArticleStar>
                      <AuthorBoxRangeArticleStar>
                        <Star />
                      </AuthorBoxRangeArticleStar>
                      <AuthorBoxRangeArticleStar>
                        <Star />
                      </AuthorBoxRangeArticleStar>
                      <AuthorBoxRangeArticleStar>
                        <Star />
                      </AuthorBoxRangeArticleStar>
                      <AuthorBoxRangeArticleStar>
                        <StarEmpty />
                      </AuthorBoxRangeArticleStar>
                    </AuthorBoxRangeArticle>
                  </AuthorBoxData>
                </AuthorBox>
                <Link to={`b/a/${lodash.kebabCase(lodash.deburr("title"))}`} className="link" title="czytaj dalej">
                  CZYTAJ DALEJ
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

// export component
export default SectionArticleListComponent;
