export default function BlueCheckMark({ className }: { className?: string }) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className={className}
    >
      <rect width={24} height={24} stroke="none" fill="#000000" opacity={0} />
      <g transform="matrix(0.42 0 0 0.42 12 12)">
        <g style={{}}>
          <g transform="matrix(1 0 0 1 0 0)">
            <polygon
              style={{
                stroke: "none",
                strokeWidth: 1,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "rgb(66,165,245)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              points="5.62,-21 9.05,-15.69 15.37,-15.38 15.69,-9.06 21,-5.63 18.12,0 21,5.62 15.69,9.05 15.38,15.37 9.06,15.69 5.63,21 0,18.12 -5.62,21 -9.05,15.69 -15.37,15.38 -15.69,9.06 -21,5.63 -18.12,0 -21,-5.62 -15.69,-9.05 -15.38,-15.37 -9.06,-15.69 -5.63,-21 0,-18.12 "
            />
          </g>
          <g transform="matrix(1 0 0 1 -0.01 0.51)">
            <polygon
              style={{
                stroke: "none",
                strokeWidth: 1,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "rgb(255,255,255)",
                fillRule: "nonzero",
                opacity: 1,
              }}
              points="-2.6,6.74 -9.09,0.25 -6.97,-1.87 -2.56,2.53 7,-6.74 9.09,-4.59 "
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
