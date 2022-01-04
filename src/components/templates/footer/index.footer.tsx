import React from "react";
import { Link } from "gatsby";
import Envelope from "assets/media/icon/envelope.svg";
import Phonecall from "assets/media/icon/phonecall.svg";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";
import { Footer, List, Item } from "./index.footer.style";

const FooterComponent = () => {
  return (
    <>
      <Footer>
        <Container>
          <Row>
            <Col xs={12} sm={6} style={{ padding: "1rem" }}>
              <List>
                <Item>
                  <a href="mailto:hello@upy.pl">
                    <Envelope /> hello@uxu.pl
                  </a>
                </Item>
                <Item>
                  <a href="tel:+48888881441">
                    <Phonecall /> 888 881 441
                  </a>
                </Item>
              </List>
            </Col>
            <Col xs={12} sm={6} style={{ display: "flex", padding: "1rem" }}>
              <List style={{ marginLeft: "auto" }}>
                <Item>
                  <Link to="/">Polityka prywatności</Link>
                </Item>
                <Item>
                  <Link to="/">Regulamin</Link>
                </Item>
              </List>
            </Col>
          </Row>
        </Container>
      </Footer>
    </>
  );
};

export default FooterComponent;
