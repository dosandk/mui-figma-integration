import figma from "@figma/code-connect"
import { Stepper } from "./index"

figma.connect(
  Stepper,
  "<FIGMA_STEPPER>",
  {
    props: {
      // No matching props could be found for these Figma properties:
      // "optionalContent": figma.string('Optional Content'),
      // "stepTitleContent": figma.string('Step Title Content'),
      // "optional": figma.boolean('Optional'),
      // "text": figma.enum('Text', {
      //   "Center": "center",
      //   "Left": "left"
      // }),
      // "state": figma.enum('State', {
      //   "Active": "active",
      //   "Inactive": "inactive",
      //   "Complete": "complete",
      //   "Error": "error",
      //   "Warning": "warning",
      //   "Info": "info",
      //   "Success": "success"
      // })
      children: figma.children("*"),
    },
    example: ({ children, ...props }) => <Stepper {...props}>{children}</Stepper>,
  },
)

