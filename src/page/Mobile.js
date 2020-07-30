import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components'
import {useTranslation} from 'react-i18next'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MobileBlock from './components/MobileBlock'
import {MobileImageButton} from './components/Buttons'
import specialty_bg from '../assets/specialty_bg.png'
import mobile_about_bg from '../assets/mobile/about/mobile_about_bg.png'
import mobild_map from '../assets/mobild_map.png'
import QueueAnim from "rc-queue-anim";
import logo from '../assets/mobile_logo.png'
import {Anchor, Collapse, Card, message} from 'antd'
import {myContext} from './reducer'
import menu_img from '../assets/mobile/home/button_top.png'
import mobile_specialty_img_1 from '../assets/specialty1.png'
import mobile_specialty_img_2 from '../assets/specialty2.png'
import mobile_specialty_img_3 from '../assets/specialty3.png'
import mobile_specialty_img_4 from '../assets/specialty4.png'
import ttc_border from '../assets/ttc_border.png'
import coin_count from '../assets/coin_count.png'
import mobile_equation from '../assets/mobile_equation.png'
import mobile_equation_en from '../assets/mobile_equation_en.png'
import ttc_left_border from '../assets/ttc_left_border.png'
import ttc_right_border from '../assets/ttc_right_border.png'
import block from '../assets/block.png'
import contact_img_1 from '../assets/contact_img_1.png'
import contact_img_2 from '../assets/contact_img_2.png'
import contact_img_3 from '../assets/contact_img_3.png'
import step_border from '../assets/step_border.png'
import step_doc from '../assets/step_doc.png'
import mobile_home_bg from '../assets/mobile_home_bg.png'
import mobile_home_logo from '../assets/mobile_home_logo.png'
import android_btn from '../assets/android_btn.png'
import ios_btn from '../assets/ios_btn.png'
import dowload from '../assets/dowload.png'
import modal_img from '../assets/modal_img.png'
import ttc_border_en from '../assets/ttc_border_en.png'
import coin_count_en from '../assets/coin_count_en.png'



import './App.css';

const {Panel} = Collapse;

const Container = styled.div`
      width: 100vw;
     -ms-overflow-style: none;
     overflow-y: scroll; 
     overflow-x: hidden;
     position: fixed;
     top: 0;
     bottom: 0;

`

const Header = styled.div`
  display: flex;  
  flex-direction: column;
  position: fixed;
  width: 100%;
  z-index: 999;
`


Header.Top = styled(Anchor)`
  align-items: center;
  display: flex;
  background: transparent;
  
  .slick-list{
    width: 100%!important;
  }
  
  
  div.ant-anchor-ink::before{
    content: none;
  }
  

  
  .ant-anchor{
    width: 100%;
    background: transparent;
    border-left: 0!important;
    z-index: 10;
  }
  
  .ant-collapse-borderless > .ant-collapse-item:last-child .ant-collapse-header{
    height: 60px;
    width: 100%;
  }
  
  .ant-collapse-header{
    background: transparent;
  }
  
  .ant-collapse-borderless > .ant-collapse-item{
    border-bottom: 0;
  }
  
  
   .ant-anchor-wrapper{
    margin-left: 0!important;
    padding-left: 0!important;
    background: transparent!important;
  }
`

Header.Logo = styled.img`
  height: 32px;
`

Header.Label = styled.div`
  font-family: PingFangSC-Regular;
  font-size: 21px;
  color: #E4E9EA;
  letter-spacing: 0;
  margin-left: 12px;
`

Header.ButtonLayout = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 12px;
  
`

Header.Button = styled.button`
  background: rgba(255,255,255,0.15);
  border: 1px solid #FFFFFF;
  padding: 8px;
  font-family: PingFangSC-Semibold;
  font-size: 14px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: left;
  font-weight: normal;
  width: 175px;
  height: 40px;
  &:hover{
    background: rgba(7,171,165,0.19);
    color: #77E1FF;
    border: 1px solid #77E1FF;
  }
`

const MenuIcon = styled.img`
  width: 28px;
  margin-right: 8px;
`


const MenuLayout = styled(Anchor)`
width: 100%;
flex: 1;
background-color: transparent;

.ant-anchor-ink-ball{
  height: 0;
  width: 0;  
  border: none;
}
`

const Menu = styled(Anchor.Link)`
  font-family: PingFangSC-Semibold;
  letter-spacing: 0;
  display: flex;
  justify-content: center;
  
  .ant-anchor-link-title-active{
  color: #77E1FF!important;
    font-size: 16px;
    text-decoration: none;
  border-bottom: 2px #77E1FF solid;
  font-weight: bold;
  }
  
  a{
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #E4E9EA;
  letter-spacing: 0;
  text-align: left;
  border-bottom: 2px #00000000 solid;
  font-weight: normal;
  
  &:active{
    color: #77E1FF;
    border-bottom: 2px #77E1FF solid;
    font-size: 16px;
    font-weight: bold;
  }
  
  &:visited{
    color: #fff!important;
  }
  
  &:link{
    color: #fff;
  }
  
  &:focus{
    color: #77E1FF;
    text-decoration: none;
    border-bottom: 2px #77E1FF solid;
    font-size: 16px;
    font-weight: bold;
  
  
  }
  
   .ant-anchor-link-title{
    color: #77E1FF !important;
  }
  
  }
