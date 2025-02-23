name = ["Anu", "Hasna", "Riya", "Siya", "Jiya", "Niya","Piya"]
age = [20, 20, 21, 19, 23, 19, 24]
duplicates = set()
for val in set(age):
    if age.count(val) > 1:
        duplicates.add(val)
print(duplicates, "are the duplicate element.")
        