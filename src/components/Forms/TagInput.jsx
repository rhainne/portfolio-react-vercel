import { useState, useRef } from "react";
import {
  Box,
  Flex,
  Tag,
  TagLabel,
  TagCloseButton,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useColorModeValue,
} from "@chakra-ui/react";

export function TagInput({ value = [], onChange, label, error, placeholder = "Add a tag..." }) {
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef();
  const borderColor = useColorModeValue("gray.300", "whiteAlpha.300");
  const focusBorder = useColorModeValue("blue.500", "blue.300");

  const addTag = (raw) => {
    const val = raw.trim().replace(/,$/, "");
    if (!val || value.includes(val)) return;
    onChange([...value, val]);
  };

  const removeTag = (tag) => {
    onChange(value.filter((t) => t !== tag));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addTag(inputVal);
      setInputVal("");
    }
    // Backspace on empty input removes last tag
    if (e.key === "Backspace" && inputVal === "" && value.length) {
      onChange(value.slice(0, -1));
    }
  };

  const handleBlur = () => {
    if (inputVal.trim()) {
      addTag(inputVal);
      setInputVal("");
    }
  };

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel>{label}</FormLabel>}
      <Flex
        wrap="wrap"
        gap={2}
        align="center"
        px={3}
        py={2}
        minH="42px"
        border="1px solid"
        borderColor={error ? "red.500" : borderColor}
        borderRadius="md"
        cursor="text"
        onClick={() => inputRef.current?.focus()}
        _focusWithin={{
          borderColor: error ? "red.500" : focusBorder,
          boxShadow: `0 0 0 1px ${error ? "red.500" : focusBorder}`,
        }}
      >
        {value.map((tag) => (
          <Tag key={tag} size="sm" borderRadius="full" colorScheme="blue">
            <TagLabel>{tag}</TagLabel>
            <TagCloseButton onClick={() => removeTag(tag)} />
          </Tag>
        ))}
        <Input
          ref={inputRef}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={value.length === 0 ? placeholder : ""}
          variant="unstyled"
          size="sm"
          flex={1}
          minW="120px"
        />
      </Flex>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}