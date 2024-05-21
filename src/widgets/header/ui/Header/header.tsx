import { useTheme } from "@/app/providers/ThemeProvider";
import { ThemeButton } from "@/features/theme";
import { formatDate } from "@/shared/helpers/formatDate";

import styles from "./styles.module.scss";

const Header = () => {
  const { isDark } = useTheme();
  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.light}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>NEWS REACTIFY</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>

      <ThemeButton />
    </header>
  );
};

export default Header;