`

const Content = styled.div`
  font-family: PingFangSC-Semibold;
font-size: 20px;
color: #FFFFFF;
letter-spacing: 0;
height: fit-content;
text-align: center;
margin-top: 32px;
`

Content.Extra = styled.div`
  font-family: PingFangSC-Regular;
font-size: 12px;
color: #FFFFFF;
letter-spacing: 0;
text-align: center;
white-space: pre-line;
width: 100%;
`

const Banner = styled.img`
  width: 100%;
`

const HeaderContent = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
`

Container.Content = styled.div`
  background-color: #021731;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
  border-top: none;
  z-index: 1000;
  width: 100%;
`

const ContainerItem = styled.div`
  background:linear-gradient(0deg,rgba(7,34,63,1),rgba(5,13,25,1));
  width: 100%;
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`


const LabelView = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  align-items: center;
  margin-top: 42px;
  position: relative;
`

LabelView.Icon = styled.img`
  width: 20px;
  height: 20px;
`

LabelView.Title = styled.div`
  font-family: PingFangSC-Regular;
font-size: 18px;
color: #FFFFFF;
letter-spacing: 0;
text-align: center;

`


const AboutContent = styled.p`
  width: 80%;
  font-size: 16px;
  margin-top: 60px;
  color: #fff;
  line-height: 32px;
  z-index: 1;
`

const Step = styled.div`
  width: 100%;
  height: 100vh;
  background:linear-gradient(0deg,rgba(7,34,63,1),rgba(5,13,25,1));
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

Step.Background = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`

const PanelHeader = styled.div`
  width: 100%;
  display: flex;
  background: transparent;
  align-items: center;
`

const HeaderCollapse = styled(Collapse)`
  .ant-collapse-header{
    height: 64px;
    display: flex;
    align-items: center;
  }
  
`


const AboutBackground = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
`

const BlockView = styled(QueueAnim)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`


const DestroyText = styled.p`
  font-size:12px;
  font-family:Microsoft YaHei;
  font-weight:300;
  color:#fff;
  line-height:20px;
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 40px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  white-space: pre-wrap;
`

const Lan = styled.p`
  font-size: 16px;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ContactView = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`


const Block = styled.div`
  width: 136px;
  height: 117px;
  background-image: url(${block});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-size:12px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(255,255,255,1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-wrap;
`

const StepItem = styled.div`
    width: 100%;
    display: flex;
    position: relative;
    padding-left: 24px;
    padding-right: 24px;
    justify-content: ${props => props.right ? 'flex-end' : 'flex-start'};
`

StepItem.Border = styled.p`
  width: 148px;
  height: 90px;
  background-image: url(${step_border});
  background-size: 100%;
  color: #fff;
  font-size: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 34px;
`
StepItem.Line = styled.div`
  height: 100%;
  width: 2px;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #77E1FF;
`

StepItem.Doc = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${step_doc});
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-size: 100%;
`

const HomeLogo = styled.img`
  width: 100px;
  position: absolute;
  top: 120px;
`

const DownloadButton = styled.img`
  height: 60px;
  position: absolute;
`

const FeatureCard = styled(Card)`
  border-radius: 8px!important;
  height: 360px;
  box-shadow:0px 2px 4px 0px rgba(159,159,159,0.3);
  
  
  .ant-card-hoverable{
    border-radius: 8px;
  }
  
  .ant-card-cover{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: unset!important;
  }
  
  .ant-card-cover img{
    border-radius: unset;
  }
  
  .ant-card-meta-title{
    font-size:20px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(0,51,112,1);
    white-space: normal;
    text-align: center;
  }
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  opacity: 0.6;
  z-index: 1000;
  background-image: url(${modal_img});
  background-repeat: no-repeat;
  background-size: 86% auto;
  background-position: center 6px;
`

const FeatureSlider = styled(Slider)`
  margin-top: 20px;
  .slick-slide{
    opacity: 0.5;
    transform: scale(0.6);
  }
  .slick-active{
  opacity: 1;
    transform: scale(1);
  } 
  
`

function isWeiXin() {
  var ua = window.navigator.userAgent.toLowerCase();
  console.log(ua);//mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true;
  } else {
    return false;
  }
}


