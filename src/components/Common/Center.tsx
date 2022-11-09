import classNames from "classnames";
import { cloneElement } from "react";

const Center = ({
  children,
  vertical = true,
  horizontal = true,
  className = "",
  onClick,
}: {
  children: any;
  vertical?: boolean;
  horizontal?: boolean;
  className?: string;
  onClick?: () => void;
}) => {
  // add one more className 'absolute' to the passed childnode
  const absoluteNode = (child: JSX.Element) => {
    const className = classNames("absolute", child.props.className);
    const props = {
      className,
    };

    return cloneElement(child, props);
  };

  // Position all childNodes into the center of the parent node
  const parentClasess = classNames(
    "flex w-full h-full",
    onClick ? "cursor-pointer" : "",
    horizontal ? "justify-center" : "",
    vertical ? "items-center" : "",
    className
  );

  return (
    <div className={parentClasess} onClick={onClick}>
      {typeof children === "string"
        ? children
        : children.length
        ? [...children].map((child) => absoluteNode(child))
        : absoluteNode(children)}
    </div>
  );
};
export default Center;
