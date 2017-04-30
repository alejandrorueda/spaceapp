import json

with open('cities.json', 'r') as infile:
    cities = json.loads(infile.read())

def changedata(city):
    citylng = city['lon']
    citylat = city['lat']
    del(city['lon'])
    del(city['lat'])
    city['center']={'lat': citylat, 'lng': citylng}

for city in cities.values():
    changedata(city)

with open('cities-biteam.json', 'w') as outfile:
    json.dump(cities, outfile, sort_keys=True, indent=2)
