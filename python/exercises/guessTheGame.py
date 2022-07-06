import random


rNum = random.randint(1, 100)


def theMagic(num, ans):
    halfRNum = num / 2
    if ans > num:
        print("too high")
    elif halfRNum <= ans < num:
        print("low, too close")
    elif ans < halfRNum:
        print("too low")


while True:
    answer = eval(input("Guess a number between 0 and 100: "))
    if rNum == answer:
        print("yes, the number is", rNum)
        break
    elif answer != rNum:
        theMagic(rNum, answer)
