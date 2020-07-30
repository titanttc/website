import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import {apiGET}  from '../utils/api/apiFetch'
import banner from '../assets/home/banner-bg.png'
import logo from '../assets/logo.png'
import {Anchor, Carousel, message} from 'antd'
import line from '../assets/about/line.png'
import corner from '../assets/about/corner.png'
import feature1 from '../assets/feature/img-1.png'
import feature2 from '../assets/feature/img-2.png'
import feature3 from '../assets/feature/img-3.png'
import feature4 from '../assets/feature/img-4.png'
import teachImg from '../assets/tech/tech-table.png'
import walletImg from '../assets/wallet/node-img.png'
import mac from '../assets/wallet/mac-icon.png'
import windows from '../assets/wallet/windows-icon.png'
import linux from '../assets/wallet/linux-icon.png'
import download from '../assets/wallet/download-icon.png'
import contact from '../assets/contact/contact-img.png'
import twitter from '../assets/contact/icon_twitter.png'
import email from '../assets/contact/icon-email.png'
import medium from '../assets/contact/icon-medium.png'
import reddit from '../assets/contact/icon-reddit.png'
import telegram from '../assets/contact/icon-telegram.png'
import aboutIcon from '../assets/about/about-icon.png'
import cloud_download from '../assets/cloud_download.png'


import './App.css';

const Container = styled.div`
    width: 100%;
      min-width: 1400px;
      -ms-overflow-style: none;
      overflow: -moz-scrollbars-none; 

`

const BannerLayout = styled(Carousel)`
  width: 100%;
  min-width: 1400px;
  position: relative;
  height: 100%;
  text-align: right;
  img{
    height: 899px;
    
  }
  
  ul{
    margin-bottom: 24px !important;
  }
  
  button{
    width: 12px !important;
    height: 12px !important;
    border-radius: 12px !important;
    margin: 0 24px;
    margin-bottom: 24px;
  }
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  overflow: hidden;
  min-height: 680px;
`

Header.Top = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
`

Header.Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 75px;
`

Header.Label = styled.div`
  font-family: PingFangSC-Regular;
  font-size: 32px;
  color: #E4E9EA;
  letter-spacing: 0;
  margin-left: 12px;
`

Header.ButtonLayout = styled.div`
  display: flex;
  margin-left: 151px;
  font-size: 18px;
  
`

Header.Button = styled.button`
  background: rgba(255,255,255,0.15);
  border: 2px solid #FFFFFF;
  font-family: PingFangSC-Semibold;
  font-size: 20px;
  color: #FFFFFF;
  letter-spacing: 0;
  text-align: left;
  margin-top: 69px;
  justify-content: center;
  align-items: center;
  width: 248px;
  height: 64px;
  
  &:hover{
    background: rgba(7,171,165,0.19);
    color: #07ABA5;
    border: 2px solid #07ABA5;
  }
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
 
  .ant-anchor{
    display: flex;
    flex-direction: row;
    margin-right: 0;
    position: static;
    align-items: center;
    background: rgba(0,0,0,0.56);
    height: 100px;
  }
  
  
`

const Menu = styled(Anchor.Link)`
  font-family: PingFangSC-Semibold;
  letter-spacing: 0;
  
  .ant-anchor-link-title-active{
  color: #07ABA5!important;
    font-size: 24px;
    text-decoration: none;
    padding-bottom: 24px;
    border-bottom: 4px #07ABA5 solid;
    margin-right: 48px;
    font-weight: normal;
  }
  
  a{
  font-family: PingFangSC-Medium;
  font-size: 18px;
  color: #E4E9EA;
  letter-spacing: 0;
  text-align: left;
  margin-right: 48px;
  padding-bottom: 24px;
  padding-top: 24px;
  border-bottom: 4px #00000000 solid;
  
  &:active{
    color: #07ABA5;
  }
  
  &:visited{
    color: #fff!important;
  }
  
  &:link{
    color: #fff;
  }
  
  &:focus{
    color: #07ABA5;
    font-size: 24px;
    text-decoration: none;
    padding-bottom: 24px;
  border-bottom: 4px #07ABA5 solid;
  margin-right: 48px;
  font-weight: normal;
  
  
  }
  
   .ant-anchor-link-title{
    color: #07ABA5 !important;
  }
  
  }
`

