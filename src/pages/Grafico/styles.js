import styled from "styled-components/native"

export const Container = styled.View`
    margin: 0;  
    flex: 1;
    align-items: center;
    background-color: #001366;
`;

export const Body = styled.View`
    padding-top: 8%;
    display: flex;
    width: 90%;
`;

export const Principal = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 36px;
    padding-top: 8%;
    color: #fff;
`;


export const SubtitleCount = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 12px;

    color: #fff;
`;

export const Rodape = styled.View`
    position: absolute;
    background-color: #FFF;
    bottom: 0;

    height: 20%;
    width: 100%;
`;
