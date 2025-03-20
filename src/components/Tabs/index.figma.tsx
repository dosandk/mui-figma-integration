import figma from "@figma/code-connect"
import { Tabs } from "./index"

figma.connect(
  Tabs,
  "<FIGMA_TABS>",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      orientation: figma.enum("Orientation", {
        Horizontal: "horizontal",
        Vertical: "vertical",
      }),
      textColor: figma.enum("Active Color", {
        Secondary: "secondary",
        Primary: "primary",
      }),
      // No matching props could be found for these Figma properties:
      // "text": figma.boolean('Text'),
      // "tabContent": figma.string('Tab Content'),
      // "icon": figma.boolean('Icon'),
      // "active": figma.boolean('Active'),
      // "iconPosition": figma.enum('Icon Position', {
      //   "Up": "up",
      //   "Left": "left",
      //   "Right": "right"
      // }),
      // "state": figma.enum('State', {
      //   "Enabled": "enabled",
      //   "Disabled": "disabled",
      //   "Focused": "focused",
      //   "Pressed": "pressed"
      // })
    },
    example: (props) => (
      <Tabs {...props} />
    ),
  },
)
