import './App.css';
import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import ReactProjects from './components/ReactProjects'; 
import AngularProjects from './components/AngularProjects'; 
import Courses from './components/Courses';
import IOS from './components/IOS';
import AR from './components/AR';


function App() {

const [isActive, setIsActive] = useState([true, false, false, false, false, false]);
const [currentActive, setCurrentActive] = useState(0);

const titleArray = ['About Me', 'React', 'Angular', 'Courses', 'iOS', 'AR'];

const toggleActive = (index) => {
  if(currentActive === index){
    return;
  }
  const newArray = [...isActive];
  newArray[index] = !newArray[index];
  newArray[currentActive] = false;
  setCurrentActive(index);
  setIsActive(newArray);
};
  return (
    <div className="container">
      <div className="navigation">
        <ul>

          {titleArray.map((title, index) => {
            return (
              <li key={index} className='nav-button'>
                <span className={isActive[index] ? 'active' : ''} onClick={() => toggleActive(index)}>{title}</span>
              </li>
            );
          }
          )}
        </ul>
      </div>
      <div className="content">
        {isActive[0] && <AboutMe/>}
        {isActive[1] && <ReactProjects/>}
        {isActive[2] && <AngularProjects/>}
        {isActive[3] && <Courses/>}
        {isActive[4] && <IOS/>}
        {isActive[5] && <AR/>}
      </div>
    </div>
  );
}

export default App;
