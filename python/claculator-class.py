class calculator:
    def add(self,a,b):
        return a+b
    def sub(self,a,b):
        return a-b
    def mul(self,a,b):
        return a*b
    def div(self,a,b):
        return a/b
cal = calculator()
N = int(input("1 for add\r\n2 for sub\r\n3 for multiply\r\n4 for divison\r\nenter the operation number:\r\n"))
c = int(input("enter the value num1:"))
b = int(input("enter the value num2:"))
if (N == 1):
    print(cal.add(c,b))
if (N == 2):
    print(cal.sub(c,b))
if (N == 3):
    print(cal.mul(c,b))
if (N == 4):
    print(cal.div(c,b))
