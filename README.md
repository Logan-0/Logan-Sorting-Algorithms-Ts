# The logan-sorting-alogrithms-ts Package contains methods for sorting number arrays using (Bubble, Selection, Merge).

### But Not Just Sorting. This Package is a fully explained sorting method.

### This is useful for teaching and/or remembering how each method works.

### It does sort your specific number array, but also provides examples of both code, and concept.

### Let's get started.

#### 1. bubbleSortExample(ArrayToBeSorted: number[])
- Takes one argument, your number array, sorts it, slowly
- Bubble Sort is never recommended, but very easy to implement
- Legend has it network television used this for sorting programming. Think of it as that level of speed.
- Numbers Bubble Up. Largest numbers slowly migrate up the array indices.

#### 2. selectionSortExample(ArrayToBeSorted: number[])
- Takes one argument, your number array, sorts it.
- Selection Sort is in place so even if it isn't the fastest for something large, it has simple space requirements.
- Recommended for general use by myself, idk maybe someone better than I recommends it too.
- For if you don't want to remember Quick Sort
- Almost an inverse of Bubble Sort it uses the minimum values to sort.

#### 3. mergeSort(ArrayToBeSorted: number[])
- Takes one argument, yournumber array, sorts it, at decent speed.
- This is used commonplace when data is large enough loading data is an issue.
- This sort tends to be used externally, i.e. not-in-place
- We follow the divide and conquer principle.
- Sorting is easier one at a time, from the ground up.
- Small arrays may be slower than necessary

### Outputs...

#### This is a lot going through your terminal. Stretch it like a 8.5x11 word doc and enjoy.

// Used for all sorting methods to show implementation.
`const sandboxArray = new Array(46, 75, 92, 8, 11, 0, 64, 79, 17, 50)`



// Output Bubble Sort
```
Array Sorting Step-by-Step with Bubble

Example Array Original:  [46,75,92,8,11,0,64,79,17,50] 

Bubble Compares the First 2 Elements: 46, and 75
46 < 75, So we DON'T need to change them.

Example Array [46,75,92,8,11,0,64,79,17,50] 

Bubble Compares the next 2 Elements: 75, and 92
75 < 92, So we DON'T need to change them.

Example Array [46,75,92,8,11,0,64,79,17,50] 

Bubble Compares the next 2 Elements: 92, and 8
92 > 8, So we DO need to change them.

Example Array [46,75,"[",8,92,"]",11,0,64,79,17,50] 

Bubble Compares the next 2 Elements: 92, and 11
92 > 11, So we DO need to change them.

Example Array [46,75,8,"[",11,92,"]",0,64,79,17,50] 

Bubble Compares the next 2 Elements: 92, and 0
92 > 0, So we DO need to change them.

Example Array [46,75,8,11,"[",0,92,"]",64,79,17,50] 

Bubble Compares the next 2 Elements: 92, and 64
92 > 64, So we DO need to change them.

Example Array [46,75,8,11,0,"[",64,92,"]",79,17,50] 

Bubble Compares the next 2 Elements: 92, and 79
92 > 79, So we DO need to change them. AGAIN

Example Array [46,75,8,11,0,64,"[",79,92,"]",17,50] 

Bubble Compares the next 2 Elements: 92, and 17
92 > 17, So we DO need to change them. AGAIN

Example Array [46,75,8,11,0,64,79,"[",17,92,"]",50] 

Bubble Compares the next 2 Elements: 92, and 50
92 > 50, So we DO need to change them. AGAIN, Once More

You'll notice 92 started in a low position and is BUBBLING UP the positions of the array
Example Array [46,75,"92 Started Here[",8,"]",11,0,64,79,17,50,"[",92,"] and makes it to the end"] 


Bubble Sort then Starts over and repeats this process until done.
This is slow. DO NOT USE, TOO SLOW, Bubble Sort just makes a point not progress!


Bubble Sort Code (Swap Included in Package):

function bubblesort(ArrayToBeSorted: number[]) {
 for ( let i = 0; i < ArrayToBeSorted.size - 1; i++; )
 {
     for ( let j = 0; j < ArrayToBeSorted - ArrayToBeSorted.size - 1; j++ )
     {
         if (ArrayToBeSorted[j] > ArrayToBeSorted[j+1]) 
         {
             Swap (ArrayToBeSorted , j , j+1) 
         }
     }
 }
}


Your sorted array by position using bubble sort:

Element Position: 0, Element Value: 0 

Element Position: 1, Element Value: 8 

Element Position: 2, Element Value: 11 

Element Position: 3, Element Value: 17 

Element Position: 4, Element Value: 46 

Element Position: 5, Element Value: 50 

Element Position: 6, Element Value: 64 

Element Position: 7, Element Value: 75 

Element Position: 8, Element Value: 79 

Element Position: 9, Element Value: 92 
```


