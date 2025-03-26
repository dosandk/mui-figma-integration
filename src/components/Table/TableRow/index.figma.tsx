import { TableRow } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  TableRow,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=6594%3A46473",
  {
    props: {
      // No matching props could be found for these Figma properties:
      // "small": figma.boolean('Small'),
      // "checkbox": figma.boolean('Checkbox'),
      // "hover": figma.boolean('Hover'),
      // "selected": figma.boolean('Selected'),
      // "columns": figma.enum('Columns', {
      //   "3": "3",
      //   "4": "4",
      //   "5": "5",
      //   "6": "6",
      //   "8": "8",
      //   "10": "10"
      // }),
      // "divider": figma.boolean('Divider')
      children: figma.children("*")
    },
    example: ({ children, ...props }) => <TableRow {...props}>{children}</TableRow>,
  },
)


figma.connect(
  TableRow,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=6686%3A36863",
  {
    props: {
      // No matching props could be found for these Figma properties:
      // "small": figma.boolean('Small'),
      // "checkbox": figma.boolean('Checkbox'),
      // "selected": figma.boolean('Selected'),
      // "columns": figma.enum('Columns', {
      //   "3": "3",
      //   "4": "4",
      //   "5": "5",
      //   "6": "6",
      //   "8": "8",
      //   "10": "10"
      // })
      //
      children: figma.children("*")
    },
    example: ({ children, ...props }) => <TableRow {...props}>{children}</TableRow>,
  },
)
