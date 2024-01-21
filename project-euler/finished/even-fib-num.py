""" 
fibonacci sequence
find the sum of the even-valued,
terms that do not exced N = 4m 
"""


def fibEven(n):
    n1 = 1
    n2 = 0
    n3 = 0
    terms = 0
    sumOfEven = 0
    sumValue = 0

    while True:
        n3 = n1 + n2

        if n3 >= n:
            break

        n2 = n1
        n1 = n3

        terms = terms + 1
        if n1 % 2 == 0:
            sumOfEven = sumOfEven + 1
            sumValue = sumValue + n1

        print(f'n1 = {n1}, n2 = {n2}, n3 = {n3}, terms {terms}, sum of even = {sumOfEven}, sum value = {sumValue}')


    return n1

print(fibEven(4000000))

""" 
the answer is sumValue
"""