import React, { useState } from "react";
import { useModalEl } from "../../hooks/useModal";
import { useTranslation } from "react-i18next";
import useFilters from "../../hooks/useFilter";

import Button from "../Button";
import FilterBtn from "../FilterBtn";
import Form from "../Form";
import FormRow from "../FormRow";
import { InputsRow } from "../InputsRow";
import Input from "../Input";
import Row from "../Row";
import Checkbox from "../Checkbox";

export default function FilterOrders() {
  const { t } = useTranslation();
  const { handleFilter } = useFilters();

  const [filters, setFilters] = useState({
    orderNumber: "",
    startDate: "",
    endDate: "",
    status: {
      active: false,
      inProgress: false,
    },
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    console.log(name);

    if (name === "active" || name === "inProgress") {
      setFilters((prev) => ({
        ...prev,
        status: {
          ...prev.status,
          [name]: checked,
        },
      }));
    } else {
      setFilters((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }
  console.log(filters);
  function handleSubmit(e) {
    e.preventDefault();
    const { orderNumber, startDate, endDate } = filters;

    const stringapst = Object.entries(filters.status)
      .filter(([, value]) => value)
      .map(([key]) => key)
      .join(",");

    console.log(stringapst, "strrrrrrrrrrrrrromg");
    handleFilter({ orderNumber, startDate, endDate, status: stringapst });
    handleClose();
  }

  const { openModal, Modal, handleClose } = useModalEl(
    <Form type="filter" onSubmit={handleSubmit}>
      <InputsRow dir="column">
        <FormRow label={t("dataKeys.orderNumber")}>
          <Input
            name="orderNumber"
            value={filters.orderNumber}
            onChange={handleChange}
          />
        </FormRow>
      </InputsRow>

      <InputsRow>
        <FormRow label={t("dataKeys.start date")}>
          <Input
            name="startDate"
            type="date"
            value={filters.startDate}
            onChange={handleChange}
          />
        </FormRow>
        <FormRow label={t("dataKeys.end date")}>
          <Input
            name="endDate"
            type="date"
            value={filters.endDate}
            onChange={handleChange}
          />
        </FormRow>
      </InputsRow>

      <InputsRow>
        <FormRow label={t("dataKeys.status")}>
          <Row type="horizontal" justify="start" gap="10px">
            <Checkbox
              name="active"
              checked={filters.status.active}
              onChange={handleChange}
            >
              {t("dataKeys.active")}
            </Checkbox>
            <Checkbox
              name="inProgress"
              checked={filters.status.inProgress}
              onChange={handleChange}
            >
              {t("dataKeys.inProgress")}
            </Checkbox>
          </Row>
        </FormRow>
      </InputsRow>

      <Button variation="primary" type="submit">
        {t("actions.applyFilter") || "Apply Filter"}
      </Button>
    </Form>
  );

  return (
    <>
      <span>
        <FilterBtn openModal={openModal} size={28} />
      </span>
      {Modal}
    </>
  );
}
