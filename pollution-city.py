from netCDF4 import Dataset
import numpy as np
import json
import sys,getopt

opts, args = getopt.getopt(sys.argv[1:],':ir',['nc=', 'cities=', 'variable=', 'attr=', 'output='])
for opt,arg in opts:
   if opt=='--nc':
      filename=arg
   if opt=='--variable':
      variable=arg
   if opt=='--cities':
      cities=arg
   if opt=='--attr':
      attr=arg
   if opt=='--output':
      output=arg


with open(cities, 'r') as infile:
    cities = json.loads(infile.read())

dataset = Dataset(filename, 'r')

def atributos(group):
	for name in group.ncattrs():
		print "Global attr", name, "=", getattr(group,name)
def location(city):
    indlat=0
    indlon=0
    city[attr] = 'error'
    lat1 = dataset.variables['lat']
    lon1 = dataset.variables['lon']
    center = city['center']
    for longitud in lon1:
        if longitud < center['lng']:
            indlon+=1
    for latitud in lat1:
        if latitud < center['lat']:
            indlat+=1
    print city['city']
    if indlon < lon1[:].size and indlat < lat1[:].size :
        city[attr]=dataset.variables[variable][indlat][indlon].tolist()

for city in cities.values():
    location(city)

with open(output, 'w') as outfile:
    json.dump(cities, outfile)

dataset.close()
