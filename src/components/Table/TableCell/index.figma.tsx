import { TableCell } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  TableCell,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=6594%3A46413",
  {
    props: {
      // No matching props could be found for these Figma properties:
      // "2ndInstance": figma.boolean('2nd Instance?'),
      // "2ndInstance": figma.instance('↳ 2nd Instance'),
      // "instance": figma.instance('Instance'),
      // "small": figma.boolean('Small'),
      // "checkbox": figma.boolean('Checkbox')
      children: figma.children("*"),
    },
    example: ({ children, ...props }) => <TableCell {...props}>{children}</TableCell>,
  },
)
