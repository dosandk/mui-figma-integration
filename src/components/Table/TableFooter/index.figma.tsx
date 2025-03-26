import { TableFooter } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  TableFooter,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=6645%3A61374",
  {
    props: {
      children: figma.children("*"),
    },
    example: ({ children, ...props }) => <TableFooter {...props}>{children}</TableFooter>,
  },
)
