/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */

// found this solution from chakra's github, so i have to disable eslint for file.

import { Link as ChakraLink } from '@chakra-ui/core';
import * as React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

const Link = (props: LinkProps) => (
  // @ts-ignore
  <ChakraLink {...props} as={RouterLink} style={{ textDecoration: 'none' }} />
);

export default Link;
