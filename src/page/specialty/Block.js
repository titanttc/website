import React, {useState} from "react";
import ReactCardFlip from 'react-card-flip';
import styled from "styled-components";
import block from '../../assets/block.png'



const Block = styled.div`
  width: ${props => props.small ? '201px' : '225px'};
  height: ${props => props.small ? '172px' : '196px'};
  background-image: url(${block});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-size:${props => props.back ? '8px' : '19px'};
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

function SpecialtyBlock({content, backContent, small}) {
  const [flip, setFlip] = useState(false);
  return(
      <ReactCardFlip isFlipped={flip} >
        <Block
            key='block'
            small={small}
            onMouseOver={() => {
              setFlip(true)
            }}>
          {content}
        </Block>
        <Block
            key='block'
            small={small}
            back
            onMouseOut={() => {
              setFlip(false)
            }}
        >
          {backContent}
        </Block>
      </ReactCardFlip>
  )
}


export default SpecialtyBlock