const Content = styled.div`
  margin: 127px 0 60px 0;
  font-family: PingFangSC-Semibold;
font-size: 48px;
color: #FFFFFF;
letter-spacing: 0;
height: fit-content;
max-width: 800px;
margin-left: 151px;
`

Content.Extra = styled.div`
  font-family: PingFangSC-Regular;
font-size: 36px;
color: #FFFFFF;
letter-spacing: 0;
text-align: left;
max-width: 1200px;
min-width: 800px;
margin-left: 151px;
white-space: pre-line;


`

const Banner = styled.img`
  width: 101%;
  height: fit-content;
  object-fit: cover;
  
`

const HeaderContent = styled.div`
  position: absolute;
  width: 101%;
  margin-left: -2px;
`

Container.Content = styled.div`
  min-width: 1400px;
  background-color: #021731;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
`


const LabelView = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
  margin-top: 176px;
  align-items: center;
`

LabelView.Icon = styled.img`
  width: 40px;
  height: 40px;
`

LabelView.Title = styled.div`
  font-family: PingFangSC-Regular;
font-size: 32px;
color: #FFFFFF;
letter-spacing: 0;
text-align: left;
  margin: 0 40px 0 53px;

`

const About = styled.div`
 background: #1B2E46;
  border-radius: 15px;
  margin-top: 28px;
  position: relative;
  padding-left: 58px;
 `

About.Li = styled.li`
width: 1000px;
font-size: 18px;
color: #07ABA5;
text-align: left;
line-height: 30px;

`

About.Content = styled.p`
   font-family: Helvetica-Light;
text-align: left;
line-height: 30px;
color: #fff;
font-size: 18px;
white-space: pre-line;
padding-left: 27px;
`

const Feature = styled.div`
  background: rgba(255,255,255,0.10);
  box-shadow: 0 0 20px 0 rgba(0,0,0,0.07);
  border-radius: 16px;
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  width: 1148px;
  overflow: hidden;
`

Feature.Item = styled.div`
  border-radius: 12px;
  height: 395px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 287px;
  padding: 0 30px;
  padding-top: 36px;
  
  &:hover{
    background: rgba(255,255,255,0.14);
     border: 2px solid #07ABA5;
     box-shadow: 0 0 20px 0 rgba(0,0,0,0.07);
  }
`

Feature.Img = styled.img`
  width: 176px;
  height: 176px;
`

Feature.Text = styled.p`
  font-family: PingFangSC-Regular;
font-size: 15px;
color: #FFFFFF;
letter-spacing: 0;
line-height: 21px;
margin-top: 44px;
text-align: left;
white-space: pre-line;
`


const WalletView = styled.div`
  background-repeat: round;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 42px;
  width: 1020px;
  background: #1B2E46;
  align-items: center;
`

WalletView.ItemView = styled.div`
  background-repeat: round;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  padding-left: 100px;
`

WalletView.UrlView = styled.span`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 27px;
  font-size: 18px;
  color: #fff;
  align-items: center;
`

WalletView.Url = styled.div`
  width: 316px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  &:hover{
    color: #07ABA5;
  }
