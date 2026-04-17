import { useState, useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";

import useSubmitLogin from "../../hooks/useSubmitLogin";
import { useApi } from "../../utils/useApi";

export function LoginPage() {
  const { isLoading, response, submit } = useSubmitLogin();
  const api = useApi();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => submit("url", values),
    validationSchema: Yup.object({
      username: Yup.string().label("Username").email().required(),
      password: Yup.string().label("Password").required(),
    }),
  });

  useEffect(() => {
    if (response) {
      if (response.type === "success")
        formik.resetForm();
    }
  }, [response]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing={4}>
        <FormControl
          isInvalid={formik.errors.username && formik.touched.username}
        >
          <FormLabel htmlFor="username">Username</FormLabel>
          <Input
            id="username"
            name="username"
            type="email"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.username}</FormErrorMessage>
        </FormControl>
        <FormControl
          isInvalid={formik.errors.password && formik.touched.password}
        >
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
        </FormControl>
        <Button
          type="submit"
          colorScheme="blue"
          width="full"
          isLoading={isLoading}
        >
          Log in
        </Button>
      </VStack>
    </form >
  );
}