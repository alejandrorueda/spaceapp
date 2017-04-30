# spaceapp

## JSON Pollution cities results

    https://raw.githubusercontent.com/alejandrorueda/spaceapp/master/pollution-cities/pollution-by-city.json
    https://raw.githubusercontent.com/alejandrorueda/spaceapp/master/pollution-cities/pollution-by-city.js

## City conversion

    cd cities
    python biteam-cities.py
    
## City pollution data

    python pollution-city.py --nc=pollution-data/g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc --variable=AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere --cities=cities/cities-test.json --attr=co2 --output=pollution-cities/biteam-co2.json
    
## Data pollution

* Net longwave radiation flux 
    * unit: W m-2
    * quantity_type: Radiation, Net
    * nc: g4.timeAvgMap.GLDAS_NOAH10_M_2_1_Lwnet_tavg.20101130-20170130.180W_60S_180E_90N.nc
    * variable: GLDAS_NOAH10_M_2_1_Lwnet_tavg
    * attr: lw_flux
    * python: --nc=pollution-data/g4.timeAvgMap.GLDAS_NOAH10_M_2_1_Lwnet_tavg.20101130-20170130.180W_60S_180E_90N.nc --variable=GLDAS_NOAH10_M_2_1_Lwnet_tavg --attr=lw_flux
* CO Carbon Monoxide Emissions
    * unit: kg m-2 s-1
    * quantity_type: CO
    * nc: g4.timeAvgMap.M2TMNXCHM_5_12_4_COEM.20101130-20170130.180W_90S_180E_90N.nc
    * variable: M2TMNXCHM_5_12_4_COEM
    * attr: co
    * python: --nc=pollution-data/g4.timeAvgMap.M2TMNXCHM_5_12_4_COEM.20101130-20170130.180W_90S_180E_90N.nc --variable=M2TMNXCHM_5_12_4_COEM --attr=co
* CO2 Carbon Dioxide, Mole Fraction in Free Troposphere, IR-Only
    * unit:
    * quantity_type: CO2
    * nc: g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc
    * variable: AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere
    * attr: co2
    * python: --nc=pollution-data/g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc --variable=AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere --attr=co2

### Net longwave radiation flux 

![Net longwave radiation flux](/images/net_longwave_flux.png "Net longwave radiation flux")

* unit: W m-2
* quantity_type: Radiation, Net
* nc: g4.timeAvgMap.GLDAS_NOAH10_M_2_1_Lwnet_tavg.20101130-20170130.180W_60S_180E_90N.nc
* variable: GLDAS_NOAH10_M_2_1_Lwnet_tavg
* attr: lw_flux
* python: --nc=pollution-data/g4.timeAvgMap.GLDAS_NOAH10_M_2_1_Lwnet_tavg.20101130-20170130.180W_60S_180E_90N.nc --variable=GLDAS_NOAH10_M_2_1_Lwnet_tavg --attr=lw_flux
### CO Emissions
* unit: kg m-2 s-1
* quantity_type: CO
* nc: g4.timeAvgMap.M2TMNXCHM_5_12_4_COEM.20101130-20170130.180W_90S_180E_90N.nc
* variable: M2TMNXCHM_5_12_4_COEM
* attr: co
* python: --nc=pollution-data/g4.timeAvgMap.M2TMNXCHM_5_12_4_COEM.20101130-20170130.180W_90S_180E_90N.nc --variable=M2TMNXCHM_5_12_4_COEM --attr=co
## Carbon Dioxide, Mole Fraction in Free Troposphere, IR-Only
* unit:
* quantity_type: CO2
* nc: g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc
* variable: AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere
* attr: co2
* python: --nc=pollution-data/g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc --variable=AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere --attr=co2

    
    
## WebSite - MAPSPOL -

En la carpeta MAPSPOL podemos encontrar el sitio web (index.html). si cargamos la web en un navegador poremos observar un mapa mundial con las principales ciudades marcadas y si seleccionamos una ciudad nos mostrara toda la información disponible con respecto a esa ciudad tal y como muestra siguiente imagen.

![init-map](/images/mapa-inicial.png "Init map")

Tambien, podemos aplicar varios filtros para poder mostrar información en nuestro mapa.
* Net longwave radiation flux 
* CO Emissions
* Carbon Dioxide, Mole Fraction in Free Troposphere, IR-Only


Además de los filtros anteriormente citados, hemos añadido una capa extra para mostrar las zonas en las que actualmente esta ocurriendo un terremoto.

