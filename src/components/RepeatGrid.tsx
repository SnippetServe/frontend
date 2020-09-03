/* eslint-disable react/jsx-props-no-spreading */
import { Box, SimpleGrid } from '@chakra-ui/core';
import React from 'react';

function RepeatGrid({ ...props }: any) {
  const boxes = () => {
    const l = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 20; i++) {
      l.push(<Box key={i} bg="gray.100" rounded="50%" w="20px" h="20px" />);
    }
    return l;
  };
  return (
    <SimpleGrid
      columns={5}
      spacing="5px"
      position="absolute"
      zIndex={-1}
      w="200px"
      h="200px"
      alignItems="center"
      justifyItems="center"
      display={{ xs: 'none', md: 'none', lg: 'grid' }} // remove for small screens
      {...props}
    >
      {boxes()}
    </SimpleGrid>
  );
}

export default RepeatGrid;
