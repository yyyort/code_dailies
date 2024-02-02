/*
 Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

Examples
2149583361 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0"
NETWORKS BITS ALGORITHMS
 * */ 

function int32ToIp(int32){
  let bits = [1]
  for(let i = 0; i < 31; i++){
    bits.push(bits[i] * 2)
  }
  
  //convert decimal to binary
  let raw = ''
  for(let i = bits.length - 1; i >= 0; i--){
    if(int32 >= bits[i]){
      int32 -= bits[i]
      raw += '1'
    }else{
      raw += '0'
    }
  }
  
  let first = raw.slice(0,8)
  let second = raw.slice(8,16)
  let third = raw.slice(16,24)
  let fourth = raw.slice(24,32)
  
  let f_octet = 0
  let s_octet = 0
  let t_octet = 0
  let fo_octet = 0
  
  
  for(let i = 0; i < 8; i++){
     if(first[i] == '1'){
        f_octet += bits[7 - i]
      }
  }
  
  for(let i = 0; i < 8; i++){
     if(second[i] == '1'){
        s_octet += bits[7 - i]
      }
  }
  
  for(let i = 0; i < 8; i++){
     if(third[i] == '1'){
        t_octet += bits[7 - i]
      }
  }
  
  for(let i = 0; i < 8; i++){
     if(fourth[i] == '1'){
        fo_octet += bits[7 - i]
      }
  }

  
  return `${f_octet}.${s_octet}.${t_octet}.${fo_octet}`
}


