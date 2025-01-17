import { ReactElement } from "react";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import MyDoctorLogo from "@/logo/my-doctor.logo";

import styles from "./page.module.css";
import SelectComponent from "@/components/select/select.component";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>
        <MyDoctorLogo />
        پیوند سلامتی
      </h1>
      <GlobalSearchBoxComponent />
      <SelectComponent
        options={[
          { value: "all", label: "همه" },
          { value: "male", label: "مرد" },
          { value: "female", label: "زن" },
        ]}
      />
      {/* <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div> */}
    </div>
  );
}
