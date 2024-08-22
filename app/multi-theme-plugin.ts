const plugin = require('tailwindcss/plugin')
const hexRgb = require('hex-rgb')
// const themes = require("./theme.json");

// Helpers function
function getRgbChannels(hex: any) {
  const { red, green, blue } = hexRgb(hex)
  return `${red} ${green} ${blue}`
}

// Creating another helper function that takes an object as input, and outputs the correct CSS-in-JS object to define CSS

// Expected Output
// --primary-50: getRgbChannels('#eef266')
// --secondary-some-nested-color: getRgbChannels('#0099aa')

function getCssVariableDeclaration(input: any, path=[], output = {}):any {
  Object.entries(input).forEach(([key, value]: any) => {
    const newPath = path.concat(key);
    if (typeof value !== 'string') {
      getCssVariableDeclaration(value, newPath, output)
    } else {
      output[`--${newPath.join('-')}`] = getRgbChannels(value)
    }
  })
  return output;
}


// const themes = {
//   base: {
//     50: '#eef2ff',
//     100: '#e0e7ff',
//     200: '#d0d7f7',
//     300: '#aab9ff',
//     400: '#8994ff',
//     500: '#6b70fc',
//     600: '#554fee',
//     700: '#453ccd',
//     800: '#3830a2',
//     900: '#272173',
//   },
//   rainforest: {
//     50: '#ecfdf4',
//     100: '#c9f2de',
//     200: '#9de9c6',
//     300: '#56d0a0',
//     400: '#00b380',
//     500: '#009268',
//     600: '#007955',
//     700: '#006344',
//     800: '#005038',
//     900: '#003422',
//   },
//   candy: {
//     50: '#fdf2f8',
//     100: '#f7e2ee',
//     200: '#f8cce5',
//     300: '#f5a4d0',
//     400: '#f271b5',
//     500: '#e13d90',
//     600: '#c31667',
//     700: '#a1004b',
//     800: '#84003d',
//     900: '#590028',
//   },
// }


function getColorUtilitiesWithCssVariableReference(input: any, path = []):any {
  // It will replace the hard coded obj below
  return Object.fromEntries(
    Object.entries(input).map(([key, value]: any) => {
      const newPath = path.concat(key);
      if (typeof value !== 'string') {
        return [key, getColorUtilitiesWithCssVariableReference(value, newPath)];
      }
      return [key, `rgb(var(--${newPath.join("-")}) / <alpha-value>)`]
    })
  )
}


// Check for valid color themes input
function checkForValidColorThemesInput(input: any): any {
  const isValid: boolean = typeof input === "object" && Object.keys(input).some(key => typeof input[key] === "object");
  if(!isValid) {
    throw new Error ("The Multi-theme plugin expects a 'colorThemes' option passed to it, which contains atleast one theme object");
  }
}


module.exports = plugin.withOptions(

  function(options: any) {

    const { colorThemes } = options
    checkForValidColorThemesInput(colorThemes);
    
    return function ({ addBase }: any) {
    
      addBase({
        ':root': getCssVariableDeclaration(Object.values(colorThemes)[0])
      })
    
      Object.entries(colorThemes).forEach(([key, value]) => {
        addBase({
          [`[data-theme=${key}]`]: getCssVariableDeclaration(value),
        })
      })
    }
  },

  function(options: any) {
    const {colorThemes} = options;
    checkForValidColorThemesInput(colorThemes);
    return {
      theme: {
        extend: {
          colors: getColorUtilitiesWithCssVariableReference(colorThemes.base),
        },
      },
    }

  }
  
)