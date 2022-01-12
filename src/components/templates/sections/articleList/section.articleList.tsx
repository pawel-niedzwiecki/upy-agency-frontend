import lodash from "lodash";
import Star from "assets/media/icon/star.svg";
import Image from "gatsby-image";
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
  ArticleContentBox,
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

const SectionArticleListComponent = ({ articles, active }: any) => {
  const { tags } = useStaticQuery(
    graphql`
      query {
        tags: allStrapiTags(sort: { fields: blogs, order: DESC }) {
          nodes {
            id
            title
            blogs {
              id
            }
          }
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
          <Col xs={12} md={4} lg={3} className="menu">
            <SelectBox>
              <Header>Popularne Tagi</Header>
              <List>
                <Item active={active === "all" ? true : false}>
                  <Link to="/b">
                    <span>#</span>Wszystko
                  </Link>
                </Item>
                {tags.nodes.map((tag: any, i: number) => {
                  if (i > 10) return null;
                  return (
                    <Item key={tag.id} active={active === tag.title ? true : false}>
                      <Link to={`/b/t/${lodash.kebabCase(lodash.deburr(tag.title))}`}>
                        <span>#</span>
                        {tag.title}
                      </Link>
                    </Item>
                  );
                })}
              </List>
            </SelectBox>
          </Col>
          <Col xs={12} md={8} lg={9} style={{ zIndex: 1 }}>
            <Row>
              {articles.map((article: any, i: number) => {
                if (i > 10) return null;
                console.log(article);
                return (
                  <Col xs={12} key={article.id}>
                    <Article>
                      <ArticleImage to={`/b/a/${lodash.kebabCase(lodash.deburr(article.title))}`}>
                        <GatsbyImage image={article.cover.localFile.childImageSharp.gatsbyImageData} alt={article.title} />
                      </ArticleImage>
                      <ArticleContentBox>
                        <ArticleTitle>{article.title}</ArticleTitle>
                        <ArticleTags>
                          {article.tags.map((tag: any) => {
                            return (
                              <Tag key={tag.id}>
                                <span>#</span>
                                {tag.title}
                              </Tag>
                            );
                          })}
                        </ArticleTags>

                        <AuthorBox>
                          <BoxAvatar>
                            <GatsbyImage alt={article.users_permissions_user.username} image={article.users_permissions_user.avatar.localFile.childImageSharp.gatsbyImageData} />
                          </BoxAvatar>
                          <AuthorBoxData>
                            <AuthorBoxName>{article.users_permissions_user.username}</AuthorBoxName>
                            <AuthorBoxDataAdded>{calcDate(article.updatedAt)}</AuthorBoxDataAdded>
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
                        <Link to={`/b/a/${lodash.kebabCase(lodash.deburr(article.title))}`} className="link" title="czytaj dalej">
                          CZYTAJ DALEJ
                        </Link>
                      </ArticleContentBox>
                    </Article>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

// export component
export default SectionArticleListComponent;
