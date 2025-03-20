import figma from "@figma/code-connect"
import { ToggleButton } from "./index"

figma.connect(
  ToggleButton,
  "<FIGMA_TOGGLE_BUTTON>",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      selected: figma.boolean("Selected"),
      // No matching props could be found for these Figma properties:
      // "icon": figma.instance('Icon'),
      // "icon": figma.boolean('Icon?'),
      // "text": figma.boolean('Text?')
    },
    example: (props) => (
      <ToggleButton {...props} />
    ),
  },
)
