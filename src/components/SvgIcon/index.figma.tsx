import figma from "@figma/code-connect"
import { SvgIconButton } from "./index"

figma.connect(
  SvgIconButton,
  "<FIGMA_SVG_ICON>",
  {
    props: {
      // children: figma.string("Children"),
    },
    example: (props) => <SvgIconButton {...props} />
  },
)
