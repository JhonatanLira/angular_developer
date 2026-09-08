class Cardnews extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonimus");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card_right");

        componentRoot.appendChild(cardLeft);

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        componentRoot.appendChild(cardRight);

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default.png";

        cardRight.appendChild(newsImage);

        return componentRoot;
    }


    styles() {

        const style = document.createElement("style");

        style.textContent = ` 
.card{
    width: 80%;
    border: 1px solid gray;
    -webkit-box-shadow: 14px 18px 18px 7px rgba(0,0,0,0.52); 
box-shadow: 1px 1px 18px 7px rgba(0,0,0,0.52);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.card_left{
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}

.card_left > span{
    font-weight: 500;

}
.card_left > a{
    margin-top: 15px;
    font-size: 25px;
    color: black;
    text-decoration: none;
    font-weight: bold;
}

.card_left > p{
    color: rgb(70, 70, 70);
} `;


        return style;
    }
}

customElements.define("card-news", Cardnews);