'''
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time
'''

def format_duration(seconds):
    #1 mins = 60
    #1 hr = 3600
    #1 day = 86400
    #1 yr = 31536000
    yr, hr, day, min, sec = 0, 0, 0, 0, 0
    if seconds >= 31536000: #yr
        yr = seconds // 31536000
        day = (seconds - (yr * 31536000)) // 86400
        hr = (seconds - (yr * 31536000) - (day * 86400))  // 3600
        min = (seconds - (yr * 31536000) - (day * 86400) - (hr * 3600 )) // 60
        sec = seconds - (yr * 31536000) - (day * 86400) - (hr * 3600 ) - (min * 60)
    elif seconds >= 86400: #day
        day = seconds // 86400
        hr = (seconds - (day * 86400)) // 3600
        min = (seconds - (day * 86400) - (hr * 3600)) // 60
        sec = seconds - (day * 86400) - (hr * 3600) - (min * 60)
    elif seconds >= 3600: #hr
        hr = seconds // 3600
        min = (seconds - (hr * 3600)) // 60
        sec = seconds - (hr * 3600) - (min * 60)
    elif seconds >= 60: #mins
        min = seconds // 60
        sec = seconds - (min * 60)
    elif seconds < 60 and seconds > 0:
        sec = seconds
    else:
        return "now"
      
    date = {}
    if yr > 0: date['year'] = yr
    if day > 0: date['day'] = day
    if hr > 0: date['hour'] = hr
    if min > 0: date['minute'] = min
    if sec > 0: date['second'] = sec
    
    format = ''
    i = 0
    for x,y in date.items():
        print(len(date))
        print(x, y)
        if i + 2 < len(date): #theres still 2 or more
            if y > 1:
                format += f'{y} {x}s, '
            elif y == 1:
                format += f'{y} {x}, '
        elif i + 1 < len(date): #theres only 2
            if y > 1:
                format += f'{y} {x}s and '
            elif y == 1:
                format += f'{y} {x} and '
        else: #theres only 1
            if y > 1:
                format += f'{y} {x}s'
            elif y == 1:
                format += f'{y} {x}'
        i+= 1
        
    return format
