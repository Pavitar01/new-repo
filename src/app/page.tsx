"use client";
import { SwitchLanguage } from "@/shared/ui";
import { useTranslation } from "react-i18next";

const Page = () => {
  const { t } = useTranslation();
  return (
    <div>
      <p style={{ fontFamily: "var(--global-font-giselle)", fontStyle:"italic",fontWeight:900 }}>
       Thunder Stunt
      </p>
      Welcome to {t("AppName")}
      <SwitchLanguage />
    </div>
  );
};

export default Page;
