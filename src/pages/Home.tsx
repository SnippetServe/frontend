import { Box, Flex, Heading, Image, Stack, Text } from '@chakra-ui/core';
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
import CustomLinkButton from '../components/CustomLinkButton';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import RepeatedGrid from '../components/RepeatGrid';
import StatCard from '../components/StatCard';
import mockData from './mockData';

// TODO: refactor

function Home() {
  const extensions = [VsCodeBig, AndroidBig, AtomBig, IntelIJBig, PycharmBig];
  return (
    <Stack h="100%">
      {/* --- MAIN SECTION  --- */}
      <Box h="100vh" position="relative">
        <Box
          position="absolute"
          top={0}
          w="100%"
          h={['75%', '65%']}
          backgroundColor="gray.700"
          zIndex={-1}
        />
        <Header />
        <Hero />
        <Box w={['auto', '700px']} m={['1em auto', 'auto']}>
          <Image size="auto" src={heroImg} />
        </Box>
      </Box>
      {/* --- MAIN SECTION --- */}

      {/* Snippets Showcase Panel */}
      <Stack
        position="relative"
        minHeight="100vh"
        justifyContent="center"
        mt="2em"
      >
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
        <CustomLinkButton
          variant="solid"
          variantColor="blue"
          w="150px"
          p="1.5em"
          m="2em auto"
          to="/snippets"
        >
          Browse More
        </CustomLinkButton>
        <RepeatedGrid top="24%" left="3%" />
      </Stack>
      {/* Snippets Showcase Panel */}

      {/* Extensions panel */}
      <Stack spacing={10} bg="#F4F4F4">
        <Text fontSize="4xl" textAlign="center" mt="1em" fontWeight="bold">
          Extensions
        </Text>
        <Flex
          flexWrap="wrap"
          m="0 auto 4em auto"
          w={['80%', '70%', '50%']}
          justifyContent="space-around"
        >
          {extensions.map((extension, index) => (
            <Image
              src={extension}
              size={['90px', '110px', '130pxk']}
              fill="red"
              // eslint-disable-next-line react/no-array-index-key
              key={index}
            />
          ))}
        </Flex>
      </Stack>
      {/* Extension  panel */}

      {/* Stats Panel */}
      <Stack
        alignItems="center"
        justifyContent="center"
        h={['100%', '70vh']}
        color="white"
        position="relative"
        mt="2em"
      >
        <RepeatedGrid left="10%" top="15%" />
        <Flex
          w="80%"
          h="100%"
          m="auto"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
        >
          <StatCard title="Code snippets" number="86" bg="blue.400" />
          <StatCard title="Extension" number="1" bg="green.400" />
          <StatCard title="Active Contributers" number="12" bg="gray.500" />
        </Flex>
      </Stack>
      {/* Stats Panel */}

      <Footer />
    </Stack>
  );
}

export default Home;
