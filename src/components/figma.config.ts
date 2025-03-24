import figmaConfig from "../../figma.config.json";

const { codeConnect } = figmaConfig;
const { interactiveSetupFigmaFileUrl, documentUrlSubstitutions } = codeConnect;

export const getFigmaPath = (name: string): string => {
  const componentName = name.replace(/([a-z])([A-Z])/g, '$1_$2')

  console.log(`componentName: ${componentName}`);

  const path = documentUrlSubstitutions[`<FIGMA_${componentName.toUpperCase()}>`];
  const [, nodeId] = path.split("?");

  return `${interactiveSetupFigmaFileUrl}?${nodeId}`;
}

