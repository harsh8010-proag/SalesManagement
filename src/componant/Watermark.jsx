import React from 'react';

/**
 * FIELDOPS watermark drawn as pure SVG (no image file).
 * - Letters are the real Mona Sans outlines (width 100, weight ~720) converted to vector paths,
 *   so they look identical on every device and never depend on the font being loaded.
 * - Outline only: transparent fill, thin navy-to-blue gradient stroke.
 * - The "O" is the blue gradient map pin with a transparent hole.
 * Scales to any width (set the size with className, e.g. "w-full max-w-5xl").
 */
const LETTER_PATHS = {
    F: 'M48.2 328.2V67.2H238.4V116.2H105.9V180H224V226.5H105.9V328.2Z',
    I: 'M268.2 328.2V67.2H325.7V328.2Z',
    E: 'M373.2 328.2V67.2H563.7V116.2H430.9V172.8H546.2V218.6H430.9V279.2H564.4V328.2Z',
    L: 'M598.2 328.2V67.2H655.9V277.4H771.2V328.2Z',
    D: 'M802.2 328.2V67.2H914.1Q953.1 67.2 979.9 83.6Q1006.8 100 1020.7 129.3Q1034.6 158.7 1034.6 197.9Q1034.6 227 1026.7 251Q1018.8 275 1003.4 292.3Q988.1 309.6 965.7 318.9Q943.3 328.2 914.1 328.2ZM859.7 279.3H904.7Q920.1 279.3 933 275.2Q946 271.1 955.6 261.6Q965.2 252.2 970.5 236.2Q975.9 220.3 975.9 196.7Q975.9 166.2 966.7 148.6Q957.5 131 941.6 123.5Q925.6 116 904.7 116H859.7Z',
    P: 'M1371.2 328.2V67.2H1478.7Q1511.6 67.2 1533.4 77.8Q1555.3 88.3 1566.4 107.7Q1577.5 127 1577.5 153.1Q1577.5 180.7 1565.1 200Q1552.8 219.4 1530.6 229.6Q1508.4 239.8 1478.3 239.8H1428.9V328.2ZM1428.9 195.4H1473.6Q1497.3 195.4 1508.2 183.9Q1519.1 172.5 1519.1 154.9Q1519.1 134.5 1506.6 125.2Q1494.1 115.9 1473.6 115.9H1428.9Z',
    S: 'M1707.7 331.6Q1672.3 331.6 1648.2 320.9Q1624.1 310.1 1611.8 290.7Q1599.4 271.4 1599.2 246H1657.8Q1658 258.6 1663.5 267.9Q1669 277.2 1680.3 282.4Q1691.7 287.5 1709.9 287.5Q1723.9 287.5 1734.3 284.2Q1744.6 280.9 1750.3 273.8Q1755.9 266.8 1755.9 255.5Q1755.9 247.1 1753 241.7Q1750.1 236.2 1743.4 232.4Q1736.6 228.6 1724.9 225.9Q1713.3 223.2 1695.8 220.3Q1673.4 216.8 1656.3 210.7Q1639.2 204.7 1627.8 195.6Q1616.4 186.5 1610.6 173.8Q1604.9 161.1 1604.9 144.1Q1604.9 119.2 1617.3 101.3Q1629.7 83.3 1652.6 73.7Q1675.6 64.1 1707.4 64.1Q1738.3 64.1 1760.7 73.8Q1783.1 83.5 1795.4 100.9Q1807.7 118.4 1807.8 141.7H1749.9Q1749.4 129.4 1743.4 121.8Q1737.3 114.2 1727.5 110.8Q1717.6 107.4 1705.7 107.4Q1692.9 107.4 1683.6 110.7Q1674.3 114 1669.4 120.3Q1664.4 126.7 1664.4 136.7Q1664.4 146.7 1669.7 152.7Q1675 158.7 1688.6 162.5Q1702.2 166.3 1726.6 170.4Q1743.1 172.8 1758.9 177.2Q1774.6 181.6 1787.5 190Q1800.4 198.5 1808.1 213.3Q1815.7 228.2 1815.7 251.9Q1815.7 275.3 1803.6 293.4Q1791.5 311.5 1767.6 321.5Q1743.6 331.6 1707.7 331.6Z',
};

const PIN_PATH =
    'M1123.2 242.3 A108.5 108.5 0 1 1 1287.8 242.3 L1211.2 332 Q1206 340 1200.8 332 Z M1244.5 171.5 A39 39 0 1 0 1166.5 171.5 A39 39 0 1 0 1244.5 171.5 Z';

const FieldOpsWatermark = ({ className = '' }) => (
    <svg
        viewBox="0 0 1892 374"
        role="img"
        aria-label="FIELDOPS"
        className={`block h-auto select-none pointer-events-none ${className}`}
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            {/* Outline: dark navy at the top, brighter blue at the bottom */}
            <linearGradient id="fo-wm-stroke" gradientUnits="userSpaceOnUse" x1="0" y1="66" x2="0" y2="330">
                <stop offset="0" stopColor="#091930" />
                <stop offset="1" stopColor="#1E5098" />
            </linearGradient>
            {/* Pin fill */}
            <linearGradient id="fo-wm-pin" gradientUnits="userSpaceOnUse" x1="0" y1="63" x2="0" y2="338">
                <stop offset="0" stopColor="#2868C6" />
                <stop offset="1" stopColor="#12305C" />
            </linearGradient>
        </defs>

        {/* F I E L D  ·  pin  ·  P S */}
        <g fill="none" stroke="url(#fo-wm-stroke)" strokeWidth="2.5" strokeLinejoin="miter">
            {Object.values(LETTER_PATHS).map((d, i) => (
                <path key={i} d={d} />
            ))}
        </g>
        <path d={PIN_PATH} fill="url(#fo-wm-pin)" fillRule="evenodd" />
    </svg>
);

export default FieldOpsWatermark;