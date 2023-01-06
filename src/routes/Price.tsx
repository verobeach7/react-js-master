import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { IPriceData } from "./Coin";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  align-items: center;
  color: tomato;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    margin-bottom: 5px;
  }
`;

const GridContent = styled.span<{ percent: number }>`
  color: ${(props) =>
    props.percent > 0
      ? "#4cd137"
      : props.percent === 0
      ? `${props.theme.textColor}`
      : "#e84118"};
`;

interface IPriceProps {
  tickersData: IPriceData;
}

function Price() {
  const { tickersData } = useOutletContext<IPriceProps>();
  const quates = tickersData.quotes.USD;
  // console.log(quates);
  return (
    <Grid>
      <GridItem>
        <GridContent percent={quates.percent_change_15m}>
          15분 전보다
        </GridContent>
        <GridContent percent={quates.percent_change_15m}>
          {quates.percent_change_15m}%
        </GridContent>
      </GridItem>
      <GridItem>
        <GridContent percent={quates.percent_change_1h}>
          1시간 전보다
        </GridContent>
        <GridContent percent={quates.percent_change_1h}>
          {quates.percent_change_1h}%
        </GridContent>
      </GridItem>
      <GridItem>
        <GridContent percent={quates.percent_change_6h}>
          6시간 전보다
        </GridContent>
        <GridContent percent={quates.percent_change_6h}>
          {quates.percent_change_6h}%
        </GridContent>
      </GridItem>
      <GridItem>
        <GridContent percent={quates.percent_change_24h}>
          하루 전보다
        </GridContent>
        <GridContent percent={quates.percent_change_24h}>
          {quates.percent_change_24h}%
        </GridContent>
      </GridItem>
      <GridItem>
        <GridContent percent={quates.percent_change_7d}>
          1주일 전보다
        </GridContent>
        <GridContent percent={quates.percent_change_7d}>
          {quates.percent_change_7d}%
        </GridContent>
      </GridItem>
      <GridItem>
        <GridContent percent={quates.percent_from_price_ath}>
          최고가보다
        </GridContent>
        <GridContent percent={quates.percent_from_price_ath}>
          {quates.percent_from_price_ath}%
        </GridContent>
      </GridItem>
    </Grid>
  );
}

export default Price;
