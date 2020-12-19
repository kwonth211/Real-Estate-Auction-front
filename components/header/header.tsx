import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Menu, Row, Col, Button, Popover, Badge } from "antd";
import Icon from "@ant-design/icons";
import styled from "@emotion/styled";
const searchEngine = "Google";

const Wrapper = styled.header`
  position: fixed;
  z-index: 999;
  background: rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid transparent;
  /* transition: border 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955); */
  /* background 0.5s cubic-bezier(0.455, 0.03, 0.515, 0.955); */
  height: 80px;
  /* height: 80px; */
  padding: 0 48px;
  width: 100%;
  &.home-nav-bottom {
    background: rgba(255, 255, 255, 0.9);
    border-bottom-color: #ebedee;
    .search {
      border-left-color: #ebedee;
    }
    a {
      /* color: @text-color; */
    }
  }
  .header-link {
    /* color: @text-color; */
  }
  .ant-menu-item-active .header-link {
    /* color: @primary-color; */
  }
`;

const MenuStyled = styled(Menu)`
  border: 0;
  float: right;
  font-size: 14px;
  font-family: Lato, "@font-family";

  & li {
    height: 80px;
    line-height: 80px;
    min-width: 72px;
    text-align: center;
    border-bottom-width: 3px;
    &.ant-menu-item-selected a {
      /* color: @primary-color; */
      font-weight: bold;
    }
  }
`;

const Astyled = styled.a`
  float: left;
  height: 80px;
  line-height: 80px;

  & > img {
    height: 80px;
    line-height: 80px;
    width: 40px;
    margin-right: 8px;
  }

  & > span {
    float: right;
    font-size: 16px;
    font-family: "Raleway", "Hiragino Sans GB", sans-serif;
    height: 80px;
    line-height: 80px;
    text-transform: uppercase;
  }
`;

const ButtonStyled = styled.button`
  float: right;
  margin-top: 29px;
  margin-left: 10px;
`;

export default class Header extends React.Component {
  static propTypes = {
    isFirstScreen: PropTypes.bool,
    isMoblie: PropTypes.bool,
  };
  state = {
    menuVisible: false,
  };
  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  };
  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  };

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  };

  handleSelectFilter = (value, option) => {
    const optionValue = option.props["data-label"];
    return (
      optionValue === searchEngine ||
      optionValue.indexOf(value.toLowerCase()) > -1
    );
  };

  render() {
    const { isFirstScreen, isMoblie } = this.props;
    const { menuVisible } = this.state;
    const menuMode = isMoblie ? "inline" : "horizontal";
    const headerClassName = classNames({
      clearfix: true,
      "home-nav-white": !isFirstScreen,
    });

    const menu = [
      <ButtonStyled
        // className="header-lang-button"
        // ghost
        size="small"
        key="lang"
      >
        English
      </ButtonStyled>,
      <MenuStyled mode={menuMode} defaultSelectedKeys={["home"]} key="nav">
        <Menu.Item key="home">首页</Menu.Item>
        <Menu.Item key="docs/spec">指引</Menu.Item>
        <Menu.Item key="docs/react">组件</Menu.Item>
        <Menu.Item key="docs/pattern">模式</Menu.Item>
        <Menu.Item key="docs/resource">资源</Menu.Item>
        <Menu.Item key="pro">
          <a
            href="http://pro.ant.design"
            className="header-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            PRO
            <span
              style={{
                display: "inline-block",
                position: "relative",
                top: -2,
                width: 18,
              }}
            >
              <Badge dot />
            </span>
          </a>
        </Menu.Item>
      </MenuStyled>,
    ];

    return (
      <Wrapper className={headerClassName}>
        {menuMode === "inline" ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col lg={4} md={5} sm={24} xs={24}>
            <Astyled id="logo">
              <img
                alt="logo"
                src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg"
              />
              <span>Ant Design</span>
            </Astyled>
          </Col>
          <Col lg={20} md={19} sm={0} xs={0}>
            {menuMode === "horizontal" ? menu : null}
          </Col>
        </Row>
      </Wrapper>
    );
  }
}
