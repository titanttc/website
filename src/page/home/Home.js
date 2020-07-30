import React, {useContext} from 'react';
import styled from 'styled-components'
import {myContext} from '../reducer'
import home_bg from '../../assets/home_bg.png'
import home_bg_en from '../../assets/home_bg_en.png'
import android_button from '../../assets/android-button.png'
import android from '../../assets/android.png'
import ios_button from '../../assets/ios-button.png'
import ios from '../../assets/ios.png'


const Container = styled.div`
  width: 100%;
  background:linear-gradient(0deg,rgba(5,13,25,1),rgba(7,34,63,1));
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`

const Background = styled.img`
  width: 100%;
`

const DownloadView = styled.div`
  position: absolute;
  bottom: 64px;
  right: 64px;
  display: flex;
`

const DownloadItem = styled.div`
    display: flex;
    flex-direction: column;
`

DownloadItem.IMG = styled.img`
  width: 100px;
`

DownloadItem.Button = styled.img`
  width: 100px;
  margin-top: 40px;
  cursor: pointer;
`

function Home() {
    const {isEN} = useContext(myContext).state;
  return (
      <Container>
        <Background id='home' src={isEN? home_bg_en: home_bg}/>
        <DownloadView>
          <DownloadItem style={{marginRight: 80}}>
            <DownloadItem.IMG src={android}/>
            <DownloadItem.Button onClick={()=>{
                window.location.href='https://coinphoto.oss-ap-southeast-1.aliyuncs.com/titanwallet.apk';
            }} src={android_button}/>
          </DownloadItem>
          <DownloadItem>
            <DownloadItem.IMG src={ios}/>
            <DownloadItem.Button onClick={()=>{
                window.location.href='https://testflight.apple.com/join/xuOTzAV6';
            }} src={ios_button}/>
          </DownloadItem>
        </DownloadView>
      </Container>
  )
}

export default Home
