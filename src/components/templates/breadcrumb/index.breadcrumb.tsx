import React from "react";
import { Link } from "gatsby";
import { BreadcrumbBox, ListPath, Path } from "./index.breadcrumb.style";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const BreadcrumbComponent = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <BreadcrumbBox>
            <ListPath>
              <Path>
                <Link to="/">home</Link>
              </Path>
              <Path>
                <Link to="/">realizacje</Link>
              </Path>
            </ListPath>
          </BreadcrumbBox>
        </Col>
      </Row>
    </Container>
  );
};

export default BreadcrumbComponent;
