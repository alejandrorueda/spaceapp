from netCDF4 import Dataset
import numpy as np
import json
import sys,getopt

opts, args = getopt.getopt(sys.argv[1:],':ir',['nc=','variable=', 'output='])
for opt,arg in opts:
   if opt=='--nc':
      filename=arg
   if opt=='--variable':
      variable=arg
   if opt=='--output':
      output=arg

dataset = Dataset(filename, 'r')
data={}
grade_latitud = dataset.variables[variable].latitude_resolution
grade_longitude = dataset.variables[variable].longitude_resolution
data['grade_latitud']=grade_latitud
data['grade_longitude']=grade_longitude

def my_range(start, end, step):
	while start <= end:
		yield start
		start +=step

def divMatrix(row1,row2,col1,col2):
	result = 0
	for row in range(row1,row2):
		for col in range(col1,col2):
			result+=dataset.variables[variable][row][col]
	result=result/4
	lat1 = dataset.variables['lat']
    	lon1 = dataset.variables['lon']
	if (col1)<len(lon1) and (row1)<len(lat1):
		data[result.tolist()]={'lat1':lat1[row1].tolist(),'lat2':lat1[row2-1].tolist(),'lon1':lon1[col1].tolist(),'lon2':lon1[col2-1].tolist()}
	

antx=0
anty=0
for x in my_range(2,len(dataset.variables['lat']),2):
	if x<len(dataset.variables['lat']):
		for y in my_range(2,len(dataset.variables['lon']),2):
			divMatrix(antx,x,anty,y)
			anty=y
	antx=x

with open(output,'w') as outfile:
	json.dump(data,outfile)

dataset.close()
