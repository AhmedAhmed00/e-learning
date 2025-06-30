// components/modals/FilterCoursesModal.jsx
import { useState } from "react";
import { useModalEl } from "../../hooks/useModal";
import { useTranslation } from "react-i18next";
import useFilters from "../../hooks/useFilter";

import Button from "../Button";
import FilterBtn from "../FilterBtn";
import Form from "../Form";
import FormRow from "../FormRow";
import {
  HiddenRadio,
  InnerDot,
  OptionLabel,
  OptionsWrapper,
  OuterCircle,
  RadioWrapper,
} from "../RadioGroup";
import { InputsRow } from "../InputsRow";

const filterConfig = {
  status: {
    label: "Type",
    options: [
      { value: "active", label: "Active Courses" },
      { value: "inactive", label: "Inactive Courses" },
    ],
  },
  payment: {
    label: "Payment Type",
    options: [
      { value: "paid", label: "Paid" },
      { value: "free", label: "Free" },
    ],
  },
};

export default function FilterCoursesModal() {
  const { t } = useTranslation();
  const { handleFilter } = useFilters();

  const [selectedValues, setSelectedValues] = useState({
    status: "active",
    payment: "paid",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setSelectedValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter(selectedValues);
    handleClose();
  };

  const { openModal, handleClose, Modal } = useModalEl(
    <Form type="filter" onSubmit={handleSubmit}>
      <InputsRow dir="column">
        {/* Status Filter */}
        <FormRow label={filterConfig.status.label}>
          <RadioGroupFilter
            name="status"
            options={filterConfig.status.options}
            selected={selectedValues.status}
            onChange={handleChange}
          />
        </FormRow>

        {/* Payment Filter */}
        <FormRow label={filterConfig.payment.label}>
          <RadioGroupFilter
            name="payment"
            options={filterConfig.payment.options}
            selected={selectedValues.payment}
            onChange={handleChange}
          />
        </FormRow>
      </InputsRow>

      <Button variation="primary" type="submit">
        Apply Filter
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

export function RadioGroupFilter({ name, options, selected, onChange }) {
  return (
    <OptionsWrapper justify="start">
      {options.map((option) => {
        const isSelected = selected === option.value;

        return (
          <OptionLabel key={option.value}>
            <RadioWrapper>
              <HiddenRadio
                type="radio"
                value={option.value}
                name={name}
                checked={isSelected}
                onChange={onChange}
              />
              <OuterCircle>
                <InnerDot selected={isSelected} />
              </OuterCircle>
            </RadioWrapper>
            <span>{option.label}</span>
          </OptionLabel>
        );
      })}
    </OptionsWrapper>
  );
}
