import React from 'react'
import PropTypes from 'prop-types'
import {
  colorValues,
  fontSizes,
  fontWeights,
  spacing,
  lineHeights,
} from '../../utils/styleGuide'

export const levelSpecificStyles = {
  1: {
    color: colorValues.colors.cyan,
    fontSize: fontSizes.xxxlarge,
    lineHeight: lineHeights.xxlarge,
    textAlign: 'center',
  },
  2: {
    color: colorValues.grays.gray6,
    fontSize: fontSizes.large,
    textAlign: 'center',
    marginBottom: spacing.medium,
  },
  3: {
    color: colorValues.grays.gray6,
    fontSize: fontSizes.large,
    marginBottom: spacing.medium,
  },
  4: {
    color: colorValues.colors.cyan,
    fontSize: fontSizes.xlarge,
    lineHeight: 1,
    marginBottom: spacing.xsmall,
  },
}

const Heading = ({
  children,
  level,
}) => (
  <div style={{
    fontWeight: fontWeights.light,
    overflowWrap: 'break-word',
    ...levelSpecificStyles[level],
  }}>
    {children}
  </div>
)

Heading.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  level: PropTypes.oneOf(
    Object.keys(levelSpecificStyles)
      .map(levelString => parseInt(levelString, 10))
  ).isRequired,
}

export default Heading
