import React from 'react';
import styled from "styled-components";
import { useTranslation } from 'react-i18next'

const Container = styled.div`
  width: 100vw;
  background: #24292E;
  display: flex;
  justify-content: center;
`

const Layout  = styled.div`
  width: 1200px;
  display: flex;
  padding: 24px 0;
`

const List = styled.div`
  
`

const ListTitle = styled.p`
  font-size: 20px;
  color: #fff;
`

const ListItem = styled.p`
    font-size: 16px;
    color: #999999;
    margin-bottom: 4px;
`

function Bottom() {
  const {t} = useTranslation();
  return(
      <Container>
        <Layout>
          <List style={{marginLeft:150}}>
            <ListTitle>{t('BOTTOM_ABOUT')}</ListTitle>
            <ListItem>{t('BOTTOM_MILESTONE')}</ListItem>
            <ListItem>{t('BOTTOM_SPECIALTY')}</ListItem>
            <ListItem>{t('BOTTOM_FRAMEWORK')}</ListItem>
            <ListItem>{t('BOTTOM_ZOOLOGY')}</ListItem>
            <ListItem>{t('BOTTOM_DESTROY')}</ListItem>
          </List>

          <List style={{marginLeft:100}}>
            <ListTitle>{t('BOTTOM_MORE')}</ListTitle>
            <ListItem>{t('BOTTOM_WHITE_PAPER')}</ListItem>
            <ListItem>{t('BOTTOM_BLOCK_BROWSER')}</ListItem>
          </List>

          <List style={{marginLeft:100}}>
            <ListTitle>{t('BOTTOM_JOIN_US')}</ListTitle>
            <ListItem>{t('BOTTOM_TWITTER')}</ListItem>
            <ListItem>{t('BOTTOM_TELEGRAM')}</ListItem>
            <ListItem>{t('BOTTOM_EMAIL')}</ListItem>
          </List>
        </Layout>
      </Container>
  )
}


export default Bottom
