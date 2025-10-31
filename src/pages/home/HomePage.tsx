import { Trans } from "react-i18next";
import { t } from "i18next";

import { dayjs } from "@/config/dayjs";
import { i18n, type Locale, LocaleNames } from "@/config/i18n";
import { useAuth } from "@/hooks/useAuth";

const HomePage = () => {
  const { isLoggedIn, user, login, logout } = useAuth();

  //i18n.changeLanguage("uk");

  return (
    <div className="p-6">
      <h1>{t("welcome_message")}</h1>
      <p>
        <Trans
          i18nKey="selected_language"
          values={{
            language: LocaleNames[i18n.language as Locale],
          }}
        />
      </p>
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
    </div>
  );
};

export default HomePage;
