"use client";
// MapComponent.js
import React, { useEffect, useRef } from "react";
import "@/app/asset/style/mapComponent.css";
import mapboxgl from "mapbox-gl";
import { useDispatch } from "react-redux";
import { setDataInfo } from "../store/slice";
import { setDataLangue } from "../store/langueSlice";

const MapComponent = () => {
  let dataAllCountries = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    const apiData = `https://restcountries.com/v3.1/all`;
    fetch(apiData)
      .then((response) => response.json())
      .then((data) => {
        dataAllCountries.current = data;
        findMostUsedLanguage(data);
      })
      .catch((error) => console.error("Error:", error));
    mapboxgl.accessToken =
      "pk.eyJ1IjoicXVhbmdudCIsImEiOiJjbHJlcjU4ZXUxb2JlMmxycHk1NWlrczN0In0.iSRavRTUm4XmeVFDN3mo0A";
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [0, 0],
      zoom: 2,
    });
    map.on("click", function (e) {
      const coordinates = e.lngLat;
      getCountryInfo(coordinates.lat, coordinates.lng);
    });
  }, []);
  function findMostUsedLanguage(arr, topCount = 15) {
    let languageCount = {};
    arr.forEach((item) => {
      const languages = item.languages;
      for (const key in languages) {
        if (languageCount[key]) {
          languageCount[key]++;
        } else {
          languageCount[key] = 1;
        }
      }
    });
    const sortedLanguages = Object.keys(languageCount).sort(
      (a, b) => languageCount[b] - languageCount[a]
    );
    const topLanguages = sortedLanguages.slice(0, topCount);
    const result = topLanguages.map((language) => ({
      language: language,
      count: languageCount[language],
    }));
    dispatch(setDataLangue(result.map((item) => [item.language, item.count])));
    return result;
  }

  const getCountryInfo = (lat, lng) => {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data?.address && data?.address?.country_code) {
          const countryCode = data.address?.country_code;
          displayCountryInfo(countryCode.toUpperCase());
        } else {
          console.error("Cannot determine country from coordinates.");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  const displayCountryInfo = (countryName) => {
    if (dataAllCountries.current) {
      const targetCountry = dataAllCountries.current.find(
        (country) => country.cca2 === countryName
      );
      if (targetCountry) {
        dispatch(setDataInfo(targetCountry));
      } else {
        console.log("Country not found");
      }
    } else {
      console.log("Data is not available yet");
    }
  };

  return (
    <div>
      <div id="map" style={{ width: "100%", height: "900px" }}></div>
    </div>
  );
};

export default MapComponent;
