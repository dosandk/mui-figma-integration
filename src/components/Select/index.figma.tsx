import { Select } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  Select,
  "<FIGMA_SELECT>",
  {
    props: {
      label: figma.string("Label"),
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
      }),
      variant: figma.enum("Variant", {
        Filled: "filled",
        Outlined: "outlined",
        Standard: "standard",
      }),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      error: figma.enum("State", {
        Error: true,
      }),
      labelId: figma.string("Label"),
      native: figma.boolean("Active"),
      children: figma.children("*")
      // No matching props could be found for these Figma properties:
      // "value": figma.string('↳ Value'),
      // "placeholder": figma.string('↳ Placeholder'),
      // "label": figma.string('Label'),
      // "startInstance": figma.instance('Start Instance'),
      // "placeholder": figma.boolean('Placeholder?'),
      // "adornStart": figma.boolean('Adorn. Start?'),
      // "value": figma.boolean('Value?'),
      // "helper": figma.boolean('Helper?'),
      // "hasValue": figma.boolean('Has Value')
    },
    example: ({ children, ...props }) => (
      <Select {...props}>{children}</Select>
    ),
  },
)
