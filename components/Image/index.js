import React from 'react'
import PropTypes from 'prop-types'
import {uiGroups, borderRadii, borderSizes} from '../../utils/styleGuide'

const Image = ({
  src, 
  description, 
  quiet = false, 
  style,
}) => (
  <img
    style={{
      border: quiet 
        ? 0 
        : `${borderSizes.medium}px solid ${uiGroups.gray2}`,
      borderRadius: borderRadii.medium,
      width: '100%',
      ...style,
    }}
    src={src}
    alt={description}
  />
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
}

export default Image
