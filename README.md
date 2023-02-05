<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jorgeochoareyes/trpc-firebase">
    <img width="389" alt="image" src="https://user-images.githubusercontent.com/60721681/216798859-927ad8e5-7993-456d-97eb-32d5d6b503bf.png">
  </a>

<h3 align="center">Firebase Functions + TRPC</h3>

  <p align="center">
    This projets implent trpc with firebase functions via the use of the express adapter from trpc. 
    <br />
    <a href="https://trpc.io/docs/express">See express documentation</a>
    <br />
    <a href="https://trpc-firebase-67836.web.app/">View Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<img width="611" alt="demo image" src="https://user-images.githubusercontent.com/60721681/216798449-07f35125-f3f7-409d-9ed6-e46ae56e48a6.png">


Trpc does not currently have an adapter for firebase functions, but it is not necessary, since firebase functions supports express. This is an example of how to add both express to firebase functions, and add trpc to the express routes. 

The project also includes mui for styling, and is created using vite, but both of these are optional. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![TRPC][TRPC]][TRPC-url]
* [![Firebase][Firebase]][Firebase-url]
* [![MUI][MUI]][MUI-url]
* [![Vite][VIte]][Vite-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

You need firebaes-tools to be able initiate the firebase functions. 
* npm
  ```sh
  npm install -g firebase-tools
  ```
  
 Additionally you will need your firebase project to be subscribed to "blaze" plan, since firebase functions are only availble on this plan. 

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/JorgeOchoaReyes/trpc-firebase.git
   ```
2. Install NPM packages for both the vite project, and the firebase functions. 
   ```sh
   npm install
   
   cd functions 
   npm install 
   
   ```
3. Connect your firebase project
   ```js
   firebase init 
   ```


<!-- ACKNOWLEDGMENTS -->
<!---## Acknowledgments --->

<!---* []() --->
<!---* []() --->
<!---* []() --->

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[MUI]: https://img.shields.io/badge/MUI-35495E?style=for-the-badge&logo=mui&logoColor=#007fff
[MUI-url]: https://mui.com/material-ui/getting-started/overview/
[TRPC]: https://img.shields.io/badge/trpc-35495E?style=for-the-badge&logo=trpc&logoColor=#398ccb
[TRPC-url]: https://trpc.io/
[Vite]: https://img.shields.io/badge/vite-4A4A55?style=for-the-badge&logo=vite&logoColor=ffc31b
[Vite-url]: https://svelte.dev/
[Firebase]: https://img.shields.io/badge/firebase-4A4A55?style=for-the-badge&logo=firebase&logoColor=FFA611
[Firebase-url]: https://firebase.google.com/docs/functions
