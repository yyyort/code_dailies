/*
Mount the Bowling Pins!
Task:
Did you ever play Bowling? Short: You have to throw a bowl into 10 Pins arranged like this:

I I I I  # each Pin has a Number:    7 8 9 10
 I I I                                4 5 6
  I I                                  2 3
   I                                    1
You will get an array of integers between 1 and 10, e.g. [3, 5, 9], and have to remove them from the field like this:

I I   I
 I   I
  I   
   I   
Return a string with the current field.

Note that:
The pins rows are separated by a newline (\n)
Each Line must be 7 chars long
Fill the missing pins with a space character ( )
Have fun!

ARRAYSSTRINGSFUNDAMENTALS
*/

String bowling_pins(List<int> pins) {
  // Code here
  String rows = "I I I I\n I I I \n  I I  \n   I   ";
  print(rows.length);
  
  for(int i = 0; i < pins.length; i++){
    switch(pins[i]){
        case 1:
        rows = rows.replaceRange(27,28, " ");
        break;
        case 2:
        rows = rows.replaceRange(18,19, " ");
        break;
        case 3:
        rows = rows.replaceRange(20,21, " ");
        break;
        case 4:
        rows = rows.replaceRange(9,10, " ");
        break;
        case 5:
        rows = rows.replaceRange(11,12, " ");
        break;
        case 6:
        rows = rows.replaceRange(13,14, " ");
        break;
        case 7:
        rows = rows.replaceRange(0,1, " ");
        break;
        case 8:
        rows = rows.replaceRange(2,3, " ");
        break;
        case 9:
        rows = rows.replaceRange(4,5, " ");
        break;
        case 10:
        rows = rows.replaceRange(6,7, " ");
        break;
    }
  }
  
  return rows;
}
