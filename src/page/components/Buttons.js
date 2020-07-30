import React from 'react';
import styled from 'styled-components'
import button_border from '../../assets/button_border.png'
import shade from '../../assets/shade.png'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size:24px;
`

const Border = styled.div`
  width: 160px;
  height: fit-content;
  color: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
`

const Background = styled.img`
  width: 160px;
  object-fit: contain;
`

const Title = styled.p`
  position: absolute;
  top: auto;
  bottom: auto;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(120,226,255,1);
  text-align: center;
  line-height: 20px;
`

const Shade = styled.img`
  width: 100px;
  margin: 20px;
`

function ImageButton({title,style}) {
    return (
        <Container style={style}>
            <Border >
                <Background src={button_border}/>
                <Title>{title}</Title>
            </Border>
            <Shade src={shade}/>
        </Container>
    )
}

function MobileImageButton({title,style}) {
  return (
      <Container style={style}>
        <Border style={{width:120}}>
          <Background style={{width:120}} src={button_border}/>
          <Title>{title}</Title>
        </Border>
        <Shade style={{width:64,marginTop:16}} src={shade}/>
      </Container>
  )
}


export {ImageButton, MobileImageButton}
