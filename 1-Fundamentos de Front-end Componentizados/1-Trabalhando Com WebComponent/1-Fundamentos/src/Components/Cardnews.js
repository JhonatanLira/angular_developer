class Cardnews extends HTMLElement {

    constructor() {
        super();

        const shadow = this.attachShadow({ mode: "open"});

        shadow.appendChild(this.build());
        //shadow.appendChild(this.styles());
    }

    build() {

        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor")|| "Anonimus");

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
        newsImage.src = this.getAttribute("photo") || "assets/default.png" ;

        cardRight.appendChild(newsImage);

        return componentRoot;
    }


    styles() {}
}

customElements.define("card-news", Cardnews);