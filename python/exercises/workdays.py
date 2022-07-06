days = eval(input("Days:"))

today = eval(input("Enter current day:"))

weekdays = 7

compTodayandDays = today+days

comp = compTodayandDays % weekdays

print(comp)

if comp == 1:
    print("the day is saturday")
elif comp == 2:
    print("the day is sunday")
elif comp == 3:
    print("the day is monday")
elif comp == 4:
    print("the day is tuesday")
elif comp == 5:
    print("the day is wendesday")
elif comp == 6:
    print("the day is thursday")
elif comp == 7:
    print("the day is friday")
else:
    print("the day is 000000")
