import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../../context/alertContext";
import { useRef } from "react";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success"

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay backdropFilter="blur(2px)" />
      <AlertDialogContent
        py={4}
        backgroundColor="#0f172a"
        border="1px solid"
        borderColor={isSuccess ? "green.500" : "red.500"}
        borderRadius="lg"
        boxShadow={`0 0 24px ${isSuccess ? "rgba(234,179,8,0.15)" : "rgba(248,113,113,0.15)"}`}
      >
        <AlertDialogHeader
          fontSize="md"
          fontWeight="600"
          color={isSuccess
            ? "green.400"
            : "red.400"
          }
          display="flex"
          alignItems="center"
          gap={2}
          pb={1}
        >
          {isSuccess
            ? "✓  All good!"
            : "✕  Oops!"
          }
        </AlertDialogHeader>
        <AlertDialogBody
          fontSize="sm"
          color="gray.300"
        >
          {message}
        </AlertDialogBody>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default Alert;
