import React from "react";
import { Row, Col, Divider} from  "antd";
import Icon from "@mdi/react";
import { mdiCartOutline, mdiMagnify } from "@mdi/js";

const header = () => {
  return (
    <Row justify="space-between">
      <Col>
        <img
          className="header__logo"
          src="/lottoland.svg"
        ></img>
      </Col>
      <Col>
        <Row align="middle" className="header__account">
          <Icon path={mdiMagnify} size={1} />
          <span style={{ marginLeft: 8 }}>Login</span>
          <Divider className="header__divider" type="vertical" />
          <span style={{ marginRight: 8 }}>Register</span>
          <Icon path={mdiCartOutline} size={1} />
        </Row>
      </Col>
    </Row>
  );
};

export default header;
