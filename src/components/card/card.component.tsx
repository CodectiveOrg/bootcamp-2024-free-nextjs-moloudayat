import { ReactElement, PropsWithChildren } from "react";

import styles from "./card.module.css";

type Props = PropsWithChildren;

export default function CardComponent({ children }: Props): ReactElement {
  return (
    <div className={styles.card}>
      {/* <div className={styles.image}>
        <img src="https://via.placeholder.com/300" alt="Placeholder" />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Title</h2>
        <p className={styles.description}>Description</p>
      </div> */}
      {children}
    </div>
  );
}
