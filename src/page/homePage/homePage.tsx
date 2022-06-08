import React from "react";
import cb from "classnames/bind";
import styles from "./homePage.module.scss";
import { ReactComponent as ExampleIcon } from "assets/example.svg";

const cn = cb.bind(styles);

const HomePage: React.FC = () => {
  return (
    <div className={cn("example")}>
      <div>HomePage!</div>
      <ExampleIcon style={{ height: 200, width: 200 }} fill={"blue"} />
    </div>
  );
};

export default HomePage;
