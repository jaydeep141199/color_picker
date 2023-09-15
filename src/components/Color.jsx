import React, {useEffect, useContext,useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { AppContext } from '../provider/AppProvider';

const Color = () => {
  const location = useLocation();
  const savedColors = location.state?.savedColors || [];
  const [generatedColors, setGeneratedColors] = useState(savedColors);
 const {copiedColor, setCopiedColor,colorSave, setColorSave}=useContext(AppContext)


  useEffect(() => {
    localStorage.setItem('savedColors', JSON.stringify(colorSave));
  }, [colorSave]);

  const generateNewColors = () => {
    const newColors = savedColors.map((color) => generateRandomColor());
    setGeneratedColors(newColors);
    setColorSave(newColors);
  };

  const generateRandomColor = () => {
    return  Math.floor(Math.random() * 16777215).toString(16);
  };

  const handleColorClick = (color) => {
    setCopiedColor(color);
    navigator.clipboard.writeText(color);
  };

  const saveColors = () => {
    setColorSave(generatedColors);
  };

console.log(generatedColors);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center text-yellow-500">Saved Colors</h1>
      <div className="flex justify-center flex-col">
        {generatedColors.map((color, index) => {console.log(color)
          return(
          <div
            key={index}
            style={{ backgroundColor: `#${color}`, cursor: 'pointer' }}
            className={`w-full h-20 rounded-md m-2`} 
            onClick={() => handleColorClick(color)}
          />
        )})}
      </div>
      <div className='flex  justify-between pt-5'>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generateNewColors}
        >
          Generate
        </button>
        <NavLink to={{ pathname: "/edit", state: { colorSave } }}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={saveColors}
          >
            Save
          </button>
        </NavLink>
      </div>
      {copiedColor && (
        <div className="mt-4 text-center">
          Copied: {copiedColor}
        </div>
      )}
    </div>
  );
};

export default Color;
