import figma from "@figma/code-connect"
import { Menu } from "./index"

figma.connect(
  Menu,
  "<FIGMA_MENU>",
  {
    props: {
      children: figma.children("*"),
      // No matching props could be found for these Figma properties:
      // "autoWidth": figma.boolean('Auto Width'),
      // "maxHeight": figma.boolean('Max Height')
    },
    example: ({ children, ...props }) => <Menu {...props}>{children}</Menu>
  },
)