`

WalletView.DividerH = styled.div`
  background: linear-gradient(0.25turn, #24374e, #07ABA5 , #24374e);
  width: 80%;
  height: 1px;
  align-self: center;
  margin-top: 26px;
`

WalletView.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  margin-left: 57px;
  margin-right: 57px;
`

WalletView.Icon = styled.img`
  width: 60px;
  height: 60px;
`

WalletView.Label = styled.div`
  font-family: PingFangSC-Regular;
font-size: 20px;
color: #FFFFFF;
letter-spacing: 1.5px;
text-align: center;
line-height: 40.56px;
margin-top: 25px;
`

WalletView.Button = styled.button`
  background: #07ABA5;
  border-radius: 22.5px;
  height: 45px;
  width: 158px;
  font-family: PingFangSC-Regular;
  font-size: 13.5px;
  color: #FFFFFF;
  letter-spacing: 0.9px;
  text-align: center;
  line-height: 22.71px;
  margin-top: 28px;
  text-decoration: none;
  padding: 0 24px;
  cursor: pointer;
  background: rgba(255,255,255,0.15);
border: 1px solid #FFFFFF;

&:hover{
background: rgba(7,171,165,0.19);
border: 1px solid #07ABA5;
color: #07ABA5;
}
`

WalletView.Divider = styled.img`
  height: 100px;
  background: linear-gradient(0deg, #1B2E46, #07ABA5 50%, #1B2E46);
  width: 1px;
  align-self: center;
  margin: auto 47px;
`

WalletView.Download = styled.img`
  width: 95px;
  height: 95px;
  position: absolute;
  top: -48px;
  left: 20px;
`

const Footer = styled.div`
  background-image: url(${contact});
  width: 100%;
  min-width: 1400px;
  height: 674px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 99px;
  position: relative;
  background-position: center;
`

Footer.Top = styled.div`
    display: flex;
    flex-direction: row;
`

Footer.Logo = styled.img`
  width: 60px;
  height: 60px;
`

Footer.Title = styled.div`
  font-family: PingFangSC-Regular;
  font-size: 33.6px;
  color: #E4E9EA;
  letter-spacing: 0;
  text-align: left;
  margin-left: 12px;
`

Footer.Way = styled.div`
   display: inline-flex;
   flex-direction: row;
   align-items: center;
   width: 232px;
`

Footer.Icon = styled.img`
  width: 42px;
  height: 42px;
`

Footer.Label = styled.div`
  font-family: PingFangSC-Regular;
font-size: 16px;
color: #E4E9EA;
letter-spacing: 0;
text-align: left;
line-height: 50px;
margin-left: 20px;
cursor: pointer;

&:hover{
  color: #07ABA5;
  text-decoration: underline;
  text-decoration-color: #07ABA5;
}

`

Footer.Extra = styled.div`
  width: 100%;
  opacity: 0.87;
  background: rgba(0,0,0,0.86);
  text-align: center;
  margin-bottom: 0;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #FFFFFF;
  letter-spacing: 0;
  position: absolute;
  bottom: 0;
  height: 50px;display: flex;
  align-items: center;
  justify-content: center;
`

const AboutBackground = styled.img`
  height: 50%;
  position: absolute;
  right: 0;
`

const CloudDownload = styled.img`
  width: 24px;
  height: 18px;
  display: inline;
  margin-left: 4px;
`

const Thanksgiving = styled.div`
  width: 1440px;
  height: 200px;
  display: flex;
  justify-content: center;
  padding: 0 32px;
  position: relative;
  margin-top: 28px;
`

Thanksgiving.Item = styled.div`
  width:667px;
  height:404px;
  background:rgba(255,255,255,0.1);
  box-shadow:0px 0px 15px 0px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
  border-radius: 10px;
`

Thanksgiving.LeftItem = styled(Thanksgiving.Item)`
  margin-right: 40px;
`

Thanksgiving.RightItem = styled(Thanksgiving.Item)`
  margin-right: 0;
`

Thanksgiving.ContentView = styled.div`
  display: flex;
  height: 277px;
`

Thanksgiving.Content = styled.div`
  flex: 1;
`

Thanksgiving.Title = styled.p`
  font-size:20px;
  font-family:PingFangSC-Medium,PingFang SC;
  font-weight:500;
  color:rgba(255,255,255,1);
  line-height:30px;
  width: 100%;
  text-align: center;

`

Thanksgiving.Text = styled.p`
  font-size:12px;
font-family:PingFangSC-Medium,PingFang SC;
font-weight:400;
color:rgba(255,255,255,1);
line-height:36px;
`

Thanksgiving.Footer = styled.div`
  display: flex;
  align-items: center;
`

Thanksgiving.ButtonView = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`

Thanksgiving.Button = styled(WalletView.Button)`
  margin-top: 0;
  width: 236px;
  height: 56px;
  border-radius: 28px;
  font-size:20px;
font-weight:600;
color:rgba(255,255,255,1);
line-height:17px;
letter-spacing:1px;
`

Thanksgiving.Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: #000;
`

Thanksgiving.Line = styled.div`
  width: 110px;
  height: 4px;
  background-color: #fff;
  position: absolute;
  border-radius: 2px;
  top: 34px;
`

Thanksgiving.ThanksContent = styled.span`
  font-size:20px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:rgba(255,255,255,1);
  line-height:30px;
`

Thanksgiving.ThanksContentActive = styled(Thanksgiving.ThanksContent)`
  font-size:20px;
  font-family:PingFangSC-Regular,PingFang SC;
  font-weight:400;
  color:#07ABA5;
  line-height:30px;
`

function renderLabel(title) {
  return (
      <LabelView>
        <LabelView.Icon src={line}/>
        <LabelView.Title>{title}</LabelView.Title>
        <LabelView.Icon src={line}/>
      </LabelView>
  )
}


function PCApp() {

  const [thanksgivings, setThanksgivings] = useState([]);

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    const result = await apiGET('http://localhost:3000/api/thanksgiving/list?page=1&size=2', false, false);
    if (result.code === 0) {
      setThanksgivings(result.data);
    } else {
      message.error(result.message);
    }

  };


  function renderFeature(text, img, cur) {
    return (
        <Feature.Item>
          <Feature.Img src={img}/>
          <Feature.Text>{text}</Feature.Text>
        </Feature.Item>
    )
  }

  return (
      <Container>
        <Header id='home'>
          <BannerLayout>
            <Banner src={banner}/>
            <Banner src={banner}/>
            <Banner src={banner}/>
          </BannerLayout>

          <HeaderContent>
            <MenuLayout affix>
              <Header.Logo src={logo}/>
              <Header.Label>LitecoinHD</Header.Label>
              <div style={{flex: 1}}></div>
              <Menu href="#home" title='Home'/>
              <Menu href="#About LitecoinHD" title='About'/>
              <Menu href="#Feature" title='Feature'/>
              <Menu href="#Tech and coin distribution" title='Tech'/>
              <Menu title='Thanksgiving' href="#LitecoinHD Thanksgiving"/>
              <Menu target='_blank' href="http://explorer.ltchd.io" title='Explorer'/>
              <Menu href="#Full node wallet download" title='Wallet'/>
              <Menu href="#footer" title='Contact'/>
            </MenuLayout>

            <Content>LitecoinHD</Content>
            <Content.Extra>{`Redefine regular mining approach,
              Most motivating economic system ever in the crypto world.`}</Content.Extra>
            <Header.ButtonLayout>
              <Header.Button onClick={() => {
                window.open('https://ltchd.io/docs/LitecoinHD-Whitepaper-v1.0.pdf')
              }}>Whitepaper Download</Header.Button>
            </Header.ButtonLayout>
          </HeaderContent>
        </Header>

        <Container.Content id='About LitecoinHD'>
          {renderLabel('About LitecoinHD')}
          <About>
            <AboutBackground src={corner}/>
            <ul style={{listStyleImage: `url(${aboutIcon})`}}>
              <About.Li style={{marginTop: 63}}>
                <About.Content>
                  {`Create a new world using the innovative consensus algorithm of cPoC.`}
                </About.Content>
              </About.Li>

              <About.Li style={{marginTop: 20}}>
                <About.Content>
                  {`Break the monopoly of centralization, completely decentralize the autonomy of the community
                and enable free transfer of assets.`}
                </About.Content>
              </About.Li>

              <About.Li style={{marginTop: 20}}>
                <About.Content>
                  {`Mining in a more energy-saving, economical and environmentally friendly approach.`}
                </About.Content>
              </About.Li>

              <About.Li style={{marginTop: 20, marginBottom: 65}}>
                <About.Content>
                  {`Optimized mining return system to motivate contributors in the PoC ecology.`}
                </About.Content>
              </About.Li>
            </ul>

          </About>

          <div id='Feature'/>
          {renderLabel('Feature')}
          <Feature>
            {renderFeature(`Real decentralization and non-existence of monopoly power`, feature1, 0)}
            {renderFeature(`Low threshold for mining participation and well-rounded motivation model`, feature2, 1)}
            {renderFeature(`Hard disk mining, less power consumption yet higher mining return`, feature3, 2)}
            {renderFeature(`Improved security of tech architecture`, feature4, 3)}
          </Feature>
          <div id='Tech and coin distribution'/>
          {renderLabel('Tech and coin distribution')}
          <img src={teachImg} style={{marginTop: 60, width: '80%'}}/>

          <div id='LitecoinHD Thanksgiving'/>
          {renderLabel('LitecoinHD Thanksgiving')}
          <Thanksgiving>

            <Thanksgiving.LeftItem>
              <Thanksgiving.ContentView>
                <Thanksgiving.Content>
                  <Thanksgiving.Title>Thank you for helping create a new crypto world.</Thanksgiving.Title>
                  <Thanksgiving.Text>
                    Ecological donors can be from the media, exchanges, capital, PoC mining pools, etc., who help facilitate the development of LHD by donating their own resources, including the donation of advertising promotionals, pushing of articles, free coin channels, direct donation of USDT, etc.
                    Please fill out detailed donation info as below. Your donation will be published on the right hand side for public review.</Thanksgiving.Text>
                </Thanksgiving.Content>
                <Thanksgiving.Dot/>
              </Thanksgiving.ContentView>

              <Thanksgiving.Footer>
                <Thanksgiving.ButtonView>
                  <Thanksgiving.Button onClick={() => {
                    window.open('http://thanksgiving.ltchd.io/commit')
                  }}>Visit the form</Thanksgiving.Button>
                </Thanksgiving.ButtonView>
                <Thanksgiving.Dot/>
              </Thanksgiving.Footer>
            </Thanksgiving.LeftItem>

            <Thanksgiving.RightItem>
              <Thanksgiving.ContentView>
                <Thanksgiving.Dot/>
                <Thanksgiving.Content>
                  <Thanksgiving.Title>Donation records：</Thanksgiving.Title>
                  {thanksgivings.map((item,index)=>{
                    return(
                        <div style={{marginTop:index!==0?'27px':''}}>
                          <Thanksgiving.ThanksContent>*Thanks  </Thanksgiving.ThanksContent>
                          <Thanksgiving.ThanksContentActive>{item.donator} </Thanksgiving.ThanksContentActive>
                          <Thanksgiving.ThanksContent>for donating </Thanksgiving.ThanksContent>
                          <Thanksgiving.ThanksContentActive>{item.desc} </Thanksgiving.ThanksContentActive>
                          <Thanksgiving.ThanksContent>at the LHD block height of </Thanksgiving.ThanksContent>
                          <Thanksgiving.ThanksContentActive>{item.remark} </Thanksgiving.ThanksContentActive>
                        </div>
                    )
                  })}
                </Thanksgiving.Content>
              </Thanksgiving.ContentView>

              <Thanksgiving.Footer>
                <Thanksgiving.Dot/>
                <Thanksgiving.ButtonView>
                  <Thanksgiving.Button onClick={() => {
                    window.open('https://explorer.ltchd.io/thanksgivings')
                  }}>Click to see more</Thanksgiving.Button>
                </Thanksgiving.ButtonView>
              </Thanksgiving.Footer>
            </Thanksgiving.RightItem>

            <Thanksgiving.Line/>
            <Thanksgiving.Line style={{top:344}}/>
          </Thanksgiving>


          <div id='Full node wallet download' style={{marginTop: 200}}/>
          {renderLabel('Full node wallet download')}
          <WalletView>
            <WalletView.ItemView>
              <WalletView.Item>
                <WalletView.Icon src={mac}/>
                <WalletView.Label>MAC OS</WalletView.Label>
                <WalletView.Button onClick={() => {
                  window.location.href = 'https://ltchd.io/wallets/ltchd-v0.16.6.0-fb64d89-osx.dmg'
                }}>Mac OS(10.9+)</WalletView.Button>
              </WalletView.Item>

              <WalletView.Divider/>

              <WalletView.Item style={{margin: 0}}>
                <WalletView.Icon src={windows}/>
                <WalletView.Label>Windows</WalletView.Label>
                <WalletView.Button onClick={() => {
                  window.location.href = 'https://ltchd.io/wallets/ltchd-v0.16.6.0-fb64d89-win64.zip'
                }}>Windows(64bit)</WalletView.Button>
                <WalletView.Button style={{marginTop: 15}} onClick={() => {
                  window.location.href = 'https://ltchd.io/wallets/ltchd-v0.16.6.0-fb64d89-win32.zip'
                }}>Windows(32bit)</WalletView.Button>
              </WalletView.Item>

              <WalletView.Divider/>

              <WalletView.Item style={{marginLeft: 0, marginRight: 200}}>
                <WalletView.Icon src={linux}/>
                <WalletView.Label>LINUX</WalletView.Label>
                <WalletView.Button onClick={() => {
                  window.location.href = 'https://ltchd.io/wallets/ltchd-v0.16.6.0-fb64d89-x86_64-linux-gnu.tar.gz'
                }}>Linux (64bit)</WalletView.Button>
              </WalletView.Item>

              <WalletView.Download src={download}/>
            </WalletView.ItemView>

            <WalletView.DividerH/>

            <WalletView.UrlView>
              Miner:<WalletView.Url onClick={() => {
              window.location.href = 'https://github.com/JohnnyFFM/miner-burst/releases'
            }} style={{paddingLeft: 8}}>Mining tools</WalletView.Url>
              <div style={{width: 64, paddingLeft: 10}}/>
              Plotter:<WalletView.Url onClick={() => {
              window.location.href = 'https://blackpawn.com/tp/'
            }}
                                      style={{paddingLeft: 8}}>https://blackpawn.com/tp/</WalletView.Url>
            </WalletView.UrlView>

            <WalletView.UrlView style={{justifyContent: 'center', width: '100%', marginBottom: 42}}>
              LHD Mining Tutorial: <WalletView.Url onClick={() => {
              window.location.href = 'https://ltchd.io/docs/LHD_Mining_Tutorial-_binding.pdf'
            }} style={{marginLeft: 6, width: 'auto'}}>LHD Mining Tutorial-binding.pdf</WalletView.Url>
              <CloudDownload src={cloud_download}/>
            </WalletView.UrlView>

          </WalletView>

        </Container.Content>

        <div id='footer'/>
        <Footer>
          <Footer.Top id='footer'>
            <Footer.Logo src={logo}/>
            <Footer.Title>LitecoinHD</Footer.Title>
          </Footer.Top>
          <ul>
            <li style={{marginTop: 67}}>
              <Footer.Way>
                <Footer.Icon src={twitter}/>
                <Footer.Label onClick={() => {
                  window.location.href = 'https://twitter.com/@LitecoinHD'
                }}>Twitter: @LitecoinHD</Footer.Label>
              </Footer.Way>
              <Footer.Way style={{marginLeft: 162}}>
                <Footer.Icon src={reddit}/>
                <Footer.Label onClick={() => {
                  window.location.href = 'https://www.reddit.com/user/LitecoinHD'
                }}>Reddit: LitecoinHD</Footer.Label>
              </Footer.Way>
            </li>

            <li style={{marginTop: 29}}>
              <Footer.Way>
                <Footer.Icon src={telegram}/>
                <Footer.Label onClick={() => {
                  window.location.href = 'https://t.me/litecoinhd'
                }}>Telegram: litecoinhd</Footer.Label>
              </Footer.Way>
              <Footer.Way style={{marginLeft: 162, width: 'auto'}}>
                <Footer.Icon src={medium}/>
                <Footer.Label onClick={() => {
                  window.location.href = 'https://medium.com/@litecoinhd1'
                }}>Medium:@litecoinhd1</Footer.Label>
              </Footer.Way>
            </li>

          </ul>

          <Footer.Way style={{marginTop: 44, width: 'auto'}}>
            <Footer.Icon src={email}/>
            <Footer.Label onClick={() => {
              window.location.href = 'litecoinhd1@gmail.com'
            }}>Email: litecoinhd1@gmail.com</Footer.Label>
          </Footer.Way>

          <Footer.Extra>LitecoinHD website © 2019 | Latest version</Footer.Extra>

        </Footer>

      </Container>
  );
}

export default PCApp;
