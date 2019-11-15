var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoic25sdXNzaWVyIiwiYSI6ImNqbGcxM2diODEycm8zcWxxcjc0dDdseDQifQ.1jQGlp5BEIYlYVNhF867QA',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Global Beer Styles',
    subtitle: 'A trip around the world',
    byline: 'By Prof. Scott Lussier',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Belgium',
            image: './path/to/image/source.png',
            description: 'Belgium makes good beer',
            location: {
              center: [4.57747, 50.73254],
              zoom: 6.43,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
