import styled from 'styled-components'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer';



export default function Home() {
  return (
    <Wrapper>
      <Header/>
      <MainWrapper>
        <MainList id="top">TOP</MainList>
        <MainList id="player">PLAYER</MainList>
        <MainList id="related">RELATED</MainList>
        <MainList id="contact">CONTACT</MainList>
      </MainWrapper>
      <Footer/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 400px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
`

const MainList = styled.div`
  margin: 300px 0;
`