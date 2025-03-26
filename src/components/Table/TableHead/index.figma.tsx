import { TableHead } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  TableHead,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=6594%3A46364",
  {
    props: {
      // No matching props could be found for these Figma properties:
      // "label": figma.string('Label'),
      // "rightSort": figma.boolean('Right Sort'),
      // "leftSort": figma.boolean('Left Sort'),
      // "small": figma.boolean('Small'),
      // "checkbox": figma.boolean('Checkbox')
      children: figma.children("*"),
    },
    example: ({ children, ...props }) => <TableHead {...props}>{children}</TableHead>,
  },
)
