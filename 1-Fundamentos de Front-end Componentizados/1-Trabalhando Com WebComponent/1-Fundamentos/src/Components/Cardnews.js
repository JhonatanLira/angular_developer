class Cardnews extends HtmlElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open" });

        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class","card");   

        const cardLeft = document.createElement("div");
        //cardLeft.setAttribute("class","card_left");

        const cardRight = document.createElement("div");
        //cardRight.setAttribute("class","card_right");

        componentRoot.appendChild(cardLeft);

        const autor = document.createAttribute("span");
        const linkTitle = document.createAttribute("a");
        const newsContent = document.createAttribute("p");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        componentRoot.appendChild(cardRight);

        const newsImage = document.createAttribute("img");

        cardRight.appendChild(newsImage);

        return componentRoot;
    }


    styles() {

    }
}

customElements.define("card-news", Cardnews);