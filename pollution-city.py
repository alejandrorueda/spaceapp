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
limit = {
    'min': None,
    'max': None
}

def atributos(group):
	for name in group.ncattrs():
		print "Global attr", name, "=", getattr(group,name)

def location(city, limit):
    indlat=0
    indlon=0
    city[attr] = None
    lat1 = dataset.variables['lat']
    lon1 = dataset.variables['lon']
    center = city['center']
    for longitud in lon1:
        if longitud < center['lng']:
            indlon+=1
    for latitud in lat1:
        if latitud < center['lat']:
            indlat+=1
    print variable + ' ' + city['city']
    print limit
    if indlon < lon1[:].size and indlat < lat1[:].size :
        city[attr]=dataset.variables[variable][indlat][indlon].tolist()
        if(city[attr]!=None) :
            if(limit['min']==None or city[attr] < limit['min']) :
                limit['min'] = city[attr]
            if(limit['max']==None or city[attr] > limit['max']) :
                limit['max'] = city[attr]

def percentlocation(city, limit):
    value = city[attr]
    if(value != None):
        print 'Percent values: '+variable + ' ' + city['city']
        if (limit['max'] - limit['min']) > 0 :
            city[attr+'_per'] = abs(((city[attr] - limit['min']) * 100) / (limit['max'] - limit['min']))
        else :
            city[attr+'_per'] = 100

for city in cities.values():
    location(city, limit)

for city in cities.values():
    percentlocation(city, limit)

with open(output, 'w') as outfile:
    json.dump(cities, outfile, sort_keys=True, indent=2)

dataset.close()
