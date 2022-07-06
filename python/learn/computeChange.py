amount = eval(input("Enter the amount: "))

totalCents = int(amount * 100)

totalDollars = totalCents // 100

remainingCents = totalCents % 100

totalQuarters = remainingCents // 25

remainingCents = remainingCents % 25

totalDimes = remainingCents // 10

remainingCents = remainingCents % 10

totalNickels = remainingCents // 5

remainingCents = remainingCents % 5

totalPennies = remainingCents

print(totalDollars, "Dollars \n", totalQuarters, "Quarters\n", totalDimes, "Dimes\n", totalNickels, "Nickles\n", totalPennies, "Pennies")
