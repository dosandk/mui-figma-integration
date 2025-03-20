import figma from "@figma/code-connect"
import { Chip, ChipProps } from "./index"

figma.connect(
  Chip,
  "<FIGMA_CHIP>",
  {
    props: {
      label: figma.string("Label"),
      color: figma.enum("Color", {
        Default: "default",
        Primary: "primary",
        Secondary: "secondary",
        Error: "error",
        Info: "info",
        Success: "success",
        Warning: "warning",
      }),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
      }),
      variant: figma.enum("Variant", {
        Outlined: "outlined",
        Filled: "filled",
      }),
      // No matching props could be found for these Figma properties:
      onDelete: figma.boolean('Delete?', {
        true: figma.children('*'),
        // true: () => { },
        false: undefined
      }),
      thumbnail: figma.boolean('Thumbnail?', {
        true: figma.children('*'),
        false: undefined
      }),
    },
    example: (props: ChipProps) => (
      <Chip {...props} />
    ),
  },
)
