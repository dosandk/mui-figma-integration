import figma from "@figma/code-connect"

const Legend = (props: any) => {
  return (<>/* this is legend*/</>)
}

figma.connect(
  Legend,
  "https://www.figma.com/design/BpvKv4FZpzUKLb9nzDLm9Q/ELEKS-UI---Components?node-id=1182%3A11802",
  {
    props: {
      "series1": figma.string('Series 1'),
      "series2": figma.boolean('Series 2?', {
        true: figma.string('Series 2'),
        false: undefined
      }),
      "series3": figma.boolean('Series 3?', {
        true: figma.string('Series 3'),
        false: undefined
      }),
      "series4": figma.boolean('Series 4?', {
        true: figma.string('Series 4'),
        false: undefined
      }),
      "direction": figma.enum('Direction', {
        "Horizontal": "horizontal",
        "Vertical": "vertical"
      })
    },
    example: ({ ...props }) => <Legend {...props} />
  },
)
