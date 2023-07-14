import * as React from "react";
import { SVGProps } from "react";
import { useTheme } from "next-themes";

const PolisLogo = (props: SVGProps<SVGSVGElement>) => {
  const { resolvedTheme } = useTheme();
  const fill = resolvedTheme === "dark" ? "#fff" : "#202328";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={33}
      height={33}
      fill="none"
      {...props}
    >
      <path
        fill={fill}
        d="M32.1 5.904C32.1 2.919 29.71.5 26.765.5H5.432C2.487.5.1 2.92.1 5.904v4.216c0 .192.1.368.262.466l4.276 2.563a.542.542 0 0 1 .262.466v14.218c0 .189.097.363.255.461l6.667 4.126c.356.22.812-.04.812-.461V13.847c0-.299.238-.54.533-.54h5.866c.295 0 .534.241.534.54v18.112c0 .422.456.68.811.46l6.667-4.125a.542.542 0 0 0 .255-.46v-14.22c0-.19.1-.367.262-.465l4.276-2.563a.542.542 0 0 0 .262-.466V5.904Z"
      />
      <path
        fill="url(#a)"
        fillOpacity={0.4}
        d="M32.1 5.904C32.1 2.919 29.71.5 26.765.5H5.432C2.487.5.1 2.92.1 5.904v4.216c0 .192.1.368.262.466l4.276 2.563a.542.542 0 0 1 .262.466v14.218c0 .189.097.363.255.461l6.667 4.126c.356.22.812-.04.812-.461V13.847c0-.299.238-.54.533-.54h5.866c.295 0 .534.241.534.54v18.112c0 .422.456.68.811.46l6.667-4.125a.542.542 0 0 0 .255-.46v-14.22c0-.19.1-.367.262-.465l4.276-2.563a.542.542 0 0 0 .262-.466V5.904Z"
      />
      <defs>
        <linearGradient
          id="a"
          x1={29.47}
          x2={13.059}
          y1={2.87}
          y2={21.922}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset={1} stopColor="#fff" stopOpacity={0} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PolisLogo;
