import { Icon } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  Icon,
  "<FIGMA_ICON>",
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
