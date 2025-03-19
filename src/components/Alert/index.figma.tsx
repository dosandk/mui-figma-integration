import { Alert } from "./index"
import figma from "@figma/code-connect"

figma.connect(
  Alert,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=6595:48211",
  {
    props: {
      severity: figma.enum("Severity", {
        Error: "error",
        Warning: "warning",
        Info: "info",
        Success: "success",
      }),
      variant: figma.enum("Variant", {
        Filled: "filled",
        Outlined: "outlined",
        Standard: "standard",
      }),
      description: figma.boolean('Description?', {
        true: figma.string('↳ Description'),
        false: ""
      }),
      title: figma.boolean('Title?', {
        true: figma.string('↳ Title'),
        false: ""
      }),
      action: figma.boolean('Action?', {
        true: figma.instance('↳Instance'),
        false: undefined
      }),
      onClose: figma.boolean('On Close?', {
        true: () => { },
        false: undefined
      })
    },
    example: ({ description, ...rest }) => (
      <Alert {...rest}>{description}</Alert>
    ),
  },
)

