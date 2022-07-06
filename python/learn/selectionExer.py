import random

num1 = random.randint(0,9)
num2 = random.randint(0,9)

if num1 < num2: 
   num1, num2 = num2, num1

result = num1 - num2

answer = eval(input("What is " + str(num1) +  " - " +  str(num2) + " : " ))

if result == answer:
   print("You're correct!")
else:
   print("Incorrect, the answer is: ", result)
