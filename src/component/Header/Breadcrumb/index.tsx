import Icon from "@/component/General/Icon";
import Text from "@/component/General/Text";
import styles from "./styles.module.css";

// TODO: Should be dynamic based on the current path on url
const links = ["Home", "Courses", "Course Details"];

export default function Breadcrumb() {
  return (
    <div className={styles.breadcrumbContainer}>
      {links.map((link, index) => (
        <>
          <Text variant="P2" text={link} />
          {index < links.length - 1 && <Icon name="arrow" />}
        </>
      ))}
    </div>
  );
}
