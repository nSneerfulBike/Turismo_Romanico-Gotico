// MAPPA

function initMap() {

    const mapCenter = {lat: 45.4628328, lng: 9.1076927};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: mapCenter,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'geometry',
              stylers: [{color: '#263c3f'}]
            },
            {
              featureType: 'poi.park',
              elementType: 'labels.text.fill',
              stylers: [{color: '#6b9a76'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{color: '#38414e'}]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{color: '#212a37'}]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{color: '#9ca5b3'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry',
              stylers: [{color: '#746855'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'geometry.stroke',
              stylers: [{color: '#1f2835'}]
            },
            {
              featureType: 'road.highway',
              elementType: 'labels.text.fill',
              stylers: [{color: '#f3d19c'}]
            },
            {
              featureType: 'transit',
              elementType: 'geometry',
              stylers: [{color: '#2f3948'}]
            },
            {
              featureType: 'transit.station',
              elementType: 'labels.text.fill',
              stylers: [{color: '#d59563'}]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{color: '#17263c'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{color: '#515c6d'}]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.stroke',
              stylers: [{color: '#17263c'}]
            }
          ]
    });

    const markersRomanico = [
        {
            title: 'Basilica di Sant\'Ambrogio',
            position: {
                lat: 45.462332,
                lng: 9.175612
            }
        }, {
            title: 'Basilica di San Michele Maggiore',
            position: {
                lat: 45.182221,
                lng: 9.156664
            }
        }, {
            title: 'Basilica di San Clemente',
            position: {
                lat: 41.889342,
                lng: 12.497576
            }
        }, {
            title: 'Duomo di Modena',
            position: {
                lat: 44.646312,
                lng: 10.925515
            }
        }, {
            title: 'Duomo di Monreale',
            position: {
                lat: 38.082107,
                lng: 13.292366
            }
        }, {
            title: 'Basilica di San Marco',
            position: {
                lat: 45.434565,
                lng: 12.339712
            }
        }, {
            title: 'Duomo di Pisa',
            position: {
                lat: 43.723301,
                lng: 10.395862
            }
        }, {
            title: 'Battistero di San Giovanni',
            position: {
                lat: 43.773121,
                lng: 11.255022
            }
        }, {
            title: 'Cattedrale di Trani',
            position: {
                lat: 41.282222,
                lng: 16.418387
            }
        }, {
            title: 'Abbazia di Sant\'Antimo',
            position: {
                lat: 42.999604,
                lng: 11.515617
            }
        }, {
            title: 'Basilica di San Nicola',
            position: {
                lat: 41.130317,
                lng: 16.870139
            }
        }, {
            title: 'Cattedrale di Durham',
            position: {
                lat: 54.773239,
                lng: -1.576392
            }
        }, {
            title: 'Abbazia San Pietro di Moissac',
            position: {
                lat: 44.105352,
                lng: 1.084513
            }
        }, {
            title: 'Abbazia di Mont-Saint-Michel',
            position: {
                lat: 48.636166,
                lng: -1.511465
            }
        }, {
            title: 'Cattedrale di Santiago di Compostela',
            position: {
                lat: 42.880603,
                lng: -8.544642
            }
        }
    ];
    const markersGotico = [
        {
            title: 'Abbazia di Saint-Denis',
            position: {
                lat: 48.935468,
                lng: 2.359835
            }
        }, {
            title: 'Cattedrale di Notre-Dame',
            position: {
                lat: 48.852974,
                lng: 2.349902
            }
        }, {
            title: 'Saint-Chapelle',
            position: {
                lat: 48.855423,
                lng: 2.344986
            }
        }, {
            title: 'Abbazia di Fossanova',
            position: {
                lat: 41.438158,
                lng: 13.195753
            }
        }, {
            title: 'Abbazia di Fontenay',
            position: {
                lat: 47.639614,
                lng: 4.389324
            }
        }, {
            title: 'Basilica di Santa Croce',
            position: {
                lat: 40.787108,
                lng: 14.368415
            }
        }, {
            title: 'Basilica di Santa Maria Novella',
            position: {
                lat: 43.774638,
                lng: 11.249386
            }
        }, {
            title: 'Basilica di Sant\'Antonio di Padova',
            position: {
                lat: 45.401398,
                lng: 11.880773
            }
        }
    ];

    const markersPertinentiRomanico = [
        {
            title: 'Duomo di Pisa',
            position: {
                lat: 43.723301,
                lng: 10.395862
            }
        }, {
            title: 'Basilica di San Marco',
            position: {
                lat: 45.434565,
                lng: 12.339712
            }
        }, {
            title: 'Cattedrale di Durham',
            position: {
                lat: 54.773239,
                lng: -1.576392
            }
        }, {
            title: 'Basilica di San Nicola',
            position: {
                lat: 41.130317,
                lng: 16.870139
            }
        }, {
            title: 'Duomo di Monreale',
            position: {
                lat: 38.082107,
                lng: 13.292366
            }
        }
    ];
    const markersPertinentiGotico = [
        {
            title: 'Abbazia di Saint-Denis',
            position: {
                lat: 48.935468,
                lng: 2.359835
            }
        }, {
            title: 'Cattedrale di Notre-Dame',
            position: {
                lat: 48.852974,
                lng: 2.349902
            }
        }, {
            title: 'Saint-Chapelle',
            position: {
                lat: 48.855423,
                lng: 2.344986
            }
        }
    ];

    const markersPellegrinaggio = [
        {
            title: 'Abbazia di Sant\'Antimo',
            position: {
                lat: 42.999604,
                lng: 11.515617
            }
        }, {
            title: 'Abbazia di Mont-Saint-Michel',
            position: {
                lat: 48.636166,
                lng: -1.511465
            }
        }, {
            title: 'Cattedrale di Santiago di Compostela',
            position: {
                lat: 42.880603,
                lng: -8.544642
            }
        }
    ];

    var markers = [];

    for (marker of markersRomanico) {
        let m = new google.maps.Marker({
            map: map,
            position: marker.position,
            title: marker.title
        });
        markers.push(m);
    }

    let ch_romanico = document.getElementById('checkbox-romanico');
    let ch_gotico = document.getElementById('checkbox-gotico');
    let ch_pertinenti = document.getElementById('checkbox-pertinenti');
    let ch_pellegrinaggio = document.getElementById('checkbox-pellegrinaggio');

    ch_romanico.addEventListener('click', () => {

        if (!pellegrinaggio_checked) {

            for (m of markers) {
                m.setMap(null);
            }
            markers = [];

            if (pertinenti_checked) {

                if (romanico_checked) {
    
                    for (marker of markersPertinentiRomanico) {
    
                        let pp = new google.maps.Marker({
                            map: map,
                            position: marker.position,
                            title: marker.title
                        });
                        markers.push(pp);
        
                    }
    
                }
    
                if (gotico_checked) {
    
                    for (marker of markersPertinentiGotico) {
    
                        let pp = new google.maps.Marker({
                            map: map,
                            position: marker.position,
                            title: marker.title
                        });
                        markers.push(pp);
        
                    }
    
                }
    
            } else {
    
                if (romanico_checked) {
    
                    for (marker of markersRomanico) {
    
                        let pp = new google.maps.Marker({
                            map: map,
                            position: marker.position,
                            title: marker.title
                        });
                        markers.push(pp);
        
                    }
    
                }
    
                if (gotico_checked) {
    
                    for (marker of markersGotico) {
    
                        let pp = new google.maps.Marker({
                            map: map,
                            position: marker.position,
                            title: marker.title
                        });
                        markers.push(pp);
        
                    }
    
                }
    
            }

        }

    });

    ch_gotico.addEventListener('click', () => {

        if (!pellegrinaggio_checked) {

            for (m of markers) {
                m.setMap(null);
            }
            markers = [];

            if (pertinenti_checked) {

                if (romanico_checked) {
    
                    for (marker of markersPertinentiRomanico) {
    
                        let pp = new google.maps.Marker({
                            map: map,
                            position: marker.position,
                            title: marker.title
                        });
                        markers.push(pp);
        
                    }
    
                }
    
                if (gotico_checked) {
    
                    for (marker of markersPertinentiGotico) {
    
                        let pp = new google.maps.Marker({
                            map: map,
                            position: marker.position,
                            title: marker.title
                        });
                        markers.push(pp);
        
                    }
    
                }
    
            } else {
    
                if (romanico_checked) {
    
                    for (marker of markersRomanico) {
    
                        let pp = new google.maps.Marker({
                            map: map,
                            position: marker.position,
                            title: marker.title
                        });
                        markers.push(pp);
        
                    }
    
                }
    
                if (gotico_checked) {
    
                    for (marker of markersGotico) {
    
                        let pp = new google.maps.Marker({
                            map: map,
                            position: marker.position,
                            title: marker.title
                        });
                        markers.push(pp);
        
                    }
    
                }
    
            }

        }

    });

    ch_pertinenti.addEventListener('click', () => {

        if (!pellegrinaggio_checked) {

            for (m of markers) {
                m.setMap(null);
            }
            markers = [];

            if (pertinenti_checked) {

                if (romanico_checked) {
    
                    for (marker of markersPertinentiRomanico) {
    
                        let pp = new google.maps.Marker({
                            map: map,
                            position: marker.position,
                            title: marker.title
                        });
                        markers.push(pp);
        
                    }
    
                }
    
                if (gotico_checked) {
    
                    for (marker of markersPertinentiGotico) {
    
                        let pp = new google.maps.Marker({
                            map: map,
                            position: marker.position,
                            title: marker.title
                        });
                        markers.push(pp);
        
                    }
    
                }
    
            } else {
    
                if (romanico_checked) {
    
                    for (marker of markersRomanico) {
    
                        let pp = new google.maps.Marker({
                            map: map,
                            position: marker.position,
                            title: marker.title
                        });
                        markers.push(pp);
        
                    }
    
                }
    
                if (gotico_checked) {
    
                    for (marker of markersGotico) {
    
                        let pp = new google.maps.Marker({
                            map: map,
                            position: marker.position,
                            title: marker.title
                        });
                        markers.push(pp);
        
                    }
    
                }
    
            }

        }

    });

    ch_pellegrinaggio.addEventListener('click', () => {

        for (m of markers) {
            m.setMap(null);
        }
        markers = [];

        if (pellegrinaggio_checked) {

            for (marker of markersPellegrinaggio) {

                let pp = new google.maps.Marker({
                    map: map,
                    position: marker.position,
                    title: marker.title
                });
                markers.push(pp);

            }

        } else {

            if (pertinenti_checked) {

                if (romanico_checked) {
    
                    for (marker of markersPertinentiRomanico) {
                        let pr = new google.map.Marker({
                            map: map,
                            position: pr.position,
                            title: pr.title
                        });
                        markers.push(pr);
                    }
    
                }
    
                if (gotico_checked) {
    
                    for (marker of markersPertinentiGotico) {
                        let pg = new google.map.Marker({
                            map: map,
                            position: pg.position,
                            title: pg.title
                        });
                        markers.push(pg);
                    }
    
                }
    
                return;
    
            }

            if (romanico_checked) {

                for (r of markersRomanico) {
                    let roint = new google.maps.Marker({
                        map: map,
                        position: r.position,
                        title: r.title
                    });
                    markers.push(roint);
                }
    
            }
    
            if (gotico_checked) {
    
                for (g of markersGotico) {
                    let goint = new google.maps.Marker({
                        map: map,
                        position: g.position,
                        title: g.title
                    });
                    markers.push(goint);
                }
    
            }

        }

    });

    let evObj = document.createEvent('Events');
    evObj.initEvent('click', true, false);
    ch_romanico.dispatchEvent(evObj);
    ch_gotico.dispatchEvent(evObj);

}

