import React from "react";
import lodash from "lodash";
import Star from "assets/media/icon/star.svg";
import StarEmpty from "assets/media/icon/starEmpty.svg";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import {
  Section,
  Title,
  BoxListArticle,
  Article,
  TitleArticle,
  ListTags,
  Tag,
  DescriptionArticle,
  AuthorBox,
  BoxAvatar,
  AuthorBoxData,
  AuthorBoxName,
  AuthorBoxDataAdded,
  AuthorBoxRangeArticle,
  AuthorBoxRangeArticleStar,
} from "./section.lastArticleOnBlog.style";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";

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

const SectionLastArticleOnBlogComponent = () => {
  const { articles, theyTrustedUses } = useStaticQuery(
    graphql`
      query {
        articles: allStrapiBlogs {
          nodes {
            id
            title
            tags {
              id
              title
            }
            excerpt
            users_permissions_user {
              id
              username
              avatar {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
            }
            createdAt
          }
        }
        theyTrustedUses: allStrapiTheyTrustedUses {
          nodes {
            id
            url
            brand {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    `
  );

  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12}>
            <Title>Ostatnie wpisy na blogu</Title>
          </Col>
        </Row>
      </Container>
      <BoxListArticle>
        <Splide
          options={{
            perPage: 4,
            gap: "3rem",
            breakpoints: {
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              520: {
                perPage: 1,
              },
            },
            perMove: 1,
            type: "slide",
            arrows: false,
            autoplay: true,
            interval: 3000,
            pagination: false,
          }}
        >
          {articles.nodes.map((art: any, index: number) => {
            if (index < 10)
              return (
                <SplideSlide key={art.id} className="slide">
                  <Article>
                    <TitleArticle>{art.title}</TitleArticle>
                    <ListTags>
                      {art.tags.map((tag: any) => {
                        return (
                          <Tag key={tag.id}>
                            <span>#</span>
                            {tag.title}
                          </Tag>
                        );
                      })}
                    </ListTags>
                    <DescriptionArticle>{art.excerpt}</DescriptionArticle>
                    <AuthorBox>
                      <BoxAvatar>
                        <GatsbyImage alt={art.users_permissions_user.username} image={art.users_permissions_user.avatar.localFile.childImageSharp.gatsbyImageData} />
                      </BoxAvatar>
                      <AuthorBoxData>
                        <AuthorBoxName>{art.users_permissions_user.username}</AuthorBoxName>
                        <AuthorBoxDataAdded>{calcDate(art.createdAt)}</AuthorBoxDataAdded>
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
                    <Link to={`b/a/${lodash.kebabCase(lodash.deburr(art.title))}`} className="link" title="czytaj dalej">
                      CZYTAJ DALEJ
                    </Link>
                  </Article>
                </SplideSlide>
              );
          })}
        </Splide>
      </BoxListArticle>
    </Section>
  );
};

export default SectionLastArticleOnBlogComponent;
