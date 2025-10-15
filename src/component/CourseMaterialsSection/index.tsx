import Divider from "../General/Divider";
import Icon from "../General/Icon";
import iconList from "../General/Icon/iconList";
import Text from "../General/Text";
import styles from "./styles.module.css";

interface RowProps {
  icon: keyof typeof iconList;
  label: string;
  value: string;
}

function Row({ icon, label, value }: RowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>
        <Icon name={icon} />
        <Text variant="L1" text={`${label}:`} />
      </div>
      <Text variant="L1" text={value} />
    </div>
  );
}

function RowGroup({ rows }: { rows: RowProps[] }) {
  return (
    <div className={styles.rowGroup}>
      {rows.map((item, index) => (
        <>
          <Row {...item} />
          {index < rows.length - 1 && <Divider />}
        </>
      ))}
    </div>
  );
}

export default function CourseMaterialsSection() {
  const Materials: RowProps[] = [
    { icon: "clock", label: "Duration", value: "3 Weeks" },
    { icon: "books", label: "Lessons", value: "8" },
    { icon: "reader", label: "Enrolled", value: "65 students" },
    { icon: "globle", label: "Language", value: "English" },
  ];

  return (
    <div className={styles.container}>
      <Text variant="H5" text="Course Materials" />

      <div className={styles.content}>
        <RowGroup rows={Materials} />
        <RowGroup rows={Materials} />
      </div>
    </div>
  );
}
