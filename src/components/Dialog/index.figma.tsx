import figma from "@figma/code-connect"
import { Dialog } from "./index"

figma.connect(
  Dialog,
  "<FIGMA_DIALOG>",
  {
    props: {
      maxWidth: figma.enum("Max Width", {
        xs: "xs",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
      }),
      children: figma.children("*"),
    },
    example: ({ children, ...props }) => (
      <Dialog {...props}>{children}</Dialog>
    ),
  },
)
