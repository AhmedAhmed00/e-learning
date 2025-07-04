import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import Button from "../Button";
import { useState } from "react";
import DropdownButton from "../DropDownButton";
import { createPortal } from "react-dom";
import FilterModal from "../FilterModal";
import useModal from "../../hooks/useModal";
import FilterButtons from "../FilterButtons";
import Form from "../Form";
import useFilters from "../../hooks/useFilter";
import { useTranslation } from "react-i18next";
import Row from "../Row";
import { IoFilterSharp } from "react-icons/io5";
import { FormProvider, useForm } from "react-hook-form";
import { FaFileExcel, FaFilePdf } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Wrapper = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
  justify-content: center;
`;

export default function TableOperations({
  addPath,
  addTitle,
  children,
  filteringTrigger,
}) {
  const navigate = useNavigate();
  const [startExport, setStartExport] = useState(false);
  const { handleFilter } = useFilters();
  const { t } = useTranslation();
  const methods = useForm();

  const { handleClose, isClosing, openModal, setIsClosing, setOpenModal } =
    useModal();

  const toggleFilter = () => setOpenModal((prev) => !prev);

  const exportOptions = [
    {
      label: t("dataKeys.excel"),
      value: "Excel",
      icon: <FaFileExcel size={18} color="green" />,

      handleExport: () => setStartExport(true),
    },
    {
      label: t("dataKeys.pdf"),
      icon: <FaFilePdf size={18} color="red" />,

      value: "PDF",
    },
  ];

  function submitFilter(e) {
    handleClose();
    handleFilter(e);
  }

  return (
    <Wrapper>
      <DropdownButton
        buttonLabel={t("dataKeys.export")}
        options={exportOptions}
        onSelect={(value) => console.log("Selected:", value)}
        buttonProps={{ variation: "secondary", size: "medium" }}
      />
      {/* {filterable && (
        <Button onClick={toggleFilter} variation="primary" size="medium">
          <Row
            justify="start"
            gap="6px"
            style={{
              height: "22px",
            }}
            type="horizontal"
          >
            <IoFilterSharp size={20} />
            <p>{t("dataKeys.filter")}</p>
          </Row>
        </Button>
      )} */}
      {children}
      {addTitle && (
        <Button
          size="large"
          type="button"
          onClick={() => navigate(addPath)}
          variation="primary"
        >
          {addTitle}
        </Button>
      )}
      {filteringTrigger}
      {/* {openModal &&
        createPortal(
          <FilterModal
            handleFilter={handleFilter}
            isClosing={isClosing}
            setIsClosing={setIsClosing}
            onClose={handleClose}
            handleClose={handleClose}
          >
            <FormProvider {...methods}>
              <Form type="filter" onSubmit={methods.handleSubmit(submitFilter)}>
                {filterInputs}
                <FilterButtons handleClose={handleClose} />
              </Form>
            </FormProvider>
          </FilterModal>,
          document.body
        )} */}
    </Wrapper>
  );
}
