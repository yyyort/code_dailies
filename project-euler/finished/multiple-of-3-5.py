""" 
if we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3,5,6, and 9. the sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000
"""

""" 
Psuedo code
input: number
process: output multiples of 3 or 5 under number
output: sum of multiples

process:
take n
make list
loop
    append mod of 3 or 5 in list, if not continoue
to sum values of list
loop for i in range len of list
sum = sum + i
"""

def getMultiOfThreeAndFive(number):
    list = []
    sum = 0

    for i in range(number):
        if i%3 == 0 or i%5==0:
            list.append(i)
            sum = sum + i
        else:
            continue

    return sum

print(getMultiOfThreeAndFive(1000)) 