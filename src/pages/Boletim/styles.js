import styled from "styled-components/native"

export const Container = styled.View`
    margin: 0;  
    flex: 1;
    align-items: center;
    background-color: #001366;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;

    color: #001366;
    background-color: #fff;

    margin-top: ${props => props.margin};
    padding: 2px 10px 2px 10px;
    border-radius: 3px;
`;

export const Principal = styled.Text`
    margin-top: 3%;
    width: 80%;
    text-align: center;
    font-size: 42px;
    color: #fff;
`;

export const SubTitle = styled.Text`
    font-size: 11px;
    color: #f5f5f5;
    margin-bottom: 4%;
`;

export const ContainerCases = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
`;

export const Data = styled.Text`
    font-size: ${props => props.size};
    width: ${props => props.sizeBox};
    font-weight: bold;

    padding: 2px 8px 2px 8px;
    text-align: center;
    margin: ${props => props.margin};
    
    background-color: ${props => props.color};
    color: #f5f5f5;
`;

export const DataN = styled.Text`
    font-size: ${props => props.size};
    font-weight: bold;

    padding: 1px 4px 1px 4px;
    text-align: center;
    margin-right: ${props => props.margin};
    border-radius: 1px;
    
    background-color: ${props => props.color};
    color: ${props => props.colorFont};
`;

export const ContainerCasesAlign = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-left: 10%;
    width: 68%;
`;

export const NumberCases = styled.Text`
    font-size: 28px;
    font-weight: bold;
    align-items: flex-start;

    padding: 1px 4px 1px 4px;
    margin-right: 3%;
    border-radius: 1px;
    
    background-color: white;
    color: #001366;
`;

export const TextCases = styled.Text`
    font-size: 18px;
    font-weight: bold;

    padding: 1px 4px 1px 4px;
    text-align: center;
    margin-right: 3%;
    border-radius: 1px;
    
    border: 1px solid white;
    color: white;
`;

export const Rodape = styled.View`
    display: flex;
    background-color: #FFF;
    height: 15%;
    bottom: -5%;
    width: 100%;
`;