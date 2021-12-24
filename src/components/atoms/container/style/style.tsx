// Import plugin
import styled from "styled-components";

// TypeScript for Props
interface Props {
  size?: string;
}

// Create new style
const Container = styled.div<Props>`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-left: ${({ theme }) => theme.break.main};
  padding-right: ${({ theme }) => theme.break.main};
  max-width: ${({ theme, size }) => (size === "full" ? "100%" : theme.max_width)};
`;

// Export new style
export default Container;
