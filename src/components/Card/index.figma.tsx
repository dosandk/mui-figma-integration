import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
} from "./index"
import figma from "@figma/code-connect"

figma.connect(
  Card,
  "<FIGMA_CARD_HEADER>",
  {
    props: {
      children: figma.children("*")
    },
    example: ({ children, ...props }) => <CardHeader {...props}>{children}</CardHeader>,
  },
)

figma.connect(
  Card,
  "<FIGMA_CARD_CONTENT>",
  {
    props: {
      children: figma.children("*")
    },
    example: ({ children, ...props }) => <CardContent {...props}>{children}</CardContent>,
  },
)

figma.connect(
  Card,
  "<FIGMA_CARD_ACTIONS>",
  {
    props: {
      children: figma.children("*")
    },
    example: ({ children, ...props }) => <CardActions {...props}>{children}</CardActions>,
  },
)

figma.connect(
  Card,
  "<FIGMA_CARD_MEDIA>",
  {
    props: {
      children: figma.children("*")
    },
    example: ({ children, ...props }) => <CardMedia {...props}>{children}</CardMedia>,
  },
)

figma.connect(
  Card,
  "<FIGMA_CARD>",
  {
    props: {
      children: figma.children("*")
    },
    example: ({ children, ...props }) => <Card {...props}>{children}</Card>,
  },
)

// NOTE: this is CardElements
figma.connect(
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=7726:78979",
  {
    props: {
      children: figma.children("*")
    },
    example: ({ children, ...props }) => <>{children}</>,
  },
)

