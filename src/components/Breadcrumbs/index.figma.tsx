import { Breadcrumbs } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  Breadcrumbs,
  "<FIGMA_BREADCRUMBS>",
  {
    props: {
      "separator": figma.enum('Separator', {
        "Text*": "text-",
        "Icon": figma.instance("Separator Icon")
      }),
      "children": figma.children('*'),
    },
    example: ({ children, ...props }) => <Breadcrumbs {...props} >{children}</Breadcrumbs>,
  },
)
