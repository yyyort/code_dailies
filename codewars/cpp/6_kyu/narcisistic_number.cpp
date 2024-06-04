#include <iostream>
#include <string>
#include <cmath>

bool narcissistic( int value ){
    //Code away
    std::string stringVal = std::to_string(value);
    int length = stringVal.length();

    int sum = 0;
  
    for (int i  = 0; i < length; i++){
        int val = stringVal[i] - '0';
        atoi(&stringVal[i]);
        sum += pow(val, length);
    }

    if (sum == value){
        return true;
    } else {
        return false;
    }

}
