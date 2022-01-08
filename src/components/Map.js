//through an example i was able to figure out how to get the map to appear on the page and default to a certain area, 
//but i had trouble setting up google cloud platform and getting the actual api to work
//in 301 we didnt use this and something in my setup was not functioning correctly
import React from 'react';
import { useState, useEffect } from 'react';
import { Loader } from "@googlemaps/js-api-loader"
import Geocode from "react-geocode";

import styles from './Map.module.css';


const Map = ({ inputAddress }) => {
    const [latitude, setLatitude] = useState(30.284982);
    const [longitude, setLongitude] = useState(-97.741641);
    const [zoom, setZoom] = useState(12);

    const findAddress = () => {
        if (inputAddress) {
             //still havent figured out the google api, but this is where i would get the key from the .env file
            Geocode.setApiKey(process.env.GOOGLE_MAP_API_KEY);

            Geocode.fromAddress(inputAddress).then(
                (response) => {
                    const { lat, lng } = response.results[0].geometry.location;
                    setLatitude(lat);
                    setLongitude(lng);
                    setZoom(15);
                },
                (error) => {
                    console.error(error);
                }
            );
        } else {
            
            setLatitude(30.284982);
            setLongitude(-97.741641);
            setZoom(12);
        }
    }

    const loader = new Loader({
        //still havent figured out the google api, but this is where i would get the key from the .env file
        apiKey: process.env.GOOGLE_MAP_API_KEY,
        version: "weekly"
    });

    const mapOptions = {
        center: { lat: latitude, lng: longitude },
        zoom: zoom,
    }

    loader.load().then((google) => {
        const map = new google.maps.Map(document.getElementById("map"), mapOptions);

        const marker = new google.maps.Marker({
            position: mapOptions.center,
            map: map,
        });
    })
        .catch(e => console.log('Error: ', e));

        useEffect(() => {
            findAddress();
        }, [inputAddress])
    
    return (
        <div>
            <div id="map" className={styles.mapStyle}></div>
        </div>
    )
}

export default Map;