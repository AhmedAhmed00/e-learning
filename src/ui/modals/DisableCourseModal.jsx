import { FcCancel } from "react-icons/fc";
import { useModalEl } from "../../hooks/useModal";
import Button from "../Button";
import Heading from "../Heading";
import Row from "../Row";

export default function DisableCourseModal() {
  const { openModal, handleClose, Modal } = useModalEl(
    <Row
      style={{ justifyContent: "center", textAlign: "center" }}
      $padding="30px 20px"
    >
      <Heading as={"h2"}>Cancel Enrollment</Heading>
      <p style={{ width: "40rem", margin: "auto" }}>
        Are you sure you need to cancel this course enrollment from Ahmed’s
        courses ?
      </p>
      <Row type="horizontal" justify="center" $gap="20px">
        <Button variation="danger" onClick={() => handleClose()}>
          No
        </Button>
        <Button variation onClick={() => handleClose()}>
          Yes
        </Button>
      </Row>
    </Row>
  );

  return (
    <>
      <FcCancel cursor={"pointer"} onClick={() => openModal()} size={24} />
      {Modal}
    </>
  );
}
