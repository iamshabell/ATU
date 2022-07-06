def subs(c, d):
    if d > c:
        c, d = d, c
    c = c - d
    return c


def main():
    return print("Substraction of C - D is", subs(15, 9))


main()
