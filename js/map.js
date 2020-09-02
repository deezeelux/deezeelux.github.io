let myMap;
const init = () => {
    myMap = new ymaps.Map("map", {
        center: [55.749714, 37.631480],
        zoom: 13,
        controls: [],
    });

    let coords = [
            [55.745748, 37.586867],
            [55.751220, 37.602184],
            [55.756420, 37.598244],
            [55.751605, 37.640178],
        ],
        myCollection = new ymaps.GeoObjectCollection({}, {
            draggable: false,
            iconLayout: 'default#image',
            iconImageHref: '/img/icons/check_karta1.svg',
            iconImageSize: [46, 57],
            iconImageOffset: [-35, -52]
        });

    for (let i = 0; i < coords.length; i++) {
        myCollection.add(new ymaps.Placemark(coords[i]));
    }

    myMap.geoObjects.add(myCollection);

    //выключим масштабирование колесом мыши
    myMap.behaviors.disable('scrollZoom');
};

ymaps.ready(init);