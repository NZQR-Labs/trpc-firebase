import { useMediaQuery } from "@mui/material";

export default function useDeviceType() {
  const isDesktop = useMediaQuery("(min-width: 1224px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const isTablet = useMediaQuery("(max-width: 1224px) and (min-width: 768px)");

  return {
    isDesktop,
    isMobile,
    isTablet,
  };
}