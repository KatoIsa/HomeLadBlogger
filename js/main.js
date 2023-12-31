// The javascript here uses a custom library.
// I created some time back called 
// simply.js, visit github link down below to go through the docs.
// github: https://github.com/KatoIsa/Simplified_JS

const App = {
    cards: () => {
        const cardParent = _.Select('.cardsSection'); 
        const cardData = [
            'Photoshop: a quick guide',
            'Illustrator: a quick guide',
        ]
        
        cardData.map(data => {
            const card = _.HTMLcreate('div');
            _.addClass(card, 'card');
            card.innerHTML = `
                <div class="Title">
                    <p>
                        ${data}
                    </p>
                </div>
            `
            cardParent.appendChild(card);
        })
    },
    RandomImageGenrator: () => {
        const randomImages = [
            "./assets/Random-3.jpg",
            "./assets/IllustratorIcon.png",
        ];

        const randomImageElements = document.querySelectorAll(".GridLayOut .card");
        for(i=0; i<randomImageElements.length; i++){
            randomImageElements[i].style.backgroundImage = `url(${randomImages[i]})`;
        }

    },
    removeRandomImages: () => {
        const randomImageElements = document.querySelectorAll(".card");
        randomImageElements.forEach(function (element) {
            element.style.backgroundImage = `unset`;
        });
    },
    
    // iterates through all topics in the list and adds a number to each
    Topicnumber: () => { 
        // get all card elements and store there length
        const cards = document.querySelectorAll('.card');
        const cardNumber = cards.length;

        // Add the number of topics to the topicNUmber html element
        const topicNumber = document.querySelector('.topicNumber');
        topicNumber.innerText = cardNumber;

        
        for (i = 0; i < cardNumber; i++) {
            // add numbering to the topics ....
                const numberingDiv = document.createElement('div');
                numberingDiv.classList.add('numberingDiv');

                numberingDiv.innerHTML = i + 1;
                cards[i].appendChild(numberingDiv)
        }

    },
    ViewType: () => {
        // Get buttons that are gonna handle the view state ...
        const ListView = _.Select('.ListViewType');
        const GridView = _.Select('.GridviewType');

        _.Event(ListView, 'click', () => {
            _.addClass(ListView, 'active');
            _.removeClass(GridView, 'active');
            _.removeClass(_.Select('.cardsSection'), 'GridLayOut');
            _.addClass(_.Select('.cardsSection'), 'ListLayout');
            _.Select('.ViewType .type').innerHTML = `<tt>List</tt>`;
            App.removeRandomImages();
        }, true)

        _.Event(GridView, 'click', () => {
            _.removeClass(ListView, 'active');
            _.addClass(GridView, 'active');
            _.removeClass(_.Select('.cardsSection'), 'ListLayout');
            _.addClass(_.Select('.cardsSection'), 'GridLayOut');
            _.Select('.ViewType .type').innerHTML = `<tt>Grid</tt>`;
            App.RandomImageGenrator();
        }, true)
    },

    RedirectToContentPage: () => {
        // get all card elements.
        const cards = document.querySelectorAll('.card');
        const link = ['https://photoshop-lad-blogger.vercel.app/','https://illustrator-lad-blogger.vercel.app/'];

        // lets add a redirect button to each element
        for (i = 0; i < cards.length; i++) {
                const button = _.HTMLcreate('div');
                _.addClass(button, 'redirectButton');
                button.innerHTML = `<a href=${link[i]}><span></span></a>`;

                cards[i].appendChild(button);
                _.Event(cards[i], 'mouseover', () => {
                    _.addClass(button, 'showButton');
                }, true);
                _.Event(cards[i], 'mouseout', () => {
                    _.removeClass(button, 'showButton');
                }, true);
        }
    },
    run: () =>{App.cards();App.Topicnumber();App.ViewType();App.RedirectToContentPage();}
}

App.run();


