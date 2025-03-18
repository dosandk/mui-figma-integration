import React from "react"
import { AppBar } from "./index"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by Code Connect --
 * `props` includes a mapping from your code props to Figma properties.
 * You should check this is correct, and update the `example` function
 * to return the code example you'd like to see in Figma
 */

figma.connect(
  AppBar,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=11545%3A171494",
  {
    props: {
      // These props were automatically mapped based on your linked code:
      color: figma.enum("Color", {
        "Inherit White": "inherit",
        Primary: "primary",
        Secondary: "secondary",
        Default: "default",
        Transparent: "transparent",
      }),
      // children: figma.children("Children"),
    },
    example: (props) => <AppBar {...props} />
  },
)
