import * as React from "react";

const MenuIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="feather feather-menu"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M3 12h18M3 6h18M3 18h18"></path>
  </svg>
);

export default MenuIcon;
