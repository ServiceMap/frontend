import { Trans, useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import dayjs from "dayjs";

import { LanguageSwitcher } from "@/features/language-switcher";
import { StripeSandboxButton } from "@/features/payments";
import { useAuth } from "@/shared/auth";
import { Button } from "@/shared/ui/shadcn";

export const HomePage = () => {
  const { t } = useTranslation();
  const { isLoggedIn, user, login, logout } = useAuth();

  toast("dd", { type: "error" });
  return (
    <>
      <h1>{t("welcome_message")}</h1>

      <p>{import.meta.env.MODE}</p>

      <p>
        <LanguageSwitcher />
      </p>

      <p>
        <Button>Click</Button>
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

      <button
        onClick={() => {
          throw new Error("Test SENTRY button clicked!");
        }}
      >
        TEST SENTRY
      </button>

      <StripeSandboxButton />
    </>
  );
};

export default HomePage;
