import React from "react";
import { Avatar, Col } from "antd";

const lottoBallResults = (props) => {
  const { lottoDate, numbers, euronumbers } = props;
  return (
    <Col className="lottoresult">
      <div className="lottoresult__date"
      >
        EuroJackpot Results for {lottoDate}
      </div>
      <div>
        {numbers.length > 0 &&
          numbers.map((number, index) => (
            <Avatar
              key={index}
              className="lottoresult__ball-number"
              size={30}
            >
              <span>{number}</span>
            </Avatar>
          ))}
        <span style={{ marginRight: 10, fontSize: 20 }}>+</span>
        {euronumbers.length > 0 &&
          euronumbers.map((number, index) => (
            <Avatar
              key={index}
              className="lottoresult__ball-euronumber"
              size={30}
            >
              {number}
            </Avatar>
          ))}
      </div>
    </Col>
  );
};

export default lottoBallResults;
