"use client";

import { ReactElement } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";

import styles from "./header.module.css";

type headerTabsType = {
  href: string;
  title: string;
};
export default function HeaderComponent(): ReactElement {
  const pathname: string = usePathname();

  const headerTabs: headerTabsType[] = [
    { href: "/", title: "خانه" },
    { href: "/search", title: "جستجو" },
    { href: "/category", title: "دسته بندی‌ها" },
    { href: "/patients", title: "بیماران" },
    { href: "/doctors", title: "پزشکان" },
    { href: "/clinics", title: "مراکز درمانی" },
  ];
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {headerTabs.map(({ href, title }: headerTabsType) => (
            <li key={href}>
              <Link
                href={href}
                className={clsx(pathname === href && styles.active)}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت‌نام</button>
    </header>
  );
}
