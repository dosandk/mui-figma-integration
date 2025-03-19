import { Icon } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  Icon,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=6594-47648",
  {
    props: {
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      children: figma.children("*"),
      // type: figma.enum('Type', {
      //   "SVG Icon": figma.instance('SVG Icon'),
      //   "Font Icon": figma.instance('Font Icon')
      // })
    },
    example: ({ children, ...props }) => <Icon {...props}>{children}</Icon>,
  },
)
