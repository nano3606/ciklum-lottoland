import {
  Layout,
  Row,
  Col,
  Spin,
  Divider,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import getSymbolFromCurrency from "currency-symbol-map";
import Roman from "romannumerals";
import moment from "moment";
import { fetchResults, lottoResults } from "./store/reducers/lottoResult";
import Header from "./components/header"
import CustomCarousel from "./components/carousel"
import LottoBallResults from "./components/lottoBallResults";
import EuroJaclpotTable from "./components/euroJackpotTable";
import "./App.less";

const AppContainer = () => {
  const [rankData, setRankData] = useState([]);
  const [currency, setCurrency] = useState("");
  const [numbers, setNumbers] = useState([]);
  const [euronumbers, setEuronumbers] = useState([]);
  const [lottoDate, setLottoDate] = useState("");
  const dispatch = useDispatch();
  const res = useSelector(lottoResults);

  useEffect(() => dispatch(fetchResults()), []);

  useEffect(() => {
    setRankData(res);
    if (res) {
      procressOdds(res.last.odds);
      setCurrency(getSymbolFromCurrency(res.last.currency));
      setNumbers(res.last.numbers);
      setEuronumbers(res.last.euroNumbers);
      setLottoDate(
        moment(res.last.drawingDate, "DD.MM.YYYY").format("dddd DD MMMM YYYY")
      );
    }
  }, [res]);
  
  const procressOdds = (odds) => {
    const keys = Object.keys(odds);
    const ranks = Object.values(odds);
    const res = [];
    ranks.forEach((rank, index) => {
      if (index > 0)
        res.push({
          ...rank,
          key: index,
          tier: parseInt(keys[index].replace("rank", "")),
        });
    });
    setRankData(res);
  };

  return (
    <Layout>
      <Layout.Header className="header">
        <Header />
      </Layout.Header>
      <Layout.Content>
      <Row justify="center">
          <Col xs={24}>
          <CustomCarousel />
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={24} sm={12}>
            <Spin spinning={rankData && rankData.length === 0}>
              <Col>
                <div className="lottoresult__title">
                  EUROJACKPOT RESULTS & WINNING NUMBERS
                </div>
                <Divider />
              </Col>
              <LottoBallResults lottoDate={lottoDate} numbers={numbers} euronumbers={euronumbers} />
              <EuroJaclpotTable currency={currency} rankData={rankData} />
            </Spin>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
};

export default AppContainer;
