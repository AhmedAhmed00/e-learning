import { MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Row from "../../../ui/Row";
import { Avatar } from "../../../ui/layout/Header";
import Heading from "../../../ui/Heading";
import Tag from "../../../ui/Tag";
import { IoMailOutline, IoPersonOutline } from "react-icons/io5";
import styled from "styled-components";

export default function GeneralInfo() {
  const { t } = useTranslation();
  return (
    <>
      <Row
        $margin={"45px 0px 40px 0px"}
        justify="start"
        $gap="20px"
        type="horizontal"
      >
        <Avatar src={"/profile.jpg"} />

        <Row gap="0px" type="vertical">
          <Row $gap="12px" type="horizontal">
            <Heading as={"h5"}>Machine Learning</Heading>
            <Tag type="red">{t("dataKeys.free")}</Tag>
          </Row>
          <P>Technical</P>
        </Row>
      </Row>

      <Heading margin="15px 0" as={"h5"} color="primary">
        {t("dataKeys.personalInfo")}
      </Heading>

      <Row $margin="10px 0px" type="horizontal" justify="start" $gap="25px">
        <InfoItem icon={<IoPersonOutline />} title={"Ahmed Mohamed"} />
        <InfoItem icon={<IoMailOutline />} title={"Ahmed@info.com"} />
        <InfoItem icon={<MdOutlinePhone />} title={"0123456789"} />
        <InfoItem
          icon={<MdOutlineLocationOn />}
          title={"Al Mehwar Al Markazi ,Giza,Egypt "}
        />
      </Row>

      <Row $gap="90px" type="horizontal">
        <Row gap="4px">
          <Heading margin="26px 6px 0px 0" as={"h5"} color="primary">
            {t("dataKeys.description")}
          </Heading>
          <article
            style={{
              color: "var(--color-grey-500)",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt utc labore et dolore magna aliqua.Lorem ipsum
            dolor sit amet, consecteturt adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore csd magna aliqua. incididunt ut
            labore et dolore magna aliqua.Lorem ipsumld dolor sit amet,
            consectetur adipiscing elit, sed do eius incididunt ut labo dolore
            magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisci elit,
            sed do eius incididunt ut labore et dolore magna aliqua.Lorem ipsum
            dol sit amet, consectetur adipiscing elit, sed do.
          </article>
        </Row>
        <Row gap="8px">
          <Heading margin="26px 6px 0px 0" as={"h5"} color="primary">
            {t("dataKeys.location")}
          </Heading>

          <article
            style={{
              color: "var(--color-grey-500)",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt utc labore et dolore magna aliqua.Lorem ipsum
            dolor sit amet, consecteturt adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore csd magna aliqua. incididunt ut
            labore et dolore magna aliqua.Lorem ipsumld dolor sit amet,
            consectetur adipiscing elit, sed do eius incididunt ut labo dolore
            magna aliqua.Lorem ipsum dolor sit amet, consectetur adipisci elit,
            sed do eius incididunt ut labore et dolore magna aliqua.Lorem ipsum
            dol sit amet, consectetur adipiscing elit, sed do.
          </article>
        </Row>
      </Row>
    </>
  );
}

const P = styled.p``;

const StyledIcon = styled.p`
  display: flex;
  font-size: 1.7rem;
`;

function InfoItem({ icon, title }) {
  return (
    <Row
      items="center"
      justify="center"
      width="fit-content"
      type="horizontal"
      $gap="6px"
    >
      <StyledIcon>{icon}</StyledIcon>
      <P>{title}</P>
    </Row>
  );
}
