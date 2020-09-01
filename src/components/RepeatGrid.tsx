import { Box, SimpleGrid } from '@chakra-ui/core';
import React from 'react';

function RepeatGrid() {
  const boxes = () => {
    const l = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 20; i++) {
      l.push(<Box bg="gray.100" rounded="50%" w="20px" h="20px" />);
    }
    return l;
  };
  return (
    <SimpleGrid
      columns={5}
      spacing="5px"
      position="absolute"
      top="23%"
      left="3%"
      zIndex={-1}
      w="200px"
      h="200px"
      alignItems="center"
      justifyItems="center"
    >
      {boxes()}
    </SimpleGrid>
  );
}

export default RepeatGrid;
