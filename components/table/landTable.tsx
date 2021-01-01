import React, { useEffect, useState } from "react";

import { Table, Tag, Space } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { selectLand } from "./landSlice";

const columns = [
  {
    title: "주소지",
    dataIndex: "buildingNumber",
    key: "buildingNumber",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "가격",
    dataIndex: "quote",
    key: "quote",
  },
  {
    title: "타입",
    dataIndex: "areaType",
    key: "areaType",
  },
  {
    title: "면적",
    key: "area",
    dataIndex: "area",
    // render: (tags) => (
    //   <>
    //     {tags.map((tag) => {
    //       let color = tag.length > 5 ? "geekblue" : "green";
    //       if (tag === "loser") {
    //         color = "volcano";
    //       }
    //       return (
    //         <Tag color={color} key={tag}>
    //           {tag.toUpperCase()}
    //         </Tag>
    //       );
    //     })}
    //   </>
    // ),
  },
  {
    title: "층수",
    dataIndex: "floors",
    key: "floors",
  },
  {
    title: "구분",
    dataIndex: "gubun",
    key: "gubun",
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const Wrapper = styled.div`
  .ant-table-body {
    max-height: 1000px !important;
  }
`;

const LandTable = () => {
  const { landList, loading, error } = useSelector(selectLand);
  return (
    <Wrapper>
      <Table
        loading={loading}
        columns={columns}
        pagination={{ pageSize: 10 }}
        dataSource={landList}
        bordered
        size="large"
        scroll={{ x: "calc(700px + 50%)", y: 240 }}
        rowKey="landId"
      />
    </Wrapper>
  );
};

export default LandTable;
