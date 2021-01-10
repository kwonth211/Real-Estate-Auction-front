import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QueueAnim from "rc-queue-anim";
import styled from "styled-components";
import { Modal, Button, Table } from "antd";

import useModal from "@/hooks/modal";
import ModalTable from "@/components/land/landTable";
import { findLand } from "@/components/land/action";
import { findCourtList } from "./action";
import { RootState } from "../store/rootReducer";

const Wrapper = styled.div`
  .ant-table-body {
    overflow-y: hidden !important;
    max-height: 1100px !important;
  }
`;

const CourtTable = () => {
  const dispatch = useDispatch();

  const { openModal, closeModal, modalVisibility } = useModal();
  const { courtList, loading, error } = useSelector(
    (state: RootState) => state.court
  );

  useEffect(() => {
    dispatch(findCourtList());
  }, []);

  const columns = [
    {
      title: "사건번호",
      dataIndex: "caseNumber",
      key: "caseNumber",
      width: 200,
      // fixed: "left",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "John",
          value: "John",
        },
      ],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
    },
    {
      title: "물건번호",
      dataIndex: "itemNumber",
      key: "itemNumber",
      width: 100,
    },
    {
      title: "용도",
      dataIndex: "useAge",
      key: "useAge",
      width: 100,
    },
    {
      title: "지리",
      children: [
        {
          title: "소재지",
          dataIndex: "locationList",
          key: "locationList",
          render: (locationList) => {
            return locationList.map(({ location, i }) => (
              <div key={`location${i}`}>{location}</div>
            ));
          },
        },
        {
          title: "면적",
          dataIndex: "locationList",
          key: "locationList",
          width: 100,
          render: (locationList) => {
            return locationList.map(({ area, i }) => (
              <div key={`area${i}`}>{area}㎡</div>
            ));
          },
        },
      ],
    },
    {
      title: "최저매각가격",
      dataIndex: "minimumSellingPrice",
      key: "minimumSellingPrice",
      width: 200,
    },

    {
      title: "담당계",
      children: [
        {
          title: "매각기일",
          dataIndex: "saleDate",
          key: "saleDate",
        },
        {
          title: "진행상태",
          dataIndex: "progress",
          key: "progress",
        },
      ],
    },

    {
      title: "매물보기",
      dataIndex: "courtId",
      key: "courtId",
      width: 80,
      // fixed: "right",
      render: (courtId) => {
        return (
          <a
            onClick={() => {
              openModalFunc(courtId);
            }}
          >
            보기
          </a>
        );
      },
    },
  ];

  const openModalFunc = async (courtId) => {
    dispatch(findLand(courtId));
    openModal();
  };

  return (
    <Wrapper>
      <Table
        loading={loading}
        columns={columns}
        dataSource={courtList}
        bordered
        size="middle"
        scroll={{ x: "calc(700px + 50%)", y: 240 }}
        rowKey="courtId"
      />
      <Modal
        width={1100}
        title="실 거래 매물"
        visible={modalVisibility}
        onCancel={closeModal}
        footer={[
          <Button key="submit" type="primary" onClick={closeModal}>
            확인
          </Button>,
        ]}
      >
        <ModalTable />
      </Modal>
    </Wrapper>
  );
};

export default CourtTable;
