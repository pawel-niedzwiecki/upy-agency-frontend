import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  flex-direction: row;
  box-sizing: border-box;
  margin-left: ${({ theme }) => `-${theme.break.main}`};
  margin-right: ${({ theme }) => `-${theme.break.main}`};
`;

export default Row;
