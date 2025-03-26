import { Toolbar } from "./index";
import figma from "@figma/code-connect";

figma.connect(
  Toolbar,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=6583%3A46318",
  {
    props: {
      variant: figma.enum("Variant", {
        Regular: "regular",
        Dense: "dense",
      }),
      children: figma.children("*"),
      // smallScreen: figma.boolean("Small Screen"),
    },
    example: ({ children, ...props }) => (
      <Toolbar {...props}>{children}</Toolbar>
    ),
  }
);
