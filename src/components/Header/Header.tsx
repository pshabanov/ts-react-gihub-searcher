import styles from './Header.module.scss';
import { ThemeSwitcher } from '../ThemeSwitcher'


export const Header = () => (
  <div className={styles.header} data-testid="Header">
      <div className={styles.logo}>
          devfinder
      </div>
    <ThemeSwitcher />
  </div>
);
