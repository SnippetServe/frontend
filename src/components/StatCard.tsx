import { Stack, Text } from '@chakra-ui/core';
import React from 'react';

type StatCardProps = {
  number: string;
  title: string;
  bg: string;
};

function StatCard({ number, title, bg }: StatCardProps) {
  return (
    <Stack
      justifyContent="center"
      w={['200px', '250px', '300px']}
      h={['260px', '250px', '300px']}
      mb={{ xs: '2em' }}
      textAlign="center"
      bg={bg}
      boxShadow="0 4px 6px 0 hsla(0, 0%, 0%, 0.2)"
      borderRadius="3px"
    >
      <Text fontSize="mega" fontWeight="bold">
        {number}
      </Text>
      <Text pb="1em" fontWeight="bold" fontSize="2xl">
        {title}
      </Text>
    </Stack>
  );
}

export default StatCard;
