import CommentCardProps from "./types";
import styles from "./styles.module.css";
import Image from "next/image";
import Text from "../General/Text";
export default function CommentCard({
  userName,
  comment,
  date,
  avatarUrl,
}: CommentCardProps) {
  return (
    <div className={styles.commentCardContainer}>
      <div className={styles.avatarContainer}>
        {avatarUrl && (
          <Image
            className={styles.avatar}
            src={avatarUrl}
            width={72}
            height={72}
            alt={`${userName}'s avatar`}
          />
        )}
      </div>
      <div className={styles.commentContent}>
        <Text variant="H7" text={userName} />
        <Text variant="P2" text={date} />

        <Text variant="P3" text={comment} />
      </div>
    </div>
  );
}
