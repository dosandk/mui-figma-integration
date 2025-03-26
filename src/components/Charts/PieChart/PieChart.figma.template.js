// url=https://www.figma.com/file/BpvKv4FZpzUKLb9nzDLm9Q/Component?node-id=12032-83759
const figma = require('figma')
const instance = figma.selectedInstance

// Access component properties using the Template V2 API
const typeText = instance.getString('Type');  // Gets the value of a text property




const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
];

const series =
  [
    { data: pData, label: 'pv', id: 'pvId' },
    { data: uData, label: 'uv', id: 'uvId' },
  ];

const riba = [{ a: 1 }, { b: 2 }, { c: 3 }];

// Export the rendered code and optional metadata
export default {
  example: figma.code`
    <MyComponent
      foo={${typeText}}
      riba={[{a: 1}, {b: 2}, {c: 3}]}
    />
  `,
  id: 'my-component',  // Optional: Custom identifier for referencing this component
  metadata: {
    nestable: false  // Controls how this appears when nested in other components
  }
}
