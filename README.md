## KWS2100 Exam - Web Mapping

**Render:** https://kws2100-exam-nhitraa.onrender.com

**Repository:** https://github.com/kristiania-kws2100-2026/kws2100-exam-nhitraa

## About the Application

This web mapping application visualizes traffic accidents, tunnels, road networks, and roadblocks in Norway, along with fire stations. The purpose is to analyze the proximity of fire stations to accident sites and evaluate emergency response coverage.

By including road networks and tunnels, the application provides better insight into where accidents occur. The visualization makes it easier to identify accident prone areas in relation to transportation infrastructure. By combining traffic accidents with fire station locations and road network, users can explore the emergency response coverage and accesibility across all municipalities and counties.

Due to lack of data on ambulance station locations, the emergency response coverage is based solely on fire stations.

## Features

- Display of polygons and points from 6 data sources
- Municipality and county borders for geographic context
- Clustered style for traffic accidents and fire stations
- Click on a fire station and traffic accidents to view a popup with information
- Sidebar to toggle visibility of traffic accidents and fire stations

## Overview of datasets

- Municipalities - blue polygon
- Counties - dark blue polygon
- Traffic accidents - point
- Firestations - red point
- Tunnels - linestring
- Road network and roadblocks - linestring

## Data sources

- Municipalities - https://kartkatalog.geonorge.no/metadata/administrative-enheter-kommuner/041f1e6e-bdbc-4091-b48f-8a5990f3cc5b

- Counties - https://kartkatalog.geonorge.no/metadata/administrative-enheter-fylker/6093c8a8-fa80-11e6-bc64-92361f002671?search=fylker

- Traffic accidents - https://kartkatalog.geonorge.no/metadata/trafikkulykker/2c47f033-b877-4885-a0ea-50333afd8fab?search=trafikk

- Road network and roadblocks - https://kartkatalog.geonorge.no/metadata/vegnett2-wms/302fcb0e-a7dc-44f4-a336-8c9ee9709d73

- Fire stations - https://kart.dsb.no/

- Tunnels - https://kart.dsb.no/

## Work Process

We divided the data sources evenly between us, so that everyone can contribute equally to the project. We both worked on seperate branches to keep the code organized and reviewed each other's code to ensure it is right.

One team member was responsible for setting up the project structure. This included creating the react application, intergrating the OpenLayers map and deploying the application using Render. Although one member handled the project setup, both participated equally in the development. The other team member worked with implementing additional functionality using the data sources.