// Output Selection Sort
```
Array Sorting Step-by-Step with Selection Sort

Example Array Original:  [46,75,92,8,11,0,64,79,17,50] 

We first temporarily hold the first value of the array. 46

Selection Sort next finds the minimum value in the array. 0

This value goes into the first position. 46, and 0 are Swapped.


Selection sort then repeatedly scans over and over until left to right we have smallest to largest respectively.


This sorting method is quick in many situations

Selection Sort Code (Swap Included in Package):

function selectionSort(ArrayToBeSorted: number[]) {
 var i, j, min 
 var n = ArrayToBeSorted.length;
 for ( i = 0; i < n; i++; ) {
    min = i; 
    for ( j = i+1; j < n; j++) {
        if ( ArrayToBeSorted[j] < ArrayToBeSorted[min]) {
            min = j;
        }
    }
    if (min != i) {
        swap(ArrayToBeSorted, i, min)
    }
 }
}


Your sorted array by position using selection sort:

Element Position: 0, Element Value: 0 

Element Position: 1, Element Value: 8 

Element Position: 2, Element Value: 11 

Element Position: 3, Element Value: 17 

Element Position: 4, Element Value: 46 

Element Position: 5, Element Value: 50 

Element Position: 6, Element Value: 64 

Element Position: 7, Element Value: 75 

Element Position: 8, Element Value: 79 

Element Position: 9, Element Value: 92
```



