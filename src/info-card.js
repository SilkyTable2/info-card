import { LitElement, html, css } from 'lit';
import { MemeMaker } from '@lrnwebcomponents/meme-maker';


const customImage = new URL('../assets/johncena.jpg', import.meta.url).href;

export class InfoCard extends LitElement {

  static get properties() {
    return {
      heading: {
        type: String,
        reflect: true
      },
      accent: {
        type: Boolean,
        reflect: true
      }
    }
  }

  static get styles() {
    return css`
      
      :host([accent]) #card {
          background-color: red;
        }
      button {
      padding: 8px 70px;
      background-color: blue;
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
      meme-maker {
        --meme-maker-font-size: 25px;
        --meme-maker-font-size-medium: 20px;
        --meme-maker-font-size-small: 16px;
      width: 200px;
      }
    `;
  }

  constructor() {
    super();
    this.accent = false;
    this.heading = 'John Cena Bing Chilling';
  
  }

  render() {
    return html`
      <div id="card" class="size">
        <div id="head" class="top">
          <h1> ${this.heading} </h1>
        </div>
        <div class="image"> <!-- i tried to implement mememaker as a <slot> or <template>, but it would not implement -->
          <meme-maker image-url="${customImage}" 
          top-text="Bing Chilling" bottom-text="bing chilling"></meme-maker> 
          
        <details class="details">
          <summary>Details</summary>
          <p>
            <slot></slot>
          </p>
        </details>

        </div>
      </div>

      
    `;
  }
}

customElements.define('info-card', InfoCard);

