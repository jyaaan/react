def longest(a, b):
    joined_sorted = sorted(set(a) | set(b))
    return ''.join(list(joined_sorted))

string_a = 'xyaabbbccccdefww'
string_b = 'xxxxyyyyabklmopq'

print(longest(string_a, string_b))