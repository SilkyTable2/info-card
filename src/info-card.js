import { LitElement, html, css } from 'lit';

const customImage = new URL('../assets/johncena.jpg', import.meta.url).href;

export class InfoCard extends LitElement {
  static get properties() {
    return {
      heading: {
        type: String,
        reflect: true
      },
      details: {
        type: String
      }
    }
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
    this.heading = 'John Cena Bing Chilling';
    this.details = 'Image above depicts Actor and WWE Wrestler John Cena attempting to promote his upcoming movie, Fast and the Furious 9, in mandarin towards the chinese viewer market after previously making a controversial claim. The image comes from a video, famously known for its ridiculous scenario and for its famous line "bīng qí lín", or "Bing Chilling" as what it is commonly known as around the internet.';
    this.memeImgEdit = '<meme-maker image-url="${customImage}" top-text="This guy" bottom-text="hunts bugs"></meme-maker> '
  }

  render() {
    return html`
      

      <div id="card" class="size">
        <div id="head" class="top">
          <h1> ${this.heading} </h1>
        </div>
        <div class="image"> <!-- i tried to implement mememaker as a <slot> or <template>, but it would not implement -->
          <meme-maker image-url="${customImage}" 
          top-text="This guy" bottom-text="hunts bugs"></meme-maker> 
          
    
        </div>
        <div id="descript" class="desc">
          ${this.details}
        </div>
      </div>
    `;
  }
}

customElements.define('info-card', InfoCard);

/**
 * Copyright 2018 The Pennsylvania State University
 * @license Apache-2.0, see License.md for full text.
 */

/**
 * `meme-maker`
 * Meme all the things
 *
 * @demo demo/index.html
 * @microcopy - the mental model for this element
 *  - go forth and make dank memes yo
 * @element meme-maker
 */
class MemeMaker extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          display: block;
        }
        * {
          box-sizing: border-box;
        }
        figure {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
          font-size: 20px;
          overflow: hidden;
        }
        img {
          width: 100%;
          height: auto;
        }
        .top-text,
        .bottom-text {
          position: absolute;
          left: 0;
          width: 100%;
          padding: 3% 2%;
          text-align: center;
          text-transform: uppercase;
          font-weight: 900;
          font-family: "Impact", "Arial Black", "sans serif";
          line-height: 1.2;
          font-size: var(--meme-maker-font-size, 36px);
          color: white;
          text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
            1px 1px 0 #000;
          letter-spacing: 2px;
        }
        .top-text {
          top: 0;
        }
        .bottom-text {
          bottom: 0;
        }
        @media (max-width: 800px) {
          .top-text,
          .bottom-text {
            font-size: var(--meme-maker-font-size-medium, 20px);
          }
        }
        @media (max-width: 600px) {
          .top-text,
          .bottom-text {
            font-size: var(--meme-maker-font-size-small, 20px);
          }
        }
        
      `,
    ];
  }
  render() {
    return html`
      <figure>
        <img
          loading="lazy"
          src="${this.imageUrl}"
          alt="${this.alt || ""}"
          aria-describedby="${this.describedBy || ""}"
        />
        <figcaption class="top-text">${this.topText}</figcaption>
        <figcaption class="bottom-text">${this.bottomText}</figcaption>
      </figure>
    `;
  }
  static get tag() {
    return "meme-maker";
  }
  constructor() {
    super();
    this.alt = "";
  }
  static get properties() {
    return {
      /**
       * Alt data passed down to appropriate tag
       */
      alt: {
        type: String,
      },
      /**
       * Aria-describedby data passed down to appropriate tag
       */
      describedBy: {
        type: String,
        attribute: "described-by",
      },
      /**
       * url to the meme image
       */
      imageUrl: {
        type: String,
        attribute: "image-url",
        reflect: true,
      },
      /**
       * Text on top of the image.
       */
      topText: {
        type: String,
        attribute: "top-text",
        reflect: true,
      },
      /**
       * Bottom text for the image.
       */
      bottomText: {
        type: String,
        attribute: "bottom-text",
        reflect: true,
      },
    };
  }
}
customElements.define(MemeMaker.tag, MemeMaker);
export { MemeMaker };
