import figma from "@figma/code-connect"

figma.connect(
  "<FIGMA_ACCORDION>",
  {
    props: {
      children: figma.children(["Accordion Item"]),
    },
    example: ({ children }) => (
      <div>{children}</div>
    ),
  },
)

