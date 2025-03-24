import figma from "@figma/code-connect"

figma.connect(
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=10020-110248",
  {
    props: {
      children: figma.children("*")
    },
    example: ({ children, ...props }) => <>{/* instance slot */}{children}</>,
  },
)
