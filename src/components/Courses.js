import React from 'react';

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
                <img 
                  src="https://ik.imagekit.io/dgmfafxequ/ReactMapJSX_BA7UJNXSx.png" 
                  srcSet="
                    https://ik.imagekit.io/dgmfafxequ/tr:w-330/ReactMapJSX_BA7UJNXSx.png 330w,
                    https://ik.imagekit.io/dgmfafxequ/tr:w-600/ReactMapJSX_BA7UJNXSx.png 700w,
                    https://ik.imagekit.io/dgmfafxequ/tr:w-800/ReactMapJSX_BA7UJNXSx.png 950w
                  "
                  sizes="(max-width: 950px) 330px, 700px"
                  alt='React Map JSX code'/>        
                <img 
                  src="https://ik.imagekit.io/dgmfafxequ/confusedBrackets_2nE1NhA2qu.gif" 
                  srcSet="
                    https://ik.imagekit.io/dgmfafxequ/tr:w-100/confusedBrackets_2nE1NhA2qu.gif 330w,
                    https://ik.imagekit.io/dgmfafxequ/tr:w-131/confusedBrackets_2nE1NhA2qu.gif 700w,
                    https://ik.imagekit.io/dgmfafxequ/tr:w-131/confusedBrackets_2nE1NhA2qu.gif 950w
                  "
                  alt='Confused Duck by Jeremy Fisher'/>             
              </div>
              <p>Angular makes this a piece of cake with *ngFor. You simply add *ngFor in the HTML file <i>(or template as some like to call it)</i> and everything inside will repeat with the changing variable values of your favourite iterable data structure. What's even simpler is with an async pipe aka ' | async ' you can get the data from an Observable in the TypeScript file <i>(and it's always TS in angular, makes life easier. It helps you find those bugs at your desk in compile time rather than them shaking loose by a user after a deployment and a paniked roll back or hot fix)</i></p><p>You don't even have to write the clean up unsubscribe from the observable to stop those pesky memory leaks. It automatically does that for you with async. easy to read and memory leak proof. this is one of the syntaxes I really think there's no doubt is superior in Angular.</p>
          
              <h3>Angular Code</h3>
              <img 
                src="https://ik.imagekit.io/dgmfafxequ/Angular-ngFor_4MfypAzcU.png" 
                srcSet="
                  https://ik.imagekit.io/dgmfafxequ/tr:w-330/Angular-ngFor_4MfypAzcU.png 330w,
                  https://ik.imagekit.io/dgmfafxequ/tr:w-600/Angular-ngFor_4MfypAzcU.png 700w,
                  https://ik.imagekit.io/dgmfafxequ/tr:w-800/Angular-ngFor_4MfypAzcU.png 950w
                "
                sizes="(max-width: 950px) 320px, 800px"
                alt="Angular ngFor code"
              />
          </div>

          <div>
          <h2 style={styles.header}>Content Projection (prop.children = "ng-content") </h2>
          <p><i>aka the info between your component brackets getting to the component</i></p>

            <p>This one I'd give a tie to. Easy to learn the transition as, well, it's pretty much the same, bar different reserved words in the frameworks. Instead of 'props.children' in react it's <ng-content></ng-content> and then passing the children or projected ng-content as we'll now refer to it over in angular land between the tags of your parent component, wrapping just like you would child DOM nodes of a DIV since forever you have. Looks like someone copied their neighbours homework</p>
            <h3>React Code</h3>
              <div style={styles.imageContainer}>
                <img 
                  src="https://ik.imagekit.io/dgmfafxequ/ReactMapJSX_BA7UJNXSx.png" 
                  srcSet="
                    https://ik.imagekit.io/dgmfafxequ/tr:w-330/ReactMapJSX_BA7UJNXSx.png 330w,
                    https://ik.imagekit.io/dgmfafxequ/tr:w-600/ReactMapJSX_BA7UJNXSx.png 700w,
                    https://ik.imagekit.io/dgmfafxequ/tr:w-800/ReactMapJSX_BA7UJNXSx.png 950w
                  "
                  sizes="(max-width: 950px) 330px, 700px"
                  alt='React Map JSX code'/>        
                <img 
                  src="https://ik.imagekit.io/dgmfafxequ/Dev/copiedHomework_yqxyhZFdk.gif" 
                  srcSet="
                    https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-200/copiedHomework_yqxyhZFdk.gif 330w,
                    https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-131/copiedHomework_yqxyhZFdk.gif 700w,
                    https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-150/copiedHomework_yqxyhZFdk.gif 950w
                  "
                  alt='Test Studying GIF by Pudgy Penguins'/>             
              </div>
          
              <h3>Angular Code</h3>
              <div style={styles.imageContainer}>
                <div>
                  <h4 style={styles.componentTitle}>Child Component</h4>
                  <img 
                    src="https://ik.imagekit.io/dgmfafxequ/Dev/AngChildComponent_JSkwv88W1.png" 
                    srcSet="
                      https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-330/AngChildComponent_JSkwv88W1.png 330w,
                      https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-600/AngChildComponent_JSkwv88W1.png 700w,
                      https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-800/AngChildComponent_JSkwv88W1.png 950w
                    "
                    sizes="(max-width: 950px) 330px, 700px"
                    alt='Angular child ng-content code'/>   
                </div>
               
                <div>
                <h4 style={styles.componentTitle}>Parent Component</h4>
                  <img 
                    src="https://ik.imagekit.io/dgmfafxequ/Dev/AngParentComponent_GiScAkw8p.png" 
                    srcSet="
                      https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-330/AngParentComponent_GiScAkw8p.png 330w,
                      https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-600/AngParentComponent_GiScAkw8p.png 700w,
                      https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-800/AngParentComponent_GiScAkw8p.png 950w
                    "
                    sizes="(max-width: 950px) 330px, 700px"
                    alt='Angular parent ng-content code'/>   
                </div>
              </div>
          </div>

      </div>
    </div>
  );
};

export default Courses;




