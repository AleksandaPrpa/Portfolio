import { theme } from "./ChangeThemeBtn";

function Strong({ children }) {
  return <strong className={`${theme.accent}`}>{children}</strong>;
}

export default Strong;
