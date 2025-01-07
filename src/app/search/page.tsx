import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";
import FilterButtonComponent from "@/components/filter-button/filter-button.component";
import FilterComponent from "./components/filter/filter.component";

import styles from "./page.module.css";

const items = Array(100)
  .fill(null)
  .map((_, index) => index + 1);
export default function Page(): ReactElement {
  return (
    <div className={styles.search}>
      <div className={styles.filters}>
        <FilterComponent
          title="زوج یا فرد"
          options={[
            { value: "even", label: "زوج" },
            { value: "odd", label: "فرد" },
          ]}
        />
        <FilterComponent
          title="بخش‌پذیری"
          options={[
            { value: "two", label: "بخش‌پذیر بر ۲" },
            { value: "three", label: "بخش‌پذیر بر ۳" },
            { value: "five", label: "بخش‌پذیر بر ۵" },
            { value: "seven", label: "بخش‌پذیر بر ۷" },
          ]}
        />
      </div>
      <ul className={styles.results}>
        {items.map((item) => (
          <li key={item} className={item % 2 === 0 ? styles.active : ""}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
