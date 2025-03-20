import { Accordion } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  Accordion,
  "<FIGMA_ACCORDION>",
  {
    props: {
      disabled: figma.boolean("Disabled"),
      children: figma.children("*"),
      expanded: figma.boolean("Expanded?"),
    },
    example: ({ children, ...props }) => (
      <Accordion {...props} />
    ),
  },
)
