import React from "react";
import { useTranslation } from "react-i18next";

const Unauthorized = () => {
  const { t } = useTranslation();
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>403 - {t("common.accessDenied")}</h1>
      <p>{t("common.noPermission")}</p>
      <a href="/">{t("common.goToHome")}</a>
    </div>
  );
};

export default Unauthorized;
