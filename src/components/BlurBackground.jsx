import React from "react";

const BlurBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Purple Blob */}
      <div className="absolute -top-40 -left-40 h-[300px] w-[300px] rounded-full bg-purple-800 opacity-50 blur-3xl animate-[move_large_10s_linear_infinite]"></div>
      {/* Cyan Blob */}
      <div className="absolute top-1/3 -right-48 h-[400px] w-[400px] rounded-full bg-cyan-500 opacity-50 blur-2xl animate-[move_medium_15s_linear_infinite]"></div>
      {/* Pink Blob */}
      <div className="absolute -bottom-32 lg:-bottom-48  left-0 lg:left-1/3 h-[250px] w-[250px] lg:h-[500px] lg:w-[500px] rounded-full bg-pink-500 opacity-50 blur-3xl animate-[move_small_20s_linear_infinite_reverse]"></div>
    </div>
  );
};

export default BlurBackground;
