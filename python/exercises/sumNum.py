def sumNum(a, b):
    sum = 0
    for i in range(a, b):
        sum += 1
    print("Sum of", a, "+", b, "is", sum)


def main():
    sumNum(1, 11)
    sumNum(20, 38)
    sumNum(35, 50)


main()
