import React, { createContext, useState } from "react";

// the Animation Context
export const AnimationContext = createContext();

// the provider component
export const AnimationProvider = ({ children }) => {
  // State to manage whether animations are enabled or disabled
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  // Function to toggle animations
  const toggleAnimations = () => {
    setAnimationsEnabled((prev) => !prev);
  };

  return (
    <AnimationContext.Provider value={{ animationsEnabled, toggleAnimations }}>
      {children}
    </AnimationContext.Provider>
  );
};
