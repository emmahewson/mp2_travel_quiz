  
    function initMap(index) {
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
                imgOne: data.imgOne,
                imgTwo: data.imgTwo,
                imgThree: data.imgThree,
                imgFour: data.imgFour
            });
 
            //Attach click event to the marker & populate page with data
            (function (marker, data) {
                google.maps.event.addListener(marker, "click", function (e) {
                    highlightTitle.innerText = this.title;
                    highlightText.innerText = this.text;
                    imageOne.src = `assets/images/${this.imgOne}`;
                    imageTwo.src = `assets/images/${this.imgTwo}`;
                    imageThree.src = `assets/images/${this.imgThree}`;
                    imageFour.src = `assets/images/${this.imgFour}`;
                    highlightInfoDiv.classList.remove("hidden");
                });
            })(marker, data);
        }
    }