/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */

// chakra team recommedation

import { Button } from '@chakra-ui/core';
import { ButtonProps } from '@chakra-ui/core/dist/Button';
import * as React from 'react';
import {
  Link as ReactRouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom';

type ButtonLinkProps = ButtonProps & RouterLinkProps;

const ButtonLink: React.FC<ButtonLinkProps> = React.forwardRef(
  (props: ButtonLinkProps, ref: React.Ref<any>) => (
    <Button ref={ref} as={ReactRouterLink} {...props} />
  )
);

export default ButtonLink;
