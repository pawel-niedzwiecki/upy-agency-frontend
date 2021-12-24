// Import plugin
import styled from "styled-components";

// Create new style
const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  flex-direction: row;
  box-sizing: border-box;
  margin-left: ${({ theme }) => `-${theme.break.main}`};
  margin-right: ${({ theme }) => `-${theme.break.main}`};
`;

// Export new style
export default Row;
