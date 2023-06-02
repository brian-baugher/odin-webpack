import _ from 'lodash'; //import external nnpm library dependencyg here
import myName from './myName'; //ES6 module I made that I'm importing here
import { functionOne, functionTwo } from './myNamedExport'; //named import
import './style.css'; //importing style
import Icon from './icon.png' //import image
// can also import fonts, data files, custom json like yaml

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
        // update: Lodash is now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add("hello")

    return element;
  }

  function moduleComponent(){
    const ele = document.createElement('div')

    //this uses the ES6 module I imported
    ele.textContent = myName('Brian')

    const myIcon = new Image();
    myIcon.src = Icon;

    ele.appendChild(myIcon);

    return ele;
  }
  
  document.body.appendChild(component());
  document.body.appendChild(moduleComponent());

  console.log(functionOne())
  console.log(functionTwo())
