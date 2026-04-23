## KWS2100 Exam - Web Mapping

**Render:** https://kws2100-exam-nhitraa.onrender.com

**Repository:** https://github.com/kristiania-kws2100-2026/kws2100-exam-nhitraa

## About the Application

This web mapping application visualizes traffic accidents, tunnels, road networks in Norway, along with fire station and hospital locations. The purpose is to analyze the proximity of fire stations to accident sites and evaluate emergency response coverage.

By including road networks and tunnels, the application provides better insight into where accidents occur. The visualization makes it easier to identify accident prone areas in relation to transportation infrastructure. By combining traffic accidents with fire station locations, hospitals and road network, users can explore the emergency response coverage and accesibility across all municipalities and counties.

Due to lack of data on ambulance station locations, hospitals were used as an alternative to represent medical emergency response.

## Features

- Display of polygons and points from 6 data sources
- Municipality and county borders for geographic context
- Clustered style for traffic accidents and fire stations
- Click on fire stations, hospitals or traffic accidents to view a popup with information
- Road network and tunnels displayed to show where accidents occur
- Overview map in the bottom left corner for easy navigation
- Table overview in the bottom right showing all datasets and their colors

## Overview of datasets

- Municipalities - blue polygon
- Counties - dark blue polygon
- Traffic accidents - orange clustered point
- Firestations - red clustered point
- Hospitals - blue point
- Road network - orange line
- Tunnels - green line

## Data sources

- Municipalities - https://kartkatalog.geonorge.no/metadata/administrative-enheter-kommuner/041f1e6e-bdbc-4091-b48f-8a5990f3cc5b

- Counties - https://kartkatalog.geonorge.no/metadata/administrative-enheter-fylker/6093c8a8-fa80-11e6-bc64-92361f002671?search=fylker

- Traffic accidents - https://kartkatalog.geonorge.no/metadata/trafikkulykker/2c47f033-b877-4885-a0ea-50333afd8fab?search=trafikk

- Road network/tunnels - https://wms.geonorge.no/skwms1/wms.vegnett2?service=WMS&request=GetCapabilities

- Fire stations - https://kart.dsb.no/

- Hospitals - https://www.openstreetmap.org

## Work Process

We divided the data sources evenly between us, so that everyone can contribute equally to the project. We both worked on seperate branches to keep the code organized and reviewed each other's code to ensure it is right.

One team member was responsible for setting up the project structure. This included creating the react application, intergrating the OpenLayers map and deploying the application using Render. Although one member handled the project setup, both participated equally in the development. The other team member worked with implementing additional functionality using the data sources.
