/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable react/jsx-props-no-spreading */
import {
  Button,
  FormControl,
  FormErrorMessage,
  Icon,
  Stack
} from '@chakra-ui/core';
import { Field, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import CustomInput from './CustomInput';

type SignInFormValues = {
  email: string;
  password: string;
};

function SignInForm() {
  const initialValues: SignInFormValues = { email: '', password: '' };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        email: Yup.string().required('Required').email('Invalid email'),
        password: Yup.string().required('Required')
      })}
      onSubmit={(values, actions) => {
        // just for simulating submit, in the real version this should redirect somewhere
        // also take look: https://formik.org/docs/examples/async-submission
        setTimeout(() => {
          console.log(values);
          actions.setSubmitting(false);
        }, 2000);
      }}
    >
      {(formikBag) => (
        <form onSubmit={formikBag.handleSubmit}>
          <Stack m="auto" mt="2em" w={['90%', '70%', '500px']}>
            <Field name="email">
              {({ form, field }: any) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
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
                    placeholder="Email"
                  />
                  <FormErrorMessage w="95%" m="auto">
                    {form.errors.email}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ form, field }: any) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                  h="80px"
                  mt=".5em"
                >
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
                    placeholder="Password"
                  />
                  <FormErrorMessage w="95%" m="auto">
                    {form.errors.password}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              m="1em auto"
              variantColor="blue"
              size="lg"
              w="160px"
              isLoading={formikBag.isSubmitting}
              type="submit"
            >
              Sign in
            </Button>
            <Button
              variant="ghost"
              variantColor="blue"
              color="black"
              size="sm"
              m="2em auto"
            >
              Forgot Password?
            </Button>
          </Stack>
        </form>
      )}
    </Formik>
  );
}

export default SignInForm;