function MobileApp() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch({lan: i18n.language === 'en' ? 'en' : 'zh'});
  }, []);


  const [activeKey, setActiveKey] = useState('');
  const {state, dispatch} = useContext(myContext);
  const {Meta} = Card;
  const isEN = state.isEN;
  const {t, i18n} = useTranslation();
  const StepList = [
    t('STEP1'), t('STEP2'), t('STEP3'), t('STEP4'), t('STEP5'), t('STEP6'), t('STEP7'), t('STEP8'), t('STEP9'), t('STEP10'),
  ];

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 1,
    speed: 500
  };



  return (
      <Container>
        {showModal? (<Modal onClick={()=>{
          setShowModal(false)
        }}/>): null}
        <Header>
          <HeaderContent>
            <Header.Top>
              <HeaderCollapse style={{marginLeft: -4}} bordered={false} activeKey={activeKey} defaultActiveKey={null}>
                <Panel key={'menu'} style={{backgroundColor: '#222E41'}} showArrow={false} header={(
                    <PanelHeader>
                      <Header.Logo src={logo}/>
                      <div style={{flex: 1}}/>
                      <MenuIcon src={menu_img} onClick={() => {
                        if (activeKey === 'menu') setActiveKey('')
                        else setActiveKey('menu')
                      }}/>
                    </PanelHeader>
                )}>
                  <MenuLayout showInkInFixed={false} bounds={-20} onClick={() => {
                    setActiveKey('')
                  }} affix style={{backgroundColor: '#222E41', zIndex: 1000}}>

                    <Menu href="#home" style={{marginTop: 8}} title={t('NAV_HOME')}/>
                    <Menu href="#about" title={t('NAV_ABOUT')}/>
                    <Menu href="#feature" title={t('NAV_SPECIALTY')}/>
                    <Menu href="#TTC" title={t('NAV_TTC')}/>
                    <Menu target='_blank' title={t('NAV_WHITE_PAGER')} href={isEN? 'https://coinphoto.oss-ap-southeast-1.aliyuncs.com/TITAN-%E7%99%BD%E7%9A%AE%E4%B9%A6-EN.pdf': 'https://coinphoto.oss-ap-southeast-1.aliyuncs.com/TITAN-%E7%99%BD%E7%9A%AE%E4%B9%A6-ZH.pdf'}/>
                    <Lan onClick={()=>{
                      message.info('即将上线')
                    }} title={t('NAV_BLOCK_BROWSER')}/>
                    <Menu href="#contact" title={t('NAV_CONTACT')}/>
                    <Lan onClick={() => {
                      dispatch({lan: i18n.language === 'en' ? 'zh' : 'en'});
                      i18n.changeLanguage(i18n.language === 'en' ? 'zh' : 'en')

                    }}>
                      <span style={{fontSize: state.isEN? '12px': '16px',opacity: state.isEN? 0.5: 1}}>中文</span>
                      /<span style={{fontSize: state.isEN? '16px': '12px',opacity: state.isEN? 1: 0.5}}>EN</span></Lan>
                  </MenuLayout>
                </Panel>
              </HeaderCollapse>

            </Header.Top>

          </HeaderContent>
        </Header>
        <Container.Content>
          <div id='home' style={{position: 'absolute', top: -84}}/>
          <ContainerItem style={{position: 'relative'}}>
            <Banner src={mobile_home_bg}/>
            <HomeLogo src={mobile_home_logo}/>
            <DownloadButton style={{bottom: 220, height: 32}} src={dowload}/>
            <DownloadButton onClick={()=>{
              if(isWeiXin()){
                setShowModal(true)
              }else {
                window.location.href='https://testflight.apple.com/join/xuOTzAV6';
              }
            }} style={{bottom: 120}} src={ios_btn}/>
            <DownloadButton onClick={()=>{
              if(isWeiXin()){
                setShowModal(true)
              }else {
                window.location.href='https://coinphoto.oss-ap-southeast-1.aliyuncs.com/titanwallet.apk';
              }
            }} style={{bottom: 40}} src={android_btn}/>
          </ContainerItem>

          <div id='about'/>
          <ContainerItem>
            <AboutBackground src={mobile_about_bg}/>
            <MobileImageButton style={{fontSize: 16}} title={t('ABOUT_TOP_BUTTON_TITLE')}/>
            <AboutContent>{t('ABOUT_CONTENT')}</AboutContent>
          </ContainerItem>
          <ContainerItem style={{height: 'fit-content'}}>
            <MobileImageButton style={{fontSize: isEN ? 12 : 24}} title={t('ABOUT_BOTTOM_BUTTON_TITLE')}/>
            <Step.Background src={mobild_map}/>
            {StepList.map((item, index) => {
              return (
                  <StepItem right={index % 2 !== 0}>
                    <StepItem.Border>{item}</StepItem.Border>
                    <StepItem.Line/>
                    <StepItem.Doc/>
                  </StepItem>
              )
            })}

          </ContainerItem>

          <div id='feature'/>
          <ContainerItem style={{height: '80vh',display:'block'}}>
            <MobileImageButton style={{fontSize: 24}} title={t('NAV_SPECIALTY')}/>
            <FeatureSlider {...settings}>
              <FeatureCard
                  key='card1'
                  cover={<img alt="" src={mobile_specialty_img_1}/>}>
                <Meta title={t('CARD_1_TITLE')} description={t('CARD_1_CONTENT')}/>
              </FeatureCard>
              <FeatureCard
                  key='card2'
                  cover={<img alt="" src={mobile_specialty_img_2}/>}>
                <Meta title={t('CARD_2_TITLE')} description={t('CARD_2_CONTENT')}/>
              </FeatureCard>
              <FeatureCard
                  key='card3'
                  cover={<img alt="" src={mobile_specialty_img_3}/>}>
                <Meta title={t('CARD_3_TITLE')} description={t('CARD_3_CONTENT')}/>
              </FeatureCard>
              <FeatureCard
                  key='card4'
                  cover={<img alt="" src={mobile_specialty_img_4}/>}>
                <Meta title={t('CARD_4_TITLE')} description={t('CARD_4_CONTENT')}/>
              </FeatureCard>
            </FeatureSlider>
          </ContainerItem>

          <div id='TTC'/>
          <ContainerItem style={{height: '90vh', backgroundImage: `url(${specialty_bg})`, backgroundSize: 'auto 100%'}}>
            <MobileImageButton style={{marginTop: 40, marginBottom: 48, fontSize: 12}}
                               title={t('SPECIALTY_BOTTOM_BUTTON_TITLE')}/>
            <BlockView
                type='scaleBig'
                duration={1000}>
              <MobileBlock key='block1' content={t('BORDER_1_TITLE')} backContent={t('BORDER_1_CONTENT')}/>
              <MobileBlock key='block2' content={t('BORDER_2_TITLE')} backContent={t('BORDER_2_CONTENT')}/>
            </BlockView>
            <BlockView
                type='scaleBig'
                duration={1000}
                style={{marginTop: 40}}>
              <MobileBlock key='block3' content={t('BORDER_3_TITLE')} backContent={t('BORDER_3_CONTENT')}/>
              <MobileBlock key='block4' content={t('BORDER_4_TITLE')} backContent={t('BORDER_4_CONTENT')}/>
            </BlockView>
          </ContainerItem>

          <ContainerItem style={{height: 'fit-content'}}>
            <MobileImageButton style={{marginTop: 40, marginBottom: 12, fontSize: 12}}
                               title={t('TTC_TOP_BUTTON_TITLE')}/>
            <img alt="" style={{width: '90%'}} src={isEN? ttc_border_en: ttc_border}/>
            <img alt="" style={{width: '96%'}} src={isEN? coin_count_en: coin_count}/>
            <img alt="" style={{width: '100%', marginTop: 20}} src={isEN? mobile_equation_en: mobile_equation}/>
          </ContainerItem>

          <ContainerItem style={{height: 'fit-content'}}>
            <MobileImageButton style={{marginTop: 40, marginBottom: 20, fontSize: 12}}
                               title={t('TTC_BOTTOM_BUTTON_TITLE')}/>
            <div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
              <img alt="" style={{width: '96%'}} src={ttc_left_border}/>
              <DestroyText>{t('TTC_TEXT_LEFT')}</DestroyText>
            </div>
            <div style={{position: 'relative', display: 'flex', justifyContent: 'center'}}>
              <img alt="" style={{width: '96%'}} src={ttc_right_border}/>
              <DestroyText>{t('TTC_TEXT_RIGHT')}</DestroyText>
            </div>
          </ContainerItem>

          <div id='contact'/>
          <ContainerItem style={{height: 'fit-content'}}>
            <MobileImageButton style={{marginTop: 40, marginBottom: 48, fontSize: 12}} title={t('NAV_CONTACT')}/>
            <ContactView>
              <Block>{t('BOTTOM_TWITTER')}</Block>
              <Block>{t('BOTTOM_TELEGRAM')}</Block>
              <Block>{t('BOTTOM_EMAIL')}</Block>
            </ContactView>
            <img alt="" style={{width: '100%', marginTop: 48}} src={contact_img_1}/>
            <div>
              <img alt="" style={{width: '50%'}} src={contact_img_2}/>
              <img alt="" style={{width: '50%', display: 'inline'}} src={contact_img_3}/>
            </div>

          </ContainerItem>

        </Container.Content>
      </Container>
  );
}

export default MobileApp;
