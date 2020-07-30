import React, {useState} from "react";
import styled from "styled-components";
import ReactCardFlip from 'react-card-flip';
import block from '../../assets/block.png'



const Block = styled.div`
  width: ${props => props.small ? '161px' : '180px'};
  height: ${props => props.small ? '138px' : '157px'};
  background-image: url(${block});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-size:${props => props.back ? '4px' : '16px'};
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(255,255,255,1);
  display: flex;  
  justify-content: center;
  align-items: center;
  word-break: break-all;
  text-align: center;
  white-space: pre-line;
  padding: 48px;
`

function MobileBlock({content, backContent, small}) {
  const [flip, setFlip] = useState(false);
  return(
      <ReactCardFlip isFlipped={flip} >
        <Block
            key='block'
            small={small}
            onClick={() => {
              setFlip(true)
            }}>
          {content}
        </Block>
        <Block
            key='block'
            small={small}
            back
            onClick={() => {
              setFlip(false)
            }}
        >
          {backContent}
        </Block>
      </ReactCardFlip>
  )
}


export default MobileBlock
