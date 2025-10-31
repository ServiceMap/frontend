import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import isBetween from "dayjs/plugin/isBetween";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import updateLocale from "dayjs/plugin/updateLocale";
import utc from "dayjs/plugin/utc";

import "dayjs/locale/en";
import "dayjs/locale/uk";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);
dayjs.extend(isBetween);
dayjs.extend(customParseFormat);
dayjs.extend(updateLocale);

export const DEFAULT_TIMEZONE = "UTC";
export const DEFAULT_DATE_FORMAT = "YYYY-MM-DD";
export const DEFAULT_TIME_FORMAT = "HH:mm:ss";
export const DEFAULT_DATE_TIME_FORMAT = `${DEFAULT_DATE_FORMAT} ${DEFAULT_TIME_FORMAT}`;

dayjs.extend((_option, dayjsClass, _dayjsFactory) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const oldFormat = dayjsClass.prototype.format;

  dayjsClass.prototype.format = function (formatString) {
    return oldFormat.bind(this)(formatString ?? DEFAULT_DATE_TIME_FORMAT);
  };
});

dayjs.tz.setDefault(DEFAULT_TIMEZONE);

export { dayjs };
