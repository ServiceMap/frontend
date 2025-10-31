import { Trans, useTranslation } from "react-i18next";

import { LanguageSelector } from "@/components/elements/LanguageSelector.tsx";
import { dayjs } from "@/config/dayjs.config.ts";
import { useAuth } from "@/hooks/useAuth";

const HomePage = () => {
  const { t } = useTranslation();
  const { isLoggedIn, user, login, logout } = useAuth();

  return (
    <>
      <h1>{t("welcome_message")}</h1>

      <p>{import.meta.env.MODE}</p>

      <p>
        <LanguageSelector />
      </p>

      <p>{dayjs().format()}</p>
      <p>{dayjs().format("LLLL")}</p>

      {!isLoggedIn ? (
        <button data-testid="login-btn" onClick={() => void login()}>
          {t("login_btn")}
        </button>
      ) : (
        <>
          <p data-testid="hello-message">
            <Trans
              i18nKey="hello_user_message"
              values={{
                username: user?.username ?? user?.preferredName,
              }}
            />
          </p>
          <button data-testid="logout-btn" onClick={() => void logout()}>
            {t("logout_btn")}
          </button>
        </>
      )}
    </>
  );
};

export default HomePage;
