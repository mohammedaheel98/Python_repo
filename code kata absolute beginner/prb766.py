import math
a = int(input())
def area_fun(a):
    area = (math.sqrt(3)/4)*a*a
    print("{:.2f}".format(area))
area_fun(a)
