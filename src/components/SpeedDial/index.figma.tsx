import figma from "@figma/code-connect"
import { SpeedDial } from "./index"

figma.connect(
  SpeedDial,
  "<FIGMA_SPEED_DIAL>",
  {
    props: {
      direction: figma.enum("Direction", {
        Up: "up",
        Down: "down",
        Left: "left",
        Right: "right",
      }),
      children: figma.children("*"),
      // No matching props could be found for these Figma properties:
      // "instance": figma.instance('Instance')
    },
    example: ({ children, ...props }) => (
      <SpeedDial {...props}>{children}</SpeedDial>
    ),
  },
)
