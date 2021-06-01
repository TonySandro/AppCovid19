import React from "react";
import { Container, Body, Principal, Rodape } from "./styles.js";
import { PieChart } from "react-native-svg-charts";
import { Text } from "react-native-svg";

const totalVacinados = 3097;
const data = [
  {
    grupo: "Profissionais da saúde",
    qtd: 346,
    key: 1,
    amount: (346 * 100) / totalVacinados,
    svg: { fill: "#600080" },
  },
  {
    grupo: "Idosos acima de 85 anos",
    qtd: 414,
    key: 2,
    amount: (414 * 100) / totalVacinados,
    svg: { fill: "#ff0000" },
  },
  {
    grupo: "Idosos de 80 a 84 anos",
    qtd: 270,
    key: 3,
    amount: (270 * 100) / totalVacinados,
    svg: { fill: "#c61aff" },
  },
  {
    grupo: "Idosos de 75 a 79 anos",
    qtd: 295,
    key: 4,
    amount: (295 * 100) / totalVacinados,
    svg: { fill: "#d966ff" },
  },
  {
    grupo: "Idosos de 70 a 74 anos",
    qtd: 1271,
    key: 5,
    amount: (1271 * 100) / totalVacinados,
    svg: { fill: "#ecb3ff" },
  },
  {
    grupo: "Idosos de 65 a 69 anos",
    qtd: 501,
    key: 5,
    amount: (501 * 100) / totalVacinados,
    svg: { fill: "#ff0" },
  },
];

const Labels = ({ slices, height, width }) => {
  return slices.map((slice, index) => {
    const { labelCentroid, pieCentroid, data } = slice;
    return (
      <Text
        key={index}
        x={pieCentroid[0]}
        y={pieCentroid[1]}
        fill={"white"}
        textAnchor={"middle"}
        alignmentBaseline={"middle"}
        fontSize={14}
        stroke={"black"}
        strokeWidth={0.2}
      >
        {`${data.amount.toFixed(1)}%`}
      </Text>
    );
  });
};

export default function Grafico() {
  return (
    <Container>
      <Principal>Gráfico</Principal>

      <Body>
        <PieChart
          style={{ height: 200 }}
          valueAccessor={({ item }) => item.amount}
          data={data}
          spacing={0}
          outerRadius={"95%"}
        >
          <Labels />
        </PieChart>
      </Body>
      <Rodape />
    </Container>
  );
}
