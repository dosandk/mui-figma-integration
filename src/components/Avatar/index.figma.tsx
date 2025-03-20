import { Avatar } from "./index"
import { Badge } from "@mui/material"
import figma from "@figma/code-connect"

figma.connect(
  Avatar,
  "<FIGMA_AVATAR>",
  {
    props: {
      variant: figma.enum("Variant", {
        Circular: "circular",
        Rounded: "rounded",
        Square: "square",
      }),
      alt: figma.string("Initials"),
      initials: figma.string('Initials'),
      badge: figma.boolean('Badge', {
        true: figma.children(["Badge"]),
        // true: <Badge />,
        false: undefined
      }),
      size: figma.enum('Size', {
        "40px": "40px",
        "32px": "32px",
        "24px": "24px",
        "18px": "18px"
      }),
      content: figma.enum('Content', {
        "Text": "text",
        "Icon": "icon",
        "Image": "image"
      })
    },
    example: (props) => <Avatar {...props} />,
  },
)
