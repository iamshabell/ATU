import random

a = random.randint(0, 9)
b = random.randint(0, 9)

if a < b:
    a, b = b, a

result = a - b

answer = eval(input("What is " + str(a) + " - " + str(b) + "? "))

while answer != result:
    answer = eval(input("What is " + str(a) + " - " +
                  str(b) + "? " + " Do it again? "))

print("You got it")
