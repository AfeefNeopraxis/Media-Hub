import classNames from "classnames";
import { cloneElement } from "react";

const Center = ({
  children,
  vertical = true,
  horizontal = true,
  className = "",
}: {
  children: any;
  vertical?: boolean;
  horizontal?: boolean;
  className?: string;
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
    horizontal ? "justify-center" : "",
    vertical ? "items-center" : "",
    className
  );

  return (
    <div className={parentClasess}>
      {typeof children === "string"
        ? children
        : children.length
        ? [...children].map((child) => absoluteNode(child))
        : absoluteNode(children)}
    </div>
  );
};
export default Center;
