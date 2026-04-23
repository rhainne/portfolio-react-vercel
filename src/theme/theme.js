import { background, extendTheme, Kbd } from '@chakra-ui/react'
import "@fontsource/open-sans";
import '@fontsource/raleway'

const theme = extendTheme({
  // fonts: {
  //   heading: `'Open Sans', sans-serif`,
  //   body: `'Raleway', sans-serif`,
  // },
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