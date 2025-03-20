import figma from "@figma/code-connect"
import { TextField } from "./index"

figma.connect(
  TextField,
  "<FIGMA_TEXT_FIELD>",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      variant: figma.enum("Variant", {
        Filled: "filled",
        Outlined: "outlined",
        Standard: "standard",
      }),
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
      }),
      label: figma.string("Label"),
      placeholder: figma.string("↳ Placeholder"),
      value: figma.string("↳ Value"),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      error: figma.enum("State", {
        Error: true,
      }),
      focused: figma.enum("State", {
        Focused: true,
      }),
      // No matching props could be found for these Figma properties:
      // "placeholder": figma.string('↳ Placeholder'),
      // "value": figma.string('↳ Value'),
      // "endInstance": figma.instance('↳ End Instance'),
      // "startInstance": figma.instance('↳ Start Instance'),
      // "value": figma.boolean('Value?'),
      // "label": figma.string('Label'),
      // "adornStart": figma.boolean('Adorn. Start?'),
      // "helper": figma.boolean('Helper?'),
      // "placeholder": figma.boolean('Placeholder?'),
      // "adornEnd": figma.boolean('Adorn. End?'),
      // "typeNumber": figma.boolean('Type: number?'),
      // "hasValue": figma.boolean('Has Value')
    },
    example: (props) => (
      <TextField {...props} />
    ),
  },
)
