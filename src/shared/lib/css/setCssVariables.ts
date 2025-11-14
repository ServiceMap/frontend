export const setCssVariables = (
  vars: { property: string; value: string | null; priority?: string }[],
) => {
  vars.forEach(({ property, value, priority }) => {
    document.documentElement.style.setProperty(property, value, priority);
  });
};
