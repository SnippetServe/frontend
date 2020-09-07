/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-children-prop */
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/core';
import React from 'react';

type CustomInputProps = {
  id: string;
  icon: any;
  placeholder: string;
};
function CustomInput({ id, icon, placeholder, ...props }: CustomInputProps) {
  return (
    <InputGroup h="70px" w="100%" m="auto" {...props}>
      <InputLeftElement children={icon} ml="15px" />
      <Input
        id={id}
        type={id === 'password' ? 'password' : ''}
        fontSize="lg"
        variant="filled"
        placeholder={placeholder}
        bg="gray.200"
        {...props}
        h="100%"
        pl="3.5em"
      />
    </InputGroup>
  );
}

export default CustomInput;
