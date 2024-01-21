"""
largest palindrome made from the product of two 2digit
is 9009 = 91x91
find the largest palindrome of two 3 digit numbers
"""

num = 9009

def check_palindrome(num):
    num = str(num)
    flag = 0

    for i in range(len(num)):
        
        if num[i] == num[i*-1]:
            print(f"{num[i]}=={num[i*-1]}. {num}")    
            flag = flag + 1
        
    print(f"f{flag} == len{len(num)}")
    if (flag*2) >= len(num):
        return True

def two_digit_palindrome(num1, num2):
    temp = 0
    palin = 0

    while True:
        temp = num1 * num2
        print(temp)
        if check_palindrome(temp) == True:
            palin = temp
            print(palin)
            break
        else:
            num1 = num1 - 1
            

    return palin, num1, num2

ispalin = two_digit_palindrome(99, 99)
print(f"palin = {ispalin[0]}, num1 = {ispalin[1]}, num2 = {ispalin[2]}")