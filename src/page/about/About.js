import React, {useContext} from 'react';
import styled from 'styled-components'
import {myContext} from '../reducer'
import { useTranslation } from 'react-i18next';
import about_bg from '../../assets/about_bg.png'
import lichengbei_bg from '../../assets/lichengbei_bg.png'
import bottom_bg from '../../assets/bottom_bg.png'
import step_bg_en from '../../assets/step_bg_en.png'
import {ImageButton} from "../components/Buttons";


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Top = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${about_bg});
    background-size: 100%;
`

Top.Background = styled.img`
  width: 100%;
  position: absolute;
  z-index: -1;
`

Top.Button = styled.img`
  width: 160px;
  margin-top: 30vh;
  z-index: 1;
`

Top.Content = styled.p`
  width:580px;
  font-size:20px;
  font-family:Microsoft YaHei;
  font-weight:300;
  color:rgba(255,255,255,1);
  line-height:48px;
  margin-top: 64px;
`

const Bottom = styled.div`
  width: 100%;
  height: 100vh;
  background:linear-gradient(0deg,rgba(7,34,63,1),rgba(5,13,25,1));
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20vh;
`

Bottom.Background = styled.img`
  position: absolute;
  height: 500px;
  margin-top: 12vh;
`

Bottom.Line = styled.img`
  width: 1200px;
  margin-top: 12vh;
`

Bottom.BorderImg = styled.img`
    width: 200px;
`


function About() {
    const { t } = useTranslation();
  const { isEN } = useContext(myContext).state;

  return (
      <Container>
        <Top>
          <div style={{width: 1200, paddingLeft: '45%',paddingTop:'30vh'}}>
            <ImageButton style={{fontSize: isEN? 18: 24}} title={t('ABOUT_TOP_BUTTON_TITLE')}/>
            <Top.Content>{t('ABOUT_CONTENT')}</Top.Content>
          </div>
        </Top>


        <Bottom>
            <ImageButton style={{fontSize: isEN? 16: 24}} title={t('ABOUT_BOTTOM_BUTTON_TITLE')}/>
            <Bottom.Background src={lichengbei_bg}/>
            <Bottom.Background src={isEN? step_bg_en: bottom_bg}/>
        </Bottom>
      </Container>
  )
}

export default About
