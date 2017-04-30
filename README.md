# spaceapp

## City conversion

    cd cities
    python biteam-cities.py
    
## City pollution data

    python pollution-city.py --nc=pollution-data/g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc --variable=AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere --cities=cities/cities-test.json --attr=co2 --output=pollution-cities/biteam-co2.json
    
## Data pollution

 * Net longwave radiation flux 
 ** nc: g4.timeAvgMap.GLDAS_NOAH10_M_2_1_Lwnet_tavg.20101130-20170130.180W_60S_180E_90N.nc
 ** variable: GLDAS_NOAH10_M_2_1_Lwnet_tavg
 ** attr: lw_flux
 ** python: --nc=pollution-data/g4.timeAvgMap.GLDAS_NOAH10_M_2_1_Lwnet_tavg.20101130-20170130.180W_60S_180E_90N.nc --variable=GLDAS_NOAH10_M_2_1_Lwnet_tavg --attr=lw_flux

