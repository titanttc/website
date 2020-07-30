import React, {useContext} from 'react';
import styled from 'styled-components'
import {useTranslation} from 'react-i18next';
import {myContext} from '../reducer'
import {ImageButton} from "../components/Buttons";
import ttc_bg from '../../assets/ttc_bg.png'
import ttc_border from '../../assets/ttc_border.png'
import coin_count from '../../assets/coin_count.png'
import ttc_left_border from '../../assets/ttc_left_border.png'
import ttc_right_border from '../../assets/ttc_right_border.png'
import rule from '../../assets/rule.png'
import ttc_border_en from '../../assets/ttc_border_en.png'
import coin_count_en from '../../assets/coin_count_en.png'
import rule_en from '../../assets/rule_en.png'



const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Top = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${ttc_bg});
  background-size: 100%;
  padding-top: 20vh;
`

const Content = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

Content.Left = styled.img`
  width: 400px;
  object-fit:scale-down 
`

Content.Right = styled.div`
   width: 480px
`

Content.CoinImg = styled.img`
  width: 480px;
  margin-right: 0;
`

const Bottom = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:linear-gradient(0deg,rgba(7,34,63,1),rgba(5,13,25,1));
  padding-top: 10vh;
`

const BottomLayout = styled.div`
  width: 1200px;
  position: relative;
  display: flex;
  align-items: center;
`
const BottomBorder = styled.div`
  position: relative;
`

const LeftImg = styled.img` 
  width: 700px;
  z-index: 1;
`

const RightImg = styled.img`
  width: 600px;
`

const Text = styled.p`
  font-size:16px;
  font-family:Microsoft YaHei;
  font-weight:300;
  color:rgba(255,255,255,1);
  line-height:27px;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 64px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  white-space: pre-wrap;
`

function TTC() {
    const {t} = useTranslation();
  const { isEN } = useContext(myContext).state;
  console.log(isEN)
    return (
        <Container>
            <Top>
                <ImageButton style={{fontSize:14}} title={t('TTC_TOP_BUTTON_TITLE')}/>
                <Content>
                    <Content.Left src={isEN? ttc_border_en: ttc_border}/>
                    <Content.Right>
                        <Content.CoinImg alt="" src={isEN? coin_count_en: coin_count}/>
                    </Content.Right>
                </Content>
                <img style={{width:1000,marginTop:24}} alt="" src={isEN? rule_en: rule}/>
            </Top>
            <Bottom>
                <ImageButton style={{marginLeft: -600, fontSize: isEN? 14: 20}} title={t('TTC_BOTTOM_BUTTON_TITLE')}/>
                <BottomLayout>
                    <BottomBorder style={{zIndex:9}}>
                        <LeftImg src={ttc_left_border}/>
                        <Text>{t('TTC_TEXT_LEFT')}</Text>
                    </BottomBorder>
                    <BottomBorder style={{position: 'absolute', right: 0}}>
                        <RightImg src={ttc_right_border}/>
                        <Text style={{paddingLeft:120}}>{t('TTC_TEXT_RIGHT')}</Text>
                    </BottomBorder>
                </BottomLayout>
            </Bottom>
        </Container>
    )
}

export default TTC
