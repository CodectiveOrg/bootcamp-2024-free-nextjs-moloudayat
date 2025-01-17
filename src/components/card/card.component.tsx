import { ReactElement, PropsWithChildren } from "react";

import styles from "./card.module.css";

type Props = PropsWithChildren;

export default function CardComponent({ children }: Props): ReactElement {
  return <div className={styles.card}>{children}</div>;
}
