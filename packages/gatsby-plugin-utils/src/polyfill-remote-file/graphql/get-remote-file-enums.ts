import type {
  EnumTypeComposerAsObjectDefinition,
  EnumTypeComposer,
} from "graphql-compose"

interface IEnumArgs {
  fit: EnumTypeComposer
  layout: EnumTypeComposer
  placeholder: EnumTypeComposer
  format: EnumTypeComposer
  cropFocus: EnumTypeComposer
}

export function getRemoteFileEnums(
  buildEnumType: (obj: EnumTypeComposerAsObjectDefinition) => EnumTypeComposer
): IEnumArgs {
  const remoteFileFit = buildEnumType({
    name: `RemoteFileFit`,
    values: {
      COVER: { value: `cover` },
      FILL: { value: `fill` },
      OUTSIDE: { value: `outside` },
      CONTAIN: { value: `contain` },
    },
  })

  const remoteFormatEnum = buildEnumType({
    name: `RemoteFileFormat`,
    values: {
      AUTO: { value: `auto` },
      JPG: { value: `jpg` },
      PNG: { value: `png` },
      WEBP: { value: `webp` },
      AVIF: { value: `avif` },
    },
  })

  const remoteLayoutEnum = buildEnumType({
    name: `RemoteFileLayout`,
    values: {
      FIXED: { value: `fixed` },
      FULL_WIDTH: { value: `fullWidth` },
      CONSTRAINED: { value: `constrained` },
    },
  })

  const remotePlaceholderEnum = buildEnumType({
    name: `RemoteFilePlaceholder`,
    values: {
      DOMINANT_COLOR: { value: `dominantColor` },
      BLURRED: { value: `blurred` },
      NONE: { value: `none` },
    },
  })

  const remoteCropFocusEnum = buildEnumType({
    name: `RemoteFileCropFocus`,
    values: {
      CENTER: { value: `center` },
      TOP: { value: `top` },
      RIGHT: { value: `right` },
      BOTTOM: { value: `bottom` },
      LEFT: { value: `left` },
      ENTROPY: { value: `entropy` },
      EDGES: { value: `edges` },
      FACES: { value: `faces` },
    },
  })

  return {
    fit: remoteFileFit,
    format: remoteFormatEnum,
    layout: remoteLayoutEnum,
    placeholder: remotePlaceholderEnum,
    cropFocus: remoteCropFocusEnum,
  }
}
