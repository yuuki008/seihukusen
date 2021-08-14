import React from 'react'
import { Link } from 'react-scroll';
import styled from 'styled-components'

export const Header = () => {
  return (
    <Wrapper>
      <HeaderWrapper>
        <h1>西福戦</h1>
      </HeaderWrapper>
      <LinkWrapper>
        <Link
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {800}
        >
          TOP
        </Link>
        <Link
          activeClass="active"
          to="player"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {800}
        >
          PLAYER
        </Link>
        <Link
          activeClass="active"
          to="related"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {800}
        >
          RELATED
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {800}
        >
          CONTACT
        </Link>
      </LinkWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`
const HeaderWrapper = styled.div``

const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`
