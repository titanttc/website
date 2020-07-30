import React from 'react';
import styled from 'styled-components'
import QueueAnim from 'rc-queue-anim';
import { useTranslation } from 'react-i18next'
import {ImageButton} from '../components/Buttons'
import block from '../../assets/block.png'
import contact_img_1 from '../../assets/contact_img_1.png'
import contact_img_2 from '../../assets/contact_img_2.png'
import contact_img_3 from '../../assets/contact_img_3.png'




const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background:linear-gradient(0deg,rgba(7,34,63,1),rgba(5,13,25,1));
`

const Layout = styled.div`
  width: 1200px;
  height: 100vh;
  padding-top: 25vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

`

const ContactView = styled(QueueAnim)`
  width: 80%;
  display: flex;
  justify-content: space-between;
  margin-top: 10vh;
`


const Block = styled.div`
  width: 201px;
  height: 172px;
  background-image: url(${block});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  font-size:19px;
  font-family:Microsoft YaHei;
  font-weight:bold;
  color:rgba(255,255,255,1);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-wrap;
`

const CoverView = styled(QueueAnim)`
  width: 100%;
  display: flex;  
  justify-content: center;
  margin-top: 20px;
  flex: 1;
  align-items: flex-end;
`

const Cover = styled.img`
  width: 72vh;
  height: 30vh;
`


function Contact() {
  const {t} = useTranslation();
    return(
        <Container>
          <Layout>
            <ImageButton title={t('NAV_CONTACT')}/>
            <ContactView
                type='scaleBig'
                delay={1500}
                duration={1000}>
              <Block key='block1'>{t('BOTTOM_TWITTER')}</Block>
              <Block key='block1'>{t('BOTTOM_TELEGRAM')}</Block>
              <Block key='block1'>{t('BOTTOM_EMAIL')}</Block>
            </ContactView>
            <CoverView
                type='top'
                delay={500}
                duration={1000}>
              <Cover key='cover1' src={contact_img_1}/>
              <Cover key='cover2' style={{margin:'0 13px', width: '34.5vh'}} src={contact_img_2}/>
              <Cover key='cover3' style={{width: '34.5vh'}} src={contact_img_3}/>
            </CoverView>
          </Layout>
        </Container>
    )
}

export default Contact
