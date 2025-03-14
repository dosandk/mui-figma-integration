import figma from "@figma/code-connect"

import { Button, ButtonProps } from "./index"

figma.connect(
  Button,
  "https://www.figma.com/design/cwXEuR3Mbo0Me3HHLFNdKG/MUI-for-Figma-v6.1.0---Material-UI?node-id=6543%3A36744",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      label: figma.textContent("Text Layer"),
      color: figma.enum("Color", {
        Inherit: "inherit",
        Primary: "primary",
        Secondary: "secondary",
        Success: "success",
        Error: "error",
        Info: "info",
        Warning: "warning",
      }),
      disabled: figma.enum("State", {
        Disabled: true,
      }),
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      variant: figma.enum("Variant", {
        Text: "text",
        Outlined: "outlined",
        Contained: "contained",
      }),
      children: figma.children('*'),
      // No matching props could be found for these Figma properties:
      // "label": figma.string('Label'),
      // "startIcon": figma.instance('↳ Start Icon'),
      // "endIcon": figma.instance('↳ End Icon'),
      // "endIcon": figma.boolean('End Icon'),
      // "startIcon": figma.boolean('Start Icon')
    },
    example: (props: ButtonProps) => (
      <Button
        {...props}
      />
    ),
  },
)
