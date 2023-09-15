// import React, { useEffect, useContext, useState } from "react";
// import { AppContext } from "../provider/AppProvider";

// const ColorDetails = () => {
//   const {

//     colorSaves,
//     setColorSaves,
//     editIndex,
//     setEditIndex,
//     editColor,
//     setEditColor
//   } = useContext(AppContext);

//   const [hoveredColor, setHoveredColor] = useState(null);

//   useEffect(() => {
//     const savedColorData = localStorage.getItem("savedColors");
//     if (savedColorData) {
//       setColorSaves(JSON.parse(savedColorData));
//     }
//   }, [setColorSaves]);

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditColor(colorSaves[index]);
//   };

//   const handleColorChange = (event) => {
//     setEditColor(event.target.value);
//   };

//   const handleSaveChanges = () => {
//     if (editIndex >= 0) {
//       setColorSaves((prevColors) => {
//         const updatedColors = [...prevColors];
//         updatedColors[editIndex] = editColor;
//         return updatedColors;
//       });
//     }
//     setEditIndex(-1);
//     setEditColor("");
//   };

//   const handleColorHover = (color) => {
//     setHoveredColor(color);
//   };

//   const handleColorHoverEnd = () => {
//     setHoveredColor(null);
//   };

//   useEffect(() => {
//     localStorage.setItem("savedColors", JSON.stringify(colorSaves));
//   }, [colorSaves]);

//   // Function to convert a hexadecimal color to RGB format
//   const convertHexToRgb = (hex) => {
//     const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//     hex = hex.replace(shorthandRegex, (m, r, g, b) => {
//       return r + r + g + g + b + b;
//     });

//     const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     const r = parseInt(result[1], 16);
//     const g = parseInt(result[2], 16);
//     const b = parseInt(result[3], 16);

//     return `rgb(${r}, ${g}, ${b})`;
//   };

//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-4 text-center text-pink-600">
//         Generated Colors
//       </h1>
//       <div className="flex justify-center flex-col">
//         {colorSaves.map((color, index) => (
//           <div
//             key={index}
//             style={{ backgroundColor: `#${color}`, cursor: "pointer" }}
//             className="w-full h-20 rounded-md m-2"
//             onClick={() => handleEdit(index)}
//             onMouseEnter={() => handleColorHover(color)}
//             onMouseLeave={handleColorHoverEnd}
//           />
//         ))}
//       </div>
//       {editIndex >= 0 && (
//         <div className="flex justify-center mt-4">
//           <input
//             type="color"
//             value={editColor}
//             onChange={handleColorChange}
//             className="mr-2 h-14"
//           />
//           <button
//             onClick={handleSaveChanges}
//             className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
//           >
//             Save Changes
//           </button>
//         </div>
//       )}
//       {hoveredColor && (
//         <div className="mt-4 text-center">
//           <div>
//             <span className="font-bold">Hex code:</span> {hoveredColor}
//           </div>
//           <div>
//             <span className="font-bold">RGB code:</span>{" "}
//             {convertHexToRgb(hoveredColor)}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ColorDetails;

// import React, { useEffect, useContext, useState } from "react";
// import { AppContext } from "../provider/AppProvider";

// const ColorDetails = () => {
//   const {
//     colorSaves,
//     setColorSaves,
  
//     setEditIndex,

//     setEditColor,
//   } = useContext(AppContext);

//   const [hoveredColor, setHoveredColor] = useState(null);

//   useEffect(() => {
//     const savedColorData = localStorage.getItem("savedColors");
//     if (savedColorData) {
//       setColorSaves(JSON.parse(savedColorData));
//     }
//   }, [setColorSaves]);

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     setEditColor(colorSaves[index]);
//   };

  

//   const handleColorHover = (color) => {
//     setHoveredColor(color);
//   };

//   const handleColorHoverEnd = () => {
//     setHoveredColor(null);
//   };

//   useEffect(() => {
//     localStorage.setItem("savedColors", JSON.stringify(colorSaves));
//   }, [colorSaves]);

