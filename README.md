# urbanLogiqInterview1

A coding challenge for a company I think is super rad

## Problem Description

Presidential Campaign Challenge

# The Problem

You are the new logistics manager for a 2020 US Presidential candidate. The
campaign has identified a list of 256 cities that the candidate needs to visit
on the campaign trail.

Because of your candidate's eagerness to go green, a trait owing to their home
city of San Francisco, your task is to minimize the distance travelled
by the campaign.

The outgoing logistics manager managed to plot a route that covered 119,950km
and while the candidate appreciates the reward miles, it was felt that a
better job could be done scheduling, and so the campaign now has a new
logistics manager.

The candidate insists that the tour ends in the same city it starts so they
can bookend their trip with a closing rally.

Your job for this task is to see if you can beat the previous logistics
manager's route distance starting and ending in San Francisco.

The output should be a list of all cities, beginning and ending in San
Francisco, as well as the total distance travelled.

### Sample Input

City,State,Latitude,Longitude
San Francisco,California,37.7749295,-122.4194155
Aliso Viejo,California,33.5676842,-117.7256083
Rapid City,South Dakota,44.0805434,-103.2310149
Coon Rapids,Minnesota,45.1732394,-93.3030063
Malden,Massachusetts,42.4250964,-71.066163
Noblesville,Indiana,40.0455917,-86.0085955
Delray Beach,Florida,26.4614625,-80.0728201

### Sample Output

San Francisco
Aliso Viejo
Rapid City
Coon Rapids
Noblesville
Malden
Delray Beach
San Francisco
11334

### Challenge Notes

1. You should be provided, along with this file, a file called
   "cities_all.csv" that contains the full list of cities.

2. You may use any programming language or environment to complete this
   challenge.

3. Please submit all source code and output when you
   are complete.

4. This challenge should take no more than 4 hours of your time. After you
   have received the challenge, you have 48 hours to respond with your
   contribution.

# My Thoughts On This Problem

Well damn guys, I didn't anticipate you to up and give me a version of the travelling salesman problem. This is a pretty classic NP-hard dilemma, and I'm not about to solve it with an efficient exact solution. What I can and will do though, is use one of the heuristic approaches which tend to yield reasonable results in a more efficient time complexity. In fact. I am going to go with the nearest neighbour method, which if I recall is a simple and easy-to-implement heuristic for finding a suboptimal solution to the problem.

I'll start by selecting San Francisco as the starting point, and then the method will iteratively identify the nearest unvisited city and adds it to the tour. This process continues until all cities have been visited, and the algorithm returns the resulting tour. Is this a suboptimal solution? Absolutely. Can it potentially lead to worst case routes? Yes, but it's not common. We could contrive a graph for which this methodology would yield worst-case results, but in reality it tends to average above 25% worse than an exact solution, which for O(n^2), I can live with. Keep in mind this problem's exact solution requires a combinatorial solution which sits in a factorial complexity zone. That's abysmal. No way Jose. Anyway, here are some more pros and cons about the method:

### Pros:

The nearest neighbor algorithm is simple and easy to understand.
It can be implemented quickly and has a low time complexity of O(n^2).
The algorithm works well on small to medium-sized instances of the traveling salesman problem.

### Cons:

The nearest neighbor algorithm is not guaranteed to find the optimal solution to the traveling salesman problem.
Normally the algorithm can be sensitive to the choice of random starting city, which can lead to very different solutions for different starting points.
The resulting tour may be significantly longer than the optimal tour, especially for large instances of the traveling salesman problem.

# My Assumptions On This Problem and things I'd do to improve upon them

### Travel distance is straight-line

I am making the assumption that this political candidate is able to travel in a straight line between all the available cities. I am assuming this so that I can plot distances using a Haversine formula because it simplifies the problem for me and because I don't want to query the maps api 256^2 times in order to more accurately envision this problem. Hire me and I will that and more. Just watch.

### First item in cities_all.csv is my starting location

Upon writing the method, I am assuming that since San Francisco is the first element in the tour list, the first element is cities_all.csv is where we will be starting. I could change this, such that the tsp method accepted a given city to start in, provided as a string, but then we would run into validation logic regarding making sure that we address potential duplicates (Vancouver, BC vs Vancouver, WA or the many, many, many, Springfields that exist in the USA). I don't feel that this should be the responsibility of the tsp method itself, perhaps a class method available to a class supporting this problem... Either way, the solution here is that tsp.js should expect a well-formatted input regardless, so I am skipping the formatting step and just trusting that the data provided is formatted how we want, ie the first entry in the csv is the starting/ending city.

