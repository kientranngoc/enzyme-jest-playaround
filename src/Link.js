import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ isHidden, address }) => {
  return isHidden ? null : <a href={address}>Click</a>
}

Link.propTypes = {
  isHidden: PropTypes.bool.isRequired,
  address: PropTypes.string.isRequired,
}

export default Link
