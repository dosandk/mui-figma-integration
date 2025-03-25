import { Button } from "../index";
import figma from "@figma/code-connect";

figma.connect(Button, "<FIGMA_LOADING_BUTTON>", {
  props: {
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
    label: figma.string("Label"),
  },
  example: ({ label, ...props }) => (
    <Button loading loadingPosition={"start" || "end"} {...props}>
      {label}
    </Button>
  ),
});
