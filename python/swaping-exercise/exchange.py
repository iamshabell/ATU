print("")
print("----- Exchange Money -----")
print("")
dollarInput = input("Enter a dollar amount: $")
dollarAmount = float(dollarInput)

shillingAmount = dollarAmount * 8500

print("You have " + "{:,}".format(shillingAmount) + " shillings")