// MAPPA

mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
mdc.ripple.MDCRipple.attachTo(document.querySelector('#filter-done'));

var timer;
var {romanico_checked, gotico_checked, pertinenti_checked, pellegrinaggio_checked} = false;

let map_filterer = document.getElementById('map-filterer');
map_filterer.addEventListener('click', () => {

    // Sottofondo Scuro

    let scuro = document.getElementById('scuro');
    scuro.style.animation = 'fading-in 0.15s linear';
    scuro.style.transform = 'scale(1)';

    // Filter Selector

    let div = document.getElementById('filter-selector');
    div.style.animation = 'fading-in 0.15s linear'
    div.style.transform = 'scale(1)';

});

function removeScuro() {

    let scuro = document.getElementById('scuro');
    scuro.style.transform = 'scale(0)';

    let div = document.getElementById('filter-selector');
    div.style.transform = 'scale(0)';

    clearInterval(timer);

}

let checkbox_romanico = document.getElementById('checkbox-romanico');
let ck1 = document.getElementById('ckbox-1');
let checkbox_gotico = document.getElementById('checkbox-gotico');
let ck2 = document.getElementById('ckbox-2');
let checkbox_pertinenti = document.getElementById('checkbox-pertinenti');
let ck3 = document.getElementById('ckbox-3');
let checkbox_pellegrinaggio = document.getElementById('checkbox-pellegrinaggio');
let ck4 = document.getElementById('ckbox-4');

