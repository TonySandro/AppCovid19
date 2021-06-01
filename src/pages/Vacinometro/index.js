// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Container,
  Title,
  Header,
  Principal,
  SubTitle,
  Count,
  SubtitleCount,
  Rodape
} from './styles.js'


export default function Vacinometro() {
  return (
    <Container>
      <Header marginTop='12%'>
        <Title>COVID-19</Title>
        <Principal>VACINÔMETRO</Principal>
        <SubTitle>DADOS ATUALIZADOS EM 17/05/2021</SubTitle>
      </Header>

      <Header marginTop='4%'>
        <Count>7681</Count>
        <SubtitleCount>PESSOAS VACINADAS EM BOM JARDIM</SubtitleCount>

      </Header>

      <Rodape />
    </Container>
  );
}
