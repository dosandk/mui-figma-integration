import { BottomNavigation } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  BottomNavigation,
  "<FIGMA_BOTTOM_NAVIGATION>",
  {
    props: {
      // TODO: implement this
      // labelContent: figma.string("Label Content"),
      // active: figma.boolean("Active"),
      // label: figma.boolean("Label"),
      // state: figma.enum("State", {
      //   Enabled: "enabled",
      //   Focused: "focused",
      //   Disabled: "disabled",
      //   Pressed: "pressed",
      // }),
      children: figma.children("*")
    },
    example: ({ children, ...props }) => <BottomNavigation {...props}>{children}</BottomNavigation>,
  },
)