//   // Function to convert a hexadecimal color to RGB format
//   const convertHexToRgb = (hex) => {
//     const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
//     hex = hex.replace(shorthandRegex, (m, r, g, b) => {
//       return r + r + g + g + b + b;
//     });

//     const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
//     const r = parseInt(result[1], 16);
//     const g = parseInt(result[2], 16);
//     const b = parseInt(result[3], 16);

//     return `rgb(${r}, ${g}, ${b})`;
//   };

//   return (
//     <>
//       <h1 className="text-2xl font-bold mb-4 text-center text-pink-600">
//         Generated Colors
//       </h1>
//       <div className="flex justify-center flex-col">
//         {colorSaves.map((color, index) => (
//           <div
//             key={index}
//             style={{ backgroundColor: `#${color}`, cursor: "pointer" }}
//             className="w-full h-20 rounded-md m-2"
//             onClick={() => handleEdit(color)} // Updated here
//             onMouseEnter={() => handleColorHover(color)}
//             onMouseLeave={handleColorHoverEnd}
//           />
//         ))}
//       </div>


//       {hoveredColor && (
//         <div className="mt-4 text-center">
//           <div>
//             <span className="font-bold">Hex code:</span> {hoveredColor}
//           </div>
//           <div>
//             <span className="font-bold">RGB code:</span>{" "}
//             {convertHexToRgb(hoveredColor)}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ColorDetails;
import React, { useEffect, useContext, useState } from "react";
import { AppContext } from "../provider/AppProvider";

const ColorDetails = () => {
  const { colorSaves, setColorSaves, setEditIndex, setEditColor } = useContext(AppContext);

  const [hoveredColor, setHoveredColor] = useState(null);
  const [updatedColor, setUpdatedColor] = useState("");

  useEffect(() => {
    const savedColorData = localStorage.getItem("savedColors");
    if (savedColorData) {
      setColorSaves(JSON.parse(savedColorData));
    }
  }, [setColorSaves]);

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditColor(colorSaves[index]);
    setUpdatedColor(colorSaves[index]); // Set the default color to the selected color
  };

  const handleColorHover = (color) => {
    setHoveredColor(color);
  };

  const handleColorHoverEnd = () => {
    setHoveredColor(null);
  };

  const handleUpdatedColorChange = (event) => {
    setUpdatedColor(event.target.value);
  };

  const handleUpdateColor = () => {
    if (updatedColor) {
      setEditColor(updatedColor); // Update the selected color with the updated color
    }
  };

  useEffect(() => {
    localStorage.setItem("savedColors", JSON.stringify(colorSaves));
  }, [colorSaves]);

  // Function to convert a hexadecimal color to RGB format
  const convertHexToRgb = (hex) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    const r = parseInt(result[1], 16);
    const g = parseInt(result[2], 16);
    const b = parseInt(result[3], 16);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4 text-center text-pink-600">Generated Colors</h1>
      <div className="flex justify-center flex-col">
        {colorSaves.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: `#${color}`, cursor: "pointer" }}
            className="w-full h-20 rounded-md m-2"
            onClick={() => handleEdit(index)}
            onMouseEnter={() => handleColorHover(color)}
            onMouseLeave={handleColorHoverEnd}
          />
        ))}
      </div>

      {hoveredColor && (
        <div className="mt-4 text-center">
          <div>
            <span className="font-bold">Hex code:</span> {hoveredColor}
          </div>
          <div>
            <span className="font-bold">RGB code:</span> {convertHexToRgb(hoveredColor)}
          </div>
        </div>
      )}

      {updatedColor && (
        <div className="mt-4 text-center">
          <h2 className="text-lg font-bold mb-2">Update Color</h2>
          <input
            type="color"
            value={updatedColor}
            onChange={handleUpdatedColorChange}
            className="mr-2 h-14"
          />
          <button
            onClick={handleUpdateColor}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </div>
      )}
    </>
  );
};

export default ColorDetails;
