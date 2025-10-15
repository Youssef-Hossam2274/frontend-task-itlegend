import Text from "../General/Text";
import Breadcrumb from "./Breadcrumb";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <Breadcrumb />
      <Text variant="H2" text="Starting SEO as your Home" />
    </div>
  );
}
