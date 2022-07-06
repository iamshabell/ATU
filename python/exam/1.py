kg = 0.45359237
m = 0.0254

weight = eval(input("Enter your weight: "))
height = eval(input("Enter your height: "))

weight = weight * kg
height = height * m

bmi = weight / height**2

print("Your BMI is ", bmi)
