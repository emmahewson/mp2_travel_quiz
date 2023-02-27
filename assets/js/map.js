function initMap(index) {
    // gives the Google Maps API a default country on page load
    // avoids console errors
    // adapted from https://www.javascripttutorial.net/es6/javascript-default-parameters/#:~:text=Setting%20JavaScript%20default%20parameters%20for,the%20default%20values%20of%20undefined%20.
    if (typeof index === 'undefined') {
        index = 0;
    } else {
        index = index;
    };

    // sets zoom level based on screen size
    let zoomLevel;
    let width = screen.width;
    if (width <= 576) {
        zoomLevel = countries[index].zoomSml;
    } else {
        zoomLevel = countries[index].zoomLrg;
    }
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: zoomLevel,
        center: countries[index].center
    })

    //Declaring DOM elements
    const highlightTitle = document.getElementById('highlight-title')
    const highlightText = document.getElementById('highlight-text')
    const imageOne = document.getElementById('highlight-photo-1')
    const imageTwo = document.getElementById('highlight-photo-2')
    const imageThree = document.getElementById('highlight-photo-3')
    const imageFour = document.getElementById('highlight-photo-4')
    const highlightInfoDiv = document.getElementById('highlight-info-div')
    const countryHighlightDiv = document.getElementById('country-highlights-div')


    // Clickable map markers adapted from: https://www.aspsnippets.com/Articles/Google-Maps-API-V3-Add-click-event-listener-to-all-multiple-markers.aspx

    // Populating the Map with Markers & attaching text & photos to each marker ready to be called on click
    for (let i = 0; i < countries[index].highlights.length; i++) {
        let data = countries[index].highlights[i];
        let myLatlng = new google.maps.LatLng(data.lat, data.lng);
        let marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: data.title,
            text: data.description,
            images: [{
                    img: data.images[0].img,
                    alt: data.images[0].alt
                },
                {
                    img: data.images[1].img,
                    alt: data.images[1].alt
                },
                {
                    img: data.images[2].img,
                    alt: data.images[2].alt
                },
                {
                    img: data.images[3].img,
                    alt: data.images[3].alt
                }
            ]
        });

        //Attach click event to the marker & populate page with data
        (function (marker, data) {
            google.maps.event.addListener(marker, "click", function (e) {
                highlightTitle.innerText = this.title;
                highlightText.innerText = this.text;
                imageOne.src = `assets/images/countries/highlights/${this.images[0].img}`;
                imageOne.alt = this.images[0].alt;
                imageTwo.src = `assets/images/countries/highlights/${this.images[1].img}`;
                imageTwo.alt = this.images[1].alt;
                imageThree.src = `assets/images/countries/highlights/${this.images[2].img}`;
                imageThree.alt = this.images[2].alt;
                imageFour.src = `assets/images/countries/highlights/${this.images[3].img}`;
                imageFour.alt = this.images[3].alt;
                highlightInfoDiv.classList.remove("hidden");
                // timeout to allow photos to load before scroll
                setTimeout(function () {
                    countryHighlightDiv.scrollIntoView(false, {
                        behavior: 'smooth'
                    });
                }, 150);

            });
        })(marker, data);
    }
}