import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text
} from '@chakra-ui/core';
import React from 'react';
import heroImg from '../assets/hero.svg';
import {
  AndroidBig,
  AtomBig,
  IntelIJBig,
  PycharmBig,
  VsCodeBig
} from '../assets/images';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RepeatedGrid from '../components/RepeatGrid';
import mockData from './mockData';

// TODO: refactor

function Home() {
  return (
    <Stack h="100%">
      {/* --- MAIN SECTION  --- */}
      <Box h="100vh">
        <Box bg="gray.700" h={['75vh', '65vh']}>
          <Header />
          <Hero />
          <Box w={['auto', '700px']} ml="auto" mr="auto" mt={['3em', 'auto']}>
            <Image size="auto" p={0} src={heroImg} />
          </Box>
        </Box>
      </Box>
      {/* --- MAIN SECTION --- */}

      {/* Snippets Showcase Panel */}
      <Stack position="relative" minHeight="100vh" justifyContent="center">
        <Heading textAlign="center" pb="2em">
          Latest Code Snippets
        </Heading>
        <Flex
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
          m="auto"
          mt="1.5em"
          w="90%"
        >
          {mockData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Flex>
        <Button
          variant="solid"
          variantColor="blue"
          w="150px"
          p="1.5em"
          m="2em auto"
        >
          Browse More
        </Button>
        <RepeatedGrid />
      </Stack>
      {/* Snippets Showcase Panel */}

      {/* Extensions panel */}
      <Stack spacing={10} bg="#F4F4F4">
        <Text fontSize="4xl" textAlign="center" mt="2em" fontWeight="bold">
          Extensions
        </Text>
        <Flex
          flexWrap="wrap"
          m="3em auto"
          w="80%"
          justifyContent="space-around"
        >
          <Image size={['100px', '130px', '150px']} src={VsCodeBig} />
          <Image size={['100px', '130px', '150px']} src={AndroidBig} />
          <Image size={['100px', '130px', '150px']} src={AtomBig} />
          <Image size={['100px', '130px', '150px']} src={IntelIJBig} />
          <Image size={['100px', '130px', '150px']} src={PycharmBig} />
        </Flex>
      </Stack>
      {/* Extension  panel */}

      {/* Stats Panel */}
      <Stack
        alignItems="center"
        justifyContent="center"
        h={['100%', '70vh']}
        color="white"
      >
        <Flex
          w="100%"
          h="100%"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
        >
          <Stack
            justifyContent="center"
            w="350px"
            h="350px"
            bg="blue.400"
            textAlign="center"
          >
            <Text fontSize="mega" fontWeight="bold">
              33
            </Text>
            <Text pb="1em" fontWeight="bold" fontSize="2xl">
              Code Snippets
            </Text>
          </Stack>
          <Stack
            justifyContent="center"
            w="350px"
            h="350px"
            bg="yellow.300"
            textAlign="center"
          >
            <Text fontSize="mega" fontWeight="bold">
              10
            </Text>
            <Text pb="1em" fontWeight="bold" fontSize="2xl">
              Extensions
            </Text>
          </Stack>
          <Stack
            justifyContent="center"
            w="350px"
            h="350px"
            bg="gray.500"
            textAlign="center"
          >
            <Text fontSize="mega" fontWeight="bold">
              100
            </Text>
            <Text pb="1em" fontWeight="bold" fontSize="2xl">
              Active Contributers
            </Text>
          </Stack>
        </Flex>
      </Stack>
      {/* Stats Panel */}

      <Footer />
    </Stack>
  );
}

export default Home;
