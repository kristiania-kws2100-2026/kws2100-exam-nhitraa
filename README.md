## KWS2100 Exam - Web Mapping

**Render:** https://kws2100-exam-nhitraa.onrender.com

**Repository:** https://github.com/kristiania-kws2100-2026/kws2100-exam-nhitraa

## About the Application

This web mapping application visualizes traffic accidents and road infrastructure in Norway, including road networks, tunnels, municipalities and counties. The purpose of the application is to explore where accidents occur, identify accident-prone road areas, and examine emergency response coverage across the country.

By combining traffic accident data with road infrastructure, the application allows users to analyze patterns in where accidents happen. Each accident includes additional attributes such as date, type of accident, speed limit, lighting conditions (daylight, dark with lighting, dark without lighting), and number of vehicles involved. This makes it possible to explore how different factors may influence accident occurrence and severity.

In addition, fire stations and hospitals are included as contextual layers to explore how well different areas are covered by emergency services. This allows users to assess accessibility and proximity to emergency response resources in relation to accident locations.

Rather than only displaying accident locations, the application supports exploration of clusters and patterns across different regions, helping highlight areas with higher accident density and potential risk factors.

## Features

- Display of polygons, lines and points from 6 data sources
- Municipality and county borders for geographic context
- Clustered visualization of traffic accidents, where cluster size reflects the number of accidents in that area
- Single accident features are styled based on lighting conditions (daylight, dark with lighting, dark without lighting)
- Click interaction showing detailed information about each accident (including date, type, speed limit, lighting conditions and number of vehicles)
- Road network and tunnels displayed to provide context for accident locations
- Fire stations and hospitals included as contextual layers for emergency response coverage
- Overview map in the bottom left corner for navigation
- Table overview in the bottom right showing datasets and their symbology

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

One team member was responsible for setting up the project structure. This included creating the react application, intergrating the OpenLayers map and deploying the application using Render. Although one member handled the project setup, both participated equally in the development. The other team member focused on implementing additional functionality, such as integrating multiple data sources, styling layers, and adding interactivity.
Although we had different primary responsibilities, we collaborated closely throughout the development process and contributed to both the implementation and refinement of the application.
