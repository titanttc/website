import React, {useState, useEffect} from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components'
import { useTranslation } from 'react-i18next';
import {Card} from 'antd'
import QueueAnim from 'rc-queue-anim';
import Block from './Block'
import sea_bg from '../../assets/sea_bg.png'
import specialty1 from '../../assets/specialty1.png'
import specialty2 from '../../assets/specialty2.png'
import specialty3 from '../../assets/specialty3.png'
import specialty4 from '../../assets/specialty4.png'
import specialty_bg from '../../assets/specialty_bg.png'
import {ImageButton} from "../components/Buttons";


const {Meta} = Card;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Bottom = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${specialty_bg});
  background-size: auto 100%;
  padding-top: 20vh;
`


Bottom.BlockView = styled(QueueAnim)`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`


const Top = styled.div`
  width: 100%;
  height: 100vh;
  background:linear-gradient(0deg,rgba(7,34,63,1),rgba(5,13,25,1));
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 20vh;
`

Top.Background = styled.img`
  width: 100%;
  height: 50vh;
  position: absolute;
  top: 50vh;
  margin-left: 0;
  background-color: #fff;
`

const CardView = styled(QueueAnim)`
  width: 1200px;
  display: flex;
  justify-content: space-between;
`


CardView.Card = styled(Card)`
  border-radius: 8px;
  .ant-card{
    width: 240px;
    height: 350px;
  }

  .ant-card-cover{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .ant-card-cover img{
    width: 100%;
  }
  
  .ant-card-meta-title{
    font-size:20px;
    font-family:Microsoft YaHei;
    font-weight:bold;
    color:rgba(0,51,112,1);
    white-space: normal;
  }
  
  .ant-card-meta-description{
    font-size: 12px;
    color:rgba(102,102,102,1);
  }
`


function Specialty() {
    const { t } = useTranslation();
  const [showBottom, sethSowBottom] = useState(false);

    const handleScroll = () => {        //滚动条高度
        let clientHeight = document.documentElement.clientHeight; //可视区域高度
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;  //滚动条滚动高度
        if (scrollTop >= clientHeight - 200) {
            sethSowBottom(true)
        } else {
            sethSowBottom(false)
        }
    };


    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);


    return (
        <Container>
            <Top>
                <Top.Background src={sea_bg}/>
                <ImageButton title={t('SPECIALTY_TOP_BUTTON_TITLE')}/>
              <MediaQuery query='(max-device-height:980px)'>
                <CardView
                    type='right'
                    delay={500}
                    duration={2000}>
                    <CardView.Card
                        key='card1'
                        type='left'
                        hoverable
                        style={{width: 240, height: 350, marginTop: 40,borderRadius:8}}
                        cover={<img alt="example" src={specialty1}/>}
                    >
                        <Meta title={t('CARD_1_TITLE')} description={t('CARD_1_CONTENT')}/>
                    </CardView.Card>
                    <CardView.Card
                        key='card2'
                        type='left'
                        hoverable
                        style={{width: 240, height: 350,borderRadius:8}}
                        cover={<img alt="example" src={specialty2}/>}
                    >
                        <Meta title={t('CARD_2_TITLE')} description={t('CARD_2_CONTENT')}/>
                    </CardView.Card>
                    <CardView.Card
                        key='card3'
                        type='left'
                        hoverable
                        style={{width: 240, height: 350, marginTop: 40,borderRadius:8}}
                        cover={<img alt="example" src={specialty3}/>}
                    >
                        <Meta title={t('CARD_3_TITLE')} description={t('CARD_3_CONTENT')}/>
                    </CardView.Card>
                    <CardView.Card
                        key='card4'
                        type='left'
                        hoverable
                        style={{width: 240, height: 350,borderRadius:8}}
                        cover={<img alt="example" src={specialty4}/>}
                    >
                        <Meta title={t('CARD_4_TITLE')} description={t('CARD_4_CONTENT')}/>
                    </CardView.Card>
                </CardView>
              </MediaQuery>
              <MediaQuery query='(min-device-height:980px)'>
                <CardView
                    style={{marginTop: '10vh'}}
                    type='right'
                    delay={500}
                    duration={2000}>
                  <CardView.Card
                      key='card1'
                      type='left'
                      hoverable
                      style={{width: 240, height: 350, marginTop: 40,borderRadius:8}}
                      cover={<img alt="example" src={specialty1}/>}
                  >
                    <Meta title={t('CARD_1_TITLE')} description={t('CARD_1_CONTENT')}/>
                  </CardView.Card>
                  <CardView.Card
                      key='card2'
                      type='left'
                      hoverable
                      style={{width: 240, height: 350,borderRadius:8}}
                      cover={<img alt="example" src={specialty2}/>}
                  >
                    <Meta title={t('CARD_2_TITLE')} description={t('CARD_2_CONTENT')}/>
                  </CardView.Card>
                  <CardView.Card
                      key='card3'
                      type='left'
                      hoverable
                      style={{width: 240, height: 350, marginTop: 40,borderRadius:8}}
                      cover={<img alt="example" src={specialty3}/>}
                  >
                    <Meta title={t('CARD_3_TITLE')} description={t('CARD_3_CONTENT')}/>
                  </CardView.Card>
                  <CardView.Card
                      key='card4'
                      type='left'
                      hoverable
                      style={{width: 240, height: 350,borderRadius:8}}
                      cover={<img alt="example" src={specialty4}/>}
                  >
                    <Meta title={t('CARD_4_TITLE')} description={t('CARD_4_CONTENT')}/>
                  </CardView.Card>
                </CardView>
              </MediaQuery>
            </Top>
            <Bottom>
                <ImageButton style={{fontSize: 16}} title={t('SPECIALTY_BOTTOM_BUTTON_TITLE')}/>
                {showBottom ? (
                    <Bottom.BlockView
                        type='scaleBig'
                        duration={1000}>
                        <Block key='block1' content={t('BORDER_1_TITLE')} backContent={t('BORDER_1_CONTENT')}/>
                        <Block key='block2' content={t('BORDER_2_TITLE')} backContent={t('BORDER_2_CONTENT')}/>
                    </Bottom.BlockView>
                ) : null}
                {showBottom ? (
                    <Bottom.BlockView
                        type='scaleBig'
                        duration={1000}
                        style={{marginTop: '10vh', width: 800}}>
                        <Block key='block3' content={t('BORDER_3_TITLE')} backContent={t('BORDER_3_CONTENT')} small/>
                        <Block key='block4' content={t('BORDER_4_TITLE')} backContent={t('BORDER_4_CONTENT')} small/>
                    </Bottom.BlockView>
                ) : null}
            </Bottom>
        </Container>
    )
}

export default Specialty
