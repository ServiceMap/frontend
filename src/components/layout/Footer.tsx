const socialMedia = [
  {
    name: "Twitter",
    link: "https://twitter.com",
    icon: "🐦",
  },
  {
    name: "Github",
    link: "https://github.com",
    icon: "💻",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com",
    icon: "💼",
  },
];

export function Footer() {
  return (
    <footer className="tw:mt-auto tw:flex tw:min-w-dvw tw:flex-col tw:justify-between tw:gap-2 tw:border-t tw:px-6 tw:py-4 tw:text-center tw:text-sm tw:md:flex-row">
      <div className="tw:flex tw:justify-center tw:gap-4 tw:md:order-2">
        {socialMedia.map((data) => (
          <a href={data.link} target="_blank" rel="noreferrer">
            <span className="tw:max-md:hidden">{data.name}</span> {data.icon}
          </a>
        ))}
      </div>
      <p className="tw:text-primary">
        &copy; {new Date().getFullYear()} ServiceMap. All rights reserved.
      </p>
    </footer>
  );
}