// Output Merge Sort
```
Array Sorting Step-by-Step with Merge Sort

Example Array Original:  [46,75,92,8,11,0,64,79,17,50] 

Merge Sort is Divide and Conquer

First we split our original array into two seperate arrays.

We find the length of the array (-1) due to arrays starting at 0 and divide by two. This is our midpoint.


This array has 10 elements (-1). Because this is an array we will take 9 and divide it in half

Midpoint is 4.5, in this case of halfway from 4 to 5, we can choose which side of the midpoint we want to divide the array on.

In this example we will choose the left side to slice the array.


Example Array Left Side:  [46,75,92,8,11]  and Example Array Right Side [0,64,79,17,50] 

Now in coding Merge Sort we have to do a check before each time we divide the array up.

We check that the index of the beginning of the array is less than the end.

The reason this is done is because once the array is divided enough, the array length at some point will be 1.

The left is not less than the right with a single element.


Once we get down to having many arrays of 1 element each we rebuild our array. Sorted.

Below is the array divide in half until we have 10 individual, 1 element arrays.
Example Array 1 (Left Side split, this is the left)  [46,75]  Example Array 2 (Left side split, this is the right)  [92,8,11]
Example Array 3 (Right side split, this is the left)  [0,64]  Example Array 4 (Right side split, this is the right)  [79,17,50]
Our Steps So Far: 
[46,75,92,8,11,0,64,79,17,50]
1.  [46,75,92,8,11]  and 2.  [0,64,79,17,50]
1.  [46,75]  2.  [92,8,11]  3.  [0,64]  4.  [79,17,50]
Process Continues...
1.  [46]  2.  [75]  3.  [92]  4.  [8,11]  5.  [0]  6.  [64]  7.  [79]  8.  [17,50] 

We can't split Array 1 down any further, this is that check to make sure the first element is less than the last element.

We continue to split what we can and the final splits have the arrays as follows.


Arrays 1-10:

[46]   [75]   [92]   [8]   [11]   [0]   [64]   [79]   [17]   [50] 


We will then compare and bring the array back together.

1 and 2 compare elements and we make new array 11  [46,75] 

3 and 4 compare elements and we make new array 12  [8,92] 

5 and 6 compare elements and we make new array 13  [0,11] 

7 and 8 compare elements and we make new array 14  [64,79] 

9 and 10 compare elements and we make new array 15  [17,50] 


Visualizing them in a line shows we are more correctly sorted than we started but there is more to do.


Example Array Original:  [46,75,92,8,11,0,64,79,17,50] 

Halfway Complete in order 11,12,13,14,15:  [46,75] [8,92] [0,11] [64,79] [17,50] 


Merge Again While Sorting: 

11 and 12 compare elements and we make new array 16  [8,46,75,92] 

13 and 14 compare elements and we make new array 17  [0,11,64,79] 

We will merge 15 with 17 for array 18:  [0,11,17,50,64,79] 


Visualizing 3/4ths Sorted: 

3/4th Complete in order 16,18  [8,46,75,92] [0,11,17,50,64,79] 

16, and 17 make new array 19:  [0,8,11,46,64,75,79,92] 

Finally we add in the finall array of 18 and our final array, array 20, is complete and sorted.


Array 20:  [0,8,11,17,46,50,64,75,79,92] 


Merge Sort Code (Swap Included in Package and Merge Sort is Divided into 2 Functions):

function merge(ArrayToBeSorted: number[], left: number, middle: number, right: number) {
 var n1 = middle - left + 1; 
 var n2 = right - middle; 


// Create new temporary arrays. 
 var L = new Array(n1); 
 var R = new Array(n2); 


// Copy data to temporary arrays. 
 for (var i = 0; i < n1; i++; ) {
    L[i] = ArrayToBeSorted[Left + i]; 
 } 
 for (var j = 0; j < n2; j++) {
     R[j] = ArrayToBeSorted[middle + 1 + j];
 }


// Merge the temporary arrays
// Create first index of each array
 var i = 0;
 var j = 0;
 var k = left;


// Copy remaining elements if there are any
 while ( i < n1 && j < n2 ) {
     if (L[i] <= R[j]) { 
         ArrayToBeSorted[k] = L[i]; 
         i++; 
     } else { 
         ArrayToBeSorted[k] = R[j]; 
         j++; 
     } 
     k++; 
     while (j < n2) { 
         ArrayToBeSorted[k] = R[j]; 
         j++; 
         k++; 
     } 
     while (j < n2) { 
         ArrayToBeSorted[k] = R[j]; 
         j++; 
         k++; 
     } 
} 


function mergeSort(ArrayToBeSorted: number[], left: number, right: number) { 
     if ( left >= right) { 
         return; // Returns recursively 
     } 
     var middle = left + parseInt((right - left)/2); 
     mergeSort(ArrayToBeSorted, left, middle); 
     mergeSort(ArrayToBeSorted, middle+1, right); 
     merge(ArrayToBeSorted, left, middle, right); 
} 




Your sorted array by position using merge sort:

Element Position: 0, Element Value: 0 

Element Position: 1, Element Value: 8 

Element Position: 2, Element Value: 11 

Element Position: 3, Element Value: 17 

Element Position: 4, Element Value: 46 

Element Position: 5, Element Value: 50 

Element Position: 6, Element Value: 64 

Element Position: 7, Element Value: 75 

Element Position: 8, Element Value: 79 

Element Position: 9, Element Value: 92 
```