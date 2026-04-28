import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Text,
  Link,
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
import FullScreenSection from "../FullScreenSection";
import useSubmit from "../../hooks/useSubmit";
import { useAlertContext } from "../../context/alertContext";

const LandingSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },
    onSubmit: (values) => submit("url", values),
    validationSchema: Yup.object({
      firstName: Yup.string().label("Name").required(),
      email: Yup.string().label("Email").email().required(),
      comment: Yup.string()
        .min(25, "Must be at least 25 characters")
        .label("Comment")
        .required(),
    }),
  });

  useEffect(() => {
    if (response) {
      onOpen(response.type, response.message);

      if (response.type === "success") formik.resetForm();
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      bg="#0f172a"
      color="gray.200"
      // py={16}
      spacing={8}
      w="100%"
      backgroundImage={`
      repeating-linear-gradient(
        45deg,
        rgba(192, 189, 0, 0.10) 0px,
        rgba(192, 189, 0, 0.10) 1px,
        transparent 1px,
        transparent 20px
      ),
      repeating-linear-gradient(
        -45deg,
        rgba(192, 189, 0, 0.10) 0px,
        rgba(192, 189, 0, 0.10) 1px,
        transparent 1px,
        transparent 20px
      )
    `}
    >
      <VStack w="100%" maxW="860px" mx="auto"
        px={{ base: 0, md: 4 }}
        py={{ base: 16, md: 20 }} spacing={4}
      >
        <Heading as="h1" id="contactme-section" mb={6}>
          Contact me
        </Heading>
        <Text fontSize="sm" textAlign="center">
          Dummy contact form to illustrate form validation with {' '}
          <Link
            href="https://formik.org/"
            isExternal
            color="blue.400"
            fontWeight="semibold"
          >
            Formik
          </Link> and {' '}
          <Link
            href="https://github.com/jquense/yup"
            isExternal
            color="blue.400"
            fontWeight="semibold"
          >
            Yup
          </Link>, custom hooks for handling form submission and global alert context for displaying feedback messages.{' '}
          This form does not submit data anywhere and give 50% success/error feedback at random.
        </Text>
        <Box
          p={6}
          rounded="md"
          w="100%"
          minW={{ base: "280px", sm: "340px", md: "400px" }}
        >
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl
                isInvalid={formik.errors.firstName && formik.touched.firstName}
              >
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
                isInvalid={formik.errors.email && formik.touched.email}
              >
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  value={formik.values.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option
                    value="hireMe"
                    style={{ backgroundColor: "gray.100", color: "#2A4365" }}
                  >
                    Freelance project proposal
                  </option>
                  <option
                    value="openSource"
                    style={{ backgroundColor: "gray.100", color: "#2A4365" }}
                  >
                    Open source consultancy session
                  </option>
                  <option
                    value="other"
                    style={{ backgroundColor: "gray.100", color: "#2A4365" }}
                  >
                    Other
                  </option>
                </Select>
              </FormControl>
              <FormControl
                isInvalid={formik.errors.comment && formik.touched.comment}
              >
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  value={formik.values.comment}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
