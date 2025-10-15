"use client";
import { useState } from "react";
import Icon from "@/component/General/Icon";
import styles from "./styles.module.css";

type Item = {
  id: string | number;
  title: string;
  locked?: boolean;
};

type Props = {
  title: string;
  subtitle?: string;
  items?: Item[];
  collapsible?: boolean;
  defaultCollapsed?: boolean;
};

export default function CourseTopicSection({
  title,
  subtitle,
  items = [],
  collapsible = true,
  defaultCollapsed = false,
}: Props) {
  const [collapsed, setCollapsed] = useState<boolean>(defaultCollapsed);

  const toggle = () => {
    if (!collapsible) return;
    setCollapsed((c) => !c);
  };

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>

        <div className={styles.actions}>
          {collapsible && (
            <button
              aria-label="toggle"
              onClick={toggle}
              className={styles.iconBtn}
            >
              <Icon name={collapsed ? "plus" : "arrow"} size={18} />
            </button>
          )}
        </div>
      </header>

      {!collapsed && (
        <ul className={styles.list}>
          {items.map((it) => (
            <li key={it.id} className={styles.item}>
              <Icon name="file" size={16} className={styles.itemIcon} />
              <span>{it.title}</span>
              {it.locked && (
                <Icon name="lock" size={14} className={styles.lockIcon} />
              )}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
