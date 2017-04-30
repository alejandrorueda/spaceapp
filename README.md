# spaceapp

## JSON Pollution cities results

    https://raw.githubusercontent.com/alejandrorueda/spaceapp/master/pollution-cities/pollution-by-city.json
    https://raw.githubusercontent.com/alejandrorueda/spaceapp/master/pollution-cities/pollution-by-city.js

## City conversion

    cd cities
    python biteam-cities.py

## City pollution data

Python example

    python pollution-city.py --nc=pollution-data/g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc --variable=AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere --cities=cities/cities-test.json --attr=co2 --output=pollution-cities/biteam-co2.json

Bash script

    sh pollution-city-all-data.sh

## Data pollution

![Giovanni - Atmosphere Chemistry](/images/giovanni.png "Giovanni - Atmosphere Chemistry")

Reference: [Giovanni - The Bridge Between Data and Science v 4.21.6](https://giovanni.gsfc.nasa.gov/giovanni)

### Net longwave radiation flux

![Net longwave radiation flux](/images/net_longwave_flux.png "Net longwave radiation flux")

* unit: W m-2
* quantity_type: Radiation, Net
* nc: g4.timeAvgMap.GLDAS_NOAH10_M_2_1_Lwnet_tavg.20101130-20170130.180W_60S_180E_90N.nc
* variable: GLDAS_NOAH10_M_2_1_Lwnet_tavg
* attr: lw_flux
* python: --nc=pollution-data/g4.timeAvgMap.GLDAS_NOAH10_M_2_1_Lwnet_tavg.20101130-20170130.180W_60S_180E_90N.nc --variable=GLDAS_NOAH10_M_2_1_Lwnet_tavg --attr=lw_flux

### Net shortwave radiation flux

![Net shortwave radiation flux](/images/net_shortwave_flux.png "Net shortwave radiation flux")

* unit: W m-2
* quantity_type: Radiation, Net
* nc: g4.timeAvgMap.GLDAS_NOAH10_M_2_1_Swnet_tavg.20101130-20170130.180W_60S_180E_90N.nc
* variable: GLDAS_NOAH10_M_2_1_Swnet_tavg
* attr: lw_flux
* python: --nc=pollution-data/g4.timeAvgMap.GLDAS_NOAH10_M_2_1_Swnet_tavg.20101130-20170130.180W_60S_180E_90N.nc --variable=GLDAS_NOAH10_M_2_1_Swnet_tavg --attr=sw_flux

### CO Emissions

![CO Emissions](/images/co.png "CO Emissions")

* unit: kg m-2 s-1
* quantity_type: CO
* nc: g4.timeAvgMap.M2TMNXCHM_5_12_4_COEM.20101130-20170130.180W_90S_180E_90N.nc
* variable: M2TMNXCHM_5_12_4_COEM
* attr: co
* python: --nc=pollution-data/g4.timeAvgMap.M2TMNXCHM_5_12_4_COEM.20101130-20170130.180W_90S_180E_90N.nc --variable=M2TMNXCHM_5_12_4_COEM --attr=co
## Carbon Dioxide, Mole Fraction in Free Troposphere, IR-Only

![Carbon Dioxide, Mole Fraction in Free Troposphere, IR-Only](/images/co2.png "Carbon Dioxide, Mole Fraction in Free Troposphere, IR-Only")

* unit:
* quantity_type: CO2
* nc: g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc
* variable: AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere
* attr: co2
* python: --nc=pollution-data/g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc --variable=AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere --attr=co2

## Dust Column Mass Density

![Dust Column Mass Density](/images/dust.png "Dust Column Mass Density")

* unit: kg m-2
* quantity_type: Dust
* nc: g4.timeAvgMap.M2TMNXAER_5_12_4_DUCMASS.20101130-20170130.180W_90S_180E_90N.nc
* variable: M2TMNXAER_5_12_4_DUCMASS
* attr: Dust
* python: --nc=pollution-data/g4.timeAvgMap.M2TMNXAER_5_12_4_DUCMASS.20101130-20170130.180W_90S_180E_90N.nc --variable=M2TMNXAER_5_12_4_DUCMASS --attr=dust
