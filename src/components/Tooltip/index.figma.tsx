import figma from "@figma/code-connect"
import { Tooltip } from "./index"

figma.connect(
  Tooltip,
  "<FIGMA_TOOLTIP>",
  {
    props: {
      // No matching props could be found for these Figma properties:
      // "direction": figma.enum('Direction', {
      //   "None": "none",
      //   "Down": "down",
      //   "Up": "up",
      //   "Left": "left",
      //   "Right": "right"
      // })
      children: figma.children("*"),
    },
    example: ({ children, ...props }) => <Tooltip {...props}>{children}</Tooltip>
  },
)
