import figmaConfig from "../../figma.config.json";

const { codeConnect } = figmaConfig;
const { interactiveSetupFigmaFileUrl, documentUrlSubstitutions } = codeConnect;

export const getFigmaPath = (name: string): string => {
  const path = documentUrlSubstitutions[`<FIGMA_${name.toUpperCase()}>`];
  const [, nodeId] = path.split("?");

  return `${interactiveSetupFigmaFileUrl}?${nodeId}`;
}

