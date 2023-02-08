const colors = {
  primary: "#FF0000",
  secondary: "#020203",
  darkgrey: "#282D30",
  darkgrey2: "#20253A",
  mediumgrey: "#74798C",
  mediumgrey2: "#9B9EAC",
  lightgrey: "#FBFBFB",
  white: "#FFFFFF",
  black: "#000000",
  blue: "#4AB8FF",
  yellow: "#F9CE23",
  pink: "#FD5181",
};

export default colors;

/**
 * Transform an hexadecimal color into a rgb one
 * @param {string} hex color
 * @return {string} r,g,b
 */
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const color = {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
  return `${color.r},${color.g},${color.b}`;
};
