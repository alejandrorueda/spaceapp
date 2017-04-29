from netCDF4 import Dataset
import numpy as np
import json
 
dataset = Dataset("prueba.nc")

def atributos(group):
	for name in group.ncattrs():
		print "Global attr", name, "=", getattr(group,name)
def location(lat,lon):
	data = {}
	indlat=0
	indlon=0
	data['key'] = 'error'
	lat1 = dataset.variables['lat']
	lon1 = dataset.variables['lon']
	for longitud in lon1:
		if round(longitud,2)==round(lon,2):
			for latitud in lat1:
				if round(latitud,2)==round(lat,2):
					data['key']=dataset.variables['AIRX3STD_006_TotO3_A'][indlat][indlon].tolist()
				indlat+=1
		indlon+=1

	return json.dumps(data)

print location(89.5,179.5);

dataset.close()
