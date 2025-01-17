"use client";
import { ReactElement, useContext } from "react";

import CardComponent from "@/components/card/card.component";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import { FiltersType } from "@/types/filters.type";

import styles from "./filter.module.css";

type Option = {
  label: string;
  key: keyof FiltersType;
};

type Props = {
  title: string;
  options: Option[];
};
export default function FilterComponent({
  title,
  options,
}: Props): ReactElement {
  const { filters, changeFilter } = useContext(FiltersContext);

  return (
    <CardComponent>
      <div className={styles.title}>{title}</div>
      <div className={styles.buttons}>
        {/* {options.map((option) => (
          <FilterButtonComponent
            key={option.key}
            isActive={filters[option.key]}
            onClick={changeFilter.bind(null, option.key, !filters[option.key])}
            // onClick={() => changeFilter(option.key, !filters[option.key])}
          >
            {option.label}
          </FilterButtonComponent>
        ))} */}
      </div>
    </CardComponent>
  );
}
