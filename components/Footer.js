import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-scroll'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import YoutubeIcon from '@material-ui/icons/YouTube'
import WebIcon from '@material-ui/icons/Web'

export const Footer = () => {
  return (
    <Wrapper>
      <SocialMediaWrapper>
        <SocialMediaTitle>
          <p style={{float: "left", margin: 0, padding: '0 0 5px 10px'}}>SEINAN</p>
          <p style={{float: "right", margin: 0, padding: '0 10px 5px 0'}}>FUKUOKA</p>
        </SocialMediaTitle>
        <SNSWrapper>
        <IconsWrapper>
          <IconWrapper>
            <InstagramIcon />
            <SnsName>
              Instagram
            </SnsName>
          </IconWrapper>
          <IconWrapper>
            <TwitterIcon />
            <SnsName>
              Twitter
            </SnsName>
          </IconWrapper>
          <IconWrapper>
            <YoutubeIcon />
            <SnsName>
              YouTube
            </SnsName>
          </IconWrapper>
          <IconWrapper>
            <WebIcon />
            <SnsName>
              Official
            </SnsName>
          </IconWrapper>
        </IconsWrapper>
        <IconsWrapper>
          <IconWrapper style={{float: "right"}}>
            <InstagramIcon />
            <SnsName>
              Instagram
            </SnsName>
          </IconWrapper>
          <IconWrapper style={{float: "right"}}>
            <TwitterIcon />
            <SnsName>
              Twitter
            </SnsName>
          </IconWrapper>
          <IconWrapper style={{float: "right"}}>
            <YoutubeIcon />
            <SnsName>
              YouTube
            </SnsName>
          </IconWrapper>
          <IconWrapper style={{float: "right"}}>
            <WebIcon />
            <SnsName>
              Official
            </SnsName>
          </IconWrapper>
        </IconsWrapper>
        </SNSWrapper>
      </SocialMediaWrapper>
      <Copyright>&copy; copyright 2021 <br />seinan university and fukuoka university </Copyright>
      <LinkWrapper>
        <Link
            activeClass="active"
            to="top"
            spy={true}
            smooth={true}
            offset={-70}
            duration= {800}
          >
          BACK TO TOP ^
        </Link>
      </LinkWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
`

const SocialMediaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: 0 auto;
`

const SocialMediaTitle = styled.div`
  margin: 0 auto;
  padding-bottom: 5px;
  margin-bottom: 20px;
  width: 100%;
  font-size: 20px;
  font-weight: 550px;
  border-bottom: 2px solid black;
`

const SNSWrapper = styled.div`
  display: flex;
`

const IconsWrapper = styled.div``

const IconWrapper = styled.div`
  display: flex;
  padding: 10px;
  width: 131.44px;
`

const SnsName = styled.div`
  padding-left: 15px;
  height: 21px;
  line-height: 21px;
`

const Copyright = styled.div`
  margin: 25px auto 45px auto;
  font-weight: lighter;
  line-height: 20px;
`

const LinkWrapper = styled.div`
  width: 300px;
  margin: 0 auto 25px auto;
  padding: 22px 12px;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
  }
`