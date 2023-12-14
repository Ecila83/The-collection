const collectionLivres = [
    {
        Img: "assets/img/L-Etranger.jpg",
        Prix: "24 €",
        lienPrix : "https://www.amazon.com.be/L%C3%A9tranger-Albert-Camus/dp/2754807683/ref=asc_df_2754807683/?tag=begogshpaddef-21&linkCode=df0&hvadid=633358659281&hvpos=&hvnetw=g&hvrand=5570604977771586017&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001334&hvtargid=pla-756158300832&psc=1&mcid=a60b14d6699b33beab7a50e747aea3b4",
        PrixPoche: "6.90 €",
        lienPrixPoche : "https://www.amazon.com.be/-/nl/Letranger-A36002-Albert-Camus/dp/2070360024/ref=asc_df_2070360024/?tag=begogshpadd0d-21&linkCode=df0&hvadid=649663129418&hvpos=&hvnetw=g&hvrand=9515303144440105493&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001334&hvtargid=pla-416514242600&psc=1&mcid=4d2027542e663f5caadf32b11f2e8244",
        Titre: "L'Étranger",
        Auteur: "Albert Camus",
        Synopsis: "Roman existentialiste par excellence, L'Étranger relate l'histoire de Meursault, un homme indifférent aux normes sociales, qui vit sans se préoccuper du jugement d'autrui.",
    },
    {
        Img: "assets/img/petit_prince.jpg",
        Prix: "18 €",
        lienPrix : "",
        PrixPoche: "10 €",
        lienPrixPoche : "",
        Titre: "Le Petit Prince",
        Auteur: "Antoine de Saint-Exupéry",
        Synopsis: "L'histoire poétique et philosophique d'un jeune prince venu d'une autre planète, explorant l'univers et rencontrant des personnages uniques.",
    },
    {
        Img: "assets/img/1984.jpg",
        Prix: "25 €",
        ienPrix : "",
        PrixPoche: "15 €",
        lienPrixPoche : "",
        Titre: "1984",
        Auteur: "George Orwell",
        Synopsis: "Un roman dystopique décrivant une société autoritaire où la liberté individuelle est réprimée, le gouvernement contrôlant tous les aspects de la vie.",
    },
    {
        Img: "assets/img/seigneur_des_anneaux.jpg",
        Prix: "22 €",
        lienPrix : "",
        PrixPoche: "13 €",
        lienPrixPoche : "",
        Titre: "Le Seigneur des Anneaux",
        Auteur: "J.R.R. Tolkien",
        Synopsis: "Trilogie épique racontant l'aventure de Frodo et son voyage pour détruire l'Anneau Unique, un artefact puissant convoité par le mal.",
    },
    {
        Img: "assets/img/orgeuil.jpg",
        Prix: "21 €",
        lienPrix : "",
        PrixPoche: "12 €",
        lienPrixPoche : "",
        Titre: "Orgueil et Préjugés",
        Auteur: "Jane Austen",
        Synopsis: "Une romance classique explorant les relations sociales et les préjugés au sein de la haute société britannique au 19ème siècle.",
    },
    {
        Img: "assets/img/Crime-et-chatiment.jpg",
        Prix: "19 €",
        lienPrix : "",
        PrixPoche: "11 €",
        lienPrixPoche : "",
        Titre: "Crime et Châtiment",
        Auteur: "Fiodor Dostoïevski",
        Synopsis: "Un roman psychologique qui plonge dans l'esprit tourmenté de Raskolnikov, un étudiant qui commet un meurtre et lutte avec sa conscience.",
    },
    {
        Img: "assets/img/les-miserables.jpg",
        Prix: "24 €",
        lienPrix : "",
        PrixPoche: "14 €",
        lienPrixPoche : "",
        Titre: "Les Misérables",
        Auteur: "Victor Hugo",
        Synopsis: "Un roman monumental suivant l'histoire de Jean Valjean, un homme condamné pour un petit crime qui devient le symbole de la rédemption et de la compassion.",
    },
    {
        Img: "assets/img/comte_monte_cristo.jpg",
        Prix: "23 €",
        lienPrix : "",
        PrixPoche: "13.5 €",
        lienPrixPoche : "",
        Titre: "Le Comte de Monte-Cristo",
        Auteur: "Alexandre Dumas",
        Synopsis: "Une histoire de vengeance, de trahison et de rédemption mettant en scène Edmond Dantès, un homme injustement emprisonné qui cherche à se venger de ses ennemis.",
    },
    {
        Img: "assets/img/anna_karéine.jpg",
        Prix: "26 €",
        lienPrix : "",
        PrixPoche: "16 €",
        lienPrixPoche : "",
        Titre: "Anna Karénine",
        Auteur: "Léon Tolstoï",
        Synopsis: "Les familles heureuses se ressemblent toutes ; les familles malheureuses sont malheureuses chacune à leur façon. Ainsi s'ouvre ce grand roman du couple, de la passion amoureuse et de la tentation. ",
    },
    {
        Img: "assets/img/harry potter.jpg",
        Prix: "20.5 €",
        lienPrix : "",
        PrixPoche: "12.5 €",
        lienPrixPoche : "",
        Titre: "Harry Potter à l'école des sorciers",
        Auteur: "J.K. Rowling",
        Synopsis: "L'histoire de l'apprenti sorcier Harry Potter, qui découvre le monde de la magie lorsqu'il est accepté à l'école de sorcellerie de Poudlard.",
    },
];
function createBookElement(livre) {
    const livreElement = document.createElement('div');
    livreElement.className = 'livre';

    const imageElement = document.createElement('img');
    imageElement.src = livre.Img;
    imageElement.className = 'livre__image';
    livreElement.append(imageElement);

    const titreElement = document.createElement('h2');
    titreElement.textContent = livre.Titre;
    titreElement.className = 'livre__title';
    livreElement.append(titreElement);

    const auteurElement = document.createElement('h3');
    auteurElement.textContent = `Auteur: ${livre.Auteur}`;
    auteurElement.className = 'livre__author';
    livreElement.append(auteurElement);

    const synopsisElement = document.createElement('p');
    synopsisElement.textContent = `Synopsis: ${livre.Synopsis}`;
    synopsisElement.className = 'livre__Synopsis';
    livreElement.append(synopsisElement);

    const prixGrandFormatElement = document.createElement('button');
    prixGrandFormatElement.className = 'livre__price--standard';

    const prixGrandFormatElementA = document.createElement('a');
    prixGrandFormatElementA.className = "livre__price--standard--a";
    prixGrandFormatElementA.href = livre.lienPrix;
    prixGrandFormatElementA.textContent = `Prix livre grand format: ${livre["Prix"]}`;
    prixGrandFormatElement.append(prixGrandFormatElementA);
    livreElement.append(prixGrandFormatElement);

    const prixFormatPocheElement = document.createElement('button');
    prixFormatPocheElement.className = 'livre__price--poche';

    const prixFormatPocheElementA = document.createElement('a');
    prixFormatPocheElementA.className = "livre__price--poche--a";
    prixFormatPocheElementA.href = livre.lienPrixPoche;
    prixFormatPocheElementA.textContent = `Prix livre de poche: ${livre["PrixPoche"]}`;
    prixFormatPocheElement.append(prixFormatPocheElementA);

    livreElement.append(prixFormatPocheElement);

    return livreElement;
}

const collection = document.querySelector('.collection');

collectionLivres.forEach(livre => {
    const livreElement = createBookElement(livre);
    collection.append(livreElement);
});