import { Chevron } from "./Chevron";
import figma from "@figma/code-connect";

figma.connect(
  Chevron,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=11673-11595",
  {
    props: {
      direction: figma.enum("Direction", {
        Left: "left",
        Right: "right",
      })
    },
    example: (props) => (
      <Chevron {...props} />
    ),
  }
);
