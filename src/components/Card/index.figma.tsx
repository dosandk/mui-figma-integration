import { Card } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  Card,
  "<FIGMA_CARD>",
  {
    props: {
      // No matching props could be found for these Figma properties:
      // "smallScreen": figma.boolean('Small Screen'),
      // "blank": figma.boolean('Blank')
      children: figma.children("*")
    },
    example: ({ children, ...props }) => <Card {...props}>{children}</Card>,
  },
)
