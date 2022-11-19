export const morph = (percent: number, width: number, unit = "px"): string => {
  return `${(width*percent)/100}${unit}`; 
};