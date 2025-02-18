import './App.css';
import React, { useState } from 'react';
import AboutMe from './components/AboutMe';
import ReactProjects from './components/ReactProjects'; 
import AngularProjects from './components/AngularProjects'; 
import Courses from './components/Courses';
import IOS from './components/IOS';
import AR from './components/AR';
import GitHub from './components/GitHub';


function App() {

const [isActive, setIsActive] = useState([true, false, false, false, false, false, false]);
const [currentActive, setCurrentActive] = useState(0);

const titleArray = ['About Me', 'React', 'Angular', 'Courses', 'iOS', 'AR', 'GitHub'];
const components = [
  { component: <AboutMe />, isActiveIndex: 0 },
  { component: <ReactProjects />, isActiveIndex: 1 },
  { component: <AngularProjects />, isActiveIndex: 2 },
  { component: <Courses />, isActiveIndex: 3 },
  { component: <IOS />, isActiveIndex: 4 },
  { component: <AR />, isActiveIndex: 5 },
  { component: <GitHub />, isActiveIndex: 6 }
];

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
        {components.map(({ component, isActiveIndex }) => 
          isActive[isActiveIndex] && component
        )}
      </div>
    </div>
  );
}

export default App;
