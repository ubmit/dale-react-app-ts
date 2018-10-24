import * as React from 'react';

interface IDaleProps {
  compiler: string;
  framework: string;
}

const Dale = ({ compiler, framework }: IDaleProps) => (
  <h1>
    Dale from {compiler} and {framework}!
  </h1>
);

export default Dale;
