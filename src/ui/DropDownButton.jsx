import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";
import Row from "./Row";
import { CiExport } from "react-icons/ci";
import { useTranslation } from "react-i18next";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-5px); }
  to { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-5px); }
`;

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledButton = styled(Button)`
  position: relative;
  border: 1px solid var(--color-grey-400);
`;

const Dropdown = styled.div`
  position: absolute;
  top: 115%;
  ${(props) => (props.lang === "ar" ? "right: 0;" : "left: 0;")}
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  min-width: 160px;
  overflow: hidden;
  z-index: 33;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.15s ease-in-out;
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;

const DropdownItem = styled.button`
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid var(--color-grey-200);
  background: white;
  text-align: left;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: background 0.1s;

  &:hover {
    background: #f0f0f0;
  }

  &:focus {
    border: none;
    outline: none;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export default function DropdownButton({
  buttonLabel = "Dropdown",
  options = [],
  onSelect,
  buttonProps = {},
}) {
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    if (isOpen) {
      setShowDropdown(true);
    } else {
      setTimeout(() => setShowDropdown(false), 200);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value) => {
    if (onSelect) onSelect(value);
    setIsOpen(false);
  };

  return (
    <DropdownWrapper ref={wrapperRef}>
      <StyledButton {...buttonProps} onClick={toggleDropdown}>
        <Row
          style={{ height: "20px" }}
          type="horizontal"
          justify="start"
          $gap="8px"
        >
          <CiExport size={20} />
          {buttonLabel}
        </Row>
      </StyledButton>

      {showDropdown && (
        <Dropdown isOpen={isOpen} lang={lang}>
          {options.map((option, index) => (
            <DropdownItem
              key={index}
              onClick={() => {
                handleSelect(option.value);
                option.handleExport && option.handleExport();
              }}
            >
              {option.icon && <span>{option.icon}</span>}
              {option.label}
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </DropdownWrapper>
  );
}
