import React from 'react';
import {reactMapJSXImage,
duckGif,
angularNgForImage,
homeworkCopyGif,
reactContentProjectionImage,
angularContentProjectionChildImage,
angularContentProjectionParentImage} from '../assets/ImageData';
import ImageComponent from './ImageComponent';

const Courses = () => {
  const styles = {
    container: {
      padding: '20px'
    },
    imageContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      alignItems: 'flex-start',
      paddingBottom: '10px'
    },
    header: {
      paddingTop: '10px'
    },
    componentTitle: {
      paddingTop: '0px'
    }
  };
  return (
    <div>
      <h1>Courses</h1>
      <div>I am almost finished creating 2 courses to host on the likes of Udemy. One for translation of React to Angular and one for the opposite, Angular to React. Having studied and created projects professionaly and personally in both I felt I was perfectly situated to develop them, and hopefully other Devs can get value from them. They will be live in 2025. For now a Taster below:

          <h1>Taster of React to Angular conversion</h1>
          <div>
            <h2>For loops (.map = *ngFor)</h2>
            <p>One of the syntaxes I find the most headachey in React is to map over objects and display some HTML (JSX) ultimately based on the changing variables. It don't look pretty and every time I find myself counting brackets. </p>
            <h3>React Code</h3>
              <div style={styles.imageContainer}>
                <ImageComponent images={reactMapJSXImage} altText={'React Map JSX code'}></ImageComponent>
                <ImageComponent images={duckGif} altText={'Confused Duck by Jeremy Fisher'}></ImageComponent>            
              </div>
              <p>Angular makes this a piece of cake with *ngFor. You simply add *ngFor in the HTML file <i>(or template as some like to call it)</i> and everything inside will repeat with the changing variable values of your favourite iterable data structure. What's even simpler is with an async pipe aka ' | async ' you can get the data from an Observable in the TypeScript file <i>(and it's always TS in angular, makes life easier. It helps you find those bugs at your desk in compile time rather than them shaking loose by a user after a deployment and a panicked roll back or hot fix)</i></p><p>You don't even have to write the clean up unsubscribe from the observable to stop those pesky memory leaks. It automatically does that for you with async. easy to read and memory leak proof. this is one of the syntaxes I really think there's no doubt is superior in Angular.</p>
          
              <h3>Angular Code</h3>
              <ImageComponent images={angularNgForImage} altText={'Angular ngFor code'}></ImageComponent>
          </div>

          <div>
          <h2 style={styles.header}>Content Projection (prop.children = "ng-content") </h2>
          <p><i>aka the info between your component brackets getting to the component</i></p>

            <p>This one I'd give a tie to. Easy to learn the transition as, well, it's pretty much the same, bar different reserved words in the frameworks. Instead of <b>'props.children'</b> in react it's <b>'ng-content'</b> and then passing the children or projected ng-content as we'll now refer to it over in angular land between the tags of your parent component, wrapping just like you would child DOM nodes of a DIV since forever you have. Looks like someone copied their neighbours homework</p>
            <h3>React Code</h3>
              <div style={styles.imageContainer}>
                <ImageComponent images={reactContentProjectionImage} altText={'React Map JSX code'}></ImageComponent>
                <ImageComponent images={homeworkCopyGif} altText={'Test Studying GIF by Pudgy Penguins'}></ImageComponent>       
              </div>
          
              <h3>Angular Code</h3>
              <div style={styles.imageContainer}>
                <div>
                  <h4 style={styles.componentTitle}>Child Component</h4>
                  <ImageComponent images={angularContentProjectionChildImage} altText={'Angular child ng-content code'}></ImageComponent>           
                </div>
               
                <div>
                <h4 style={styles.componentTitle}>Parent Component</h4>
                <ImageComponent images={angularContentProjectionParentImage} altText={'Angular parent ng-content code'}></ImageComponent>        
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Courses;




