#!/bin/bash

cityfile=cities-biteam.json
#cityfile=cities-test.json
cp cities/$cityfile pollution-cities/pollution-by-city.json
folder=pollution-cities
script="pollution-city.py --cities=$folder/pollution-by-city.json --output=$folder/pollution-by-city.json"


python $script --nc=pollution-data/g4.timeAvgMap.GLDAS_NOAH10_M_2_1_Lwnet_tavg.20101130-20170130.180W_60S_180E_90N.nc --variable=GLDAS_NOAH10_M_2_1_Lwnet_tavg --attr=lw_flux
python $script --nc=pollution-data/g4.timeAvgMap.GLDAS_NOAH10_M_2_1_Swnet_tavg.20101130-20170130.180W_60S_180E_90N.nc --variable=GLDAS_NOAH10_M_2_1_Swnet_tavg --attr=sw_flux
python $script --nc=pollution-data/g4.timeAvgMap.AIRX3STD_006_TotCO_A.20091231-20101229.180W_90S_180E_90N.nc --variable=AIRX3STD_006_TotCO_A --attr=co
python $script --nc=pollution-data/g4.timeAvgMap.AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere.20101130-20170130.180W_60S_180E_90N.nc --variable=AIRS3C2M_005_mole_fraction_of_carbon_dioxide_in_free_troposphere --attr=co2
python $script --nc=pollution-data/g4.timeAvgMap.M2TMNXAER_5_12_4_DUCMASS.20101130-20170130.180W_90S_180E_90N.nc --variable=M2TMNXAER_5_12_4_DUCMASS --attr=dust
python $script --nc=pollution-data/g4.timeAvgMap.OMNO2d_003_ColumnAmountNO2TropCloudScreened.20101130-20170130.180W_90S_180E_90N.nc --variable=OMNO2d_003_ColumnAmountNO2TropCloudScreened --attr=no2
python $script --nc=pollution-data/g4.timeAvgMap.AIRX3STD_006_TotCH4_A.20020830-20160922.180W_90S_180E_90N.nc --variable=AIRX3STD_006_TotCH4_A --attr=ch4

echo 'var citymap=' > $folder/pollution-by-city.js
cat $folder/pollution-by-city.json >> $folder/pollution-by-city.js
