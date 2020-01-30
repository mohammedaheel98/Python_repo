import math
A = float(input())
if (A<0):  
	print("Error")
else:
	circumference = 2*math.pi*A
	print("{:.2f}".format(circumference))
