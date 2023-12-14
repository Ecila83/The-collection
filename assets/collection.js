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
        Prix: "22 €",
        lienPrix : "https://www.fr.fnac.be/a17313574/Le-Petit-Prince-Edition-en-gros-caracteres-Le-Petit-Prince-Antoine-de-Saint-Exupery",
        PrixPoche: "7,50 €",
        lienPrixPoche : "https://www.fr.fnac.be/a300017/Le-Petit-Prince-Avec-des-aquarelles-de-l-auteur-Le-Petit-Prince-Antoine-de-Saint-Exupery",
        Titre: "Le Petit Prince",
        Auteur: "Antoine de Saint-Exupéry",
        Synopsis: "L'histoire poétique et philosophique d'un jeune prince venu d'une autre planète, explorant l'univers et rencontrant des personnages uniques.",
    },
    {
        Img: "assets/img/1984.jpg",
        Prix: "17,99 €",
        ienPrix : "https://www.amazon.com.be/-/en/George-Orwell/dp/0358375401/ref=asc_df_0358375401/?tag=begogshpadde-21&linkCode=df0&hvadid=633427286846&hvpos=&hvnetw=g&hvrand=8716648272851544933&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001337&hvtargid=pla-919822294721&psc=1&mcid=23a233d117de3e46bf011781605026ff",
        PrixPoche: "9,20 €",
        lienPrixPoche : "https://www.amazon.com.be/1984-George-Orwell/dp/2072938228/ref=asc_df_2072938228/?tag=begogshpaddef-21&linkCode=df0&hvadid=633363608584&hvpos=&hvnetw=g&hvrand=14038885917293766901&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001337&hvtargid=pla-1203172065003&psc=1&mcid=b48370c254943082b9e9e7a1b0140bdb",
        Titre: "1984",
        Auteur: "George Orwell",
        Synopsis: "Un roman dystopique décrivant une société autoritaire où la liberté individuelle est réprimée, le gouvernement contrôlant tous les aspects de la vie.",
    },
    {
        Img: "assets/img/seigneur_des_anneaux.jpg",
        Prix: "89,00 €",
        lienPrix : "https://www.amazon.com.be/John-Ronald-Reuel-Tolkien/dp/2267050358/ref=pd_sbs_d_sccl_1_2/259-5370232-8720942?pd_rd_w=1Zc3V&content-id=amzn1.sym.121ab853-f436-4222-b4e9-1df38e4e9cf9&pf_rd_p=121ab853-f436-4222-b4e9-1df38e4e9cf9&pf_rd_r=KDGJXG7HT5WEQX6CJMHV&pd_rd_wg=Jktpk&pd_rd_r=39339e0d-d35d-4597-ba6d-24aca4f4db68&pd_rd_i=2267050358&psc=1",
        PrixPoche: "19,90 €",
        lienPrixPoche : "https://www.amazon.com.be/Seigneur-Anneaux-Nouvelle-traduction-Int%C3%A9grale/dp/2266286269/ref=asc_df_2266286269/?tag=begogshpaddef-21&linkCode=df0&hvadid=633260056287&hvpos=&hvnetw=g&hvrand=2397393796777028574&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001337&hvtargid=pla-535360601504&psc=1&mcid=fd834268f831335983a31d550539f18e",
        Titre: "Le Seigneur des Anneaux",
        Auteur: "J.R.R. Tolkien",
        Synopsis: "Trilogie épique racontant l'aventure de Frodo et son voyage pour détruire l'Anneau Unique, un artefact puissant convoité par le mal.",
    },
    {
        Img: "assets/img/orgeuil.jpg",
        Prix: "16 €",
        lienPrix : "https://www.amazon.com.be/-/en/Jane-Austen/dp/B0C7TR7XDK/ref=asc_df_B0C7TR7XDK/?tag=begogshpadde-21&linkCode=df0&hvadid=649584577833&hvpos=&hvnetw=g&hvrand=1279417365562836446&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001337&hvtargid=pla-2197306124823&psc=1&mcid=91e665a645df34c8aa8b96e3efc8edb0",
        PrixPoche: "7,95 €",
        lienPrixPoche : "https://www.amazon.com.be/-/en/Jane-Austen/dp/B0833XNHNV/ref=asc_df_B0833XNHNV/?tag=begogshpadde-21&linkCode=df0&hvadid=632929048260&hvpos=&hvnetw=g&hvrand=1279417365562836446&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001337&hvtargid=pla-930370723802&psc=1&mcid=65e5f3130baa39029e314e8cbd434d88",
        Titre: "Orgueil et Préjugés",
        Auteur: "Jane Austen",
        Synopsis: "Une romance classique explorant les relations sociales et les préjugés au sein de la haute société britannique au 19ème siècle.",
    },
    {
        Img: "assets/img/Crime-et-chatiment.jpg",
        Prix: "22 €",
        lienPrix : "https://www.amazon.com.be/-/en/Fiodor-Dostoievski/dp/B01KLV3BIA/ref=asc_df_B01KLV3BIA/?tag=begogshpadde-21&linkCode=df0&hvadid=633051071174&hvpos=&hvnetw=g&hvrand=15813896161273782109&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001337&hvtargid=pla-525926717222&psc=1&mcid=1f55699b688c30f8adc8c24c3c49fc6f",
        PrixPoche: "8,60 €",
        lienPrixPoche : "https://www.amazon.com.be/-/nl/F%C3%A9dor-Dosto%C3%AFevski/dp/2253082503/ref=pd_sbs_d_sccl_1_1/259-5370232-8720942?pd_rd_w=AO1zY&content-id=amzn1.sym.121ab853-f436-4222-b4e9-1df38e4e9cf9&pf_rd_p=121ab853-f436-4222-b4e9-1df38e4e9cf9&pf_rd_r=GWDDQEX0WB27YNQGJA01&pd_rd_wg=0oNAL&pd_rd_r=45e8cad1-0359-41d0-9c07-11144c014d50&pd_rd_i=2253082503&psc=1",
        Titre: "Crime et Châtiment",
        Auteur: "Fiodor Dostoïevski",
        Synopsis: "Un roman psychologique qui plonge dans l'esprit tourmenté de Raskolnikov, un étudiant qui commet un meurtre et lutte avec sa conscience.",
    },
    {
        Img: "assets/img/les-miserables.jpg",
        Prix: "79,99 €",
        lienPrix : "https://www.amazon.com.be/Mis%C3%A9rables-%C5%92uvre-compl%C3%A8te-French/dp/B08F6J84GC/ref=asc_df_B08F6J84GC/?tag=begogshpaddef-21&linkCode=df0&hvadid=633301594987&hvpos=&hvnetw=g&hvrand=9187259452571858812&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001337&hvtargid=pla-1019991245221&psc=1&mcid=14cea2466b5d335bb3257c641ad443c5",
        PrixPoche: "11,90 €",
        lienPrixPoche : "https://www.amazon.com.be/-/nl/Victor-Hugo/dp/2266296140/ref=asc_df_2266296140/?tag=begogshpadd0d-21&linkCode=df0&hvadid=649538645653&hvpos=&hvnetw=g&hvrand=3609536236101075917&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001337&hvtargid=pla-827937675045&psc=1&mcid=57b61ef43ab23a859d8098c127f15690",
        Titre: "Les Misérables",
        Auteur: "Victor Hugo",
        Synopsis: "Un roman monumental suivant l'histoire de Jean Valjean, un homme condamné pour un petit crime qui devient le symbole de la rédemption et de la compassion.",
    },
    {
        Img: "assets/img/comte_monte_cristo.jpg",
        Prix: "25,90 €",
        lienPrix : "https://www.amazon.fr/Comte-Monte-Cristo-Alexandre-collector-biographie/dp/B09VWN1C76",
        PrixPoche: "12,90 €",
        lienPrixPoche : "https://www.amazon.fr/Comte-Monte-Cristo-Alexandre-Dumas/dp/2072895642/ref=pd_lpo_sccl_1/258-7307926-1833118?pd_rd_w=0qW4m&content-id=amzn1.sym.1bec6179-e78a-4900-91c1-a0cbdfe0e062&pf_rd_p=1bec6179-e78a-4900-91c1-a0cbdfe0e062&pf_rd_r=2092R53R40JBH9YWPJZM&pd_rd_wg=1gkIS&pd_rd_r=6071c053-a050-4c6e-9ffc-c1bbf725a4da&pd_rd_i=2072895642&psc=1",
        Titre: "Le Comte de Monte-Cristo",
        Auteur: "Alexandre Dumas",
        Synopsis: "Une histoire de vengeance, de trahison et de rédemption mettant en scène Edmond Dantès, un homme injustement emprisonné qui cherche à se venger de ses ennemis.",
    },
    {
        Img: "assets/img/anna_karéine.jpg",
        Prix: "77,99 €",
        lienPrix : "https://www.amazon.com.be/-/en/dp/B0BRLY9LCD/ref=asc_df_B0BRLY9LCD/?tag=begogshpadde-21&linkCode=df0&hvadid=633297867597&hvpos=&hvnetw=g&hvrand=8381062149070533358&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001337&hvtargid=pla-1953661537382&psc=1&mcid=7b73230588663c31bae3b0934abe553e",
        PrixPoche: "12,90 €",
        lienPrixPoche : "https://www.amazon.com.be/-/en/L%C3%A9on-Tolsto%C3%AF/dp/207039252X/ref=asc_df_207039252X/?tag=begogshpadde-21&linkCode=df0&hvadid=632944305327&hvpos=&hvnetw=g&hvrand=17198012527810478307&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001337&hvtargid=pla-395387567277&psc=1&mcid=8aa41b691e283e7e9814c826abba344b",
        Titre: "Anna Karénine",
        Auteur: "Léon Tolstoï",
        Synopsis: "Les familles heureuses se ressemblent toutes ; les familles malheureuses sont malheureuses chacune à leur façon. Ainsi s'ouvre ce grand roman du couple, de la passion amoureuse et de la tentation. ",
    },
    {
        Img: "assets/img/harry potter.jpg",
        Prix: "22.50 €",
        lienPrix : "https://www.amazon.com.be/Harry-Potter-%C3%A0-l%C3%A9cole-sorciers/dp/2070624528/ref=asc_df_2070624528/?tag=begogshpaddef-21&linkCode=df0&hvadid=633301636789&hvpos=&hvnetw=g&hvrand=12869047492665442933&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1001337&hvtargid=pla-568923465336&psc=1&mcid=175b4248d1f6350982c4c43359528272",
        PrixPoche: "8.95 €",
        lienPrixPoche : "https://www.fr.fnac.be/a11027877/Harry-Potter-Tome-1-Harry-Potter-a-l-ecole-des-sorciers-J-K-Rowling?oref=00000000-0000-0000-0000-000000000000&origin=SEA_GO_PLA_SMABOOKFR&gad_source=1&gclid=Cj0KCQiA7OqrBhD9ARIsAK3UXh2O8Yb22NlHz-IL9YAWjrEZKEZNrmnEm1anzhSWZZtxyR5alDn50IcaAmFUEALw_wcB&gclsrc=aw.ds",
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
    prixGrandFormatElement.textContent = `Prix livre grand format: ${livre["Prix"]}`;

    const prixGrandFormatElementA = document.createElement('a');
    prixGrandFormatElementA.className = "livre__price--standard--a";
    prixGrandFormatElementA.href = livre.lienPrix;
    prixGrandFormatElementA.target = '_blank'

    prixGrandFormatElementA.append(prixGrandFormatElement)
    livreElement.append(prixGrandFormatElementA);

    const prixFormatPocheElement = document.createElement('button');
    prixFormatPocheElement.className = 'livre__price--poche';
    prixFormatPocheElement.textContent = `Prix livre de poche: ${livre["PrixPoche"]}`;

    const prixFormatPocheElementA = document.createElement('a');
    prixFormatPocheElementA.className = "livre__price--poche--a";
    prixFormatPocheElementA.href = livre.lienPrixPoche;
    prixFormatPocheElementA.target = '_blank'
    prixFormatPocheElementA.append(prixFormatPocheElement);

    livreElement.append(prixFormatPocheElementA);

    return livreElement;
}

const collection = document.querySelector('.collection');

collectionLivres.forEach(livre => {
    const livreElement = createBookElement(livre);
    collection.append(livreElement);
});