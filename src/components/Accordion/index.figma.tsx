import { Accordion as AccordionItem } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  AccordionItem,
  "<FIGMA_ACCORDION_ITEM>",
  {
    props: {
      title: figma.string("Title"),
      content: figma.string("Content"),
      defaultExpanded: figma.enum("State", {
        Closed: undefined,
        Open: true
      }),
    },
    example: (props) => (
      <AccordionItem {...props} />
    ),
  },
)
