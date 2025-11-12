export const historyBackOrDefault = (defaultUrl: string) => {
  if (window.history.length > 2) {
    window.history.back();
    return;
  }

  window.location.replace(defaultUrl);
};
