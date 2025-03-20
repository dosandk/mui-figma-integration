import figma from "@figma/code-connect"
import { Slider } from "./index"

figma.connect(
  Slider,
  "<FIGMA_SLIDER>",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      orientation: figma.enum("Orientation", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
      color: figma.enum("Color", {
        Primary: "primary",
        Secondary: "secondary",
      }),
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
      }),
      // No matching props could be found for these Figma properties:
      // "label": figma.boolean('Label'),
      // "values": figma.boolean('Values'),
      // "variant": figma.enum('Variant', {
      //   "Continuous": "continuous",
      //   "Marks": "marks",
      //   "Range": "range"
      // })
    },
    example: (props) => (
      <Slider {...props} />
    ),
  },
)
