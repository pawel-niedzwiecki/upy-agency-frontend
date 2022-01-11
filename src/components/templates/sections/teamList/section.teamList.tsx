import Img from "gatsby-image";
import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useEffect } from "react";
import { ButtonSubmit } from "components/atoms/button/component.button";
import { emailRegex, telRegex, nameRegex } from "assets/regex/index.regex";
import { Input, CheckBox, TextArea } from "components/molecules/form/index.form";
import { Row, Col, Container } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Section, Title, Description, BoxSticky, List, Item, ScrolTo, Worker, Avatar, WorkerName, WorkerCompentention } from "./section.teamList.style";

const SectionTeamListComponent = ({ data: { teams } }: any) => {
  const [activeCompetition, setActiveCompetition] = useState("all");
  const [teamsSelect, setTeamsSelect] = useState(teams);

  const { competitions } = useStaticQuery(
    graphql`
      query {
        competitions: allStrapiCompetitions {
          nodes {
            id
            title
            strapiId
            users {
              id
            }
          }
        }
      }
    `
  );

  useEffect(() => {
    if (activeCompetition === "all") return setTeamsSelect(teams);
    return setTeamsSelect(teams.filter((el: any) => el.competition === activeCompetition));
  }, [activeCompetition]);

  return (
    <Section>
      <Container>
        <Row>
          <Col xs={12} lg={3}></Col>
          <Col xs={12} lg={9}>
            <Title>Nasz zespół</Title>
            <Description>
              Na pokładzie K2 Precise spotykają się humaniści i umysły ścisłe, wizjonerzy, liderzy i organizatorzy. Rozumiemy, że odmienna perspektywa każdego z nas wnosi bogactwo i nas rozwija. To co nas łączy, to ciekawość świata oraz
              fascynacja tym, jakie możliwości daje cyfrowy świat.
            </Description>
          </Col>
          <Col xs={12} md={3} className="menu">
            <BoxSticky>
              <List>
                <Item>
                  <ScrolTo className={activeCompetition === "all" ? "active" : ""} onClick={() => setActiveCompetition("all")}>
                    {`Wszyscy ( ${teams.length} )`}
                  </ScrolTo>
                </Item>
                {competitions.nodes.map((competition: any) => {
                  const workersAmount = competition.users.length;
                  if (!workersAmount) return null;
                  return (
                    <Item key={competition.id}>
                      <ScrolTo className={activeCompetition === competition.strapiId ? "active" : ""} onClick={() => setActiveCompetition(competition.strapiId)}>
                        {`${competition.title} ( ${workersAmount} )`}
                      </ScrolTo>
                    </Item>
                  );
                })}
              </List>
            </BoxSticky>
          </Col>
          <Col xs={12} md={9} style={{ paddingTop: "2rem" }}>
            <Row>
              {teamsSelect.map((worker: any) => {
                return (
                  <Col xs={12} md={6} lg={4} key={worker.id}>
                    <Worker>
                      <Avatar>
                        <Img fluid={worker.avatar.localFile.childImageSharp.fluid} />
                      </Avatar>
                      <WorkerName>{worker.username}</WorkerName>
                      <WorkerCompentention>{competitions.nodes.filter((el: any) => el.strapiId === worker.competition)[0].title}</WorkerCompentention>
                    </Worker>
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

export default SectionTeamListComponent;
