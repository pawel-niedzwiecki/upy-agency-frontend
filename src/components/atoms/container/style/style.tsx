// Import plugin
import styled from "styled-components";

// TypeScript for Props
type ContainerTypes = {
  size?: string;
};

// Create new style
const Container = styled.div<ContainerTypes>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: ${({ theme, size }) => (size === "full" ? "100%" : theme.max_width)};
`;

// Export new style
export default Container;
