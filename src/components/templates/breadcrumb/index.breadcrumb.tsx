import React from "react";
import { Link } from "gatsby";
import { breadcrumbType } from "./index.breadcrumb.type";
import { BreadcrumbBox, ListPath, Path } from "./index.breadcrumb.style";
import { Container, Row, Col } from "components/orgamis/flexboxgrid/index.flexboxgrid";

const BreadcrumbComponent = ({ paths }: breadcrumbType) => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <BreadcrumbBox>
            <ListPath>
              {paths.map((path) => {
                return (
                  <Path key={path.title}>
                    <Link to={path.path}>{path.title}</Link>
                  </Path>
                );
              })}
            </ListPath>
          </BreadcrumbBox>
        </Col>
      </Row>
    </Container>
  );
};

export default BreadcrumbComponent;
