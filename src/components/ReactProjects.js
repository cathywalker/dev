import React from 'react';

const ReactProjects = () => {
  const styles = {
    projectItem: {
      paddingTop: '10px',
    }
  };
  return (
    <div>
      <h1>React Projects</h1>
      <div>In 2016 I started to use React professionally, for a company that was Client based. Since then I have kept up to date with all the changes to the Library. I coded in a team on a large scale space management website with React. <p>Below are some of my professional projects other projects with links to GitHub where possible, including this very website itself:</p> </div>
      <div style={styles.projectItem}>
        <h2>AI Joke Generator</h2>
        <p>Powered by ChatGPT this Joke Generator gives you back jokes in the style of the Comedian you choose and on the topic you choose. Useful for best man speeches or a light hearted note in a presentation.</p>
        <img src="https://ik.imagekit.io/dgmfafxequ/Dev/joke-generator_hnl1gQT0B.webp" alt="AI Joke Generator"
          srcSet="
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-330/joke-generator_hnl1gQT0B.webp 330w,
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-500/joke-generator_hnl1gQT0B.webp 700w,
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-500/joke-generator_hnl1gQT0B.webp 950w
          "
          sizes="(max-width: 950px) 330px, 700px"
        />
        <div><a href="https://github.com/cathywalker/react-ai" target="_blank" rel="noreferrer">GitHub Repo</a></div>
      </div>
      <div>
        <h2>A desk booking management system</h2>
        <img src="https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-700/DeskPlan_FKMpvOVXa.png" alt="Desk Plan"
          srcSet="
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-330/DeskPlan_FKMpvOVXa.png 330w,
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-700/DeskPlan_FKMpvOVXa.png 700w,
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-700/DeskPlan_FKMpvOVXa.png 950w
          "
          sizes="(max-width: 950px) 330px, 700px"
        />
        <div><a href="https://kadence.co/desk-booking-software/" target="_blank" rel="noreferrer">Desk and space booking software</a></div>
      </div>
      <div style={styles.projectItem}>
        <h2>AirBnB Clone</h2>
        <p>I saw the CEO of the space management web app firm I wanted to work for speak and heard him say his favourite website was Airbnb for UI and UX. So to impress him and show him I could do the job I built a clone of it. That is what convinced him to hire me:</p>
        <img src="https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-700/search_BdsV2LxUo.png" alt="AirBnB Clone"
          srcSet="
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-330/search_BdsV2LxUo.png 330w,
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-700/search_BdsV2LxUo.png 700w,
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-1000/search_BdsV2LxUo.png 950w
          "
          sizes="(max-width: 950px) 330px, 700px"
        />
        <div><a href="https://github.com/cathywalker/airbnb-clone-main" target="_blank" rel="noreferrer">GitHub Repo</a></div>
      </div>
      <div style={styles.projectItem}>
        <h2>Fruit & Veg Kids App</h2>
        <p>To create a drag and drop component library for my toolkit I made this fruit and Veg App for kids. Drag and Drop an image to find out if it's a Fruit or Vegetable.</p>
        <img
          src="https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-700/fruitandvegdragdrop_yHxWJ1ad5.png"
          alt="Fruit and Veg Info"
          srcSet="
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-330/fruitandvegdragdrop_yHxWJ1ad5.png 330w,
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-700/fruitandvegdragdrop_yHxWJ1ad5.png 700w,
            https://ik.imagekit.io/dgmfafxequ/Dev/tr:w-1000/fruitandvegdragdrop_yHxWJ1ad5.png 950w
          "
          sizes="(max-width: 950px) 330px, 700px"
        />
        <div><a href="https://github.com/cathywalker/fruit-and-veg-drag-and-drop" target="_blank" rel="noreferrer">GitHub Repo</a></div>
      </div>
    </div>
  );
};

export default ReactProjects;
