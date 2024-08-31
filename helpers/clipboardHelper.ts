import * as Clipboard from "expo-clipboard";
import { Alert } from "react-native";

export const DOUBLE_TAP_DELAY = 300;

export const handleDoubleTapCopy = (
  text: string,
  lastTap: number,
  setLastTap: (tapTime: number) => void,
  tapTimeoutRef: React.RefObject<NodeJS.Timeout | null>,
) => {
  const now = Date.now();

  if (lastTap && now - lastTap < DOUBLE_TAP_DELAY) {
    Clipboard.setStringAsync(text)
      .then(() => Alert.alert("Copied to clipboard!"))
      .catch((error) => console.error("Error copying to clipboard:", error));
    setLastTap(0);
  } else {
    setLastTap(now);

    if (tapTimeoutRef.current) {
      clearTimeout(tapTimeoutRef.current);
    }

    tapTimeoutRef.current = setTimeout(() => setLastTap(0), DOUBLE_TAP_DELAY);
  }
};