checkbox_romanico.addEventListener('click', romanicoCheck);
ck1.addEventListener('click', () => {
    let event = document.createEvent('Events');
    event.initEvent('click', true, false);
    checkbox_romanico.dispatchEvent(event);
});
checkbox_gotico.addEventListener('click', goticoCheck);
ck2.addEventListener('click', () => {
    let event = document.createEvent('Events');
    event.initEvent('click', true, false);
    checkbox_gotico.dispatchEvent(event);
});
checkbox_pertinenti.addEventListener('click', pertinentiCheck);
ck3.addEventListener('click', () => {
    let event = document.createEvent('Events');
    event.initEvent('click', true, false);
    checkbox_pertinenti.dispatchEvent(event);
});
checkbox_pellegrinaggio.addEventListener('click', pellegrinaggioCheck);
ck4.addEventListener('click', () => {
    let event = document.createEvent('Events');
    event.initEvent('click', true, false);
    checkbox_pellegrinaggio.dispatchEvent(event);
});

function romanicoCheck() {

    if (romanico_checked) {
        romanico_checked = false;
    } else {
        romanico_checked = true;
    }

}

function goticoCheck() {

    if (gotico_checked) {
        gotico_checked = false;
    } else {
        gotico_checked = true;
    }

}

function pertinentiCheck() {

    if (pertinenti_checked) {
        pertinenti_checked = false;
    } else {
        pertinenti_checked = true;
    }

}

function pellegrinaggioCheck() {

    if (pellegrinaggio_checked) {
        pellegrinaggio_checked = false;
    } else {
        pellegrinaggio_checked = true;
    }

}

let filter_done_btn = document.getElementById('filter-done');
filter_done_btn.addEventListener('click', () => {

    let scuro = document.getElementById('scuro');
    let div = document.getElementById('filter-selector');

    scuro.style.animation = 'fading-out 0.15s linear';
    div.style.animation = 'fading-out 0.15s linear';

    timer = setInterval(removeScuro, 140);

});

let scuro = document.getElementById('scuro');
scuro.addEventListener('click', () => {

    let bb = document.getElementById('scuro');
    let div = document.getElementById('filter-selector');

    bb.style.animation = 'fading-out 0.15s linear';
    div.style.animation = 'fading-out 0.15s linear';

    timer = setInterval(removeScuro, 140);

});

document.body.addEventListener('contextmenu', ev => {
    ev.preventDefault();
});