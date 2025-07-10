import React from "react";
import styles from "./index.module.css"


type SkeletonProps = {
  variant?: "rect" | "circle";
  className?: string;
  style?: React.CSSProperties;
};

const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rect",
  className,
  style,
}) => {
  return (
    <div
        className={`${styles.skeleton} ${styles[variant]} ${className || ""}`}
        style={style}
    />
  );
};

export default Skeleton;
