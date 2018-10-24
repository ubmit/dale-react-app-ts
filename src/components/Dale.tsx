import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 10px;
  width: max-content;
  background-color: purple;
  color: whitesmoke;
`;

interface IDaleProps {
  compiler: string;
  framework: string;
}

const Dale = ({ compiler, framework }: IDaleProps) => (
  <Wrapper>
    Dale from {compiler} and {framework}!
  </Wrapper>
);

export default Dale;
