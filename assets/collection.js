const collectionLivres = [
    {
        Img: "assets/img/L-Etranger.jpg",
        Prix: "20 €",
        PrixPoche: "12 €",
        Titre: "L'Étranger",
        Auteur: "Albert Camus",
        Synopsis: "Roman existentialiste par excellence, L'Étranger relate l'histoire de Meursault, un homme indifférent aux normes sociales, qui vit sans se préoccuper du jugement d'autrui.",
    },
    {
        Img: "assets/img/petit_prince.jpg",
        Prix: "18 €",
        PrixPoche: "10 €",
        Titre: "Le Petit Prince",
        Auteur: "Antoine de Saint-Exupéry",
        Synopsis: "L'histoire poétique et philosophique d'un jeune prince venu d'une autre planète, explorant l'univers et rencontrant des personnages uniques.",
    },
    {
        Img: "assets/img/1984.jpg",
        Prix: "25 €",
        PrixPoche: "15 €",
        Titre: "1984",
        Auteur: "George Orwell",
        Synopsis: "Un roman dystopique décrivant une société autoritaire où la liberté individuelle est réprimée, le gouvernement contrôlant tous les aspects de la vie.",
    },
    {
        Img: "assets/img/seigneur_des_anneaux.jpg",
        Prix: "22 €",
        PrixPoche: "13 €",
        Titre: "Le Seigneur des Anneaux",
        Auteur: "J.R.R. Tolkien",
        Synopsis: "Trilogie épique racontant l'aventure de Frodo et son voyage pour détruire l'Anneau Unique, un artefact puissant convoité par le mal.",
    },
    {
        Img: "assets/img/orgeuil.jpg",
        Prix: "21 €",
        PrixPoche: "12 €",
        Titre: "Orgueil et Préjugés",
        Auteur: "Jane Austen",
        Synopsis: "Une romance classique explorant les relations sociales et les préjugés au sein de la haute société britannique au 19ème siècle.",
    },
    {
        Img: "assets/img/Crime-et-chatiment.jpg",
        Prix: "19 €",
        PrixPoche: "11 €",
        Titre: "Crime et Châtiment",
        Auteur: "Fiodor Dostoïevski",
        Synopsis: "Un roman psychologique qui plonge dans l'esprit tourmenté de Raskolnikov, un étudiant qui commet un meurtre et lutte avec sa conscience.",
    },
    {
        Img: "assets/img/les-miserables.jpg",
        Prix: "24 €",
        PrixPoche: "14 €",
        Titre: "Les Misérables",
        Auteur: "Victor Hugo",
        Synopsis: "Un roman monumental suivant l'histoire de Jean Valjean, un homme condamné pour un petit crime qui devient le symbole de la rédemption et de la compassion.",
    },
    {
        Img: "assets/img/comte_monte_cristo.jpg",
        Prix: "23 €",
        PrixPoche: "13.5 €",
        Titre: "Le Comte de Monte-Cristo",
        Auteur: "Alexandre Dumas",
        Synopsis: "Une histoire de vengeance, de trahison et de rédemption mettant en scène Edmond Dantès, un homme injustement emprisonné qui cherche à se venger de ses ennemis.",
    },
    {
        Img: "assets/img/anna_karéine.jpg",
        Prix: "26 €",
        PrixPoche: "16 €",
        Titre: "Anna Karénine",
        Auteur: "Léon Tolstoï",
        Synopsis: "Les familles heureuses se ressemblent toutes ; les familles malheureuses sont malheureuses chacune à leur façon. Ainsi s'ouvre ce grand roman du couple, de la passion amoureuse et de la tentation. ",
    },
    {
        Img: "assets/img/harry potter.jpg",
        Prix: "20.5 €",
        PrixPoche: "12.5 €",
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
    prixGrandFormatElement.textContent = `Prix livre grand format: ${livre["Prix"]}`;
    prixGrandFormatElement.className = 'livre__price--standard';
    livreElement.append(prixGrandFormatElement);

    const prixFormatPocheElement = document.createElement('button');
    prixFormatPocheElement.textContent = `Prix livre de poche: ${livre["PrixPoche"]}`;
    prixFormatPocheElement.className = 'livre__price--poche';
    livreElement.append(prixFormatPocheElement);

    return livreElement;
}

const collection = document.querySelector('.collection');

collectionLivres.forEach(livre => {
    const livreElement = createBookElement(livre);
    collection.append(livreElement);
});