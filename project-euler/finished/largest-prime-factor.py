"""
The prime factors of 13195 are,
5,7,13, and 29

what is the largest prime factor of
the number of 600,851,475,143
"""

"""
psuedocode
list all prime number numbers = pn
init list of factors = lf

loop while true
    if n >= lf[last index] 
        break

    loop    
    if (n / pn[i]):
        (n * pn[i]) % 1 !=0
        continoue
        else:
            append list 

"""

def primeFactors(n):
    f = 2
    nf = n
    factors = []

    while True:
        if nf <= 1:
            break

        if ((nf / f) % 1) == 0:
            factors.append(f)
            nf = nf / f
        else:
            f = f + 1 

        print(f"f = {f}, nf = {nf}")

    largestFactor = max(factors)
    return factors

print(primeFactors(600851475143))

            
