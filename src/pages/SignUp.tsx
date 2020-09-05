import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/core';
import { motion } from 'framer-motion';
import React from 'react';
import { ImGithub, ImGoogle3 } from 'react-icons/im';
import SidePanel from '../components/SidePanel';
import SignUpForm from '../components/SignUpForm';

const transition: any = { duration: 0.6 };

const MotionBox = motion.custom(Flex);
function SignUp() {
  return (
    <Flex h="100vh">
      <SidePanel currentPage="signup" />
      <MotionBox
        h="100%"
        w={['100%', '85%', '60%']}
        alignItems="center"
        justifyContent="center"
        m="auto"
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
      >
        <Stack alignItems="center" justifyContent="center" h="70%">
          <Heading
            color="blue.500"
            fontWeight="bold"
            fontSize={['3xl', '4xl', '5xl']}
            textAlign="center"
          >
            Create Account
          </Heading>
          <Flex mt="2em" justifyContent="space-around" w="150px">
            {/* I gave temporary links */}
            <Link href="https://www.google.com">
              <Box
                as={ImGoogle3}
                size="40px"
                aria-label="google"
                color="gray.700"
              />
            </Link>
            <Link href="https://www.github.com">
              <Box
                as={ImGithub}
                color="gray.700"
                size="40px"
                aria-label="google"
              />
            </Link>
          </Flex>
          <Text mt="2em" fontWeight="bold">
            OR
          </Text>
          <SignUpForm />
        </Stack>
      </MotionBox>
    </Flex>
  );
}

export default SignUp;
