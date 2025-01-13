import { ReactElement } from "react";

import FilterComponent from "./components/filter/filter.component";
import ListComponent from "./components/list/list.component";

import FiltersPropvider from "./providers/filters/filters.provider";
import ItemsPropvider from "./providers/items/items.provider";

import styles from "./page.module.css";

const items = Array(100)
  .fill(null)
  .map((_, i) => ({ value: i + 1 }));

export default function Page(): ReactElement {
  return (
    <FiltersPropvider>
      <ItemsPropvider items={items}>
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
          <ListComponent />
        </div>
      </ItemsPropvider>
    </FiltersPropvider>
  );
}
