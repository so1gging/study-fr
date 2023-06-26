import { PropsWithChildren } from 'react'
import styled from 'styled-components'

export default function WithChildren({ children }: PropsWithChildren) {
  return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
  background: yellow;
  padding: 10px;
  border: 10px;
`
