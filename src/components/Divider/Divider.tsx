import * as React from 'react'
import { Box } from 'rebass'

interface Props {
  bg: any
  py: any
}

const Divider: React.SFC<Props> = ({ bg, py }) => (
  <Box bg={bg} py={py} css={{ height: 1 }} />
)

Divider.defaultProps = {
  bg: 'black',
  py: 0
}

export default Divider
