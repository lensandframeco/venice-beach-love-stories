import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

interface ResponsiveHeroImageProps {
  desktopImage: string;
  tabletImage?: string;
  mobileImage?: string;
  alt: string;
  className?: string;
  objectPosition?: string;
}

export function ResponsiveHeroImage({
  desktopImage,
  tabletImage,
  mobileImage,
  alt,
  className = "w-full h-full object-cover",
  objectPosition = "center",
}: ResponsiveHeroImageProps) {
  const [deviceType, setDeviceType] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const updateDeviceType = () => {
      const width = window.innerWidth;
      if (width < MOBILE_BREAKPOINT) {
        setDeviceType("mobile");
      } else if (width < TABLET_BREAKPOINT) {
        setDeviceType("tablet");
      } else {
        setDeviceType("desktop");
      }
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, []);

  // Select the appropriate image based on device type
  const getImageSrc = () => {
    if (deviceType === "mobile" && mobileImage) {
      return mobileImage;
    }
    if (deviceType === "tablet" && tabletImage) {
      return tabletImage;
    }
    if (deviceType === "tablet" && mobileImage) {
      // Fall back to mobile image on tablet if no tablet-specific image
      return mobileImage;
    }
    return desktopImage;
  };

  return (
    <img
      src={getImageSrc()}
      alt={alt}
      className={className}
      style={{ objectPosition }}
    />
  );
}

export default ResponsiveHeroImage;
