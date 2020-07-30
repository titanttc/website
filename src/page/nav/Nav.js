import React, {useContext,useState,useEffect} from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next'
import { createBrowserHistory } from 'history';
import {Anchor, message} from 'antd'
import {myContext} from '../reducer'
import logo from '../../assets/logo.png'


const Menu = styled.a`
  color: ${props => props.active ? '#78E2FF' : '#FFF'};
  font-size: 18px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  margin-right: 48px;
  padding-bottom: 24px;
  padding-top: 24px;
  border-bottom: ${props => props.active ? '4px #78E2FF solid' : 'none'};
  z-index: 999;
 
  
  &:active{
    color: #78E2FF;
  }
  
  &:visited{
  }
  
  &:hover{
  color: #78E2FF;
  }
  
  
  &:focus{
  color: #78E2FF;
  text-decoration: none;
  padding-bottom: 24px;
  border-bottom: 4px #78E2FF solid;
  margin-right: 48px;
  font-weight: normal;

  }
`

const MenuLayout = styled(Anchor)`
flex: 1;
background-color: transparent;
margin: auto;

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
    background: rgba(8,29,51,1);
    height: 100px;
    margin-left: -4px;
  }
  
`

const Logo = styled.img`
  height: 40px;
  margin: 0 75px;
`

const HeaderContent = styled.div`
  position: fixed;
  width: 100vw;
  background-color: rgba(8,29,51,1);
  z-index: 999;
  display: flex;
  justify-content: center;
`



function Nav() {
  const { state, dispatch } = useContext(myContext);
  const { t,i18n } = useTranslation();
  const [link, setLink] = useState('');
  const history = createBrowserHistory();

// 获取当前 location
  const location = history.location;

  useEffect(() => {
    setLink(location.pathname);
    dispatch({lan: i18n.language === 'en' ? 'en' : 'zh'});
  },[]);
  return(<HeaderContent>
    <MenuLayout affix>
      <Logo src={logo}/>
      <Menu style={{marginLeft:200}} onClick={()=>{
        setLink('')
      }} active={link === '/'} href="/">{t('NAV_HOME')}</Menu>
      <Menu onClick={()=>{
        setLink('/about')
      }} active={link === '/about'} href="/about">{t('NAV_ABOUT')}</Menu>
      <Menu onClick={()=>{
        setLink('/specialty')
      }} active={link === '/specialty'} href="/specialty">{t('NAV_SPECIALTY')}</Menu>
      <Menu onClick={()=>{
      setLink('/ttc')
    }} active={link === '/ttc'} href="/ttc">{t('NAV_TTC')}</Menu>
      <Menu href={state.isEN? 'https://coinphoto.oss-ap-southeast-1.aliyuncs.com/TITAN-%E7%99%BD%E7%9A%AE%E4%B9%A6-EN.pdf': 'https://coinphoto.oss-ap-southeast-1.aliyuncs.com/TITAN-%E7%99%BD%E7%9A%AE%E4%B9%A6-ZH.pdf'}>{t('NAV_WHITE_PAGER')}</Menu>
      <Menu onClick={()=>{
        message.info('即将上线')
      }}>{t('NAV_BLOCK_BROWSER')}</Menu>
      <Menu onClick={()=>{
        setLink('/contact')
      }} active={link === '/contact'} href="/contact">{t('NAV_CONTACT')}</Menu>
      <Menu onClick={()=>{
        dispatch({lan:i18n.language==='en'?'zh':'en'});
        i18n.changeLanguage(i18n.language==='en'?'zh':'en')
      }} ><span style={{fontSize: state.isEN? '12px': '18px',opacity: state.isEN? 0.5: 1}}>中文</span>/<span style={{fontSize: state.isEN? '18px': '12px',opacity: state.isEN? 1: 0.5}}>EN</span></Menu>
    </MenuLayout>
  </HeaderContent>)
}

export default Nav
