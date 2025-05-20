import { useEffect, useState } from "react";
import "./ThemeToggle.css";
import { PiMoonStarsFill } from "react-icons/pi";
import { MdSunny } from "react-icons/md";

const ThemeToggle = () => {
  const storageKey = "theme";
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem(storageKey))
  );

  useEffect(() => {
    if (isDark) {
      document.firstElementChild.setAttribute("data-theme", "dark");
      localStorage.setItem(storageKey, JSON.stringify(true));
      return;
    } else {
      document.firstElementChild.setAttribute("data-theme", "light");
      localStorage.setItem(storageKey, JSON.stringify(false));
    }
  }, [isDark]);

  return (
    <label className="flex-center theme-toggle">
      <input
        type="checkbox"
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />

      {isDark ? <PiMoonStarsFill /> : <MdSunny />}
    </label>
  );
};

export default ThemeToggle;
