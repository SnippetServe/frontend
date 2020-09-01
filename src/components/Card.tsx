/* eslint-disable react/jsx-one-expression-per-line */
import { Flex, Image, Stack, Text } from '@chakra-ui/core';
import React from 'react';
import Like from '../assets/like.svg';
import Tag from '../assets/tag.svg';

type CardProp = {
  item: {
    id: number;
    title: string;
    description: string;
    tag: string;
    owner: string;
    score: string;
  };
};

function Card({ item }: CardProp) {
  return (
    <Stack
      bg="white"
      w={['80%', '60%', '450px']}
      h={['250px', '300px', '350px']}
      p="2em"
      fontSize="lg"
      mb="1.5em"
      borderTop="8px solid teal"
      borderRadius="3px"
      boxShadow="0 4px 6px 0 hsla(0, 0%, 0%, 0.2)"
    >
      <Text fontWeight="bold" fontSize={['md', 'lg']}>
        {item.title}
      </Text>
      <Text mt=".5em" flex={1} fontSize={['sm', 'md']}>
        {item.description}
      </Text>
      <Flex alignItems="center">
        <Image size={['20px', '25px']} src={Tag} />
        <Text opacity={0.5} fontSize="xs" ml=".5em" fontWeight="bold">
          {item.tag}
        </Text>
      </Flex>
      <Flex alignItems="center">
        <Text flex={1} fontSize="sm" fontWeight="bold" color="gray.600">
          By: {item.owner}
        </Text>
        <Flex>
          <Text color="blue.300" fontWeight="bold" mr=".5em">
            {item.score}
          </Text>
          <Image size={['20px', '25px']} src={Like} />
        </Flex>
      </Flex>
    </Stack>
  );
}

export default Card;
