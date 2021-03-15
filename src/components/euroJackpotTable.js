import React from "react";
import { Table } from "antd";
import Roman from "romannumerals";

const euroJackpotTable = (props) => {
  const columns = [
    {
      title: "Tier",
      dataIndex: "tier",
      key: "tier",
      render: (text) => <span>{Roman.toRoman(text)}</span>,
    },
    {
      title: "Match",
      key: "match",
      render: (text, row, index) => (
        <React.Fragment>
          <div>{5 - Math.floor(index / 3)} Numbers +</div>
          <div>{2 - (index % 3)} Euronumbers</div>
        </React.Fragment>
      ),
    },
    {
      title: "Winners",
      dataIndex: "winners",
      key: "winners",
      render: (text) => <span>{text}x</span>,
    },
    {
      title: "Prize",
      dataIndex: "prize",
      key: "prize",
      render: (text) => (
        <span>{`${props.currency}${text.toLocaleString("en-US")}`}</span>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={props.rankData} pagination={false}></Table>
  );
};

export default euroJackpotTable;
