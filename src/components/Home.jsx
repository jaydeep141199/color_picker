import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../provider/AppProvider";

const Home = () => {
  
  const{hexValue,
    setHexValue,
    rgbValue,
    setRgbValue,
    savedColors,
    setSavedColors}=useContext(AppContext)

  const navigate = useNavigate();

  const handleHexChange = (e) => {
    const value = e.target.value;
    setHexValue(value);
    const rgb = convertHexToRgb(value);
    if (rgb) {
      setRgbValue(rgb.join(","));
      updateBackgroundColor(rgb);
    } else {
      setRgbValue("");
      updateBackgroundColor(null);
    }
  };

  const handleRgbChange = (e) => {
    const value = e.target.value;
    setRgbValue(value);
    setHexValue(convertRgbToHex(value));
    updateBackgroundColor(value);
  };

  const convertHexToRgb = (hex) => {
    hex = hex.replace("#", "");
    const validHexRegex = /^[0-9a-fA-F]{6}$/;
    if (!validHexRegex.test(hex)) {
      return null;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return [r, g, b];
  };

  const convertRgbToHex = (rgb) => {
    // Convert RGB color to hex
    // Implementation logic here...
  };

  const handleSave = (e) => {
    e.preventDefault();
    const color = hexValue || rgbValue;
    setSavedColors([...savedColors, color]);
    setHexValue("");
    setRgbValue("");
    updateBackgroundColor(null);

    if (savedColors.length+ 1 === 4) {
      // Navigation logic
      // Replace '/save' with the actual path of the component you want to navigate to
      navigate("/save", { state: { savedColors: [...savedColors, color] } });
    }
  };

  const handleClear = () => {
    setHexValue("");
    setRgbValue("");
    updateBackgroundColor(null);
  };

  const updateBackgroundColor = (rgb) => {
    const body = document.querySelector("body");
    if (rgb) {
      body.style.backgroundColor = `rgb(${rgb})`;
    } else {
      body.style.backgroundColor = "initial";
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold">Color</h1>
      <div className="p-4 flex  flex-col justify-center items-center">
        <div className="flex gap-4 mb-4 flex-col">
          <div>
            <h1 className="text-2xl font-bold">HEX Code:-</h1>
            <input
              type="text"
              placeholder="Hex"
              value={hexValue}
              onChange={handleHexChange}
              className="border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <div>
            <h1 className="text-2xl font-bold">RGB Code:-</h1>
            <input
              type="text"
              placeholder="RGB"
              value={rgbValue}
              onChange={handleRgbChange}
              className="border border-gray-300 rounded px-2 py-1"
            />
          </div>
        </div>
        <div className="flex gap-4 flex-col">
          <form onSubmit={handleSave}>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded px-4 py-2"
            >
              Save
            </button>
          </form>
          <button
            onClick={handleClear}
            className="bg-red-500 text-white rounded px-4 py-2"
          >
            Clear
          </button>
        </div>
        {savedColors && savedColors.length === 4 && (
  <NavLink to={{ pathname: "/save", state: { savedColors } }}>
    Go to Next Page
  </NavLink>
)}

      </div>
    </>
  );
};

export default Home;
