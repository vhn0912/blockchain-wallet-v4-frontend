import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BlockchainLoader } from '../Loaders'

const BaseModalBody = styled.div`
  position: relative;
  width: 100%;
  padding: 30px;
  box-sizing: border-box;
`
const SplashScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: ${props => props.displayed ? 'flex' : 'none'};
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme['white']};
  z-index: 5;
`

const ModalBody = props => {
  const { children, loading } = props

  return (
    <BaseModalBody>
      <SplashScreen displayed={loading}>
        <BlockchainLoader />
      </SplashScreen>
      {children}
    </BaseModalBody>
  )
}

ModalBody.propTypes = {
  loading: PropTypes.bool
}

ModalBody.defaultProps = {
  loading: false
}

export default ModalBody
