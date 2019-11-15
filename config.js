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
            title: 'Belgium with Flag',
            image: 'en.wikipedia.org/wiki/File:Flag_of_France.svg',
            description: 'Belgium is to beer what France is to wine or the Scottish Highlands is to whisky. It is the mother ship of brewing. If you understand the variations on beer making conconed hee on the north coast of Europe, you will be over halfway to appreciating the immense range of beers and forms that beer can assume.',
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
            title: 'Germany',
            image: './path/to/image/source.png',
            description: 'Germany makes good beer too.',
            location: {
                center: [77.020636, 38.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            title: 'America',
            image: './path/to/image/source.png',
            description: 'America makes good beer too.',
            location: {
                center: [33.020636, 18.886900],
                zoom: 13.5,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
