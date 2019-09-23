const Fontenay = {
    title: 'Abbazia di Fontenay',
    text: ''
};
const Fossanova = {
    title: 'Abbazia di Fossanova',
    text: ''
};
const Croce = {
    title: 'Basilica di Santa Croce',
    text: 'La basilica di Santa Croce è una chiesa appartenente agli ordini mendicanti, del XIII secolo.<br><br><i>Inizialmente le chiese mendicanti erano formate da un’aula unica, prive di navate e con copertura a capriate, presentando il pulpito in posizione predominante. Solo più avanti verranno preferite chiese che seguono il modello della cosiddetta “chiesa a sala”, ma saranno così poche che potrebbero essere chiamate eccezioni.</i><br><br>La basilica di Santa Croce è un esempio di eccezione di chiesa mendicante del XIII secolo, in quanto presenta ben tre navate, anche se la sua copertura è composta da capriate lignee.'
};
const Novella = {
    title: 'Basilica di Santa Maria Novella',
    text: 'La basilica di Santa Maria Novella è una chiesa fiorentina del XIII secolo appartenente agli ordini mendicanti.<br><br><i>Inizialmente le chiese mendicanti erano formate da un’aula unica, prive di navate e con copertura a capriate, presentando il pulpito in posizione predominante. Solo più avanti verranno preferite chiese che seguono il modello della cosiddetta “chiesa a sala”, ma saranno così poche che potrebbero essere chiamate eccezioni.</i><br><br>La Basilica di Santa Maria Novella è un esempio di eccezione di chiesa mendicante del XIII secolo, in quanto presenta tre navate ed ha una copertura composta da volte a crociera.'
};
const Padova = {
    title: 'Basilica di Sant\'Antonio di Padova',
    text: ''
};
const Denis = {
    title: 'Abbazia di Saint-Denis',
    text: ''
};
const Dame = {
    title: 'Cattedrale di Notre-Dame',
    text: 'Notre Dame è la basilica dedicata alla Vergine venne iniziata intorno al 1160 per iniziativa del vescovo Maurice de Sully nell\'ambito di un progetto più ampio che prevedeva anche la risistemazione dell\'intero quartiere. La costruzione si protrasse per un lungo periodo facendo di Notre-Dame uno degli edifici simbolo dell\'architettura gotica-francese. La pianta si presenta a  cinque navate con un profondissimo coro dotato di un doppio deambulatorio, la navata centrale si regge su tre livelli sovrapposti (l\'arcata, la tribuna e cleristorio) e all\'incrocio del transetto arrivano a quattro livelli. La facciata esterna è strutturata su cinque fasce sovrapposte: in basso troviamo i tre portali dedicati all\'incoronazione della Vergine, al Giudizio Universale e a Sant\'Anna; a seguire la galleria del re; il rosone; la Grande galleria e infine i due Torrioni. Originariamente l\'effetto cromatico del complesso doveva essere ben più potente di quella attuale, tracce di pigmenti infatti sono stati ritrovati nelle teste dei re conservare oggi nel museo del Medioevo di Parigi. Sono frammenti della serie originaria di 28 statue raffiguranti Re di Israele è andata distrutta durante la Rivoluzione francese, presentano inoltre una naturalismo che apre le strade alla grande e sperimentazione formale del gotico europeo.'
};
const Chapelle = {
    title: 'Sainte-Chapelle',
    text: ''
};



const chiese_html = [
    document.getElementById('abbazia-di-fontenay'), document.getElementById('abbazia-di-fossanova'), document.getElementById('basilica-di-santa-croce'), document.getElementById('basilica-di-santa-maria-novella'),
    document.getElementById('basilica-di-sant-antonio-di-padova'), document.getElementById('basilica-di-saint-denis'), document.getElementById('cattedrale-di-notre-dame'), document.getElementById('sainte-chapelle'),
];

const chiese_txt = [
    Fontenay, Fossanova, Croce, Novella,
    Padova, Denis, Dame, Chapelle
];

const chiese_img = [
    'fontenay', 'fossanova', 'santa-croce', 'santa-maria-novella',
    'sant-antonio-di-padova', 'saint-denis', 'notre-dame', 'sainte-chapelle'
];

for (let i = 0; i < 8; i++) {

    chiese_html[i].addEventListener('click', () => {

        let html_title = document.getElementById('p-title');
        let html_body = document.getElementById('text-in');
        let html_img = document.getElementById('image');

        html_title.innerHTML = chiese_txt[i].title;
        html_body.innerHTML = chiese_txt[i].text;
        html_img.src = `../res/GOTICO/${chiese_img[i]}.jpg`;

    });

}

// location.href dell'immagine
let img_ = document.getElementById('image');
var locations_ = [
    'https://maps.app.goo.gl/5Mkq2Ang97QPNMiMA', 'https://maps.app.goo.gl/eSTQkreXE8PykEsJ8', 'https://maps.app.goo.gl/pb6nv4ePKzwNq2SF6', 'https://maps.app.goo.gl/tKT2mrRe5K2MssSMA',
    'https://maps.app.goo.gl/jFArYtVNefL2v5256', 'https://maps.app.goo.gl/FNKbcvhgDqz5p4vH7', 'https://maps.app.goo.gl/yEBLsV9zAYLihrF89', 'https://maps.app.goo.gl/PVeBkWZ9Uyv1BtVm6'
];

for (let i = 0; i < 8; i++) {

    chiese_html[i].addEventListener('click', () => {

        document.getElementById('link-txt').href = locations_[i];

    });

}

img_.addEventListener('click', () => {

    document.getElementById('link-txt').click();

});