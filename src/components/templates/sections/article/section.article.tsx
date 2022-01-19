import lodash from "lodash";
import Star from "assets/media/icon/star.svg";
import Image from "gatsby-image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
  Description,
  ImgeBox,
} from "./section.article.style";

const SectionArticleComponent = ({ data }: any) => {
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

  console.log(data.content);

  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} md={4} lg={3} className="menu">
            <SelectBox>
              <Header>Popularne Tagi</Header>
              <List>
                <Item>
                  <Link to="/b">
                    <span>#</span>Wszystko
                  </Link>
                </Item>
                {tags.nodes.map((tag: any, i: number) => {
                  if (i > 10 || !tag.blogs.length) return null;
                  return (
                    <Item key={tag.id}>
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
              <Col xs={12}>
                <Article>
                  <ArticleImage>
                    <GatsbyImage image={data.cover.localFile.childImageSharp.gatsbyImageData} alt={data.title} />
                  </ArticleImage>
                  <ArticleContentBox>
                    <ArticleTitle>{data.title}</ArticleTitle>
                    <ArticleTags>
                      {data.tags.map((tag: any) => {
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
                        <GatsbyImage alt={data.users_permissions_user.username} image={data.users_permissions_user.avatar.localFile.childImageSharp.gatsbyImageData} />
                      </BoxAvatar>
                      <AuthorBoxData>
                        <AuthorBoxName>{data.users_permissions_user.username}</AuthorBoxName>
                        <AuthorBoxDataAdded>{calcDate(data.updatedAt)}</AuthorBoxDataAdded>
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
                    <Row>
                      {data.content.map((content: any) => {
                        console.log(content);
                        if (content.strapi_component === "content.description")
                          return (
                            <Col xs={12} key={content.id}>
                              <Description>
                                <ReactMarkdown children={content.description} remarkPlugins={[remarkGfm]} />
                              </Description>
                            </Col>
                          );
                        if (content.strapi_component === "content.image") {
                          console.log(content);
                          return (
                            <Col xs={12} key={content.id}>
                              <ImgeBox>
                                <img alt={content.image.alternativeText} src={content.image.url} />
                              </ImgeBox>
                            </Col>
                          );
                        }
                      })}
                    </Row>
                  </ArticleContentBox>
                </Article>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

export default SectionArticleComponent;
