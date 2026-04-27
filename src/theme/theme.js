import { background, extendTheme, Kbd } from '@chakra-ui/react'
import "@fontsource/open-sans";
import '@fontsource/raleway'

const theme = extendTheme({
  styles: {
    global: {
      "::-webkit-scrollbar": {
        width: "6px",
      },
      "::-webkit-scrollbar-track": {
        background: "transparent",
      },
      "::-webkit-scrollbar-thumb": {
        background: "rgba(192, 189, 0, 0.11)",
        borderRadius: "999px",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "rgba(192, 189, 0, 0.24)",
      },
      "*": {
        scrollbarWidth: "thin",
        scrollbarColor: "rgba(192, 189, 0, 0.15) transparent",
      },
    },
  },
  fonts: {
    heading: `'Space Grotesk', sans-serif`,
    body: `'Space Grotesk', sans-serif`,
  },
  components: {
    FormLabel: {
      baseStyle: {
        mb: 1,
      },
    },
    Kbd: {
      baseStyle: {
        fontSize: 'xs',
        color: 'gray.600',
        border: '1px solid',
        borderRadius: '4px',
        background: 'transparent',
        px: 1,
        py: 0.25,
      },
    },
  },
})

export default theme