import React from "react";

function Title({ text1, text2 }) {
  return (
   <div className="flex items-center gap-3 mb-3 w-full">
  <p className="text-gray-500 whitespace-nowrap">
    {text1}
    <span className="text-gray-700 font-medium">{text2}</span>
  </p>
 <hr className="w-16 border-t-2 border-gray-700" />
</div>
  );
}

export default Title;
