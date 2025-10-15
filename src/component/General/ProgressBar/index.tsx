import COLORS from "@/constants/COLORS";
import { ProgressBarProps } from "./types";
import styles from "./styles.module.css";

export default function ProgressBar({
  value,
  height = 8,
  showLabel = true,
  className = "",
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, Number(value ?? 0)));

  const trackStyle = {
    background: COLORS.colorMutedHex,
    height: typeof height === "number" ? `${height}px` : height,
  } as const;

  const fillStyle = {
    width: `${clamped}%`,
    background: COLORS.colorGreenHex,
  } as const;

  // define CSS variable for percent so label and marker can follow
  const percentVar = {
    ["--percent" as any]: `${clamped}%`,
  } as React.CSSProperties;

  return (
    <div className={`${styles.container} ${className}`} style={percentVar}>
      <div className={styles.track} style={trackStyle}>
        <div className={styles.fill} style={fillStyle} />

        {/* "You" marker above the current progress point */}
        <div
          className={styles.marker}
          aria-hidden
          style={{ left: `var(--percent)` }}
        >
          <div className={styles.markerLabel}>You</div>
          <div className={styles.markerDot} />
        </div>

        {/* thumb at current percent */}
        <div
          className={styles.thumb}
          style={{ left: `var(--percent)` }}
          aria-hidden
        />

        {/* percentage label that follows the current progress */}
        {showLabel && (
          <div
            className={styles.labelFollowing}
            style={{ left: `var(--percent)` }}
          >
            <span className={styles.labelValue}>{clamped}%</span>
          </div>
        )}
      </div>
    </div>
  );
}
