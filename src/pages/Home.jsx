import React from 'react'
import styled from 'styled-components'
import logoFirst from '../assets/img/first.png'
import logoSecond from '../assets/img/second.png'
import LinkButton from '../components/ui/LinkButton'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 95vh;
  gap: 7em;
`
const ButtonCtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  opacity: 0;
  animation: 1s start forwards;
`
const Author = styled.a`
  color: #696969;
  animation: 2s start forwards 500ms;
  cursor: pointer;
  opacity: 0;
  animation: 1s start forwards;
  &:hover {
    color: #d5adfd;
  }
`
const Img = styled.img`
  height: 150px;
  position: absolute;
  right: ${(props) => props.$right};
  animation: 500ms logoStart forwards ease-in 200ms;
  opacity: 0;
  scale: 0.8;
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  animation: 2s Bounce forwards;
  @keyframes logoStart {
    100% {
      right: 9px;
      opacity: 1;
    }
  }
  @keyframes Bounce {
    70% {
      rotate: 190deg;
    }
    100% {
      rotate: 180deg;
    }
  }
`

export default function Home() {
  return (
    <>
      <Wrapper>
        <LogoContainer>
          <Img $right="40px" src={logoFirst} alt="Logo First Part" />
          <Img $right="-20px" src={logoSecond} alt="Logo Second Part" />
        </LogoContainer>

        <ButtonCtn>
          <LinkButton to="/game" text="Start" />
          <LinkButton to={'/settings'} text="Settings" />
        </ButtonCtn>

        <Author
          title="Author"
          href="https://pablokuhn.netlify.app/"
          target="blank"
        >
          With 💜 by paku
        </Author>
      </Wrapper>
    </>
  )
}
