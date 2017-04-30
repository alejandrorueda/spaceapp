# Earth diagnosis

## JSON Pollution cities results

    https://raw.githubusercontent.com/alejandrorueda/spaceapp/master/pollution-cities/pollution-by-city.json
    https://raw.githubusercontent.com/alejandrorueda/spaceapp/master/pollution-cities/pollution-by-city.js

## JSON Data of generated data

    "manchester": {
      "center": {
        "lat": 53.467,
        "lng": -2.233
      },
      "ch4": 3.779105907159125e+19,
      "ch4_per": 95.51937264091019,
      "city": "Manchester",
      "co": 5.537136305022727e-10,
      "co2": 397.56538211116316,
      "co2_per": 63.18718816857975,
      "co_per": 3.005560852106043,
      "dust": 1.6923117073019966e-05,
      "dust_per": 2.3738678003459066,
      "lw_flux": -45.75823974609375,
      "lw_flux_per": 77.03036410685885,
      "no2": 4823121035001856.0,
      "no2_per": 24.110171253212517,
      "sw_flux": 86.77875518798828,
      "sw_flux_per": 31.76687690180772,
      "wikipedia": "Manchester"
    }

## City conversion

    cd cities
    python biteam-cities.py

## Pollution zone

Python example

    python pollution-zone.py --nc=pollution-data/g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc --variable=AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere --output=all.json

## City pollution data

Python example

    python pollution-city.py --nc=pollution-data/g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc --variable=AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere --cities=cities/cities-test.json --attr=co2 --output=pollution-cities/biteam-co2.json

Bash script para generar json

    sh pollution-city-all-data.sh

## Data pollution

![Giovanni - Atmosphere Chemistry](/images/giovanni.png "Giovanni - Atmosphere Chemistry")

Reference: [Giovanni - The Bridge Between Data and Science v 4.21.6](https://giovanni.gsfc.nasa.gov/giovanni)

![Panoply netCDF, HDF and GRIB Data Viewer](/images/panoply.png "Panoply netCDF, HDF and GRIB Data Viewer")

Procesamiento de datos netCDF4 con [Panoply netCDF, HDF and GRIB Data Viewer](https://www.giss.nasa.gov/tools/panoply/)

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
### Carbon Dioxide, Mole Fraction in Free Troposphere, IR-Only

![Carbon Dioxide, Mole Fraction in Free Troposphere, IR-Only](/images/co2.png "Carbon Dioxide, Mole Fraction in Free Troposphere, IR-Only")

* unit:
* quantity_type: CO2
* nc: g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc
* variable: AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere
* attr: co2
* python: --nc=pollution-data/g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc --variable=AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere --attr=co2

### Dust Column Mass Density

![Dust Column Mass Density](/images/dust.png "Dust Column Mass Density")

* unit: kg m-2
* quantity_type: Dust
* nc: g4.timeAvgMap.M2TMNXAER_5_12_4_DUCMASS.20101130-20170130.180W_90S_180E_90N.nc
* variable: M2TMNXAER_5_12_4_DUCMASS
* attr: dust
* python: --nc=pollution-data/g4.timeAvgMap.M2TMNXAER_5_12_4_DUCMASS.20101130-20170130.180W_90S_180E_90N.nc --variable=M2TMNXAER_5_12_4_DUCMASS --attr=dust

### NO2 tropospheric column density, screened for CloudFraction < 30%

![NO2 tropospheric column density, screened for CloudFraction < 30%](/images/no2.png "NO2 tropospheric column density, screened for CloudFraction < 30%")

* unit: 1/cm2
* quantity_type: NO2
* nc: g4.timeAvgMap.OMNO2d_003_ColumnAmountNO2TropCloudScreened.20101130-20170130.180W_90S_180E_90N.nc
* variable: OMNO2d_003_ColumnAmountNO2TropCloudScreened
* attr: no2
* python: --nc=pollution-data/g4.timeAvgMap.OMNO2d_003_ColumnAmountNO2TropCloudScreened.20101130-20170130.180W_90S_180E_90N.nc --variable=OMNO2d_003_ColumnAmountNO2TropCloudScreened --attr=no2

### Methane Total Column (Daytime/Ascending)

![Methane Total Column (Daytime/Ascending)](/images/ch4.png "Methane Total Column (Daytime/Ascending)")

* unit: mol/cm2
* quantity_type: CH4
* nc: g4.timeAvgMap.AIRX3STD_006_TotCH4_A.20020830-20160922.180W_90S_180E_90N.nc
* variable: AIRX3STD_006_TotCH4_A
* attr: ch4
* python: --nc=pollution-data/g4.timeAvgMap.AIRX3STD_006_TotCH4_A.20020830-20160922.180W_90S_180E_90N.nc --variable=AIRX3STD_006_TotCH4_A --attr=ch4

## WebSite - MAPSPOL -

En la carpeta MAPSPOL podemos encontrar el sitio web (index.html). si cargamos la web en un navegador poremos observar un mapa mundial con las principales ciudades marcadas y si seleccionamos una ciudad nos mostrara toda la información disponible con respecto a esa ciudad tal y como muestra siguiente imagen.

![init-map](/images/mapa-inicial.png "Init map")

Tambien, podemos aplicar varios filtros para poder mostrar información en nuestro mapa.
* Net longwave radiation flux
* CO Emissions
* Carbon Dioxide, Mole Fraction in Free Troposphere, IR-Only


Además de los filtros anteriormente citados, hemos añadido una capa extra para mostrar las zonas en las que actualmente esta ocurriendo un terremoto.
