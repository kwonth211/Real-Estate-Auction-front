import React, { useEffect, useState } from "react";

import { Table, Tag, Space } from "antd";
import styled from "styled-components";

const columns = [
  {
    title: "주소지",
    dataIndex: "buildingNumber",
    key: "buildingNumber",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "가격",
    dataIndex: "Quote",
    key: "Quote",
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

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const Wrapper = styled.div``;

const LandTable = ({ landList }) => {
  console.log(landList);
  return (
    <Wrapper>
      <Table
        columns={columns}
        dataSource={landList}
        bordered
        size="middle"
        scroll={{ x: "calc(700px + 50%)", y: 240 }}
        rowKey="land_id"
      />
    </Wrapper>
  );
};

export default LandTable;
