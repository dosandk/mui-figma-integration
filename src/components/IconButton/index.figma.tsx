import figma from "@figma/code-connect"

import { IconButton } from "./index"

figma.connect(
  IconButton,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=11701-40562",
  {
    props: {
      size: figma.enum("Size", {
        Small: "small",
        Medium: "medium",
        Large: "large",
      }),
      color: figma.enum("Color", {
        Primary: "primary",
        Secondary: "secondary",
        Error: "error",
        Info: "info",
        Success: "success",
        Warning: "warning",
      }),

      state: figma.enum("State", {
        Enabled: "enabled",
        Focused: "focused",
        Disabled: "disabled",
        Pressed: "pressed",
      }),
      children: figma.children("*"),
    },
    example: ({ children, ...props }) => <IconButton {...props}>{children}</IconButton>,
  },
)