### It's okay to fly straight back to SF after getting really far away

My other assumption is that it is okay to simply route through all the cities, starting in SF and then fly back to SF for the last rally on the tour. This seems to me to be a reasonable approach, but if I have time after wrtiting the tests and docs, I would like to change this. My approach then would be to create two new cities arrays starting in SF, and progressively add the nearest unvisited city to each one, taking turns. Then, I will reverse the second array of cities and combine them, so that the tour has cities to hit as it moves both away and toward San Francisco.

# How to run the code

1. Clone the repo and install required dependencies. (npm install or yarn, etc)
2. cd into the main folder urbanLogiqInterview1
3. run `node src/tsp.js'
4. output file will be generated in the root folder with a path suggested by my algorithm, complete with incremental and cumulative distance for each new stop.
5. console will log the path and distance.

# Output

Just in case you miss it, or can't get this to run, here is my output:

City,State,Latitude,Longitude,IncrementalDistance,CumulativeDistance
San Francisco, California, 37.7749295, -122.4194155, 0km, 0km
South San Francisco, California, 37.654656, -122.4077498, 13km, 13km
San Mateo, California, 37.5629917, -122.3255254, 13km, 26km
San Leandro, California, 37.7249296, -122.1560768, 23km, 49km
San Ramon, California, 37.7799273, -121.9780153, 17km, 66km
Pleasanton, California, 37.6624312, -121.8746789, 16km, 82km
Brentwood, California, 37.931868, -121.6957863, 34km, 116km
Tracy, California, 37.7396513, -121.4252227, 32km, 148km
Stockton, California, 37.9577016, -121.2907796, 27km, 175km
Davis, California, 38.5449065, -121.7405167, 76km, 251km
Roseville, California, 38.7521235, -121.2880059, 46km, 297km
Folsom, California, 38.6779591, -121.1760583, 13km, 309km
Yuba City, California, 39.1404477, -121.6169108, 64km, 373km
Chico, California, 39.7284944, -121.8374777, 68km, 441km
Napa, California, 38.2975381, -122.286865, 164km, 605km
Vallejo, California, 38.1040864, -122.2566367, 22km, 627km
San Jose, California, 37.3382082, -121.8863286, 91km, 718km
Campbell, California, 37.2871651, -121.9499568, 8km, 726km
Merced, California, 37.3021632, -120.4829677, 130km, 856km
Clovis, California, 36.8252277, -119.7029194, 87km, 943km
Simi Valley, California, 34.2694474, -118.781482, 296km, 1239km
Glendale, California, 34.1425078, -118.255075, 50km, 1290km
Rosemead, California, 34.0805651, -118.072846, 18km, 1308km
El Monte, California, 34.0686206, -118.0275667, 4km, 1312km
Arcadia, California, 34.1397292, -118.0353449, 8km, 1320km
West Covina, California, 34.0686208, -117.9389526, 12km, 1332km
Whittier, California, 33.9791793, -118.032844, 13km, 1345km
La Mirada, California, 33.9172357, -118.0120086, 7km, 1352km
Bell Gardens, California, 33.9652918, -118.1514588, 14km, 1366km
Montebello, California, 34.0165053, -118.1137535, 7km, 1373km
Carson, California, 33.8316745, -118.281693, 26km, 1399km
Redondo Beach, California, 33.8491816, -118.3884078, 10km, 1409km
Rancho Palos Verdes, California, 33.7444613, -118.3870173, 12km, 1420km
Long Beach, California, 33.7700504, -118.1937395, 18km, 1438km
Fountain Valley, California, 33.7091847, -117.9536697, 23km, 1462km
Santa Ana, California, 33.7455731, -117.8678338, 9km, 1470km
Orange, California, 33.7877944, -117.8531119, 5km, 1475km
Yorba Linda, California, 33.8886259, -117.8131125, 12km, 1487km
Chino Hills, California, 33.9898188, -117.7325848, 13km, 1501km
Chino, California, 34.0122346, -117.688944, 5km, 1505km
Ontario, California, 34.0633443, -117.6508876, 7km, 1512km
Rancho Cucamonga, California, 34.1063989, -117.5931084, 7km, 1519km
Fontana, California, 34.0922335, -117.435048, 15km, 1534km
Colton, California, 34.0739016, -117.3136547, 11km, 1545km
Redlands, California, 34.0555693, -117.1825381, 12km, 1557km
Moreno Valley, California, 33.9424658, -117.2296717, 13km, 1571km
Perris, California, 33.7825194, -117.2286478, 18km, 1589km
Menifee, California, 33.6971468, -117.185294, 10km, 1599km
Temecula, California, 33.4936391, -117.1483648, 23km, 1622km
Vista, California, 33.2000368, -117.2425355, 34km, 1656km
Poway, California, 32.9628232, -117.0358646, 33km, 1688km
Santee, California, 32.8383828, -116.9739167, 15km, 1703km
Laguna Niguel, California, 33.5225261, -117.7075526, 102km, 1805km
Aliso Viejo, California, 33.5676842, -117.7256083, 5km, 1811km
Irvine, California, 33.6839473, -117.7946942, 14km, 1825km
Newport Beach, California, 33.6189101, -117.9289469, 14km, 1840km
Apple Valley, California, 34.5008311, -117.1858759, 120km, 1959km
Palm Desert, California, 33.7222445, -116.3744556, 114km, 2073km
Calexico, California, 32.6789476, -115.4988834, 142km, 2215km
Lake Havasu City, Arizona, 34.483901, -114.3224548, 228km, 2444km
Bullhead City, Arizona, 35.1359386, -114.5285981, 75km, 2518km
Prescott Valley, Arizona, 34.6100243, -112.315721, 210km, 2729km
Surprise, Arizona, 33.6292337, -112.3679279, 109km, 2838km
Mesa, Arizona, 33.4151843, -111.8314724, 55km, 2893km
Gilbert, Arizona, 33.3528264, -111.789027, 8km, 2901km
Chandler, Arizona, 33.3061605, -111.8412502, 7km, 2908km
Oro Valley, Arizona, 32.3909071, -110.966488, 131km, 3039km
Tucson, Arizona, 32.2217429, -110.926479, 19km, 3058km
Las Cruces, New Mexico, 32.3199396, -106.7636538, 392km, 3449km
El Paso, Texas, 31.7775757, -106.4424559, 67km, 3517km
Roswell, New Mexico, 33.3942655, -104.5230242, 254km, 3771km
Midland, Texas, 31.9973456, -102.0779146, 277km, 4048km
Abilene, Texas, 32.4487364, -99.7331439, 226km, 4274km
Fort Worth, Texas, 32.7554883, -97.3307658, 228km, 4501km
Bedford, Texas, 32.844017, -97.1430671, 20km, 4521km
Frisco, Texas, 33.1506744, -96.8236116, 45km, 4567km
Allen, Texas, 33.1031744, -96.6705503, 15km, 4582km
Rowlett, Texas, 32.9029017, -96.56388, 24km, 4606km
Longview, Texas, 32.5007037, -94.7404891, 176km, 4783km
Beaumont, Texas, 30.080174, -94.1265562, 275km, 5058km
Friendswood, Texas, 29.5293998, -95.2010447, 120km, 5179km
Pearland, Texas, 29.5635666, -95.2860474, 9km, 5188km
Houston, Texas, 29.7604267, -95.3698028, 23km, 5211km
Round Rock, Texas, 30.5082551, -97.678896, 237km, 5448km
Corpus Christi, Texas, 27.8005828, -97.396381, 302km, 5750km
Edinburg, Texas, 26.3017374, -98.1633432, 183km, 5933km
Norman, Oklahoma, 35.2225668, -97.4394777, 994km, 6928km
Oklahoma City, Oklahoma, 35.4675602, -97.5164276, 28km, 6956km
Edmond, Oklahoma, 35.6528323, -97.4780954, 21km, 6977km
Enid, Oklahoma, 36.3955891, -97.8783911, 90km, 7067km
Topeka, Kansas, 39.0558235, -95.6890185, 353km, 7420km
Kansas City, Kansas, 39.114053, -94.6274636, 92km, 7512km
St. Joseph, Missouri, 39.7674578, -94.846681, 75km, 7587km
Des Moines, Iowa, 41.6005448, -93.6091064, 229km, 7816km
Ames, Iowa, 42.034722, -93.62, 48km, 7864km
Cedar Falls, Iowa, 42.5348993, -92.4453161, 111km, 7976km
Burnsville, Minnesota, 44.7677424, -93.2777226, 257km, 8233km
Eagan, Minnesota, 44.8041322, -93.1668858, 10km, 8242km
Maplewood, Minnesota, 44.9530215, -92.9952153, 21km, 8264km
Coon Rapids, Minnesota, 45.1732394, -93.3030063, 34km, 8298km
Maple Grove, Minnesota, 45.0724642, -93.4557877, 16km, 8315km
Plymouth, Minnesota, 45.0105194, -93.4555093, 7km, 8321km
Minnetonka, Minnesota, 44.9211836, -93.4687489, 10km, 8331km
Shakopee, Minnesota, 44.7973962, -93.5272861, 15km, 8346km
Duluth, Minnesota, 46.7866719, -92.1004852, 247km, 8593km
Wausau, Wisconsin, 44.9591352, -89.6301221, 279km, 8872km
Milwaukee, Wisconsin, 43.0389025, -87.9064736, 254km, 9126km
Wheeling, Illinois, 42.1391927, -87.9289591, 100km, 9226km
Schaumburg, Illinois, 42.0333607, -88.0834059, 17km, 9244km
Hanover Park, Illinois, 41.9994722, -88.1450735, 6km, 9250km
Carpentersville, Illinois, 42.1211364, -88.2578582, 16km, 9267km
Calumet City, Illinois, 41.6155909, -87.5294871, 82km, 9349km
South Bend, Indiana, 41.6763545, -86.2519898, 106km, 9455km
Noblesville, Indiana, 40.0455917, -86.0085955, 182km, 9638km
Lawrence, Indiana, 39.8386516, -86.0252612, 23km, 9661km
Cincinnati, Ohio, 39.1031182, -84.5120196, 153km, 9814km
Kettering, Ohio, 39.6895036, -84.1688274, 72km, 9886km
Dayton, Ohio, 39.7589478, -84.1916069, 8km, 9894km
Huber Heights, Ohio, 39.843947, -84.1246608, 11km, 9905km
Toledo, Ohio, 41.6639383, -83.555212, 208km, 10113km
Ann Arbor, Michigan, 42.2808256, -83.7430378, 70km, 10183km
Livonia, Michigan, 42.36837, -83.3527097, 34km, 10217km
Lincoln Park, Michigan, 42.2505943, -83.1785361, 19km, 10236km
Royal Oak, Michigan, 42.4894801, -83.1446485, 27km, 10263km
Warren, Michigan, 42.5144566, -83.0146526, 11km, 10274km
Troy, Michigan, 42.6064095, -83.1497751, 15km, 10289km
East Lansing, Michigan, 42.7369792, -84.4838654, 110km, 10399km
Cleveland, Ohio, 41.49932, -81.6943605, 268km, 10667km
Akron, Ohio, 41.0814447, -81.5190053, 49km, 10716km
Youngstown, Ohio, 41.0997803, -80.6495194, 73km, 10789km
Erie, Pennsylvania, 42.1292241, -80.085059, 124km, 10912km
Buffalo, New York, 42.8864468, -78.8783689, 130km, 11042km
Altoona, Pennsylvania, 40.5186809, -78.3947359, 266km, 11309km
Hagerstown, Maryland, 39.6417629, -77.7199932, 113km, 11422km
Frederick, Maryland, 39.4142688, -77.4105409, 37km, 11459km
Gaithersburg, Maryland, 39.1434406, -77.2013705, 35km, 11494km
Washington, District of Columbia, 38.9071923, -77.0368707, 30km, 11523km
Bowie, Maryland, 39.0067768, -76.7791365, 25km, 11548km
Annapolis, Maryland, 38.9784453, -76.4921829, 25km, 11573km
Camden, New Jersey, 39.9259463, -75.1196199, 158km, 11731km
Allentown, Pennsylvania, 40.6084305, -75.4901833, 82km, 11814km
New Brunswick, New Jersey, 40.4862157, -74.4518188, 89km, 11902km
Perth Amboy, New Jersey, 40.5067723, -74.2654234, 16km, 11918km
Union City, New Jersey, 40.6975898, -74.2631635, 21km, 11939km
East Orange, New Jersey, 40.767323, -74.2048677, 9km, 11949km
New York, New York, 40.7127837, -74.0059413, 18km, 11966km
Yonkers, New York, 40.9312099, -73.8987469, 26km, 11992km
New Rochelle, New York, 40.9114882, -73.7823549, 10km, 12002km
White Plains, New York, 41.0339862, -73.7629097, 14km, 12016km
Norwalk, Connecticut, 41.117744, -73.4081575, 31km, 12047km
Danbury, Connecticut, 41.394817, -73.4540111, 31km, 12078km
Shelton, Connecticut, 41.3164856, -73.0931641, 31km, 12110km
Waterbury, Connecticut, 41.5581525, -73.0514965, 27km, 12137km
Springfield, Massachusetts, 42.1014831, -72.589811, 72km, 12208km
Worcester, Massachusetts, 42.2625932, -71.8022934, 67km, 12276km
Fitchburg, Massachusetts, 42.5834228, -71.8022955, 36km, 12311km
Nashua, New Hampshire, 42.7653662, -71.467566, 34km, 12345km
Haverhill, Massachusetts, 42.7762015, -71.0772796, 32km, 12377km
Peabody, Massachusetts, 42.5278731, -70.9286609, 30km, 12407km
Malden, Massachusetts, 42.4250964, -71.066163, 16km, 12423km
Cambridge, Massachusetts, 42.3736158, -71.1097335, 7km, 12430km
Newton, Massachusetts, 42.3370413, -71.2092214, 9km, 12439km
Waltham, Massachusetts, 42.3764852, -71.2356113, 5km, 12444km
Woburn, Massachusetts, 42.4792618, -71.1522765, 13km, 12458km
Woonsocket, Rhode Island, 42.0028761, -71.5147839, 61km, 12518km
Providence, Rhode Island, 41.8239891, -71.4128343, 22km, 12540km
New Bedford, Massachusetts, 41.6362152, -70.934205, 45km, 12585km
Hempstead, New York, 40.7062128, -73.6187397, 247km, 12832km
Atlantic City, New Jersey, 39.3642834, -74.4229266, 164km, 12996km
Scranton, Pennsylvania, 41.408969, -75.6624122, 250km, 13247km
Schenectady, New York, 42.8142432, -73.9395687, 211km, 13458km
Charlottesville, Virginia, 38.0293059, -78.4766781, 656km, 14114km
Lynchburg, Virginia, 37.4137536, -79.1422464, 90km, 14204km
Roanoke, Virginia, 37.2709704, -79.9414266, 72km, 14276km
Chapel Hill, North Carolina, 35.9131996, -79.0558445, 170km, 14447km
Raleigh, North Carolina, 35.7795897, -78.6381787, 40km, 14487km
Greenville, North Carolina, 35.612661, -77.3663538, 116km, 14604km
Wilmington, North Carolina, 34.2257255, -77.9447102, 163km, 14767km
Mount Pleasant, South Carolina, 32.8323225, -79.8284258, 233km, 15000km
Goose Creek, South Carolina, 32.9810059, -80.0325867, 25km, 15025km
Hilton Head Island, South Carolina, 32.216316, -80.752608, 109km, 15134km
Columbia, South Carolina, 34.0007104, -81.0348144, 200km, 15334km
Spartanburg, South Carolina, 34.9495672, -81.9320482, 134km, 15468km
Macon, Georgia, 32.8406946, -83.6324022, 282km, 15750km
Columbus, Georgia, 32.4609764, -84.9877094, 134km, 15884km
Auburn, Alabama, 32.6098566, -85.4807825, 49km, 15933km
Montgomery, Alabama, 32.3668052, -86.2999689, 81km, 16014km
Dothan, Alabama, 31.2232313, -85.3904888, 153km, 16168km
Valdosta, Georgia, 30.8327022, -83.2784851, 206km, 16373km
Jacksonville, Florida, 30.3321838, -81.655651, 165km, 16539km
Sanford, Florida, 28.8028612, -81.269453, 174km, 16713km
Orlando, Florida, 28.5383355, -81.3792365, 31km, 16744km
Titusville, Florida, 28.6122187, -80.8075537, 56km, 16800km
Pinellas Park, Florida, 27.8428025, -82.6995443, 204km, 17004km
Fort Myers, Florida, 26.640628, -81.8723084, 157km, 17161km
Bonita Springs, Florida, 26.339806, -81.7786972, 35km, 17196km
Weston, Florida, 26.1003654, -80.3997748, 140km, 17336km
Miramar, Florida, 25.9860762, -80.3035602, 16km, 17352km
Hialeah, Florida, 25.8575963, -80.2781057, 15km, 17366km
North Miami Beach, Florida, 25.9331488, -80.1625463, 14km, 17381km
Coral Gables, Florida, 25.72149, -80.2683838, 26km, 17407km
Homestead, Florida, 25.4687224, -80.4775569, 35km, 17442km
Delray Beach, Florida, 26.4614625, -80.0728201, 118km, 17559km
Wellington, Florida, 26.6617635, -80.2683571, 30km, 17589km
Mobile, Alabama, 30.6953657, -88.0398912, 881km, 18469km
Gulfport, Mississippi, 30.3674198, -89.0928155, 107km, 18577km
Hattiesburg, Mississippi, 31.3271189, -89.2903392, 108km, 18685km
Southaven, Mississippi, 34.9889818, -90.0125913, 413km, 19098km
Germantown, Tennessee, 35.0867577, -89.8100858, 21km, 19119km
Collierville, Tennessee, 35.042036, -89.6645266, 14km, 19133km
North Little Rock, Arkansas, 34.769536, -92.2670941, 239km, 19372km
Little Rock, Arkansas, 34.7464809, -92.2895948, 3km, 19376km
Cape Girardeau, Missouri, 37.3058839, -89.5181476, 378km, 19754km
Florissant, Missouri, 38.789217, -90.322614, 179km, 19933km
St. Peters, Missouri, 38.7874699, -90.6298922, 27km, 19960km
Jefferson City, Missouri, 38.5767017, -92.1735164, 136km, 20096km
Columbia, Missouri, 38.9517053, -92.3340724, 44km, 20140km
Springfield, Illinois, 39.7817213, -89.6501481, 248km, 20388km
Decatur, Illinois, 39.8403147, -88.9548001, 60km, 20448km
Bloomington, Illinois, 40.4842027, -88.9936873, 72km, 20520km
Franklin, Tennessee, 35.9250637, -86.8688899, 540km, 21060km
Smyrna, Tennessee, 35.9828412, -86.5186045, 32km, 21092km
Murfreesboro, Tennessee, 35.8456213, -86.39027, 19km, 21111km
Madison, Alabama, 34.6992579, -86.7483318, 132km, 21243km
Norfolk, Virginia, 36.8507689, -76.2858726, 973km, 22216km
Grand Island, Nebraska, 40.9263957, -98.3420118, 1956km, 24172km
Rapid City, South Dakota, 44.0805434, -103.2310149, 532km, 24704km
Casper, Wyoming, 42.866632, -106.313081, 283km, 24987km
Fort Collins, Colorado, 40.5852602, -105.084423, 273km, 25261km
Loveland, Colorado, 40.3977612, -105.0749801, 21km, 25282km
Commerce City, Colorado, 39.8083196, -104.9338675, 67km, 25348km
Denver, Colorado, 39.7392358, -104.990251, 9km, 25357km
Aurora, Colorado, 39.7294319, -104.8319195, 14km, 25371km
Castle Rock, Colorado, 39.3722121, -104.8560902, 40km, 25411km
Draper, Utah, 40.5246711, -111.8638226, 611km, 26021km
Riverton, Utah, 40.521893, -111.9391023, 6km, 26028km
Logan, Utah, 41.7369803, -111.8338359, 135km, 26163km
Idaho Falls, Idaho, 43.4916514, -112.0339645, 196km, 26359km
Bozeman, Montana, 45.6769979, -111.0429339, 255km, 26614km
Missoula, Montana, 46.8787176, -113.996586, 263km, 26878km
Coeur d'Alene, Idaho, 47.6776832, -116.7804664, 228km, 27106km
Spokane Valley, Washington, 47.6732281, -117.2393748, 34km, 27140km
Yakima, Washington, 46.6020711, -120.5058987, 274km, 27414km
Auburn, Washington, 47.3073228, -122.2284532, 152km, 27567km
Bellevue, Washington, 47.610377, -122.2006786, 34km, 27601km
Kirkland, Washington, 47.6814875, -122.2087353, 8km, 27608km
Redmond, Washington, 47.6739881, -122.121512, 7km, 27615km
Everett, Washington, 47.9789848, -122.2020794, 34km, 27649km
Marysville, Washington, 48.0517637, -122.1770818, 8km, 27658km
Keizer, Oregon, 44.9901194, -123.0262077, 347km, 28004km
Eugene, Oregon, 44.0520691, -123.0867536, 104km, 28109km
Bend, Oregon, 44.0581728, -121.3153096, 142km, 28250km
Medford, Oregon, 42.3265152, -122.8755949, 230km, 28481km
Reno, Nevada, 39.5296329, -119.8138027, 404km, 28884km
Nampa, Idaho, 43.5407172, -116.5634624, 522km, 29406km
St. George, Utah, 37.0965278, -113.5684164, 760km, 30166km
San Francisco, California, 37.7749295, -122.4194155, 785km, 30951km
