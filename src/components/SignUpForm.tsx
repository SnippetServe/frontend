/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Icon,
  Stack
} from '@chakra-ui/core';
import { Field, Formik } from 'formik';
import React from 'react';
import { BsPeopleCircle } from 'react-icons/bs';
import * as Yup from 'yup';
import CustomInput from './CustomInput';

type SignInFormValues = {
  username: string;
  email: string;
  password: string;
};

function SignInForm() {
  const initialValues: SignInFormValues = {
    username: '',
    email: '',
    password: ''
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        username: Yup.string().required('Required').min(4),
        email: Yup.string().required('Required').email('Invalid email'),
        password: Yup.string().required('Required')
      })}
      onSubmit={(values, actions) => {
        // just for simulating submit, in the real version this should post
        // values to server and redirect somewhere
        // also take look: https://formik.org/docs/examples/async-submission
        setTimeout(() => {
          console.log(values);
          actions.setSubmitting(false);
        }, 2000);
      }}
    >
      {(formikBag) => (
        <form onSubmit={formikBag.handleSubmit}>
          <Stack m="auto" mt="2em" w={['90%', '100%', '500px']}>
            <Field name="username">
              {({ form, field }: any) => (
                <FormControl
                  isInvalid={form.errors.username && form.touched.username}
                  mb="1.3em"
                >
                  <FormLabel>Username</FormLabel>
                  <CustomInput
                    {...field}
                    id="username"
                    icon={
                      <Box
                        as={BsPeopleCircle}
                        size="30px"
                        mt="1.7em"
                        color="gray.600"
                      />
                    }
                  />
                  <FormErrorMessage m="auto">
                    {form.errors.username}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ form, field }: any) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                  mb="1.3em"
                >
                  <FormLabel>Email</FormLabel>
                  <CustomInput
                    {...field}
                    id="email"
                    icon={
                      <Icon
                        name="email"
                        color="gray.600"
                        size="30px"
                        mt="1.7em"
                      />
                    }
                  />
                  <FormErrorMessage m="auto">
                    {form.errors.email}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ form, field }: any) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                  mb="1.3em"
                >
                  <FormLabel>Password</FormLabel>
                  <CustomInput
                    {...field}
                    id="password"
                    icon={
                      <Icon
                        name="lock"
                        color="gray.600"
                        size="30px"
                        mt="1.7em"
                      />
                    }
                  />
                  <FormErrorMessage m="auto">
                    {form.errors.password}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              m=".5em auto"
              variantColor="blue"
              size="lg"
              w="160px"
              isLoading={formikBag.isSubmitting}
              type="submit"
            >
              Sign up
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  );
}

export default SignInForm;
