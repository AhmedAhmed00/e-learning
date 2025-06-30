import React from "react";
import { FiFilter } from "react-icons/fi";

export default function FilterBtn({ openModal }) {
  return <FiFilter cursor={"pointer"} onClick={() => openModal()} size={28} />;
}
