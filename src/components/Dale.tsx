import * as React from 'react';

interface DaleProps {
  compiler: string;
  framework: string;
}

const Dale = ({ compiler, framework }: DaleProps) => (
  <h1>
    Dale from {compiler} and {framework}!
  </h1>
);

export default Dale;
