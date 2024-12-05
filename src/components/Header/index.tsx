"use client";

import styles from "./style.module.css";
import Link from "next/link";
import { useThemeContext } from "@/app/AppContext";

export const Header = () => {
  const { theme, switchTheme } = useThemeContext();

  return (
    <div
      className={styles.container}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2 className={styles.logo}>PTSFDTZ</h2>
      <ul
        className={styles.list}
        style={{ display: "flex", listStyle: "none" }}
      >
        <li className={styles.item}>
          <Link
            href={"https://github.com/ptsfdtz/Silky-view"}
            style={{ alignItems: "center", display: "flex" }}
          >
            <svg
              className={styles.github}
              style={{ fill: theme === "dark" ? "#FFF" : "#000" }}
              height="30px"
              width="30px"
              id="Layer_1"
              version="1.1"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <path d="M256,32C132.3,32,32,134.8,32,261.7c0,101.5,64.2,187.5,153.2,217.9c11.2,2.1,15.3-5,15.3-11.1   c0-5.5-0.2-19.9-0.3-39.1c-62.3,13.9-75.5-30.8-75.5-30.8c-10.2-26.5-24.9-33.6-24.9-33.6c-20.3-14.3,1.5-14,1.5-14   c22.5,1.6,34.3,23.7,34.3,23.7c20,35.1,52.4,25,65.2,19.1c2-14.8,7.8-25,14.2-30.7c-49.7-5.8-102-25.5-102-113.5   c0-25.1,8.7-45.6,23-61.6c-2.3-5.8-10-29.2,2.2-60.8c0,0,18.8-6.2,61.6,23.5c17.9-5.1,37-7.6,56.1-7.7c19,0.1,38.2,2.6,56.1,7.7   c42.8-29.7,61.5-23.5,61.5-23.5c12.2,31.6,4.5,55,2.2,60.8c14.3,16.1,23,36.6,23,61.6c0,88.2-52.4,107.6-102.3,113.3   c8,7.1,15.2,21.1,15.2,42.5c0,30.7-0.3,55.5-0.3,63c0,6.1,4,13.3,15.4,11C415.9,449.1,480,363.1,480,261.7   C480,134.8,379.7,32,256,32z" />
              </g>
            </svg>
          </Link>
        </li>
        <li
          className={styles.item}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="checkbox"
            id="darkmode-toggle"
            className={styles.checkbox}
            onChange={switchTheme}
            checked={theme === "dark"}
          />

          <label className={styles.toggle} htmlFor="darkmode-toggle">
            <svg
              className={styles.sun}
              fill="#000000"
              viewBox="0 0 30 30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M6.458 10.428l-4.33-2.5c-.564-.325-.08-1.2.5-.866l4.33 2.5c.57.33.072 1.197-.5.866zm19.914 11.498l-4.33-2.5c-.564-.326-.08-1.2.5-.866l4.33 2.5c.57.33.072 1.196-.5.866zM9.568 6.952l-2.5-4.33c-.326-.564.53-1.08.866-.5l2.5 4.33c.33.57-.536 1.072-.866.5zm11.497 19.914l-2.5-4.33c-.325-.564.53-1.08.866-.5l2.5 4.33c.33.57-.535 1.072-.865.5zm-2.5-20.415l2.5-4.33c.326-.563 1.2-.08.866.5l-2.5 4.33c-.328.572-1.195.073-.865-.5zM7.068 26.366l2.5-4.33c.325-.564 1.2-.08.866.5l-2.5 4.33c-.33.57-1.196.072-.866-.5zM22.042 9.56l4.33-2.5c.564-.325 1.08.532.5.867l-4.33 2.5c-.57.33-1.072-.536-.5-.866zM2.128 21.06l4.33-2.5c.563-.325 1.08.53.5.866l-4.33 2.5c-.57.33-1.072-.536-.5-.866zM23.5 14h5c.65 0 .67 1 0 1h-5c-.66 0-.66-1 0-1zm-23 0h5c.65 0 .67 1 0 1h-5c-.66 0-.66-1 0-1zM15 23.5v5c0 .65-1 .67-1 0v-5c0-.66 1-.66 1 0zm0-23v5c0 .65-1 .67-1 0v-5c0-.66 1-.66 1 0zM14.5 8C10.916 8 8 10.916 8 14.5s2.916 6.5 6.5 6.5 6.5-2.916 6.5-6.5S18.084 8 14.5 8zm0 1c3.043 0 5.5 2.457 5.5 5.5 0 3.044-2.457 5.5-5.5 5.5S9 17.544 9 14.5C9 11.457 11.457 9 14.5 9z"></path>
              </g>
            </svg>
            <svg
              className={styles.moon}
              fill="#000000"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>moon</title>{" "}
                <path d="M29.223 24.178l-0.021-0.057c-0.116-0.274-0.383-0.463-0.694-0.463-0.104 0-0.202 0.021-0.292 0.059l0.005-0.002c-1.272 0.542-2.752 0.857-4.306 0.857-6.213 0-11.25-5.037-11.25-11.25 0-4.66 2.833-8.658 6.871-10.366l0.074-0.028 0.211-0.089c0.267-0.118 0.45-0.381 0.45-0.687 0-0.375-0.276-0.686-0.635-0.74l-0.004-0.001c-0.653-0.103-1.407-0.161-2.174-0.161-8.145 0-14.748 6.603-14.748 14.748s6.603 14.748 14.748 14.748c4.748 0 8.973-2.244 11.67-5.73l0.025-0.034c0.097-0.125 0.155-0.285 0.155-0.458 0-0.127-0.031-0.246-0.086-0.351l0.002 0.004zM22.518 28.24c-1.497 0.637-3.238 1.007-5.066 1.007-7.317 0-13.249-5.932-13.249-13.249 0-7.074 5.543-12.853 12.523-13.23l0.034-0.001c-3.395 2.326-5.594 6.183-5.594 10.554 0 7.043 5.709 12.752 12.752 12.752 0.85 0 1.681-0.083 2.485-0.242l-0.081 0.013c-1.081 0.976-2.339 1.783-3.716 2.364l-0.087 0.033z"></path>{" "}
              </g>
            </svg>
          </label>
        </li>
      </ul>
    </div>
  );
};
