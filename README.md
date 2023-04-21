# urbanLogicInterview1
A coding challenge for a company I think is super rad

# Problem Description

Presidential Campaign Challenge
===============================

The Problem
-----------
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

Sample Input
------------
City,State,Latitude,Longitude
San Francisco,California,37.7749295,-122.4194155
Aliso Viejo,California,33.5676842,-117.7256083
Rapid City,South Dakota,44.0805434,-103.2310149
Coon Rapids,Minnesota,45.1732394,-93.3030063
Malden,Massachusetts,42.4250964,-71.066163
Noblesville,Indiana,40.0455917,-86.0085955
Delray Beach,Florida,26.4614625,-80.0728201

Sample Output
-------------
San Francisco
Aliso Viejo
Rapid City
Coon Rapids
Noblesville
Malden
Delray Beach
San Francisco
11334

Challenge Notes
---------------
  1. You should be provided, along with this file, a file called
  "cities_all.csv" that contains the full list of cities.
  
  2. You may use any programming language or environment to complete this
  challenge. 

  3. Please submit all source code and output when you
  are complete.

  3. This challenge should take no more than 4 hours of your time. After you
  have received the challenge, you have 48 hours to respond with your
  contribution.
  
  # My Thoughts On This Problem
  
  Well damn guys, I didn't anticipate you to up and give me a version of the travelling salesman problem. This is a pretty classic NP-hard dilemma, and I'm not about to solve it with an efficient exact solution. What I can and will do though, is use one of the heuristic approaches which tend to yield reasonable results in a more efficient time complexity. In fact. I am going to go with the nearest neighbour method, which if I recall is a simple and easy-to-implement heuristic for finding a suboptimal solution to the problem. 
  
I'll start by selecting San Francisco as the starting point, and then the method will iteratively identify the nearest unvisited city and adds it to the tour. This process continues until all cities have been visited, and the algorithm returns the resulting tour. Is this a suboptimal solution? Absolutely. Can it potentially lead to worst case routes? Yes, but it's not common. We could contrive a graph for which this methodology would yield worst-case results, but in reality it tends to average above 25% worse than an exact solution, which for O(n^2), I can live with. Keep in mind this problem's exact solution requires a combinatorial solution which sits in a factorial complexity zone. That's abysmal. No way Jose. Anyway, here are some more pros and cons about the method:

Pros:
The nearest neighbor algorithm is simple and easy to understand.
It can be implemented quickly and has a low time complexity of O(n^2).
The algorithm works well on small to medium-sized instances of the traveling salesman problem.

Cons:
The nearest neighbor algorithm is not guaranteed to find the optimal solution to the traveling salesman problem.
Normally the algorithm can be sensitive to the choice of random starting city, which can lead to very different solutions for different starting points. 
The resulting tour may be significantly longer than the optimal tour, especially for large instances of the traveling salesman problem.
