import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class MyCard extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
  button {
    padding: 8px 70px;
    
  }
  
  .headingchangebtn {
    
  }
  
  .deletebtn{
    
  }
  
  .backgroundbtn: {
    
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
  @media screen and (min-width: 500px) and (max-width: 800px){
    .haxbtn {
      visibility: visible;
      border: 8px solid black;
    }
  }
  
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

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <main>
      <div>
      <button class="cardbtn"> Duplicate </button>
      <button class="backgroundbtn cardbtn"> Dark Mode/Light Mode </button>
      <button class="deletebtn cardbtn"> Delete Last Instance </button>
      <button class="headingchangebtn cardbtn"> Change Heading </button>
    </div>
    
    <div id="card" class="size">
      <div id="head" class="top">
        <h1> Thursday Homework (Week 2) </h1>
      </div>
      <div class="image">
        <img src="https://i.ytimg.com/vi/0gC7onSsEUU/hqdefault.jpg" alt="Bing Chilling">
        <button class="haxbtn"> Details </button>
    
      </div>
      <div id="descript" class="desc">
        Image above depicts Actor and WWE Wrestler John Cena attempting to promote his upcoming movie, Fast and the Furious 9, in mandarin towards the chinese viewer market after previously making a controversial claim. The image comes from a video, famously known for its ridiculous scenario and for its famous line "bīng qí lín", or "Bing Chilling" as what it is commonly known as around the internet.
      </div>
    </div>
      </p>
    `;
  }
}

customElements.define('my-card', MyCard);