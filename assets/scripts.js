"use strict";

const isMobile = window.matchMedia("(max-width: 767px)").matches;

window.addEventListener("load", initMap);

const department = {
  lat: 41.64667954066948,
  lng: 41.63349286860216,
  title: "აჭარის ა. რ. ტურიზმისა და კურორტების დეპარტამენტი",
};

function initMap() {
  const map = new google.maps.Map(document.querySelector(".map"), {
    zoom: 17,
    center: {
      lat: department.lat,
      lng: department.lng,
    },
    streetViewControl: false,
    fullscreenControl: false,
    zoomControl: true,
    mapTypeControl: false,
    gestureHandling: "greedy",
  });

  function addMarker({ lat, lng, title }) {
    const marker = new google.maps.Marker({
      position: { lat, lng },
      map: map,
      icon: {
        url: "https://s1.infoajara.com/images/anbanitour/B_pin-logo.svg",
        scaledSize: new google.maps.Size(36, 36),
      },
    });

    const contentString = `
    <div class="center" style="height: ${isMobile ? "130px" : "90px"}">
      <h3>${title}</h3>
      <a class="link" href="https://gobatumi.com/ka/about-the-department" target="_blank">დეტალურად<sup><img height="10" src="https://s1.infoajara.com/images/anbanitour/external-link.svg" alt="external-link" style="margin-left: 5px" /></sup></a>
    </div>
  `;

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    infowindow.open(map, marker);
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });
  }

  addMarker(department);
}
