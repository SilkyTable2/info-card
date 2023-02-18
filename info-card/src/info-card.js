import { LitElement, html, css } from 'lit';

const customImage = new URL('../assets/johncena.jpg', import.meta.url).href;

export class InfoCard extends LitElement {
  static properties = {
    version: {},
  }

  static get styles() {
    return css`
      button {
      padding: 8px 70px;
      background-color: blue;
      }

      .headingchangebtn {

      }

      .deletebtn{

      }

      .backgroundbtn {

      }


      .cardbtn {
        background-color: lightblue;
      }
      .cardbtn:hover {
        background-color: blue;
      }

      .haxbtn {
        visibility: hidden;
        background-color: red;
      }
      .size {
        border: 2px solid black;
        background-color: grey;
        max-width: 400px;
        }
      
      /*@media screen and (min-width: 500px) and (max-width: 800px){
        .haxbtn {
          visibility: visible;
          border: 8px solid black;
        }
      } */

      .top {
        padding: 2px 50px;
        background-color: lightgrey;
      }
      .image {
        padding: 4px 100px;
      }
      .desc {
        padding: 8px 20px;
        border-style: solid hidden solid hidden;
        background-color: lightgrey;
        visibility: hidden;
      }
      img {width: 200px}

      @media screen and (max-width: 500px){
        .size {
          scale: 75%;
          border: 5px solid black;

        }
        .desc {
          visibility: hidden;
          border: 0px hidden;
          padding: 8px 20px;
        }
        .image {
          padding: 4px 10px;
        }
        .top {
          padding: 4px 0px;
        }
      }
    `;
  }

  constructor() {
    super();
    this.version = 'Hello, world';
  }

  render() {
    return html`
    
      <div id="card" class="size">
        <div id="head" class="top">
          <h1> Thursday Homework (Week 2) </h1>
        </div>
        <div class="image">
          <img src="${customImage}" alt="Bing Chilling">
          
    
        </div>
        <div id="descript" class="desc">
          Image above depicts Actor and WWE Wrestler John Cena attempting to promote his upcoming movie, Fast and the Furious 9, in mandarin towards the chinese viewer market after previously making a controversial claim. The image comes from a video, famously known for its ridiculous scenario and for its famous line "bīng qí lín", or "Bing Chilling" as what it is commonly known as around the internet.
        </div>
      </div>
    `;
  }
}

customElements.define('info-card', InfoCard);