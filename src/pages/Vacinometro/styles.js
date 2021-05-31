import styled from "styled-components/native"

export const Container = styled.View`
    margin: 0;  
    flex: 1;
    align-items: center;
    background-color: #001366;
`;

export const Header = styled.View`
    padding-top: ${props => props.marginTop};
    display: flex;
    width: 90%;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #fff;
`;

export const Principal = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 36px;

    margin-top: -12px;
    margin-bottom: -5px;
    color: #fff;
`;

export const SubTitle = styled.Text`
    font-size: 14PX;
    text-align: right;
    color: #fff;
`;

export const Count = styled.Text`
    text-align: center;
    font-weight: bold;
    font-size: 92px;
    letter-spacing: 10px;

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
