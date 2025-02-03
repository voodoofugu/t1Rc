import { memo } from "react";

import SearchButton from "./SearchButton";
import ToggleButton from "./ToggleButton";

export default memo(function TemplateContent({ children }) {
  return (
    <main className="fixed w-full h-full bg-indigo-200 dark:bg-indigo-950">
      <div className="relative p-10 bg-indigo-250 max-w-1160 w-calcFull-80 mx-auto my-30 rounded-18 shadow-shadowColor6 animate-appear dark:bg-indigo-1000 dark:shadow-darkColor1">
        <SearchButton />
        <div className="text-indigo-400 text-2xl font-bold text-center text-shadow-tS1 italic dark:text-shadow-tS1Black dark:text-indigo-500">
          Template
        </div>
        <ToggleButton />
      </div>
      {children}
    </main>
  );
});
