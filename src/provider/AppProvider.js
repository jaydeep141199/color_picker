import React, { createContext,useState } from "react";

export const AppContext = createContext();

const ColorProvider = ({ children }) => {
  const [hexValue, setHexValue] = useState("");
  const [rgbValue, setRgbValue] = useState("");
  const [savedColors, setSavedColors] = useState([]);
  const [copiedColor, setCopiedColor] = useState("");
  const [colorSave, setColorSave] = useState([]);
  const [generatedColor, setGeneratedColor] = useState([]);
  const [colorSaves, setColorSaves] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editColor, setEditColor] = useState("");
  const [hoveredColor, setHoveredColor] = useState(null);

  return (
    <>
      <AppContext.Provider
        value={
          {hexValue,
          setHexValue,
          rgbValue,
          setRgbValue,
          savedColors,
          setSavedColors,
         
          copiedColor,
          setCopiedColor,
          colorSave,
          setColorSave,
          generatedColor,
          setGeneratedColor,
          colorSaves,
          setColorSaves,
          editIndex,
          setEditIndex,
          editColor,
          setEditColor,
          hoveredColor,
          setHoveredColor}
        }
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
export default ColorProvider;
