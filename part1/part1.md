1. The variable i will be printed. i was defined as a var variable which has a function-scope not a block-scope. Since line 11 is present in the same function as the one in which i was declared, it will have access to it, and print the value

2. The variable discountedPrice will be printed as updated after the last iteration of the loop. discountedPrice was defined as a var variable which has a function-scope not a block-scope. Since line 12 is present in the same function as the one in which discountedPrice was declared, it will have access to it, and print the value stored in the variable.

3. The variable finalPrice will be printed as updated after the last iteration of the loop. finalPrice is defined in the same scope as line 12 (as part of function discountedPrices). Since line 12 is present in the same function as the one in which discountedPrice was declared, it will have access to it, and print the value stored in the variable.

4. The function call will return the array with the finalPrice of every initial price in prices ([100, 200, 300]). This array will be [50, 100, 150].
i = 0
discountedPrice = 100*0.5 = 50
final = 50

i = 1
discountedPrice = 200*0.5 = 100
final = 100

i = 2
discountedPrice = 300*0.5 = 150
final = 150

5. There is an error message printed "Error: i is not defined". i is a let variable which is block-scoped not function-scoped. Line 11 is outside i's block-scope.

6. There is an error message printed. discountedPrice is a let variable which is block-scoped not function-scoped. Line 12 is outside its block-scope.

7. finalPrice will print its value since it is a let variable in the same block-scope as line 13.

8. The function call will return the array with the finalPrice of every initial price in prices ([100, 200, 300]). This array will be [50, 100, 150].
The calucations are shown in 4. The function returns discounted which is in the same block-scope as the return statement of the function.

9. There is an error message printed "Error: i is not defined". i is a let variable which is block-scoped not function-scoped. Line 11 is outside i's block-scope.

10. There is an error message printed. discountedPrice is a const variable which is block-scoped not function-scoped. Line 12 is outside its block-scope. Additionally, the contents of a const variable cannot be changed. However, the for-loop is attempting to change it with every iteration.

11. There is an error message printed. finalPrice is a const variable whose contents cannot be changed. However, with every iteration of the for-loop its value is being updated which would cause an error.

12. The function call will return the array with the finalPrice of every initial price in prices ([100, 200, 300]). This array will be [50, 100, 150].
The calucations are shown in 4. The function returns discounted which is in the same block-scope as the return statement of the function.

13. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'][name]
    E. student.courseload[1]
    
14. A. 32 (2 converts to "2" and concatenates with "3")
    B. 1 ("3" converts to 3)
    C. 3 (numeric value for null is 0)
    D. 3null (null converts to "null" and concatenates with "3")
    E. 4 (numeric value of true is 1)
    F. 0 (numeric values for false and null are 0)
    G. 3undefined (undefined converts to "undefined" and concatenates)
    H. NaN (numeric conversion of undefined is NaN)
    
15. A. true ('2' becomes the number 2)
    B. false (alphabetically 1 is less than 2)
    c. true (the values are equal even though the types are not)
    D. false (2 is a number whereas '2' is a string type)
    E. false (numeric value of true is 1 which is not equal to 2)
    F. true (Anything other than 0, undefined, NaN, null is true and the types are the same).
    
16. == only sees if the values are the same whereas === also checks to see if the types are the same.

17. How are you?
the first if statement is false since 2 == true is false (numeric value of true is 1)
the second if statement is true because boolean converts 2 to true.

19. [6,8,10] is the returned array.
When i = 0, we call doSomething in which num = 1 and callback is the function(x) { return x * 2}. Therefore, doSomething returns function(3) which is 6. hence 6 is pushed onto the newArr.
This repeats for the other iterations of i.

21. The output is as follows:
    1
    4
    3
    2



