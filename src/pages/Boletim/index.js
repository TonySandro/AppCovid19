// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  Principal,
  Data,
  DataN,
  ContainerCases,
  NumberCases,
  TextCases,
  ContainerCasesAlign,
  Rodape
} from './styles.js'

export default function Boletim() {
  return (
    <Container>
      {/* DATA VARIAVEL */}
      <Title margin='12%'>Boletim 17/05/2021</Title>

      <Principal>COVID-19 CORONAVÍRUS</Principal>

      <Title margin='4%'>SITUAÇÃO EM BOM JARDIM</Title>
      <SubTitle>FONTE: SECRETARIA MUNICIPAL DE SAÚDE</SubTitle>

      <ContainerCases>
        <Data color='red' size='32px' sizeBox='30%' margin='6px'>1.130</Data>
        <Data color='green' size='32px' sizeBox='30%' margin='6px'>1.059</Data>
        <Data color='#000' size='32px' sizeBox='20%' margin='6px'>53</Data>
      </ContainerCases>
      <ContainerCases>
        <Data color='red' size='11px' sizeBox='30%' margin='6px'>CONFIRMADOS</Data>
        <Data color='green' size='11px' sizeBox='30%' margin='6px'>CURADOS</Data>
        <Data color='#000' size='11px' sizeBox='20%' margin='6px'>ÓBITOS</Data>
      </ContainerCases>

      <ContainerCases style={{ marginTop: '2%' }}>
        <DataN color='white' colorFont='#001366' size='22px' margin='0'>1.038</DataN>
        <DataN color='#0022B8' colorFont='white' size='11px' margin='2%'>CASOS LEVES</DataN>

        <DataN color='white' colorFont='#001366' size='22px' margin='0'>92</DataN>
        <DataN color='#0022B8' colorFont='white' size='11px' margin='0'>CASOS GRAVES</DataN>
      </ContainerCases>

      <ContainerCasesAlign style={{ marginTop: '4%', textAlign: 'start' }}>
        <NumberCases>18</NumberCases>
        <TextCases>EM TRATAMENTO</TextCases>
      </ContainerCasesAlign>
      <ContainerCasesAlign style={{ marginTop: '3%' }}>
        <NumberCases>60</NumberCases>
        <TextCases>EM INVESTIGAÇÃO</TextCases>
      </ContainerCasesAlign>

      <Rodape/>
    </Container>
  );
}
