import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";
import { Link, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

const ChildTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: "a a b c";
  margin: 25px 0px;
  gap: 10px;
`;

const ChildTab = styled.span<{ area: string; isActive?: boolean }>`
  grid-area: ${(props) => props.area};
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;

interface IHistoricalData {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}

function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const isDark = useRecoilValue(isDarkAtom);
  const { isLoading, data } = useQuery<IHistoricalData[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    { refetchInterval: 1000000 }
  );
  /* const [isCandle, setIsCandle] = useState(true);
  const onCandleClick = () => {
    setIsCandle(true);
    console.log(isCandle);
  };
  const onLineClick = () => {
    setIsCandle(false);
    console.log(isCandle);
  }; */

  return (
    <>
      {/* <ChildTabs>
        <ChildTab area="b" onClick={onCandleClick}>
          Candle
        </ChildTab>
        <ChildTab area="c" onClick={onLineClick}>
          Line
        </ChildTab>
      </ChildTabs> */}
      <div>
        {isLoading ? (
          "Loading..."
        ) : (
          <ApexChart
            type="candlestick"
            series={[
              {
                name: "Price",
                data: data?.map((price) => [
                  new Date(price.time_close * 1000),
                  price.open,
                  price.high,
                  price.low,
                  price.close,
                ]) as any[],
              },
            ]}
            options={{
              theme: { mode: isDark ? "dark" : "light" },
              chart: {
                toolbar: { show: false },
                background: "transparent",
              },
              yaxis: { labels: { show: false }, tooltip: { enabled: true } },
              xaxis: {
                type: "datetime",
                labels: { show: false },
                axisTicks: { show: false },
              },
              grid: { show: false },
            }}
          />
        )}
      </div>
      <div>
        {isLoading ? (
          "Loading..."
        ) : (
          <ApexChart
            type="line"
            series={[
              {
                name: "Price",
                data: data?.map((price) => Number(price.close)) as number[],
              },
            ]}
            options={{
              theme: { mode: isDark ? "dark" : "light" },
              chart: {
                height: 500,
                width: 500,
                toolbar: { show: false },
                background: "transparent",
              },
              grid: { show: false },
              stroke: { curve: "smooth", width: 4 },
              yaxis: { show: false },
              xaxis: {
                type: "datetime",
                labels: { show: false },
                categories: data?.map((price) =>
                  new Date(price.time_close * 1000).toISOString()
                ),
                axisTicks: { show: false },
              },
              fill: {
                type: "gradient",
                gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
              },
              colors: ["#0fbcf9"],
              tooltip: { y: { formatter: (value) => `$ ${value}` } },
            }}
          />
        )}
      </div>
    </>
  );
}

export default Chart;
