import { ReactElement } from "react";

import FilterComponent from "./components/filter/filter.component";

import FiltersPropvider from "./providers/filters/filters.provider";

import styles from "./page.module.css";

const items = Array(100)
  .fill(null)
  .map((_, index) => index + 1);
export default function Page(): ReactElement {
  return (
    <FiltersPropvider>
      <div className={styles.search}>
        <div className={styles.filters}>
          <FilterComponent
            title="زوج یا فرد"
            options={[
              { key: "even", label: "زوج" },
              { key: "odd", label: "فرد" },
            ]}
          />
          <FilterComponent
            title="بخش‌پذیری"
            options={[
              { key: "three", label: "بخش‌پذیر بر ۳" },
              { key: "five", label: "بخش‌پذیر بر ۵" },
              { key: "seven", label: "بخش‌پذیر بر ۷" },
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
    </FiltersPropvider>
  );
}
