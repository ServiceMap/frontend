import { useTranslation } from "react-i18next";

interface LoadingComponentProps {
  fullscreen?: boolean;
  isLoading?: boolean;
}

const Loader = ({ fullscreen, isLoading = true }: LoadingComponentProps) => {
  const { t } = useTranslation();

  return (
    isLoading && (
      <div className={`loading-screen ${fullscreen ? "fullscreen" : ""}`}>
        <div className="spinner-border"></div>
        <div className="loading-text">{t("loading_message")}</div>
      </div>
    )
  );
};

export default Loader;
