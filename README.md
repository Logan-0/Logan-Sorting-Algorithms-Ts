# Sorting Algorithms with Explinations of Bubble, and Selection - By Logan.

<<<<<<< HEAD
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
=======
### This package is a sorts while explaining how two popular sort algorithms work.

#### 1. bubbleSort(ArrayToBeSorted: number[])
- Takes one argument a number array
- Bubble Sort is very easy to implement
- Numbers Bubble Up. Largest numbers slowly migrate up the array indices
- Legend has it network television used this for sorting programming

#### 2. selectionSort(ArrayToBeSorted: number[])
- Takes one argument a number array
- Selection Sort is in-place
- Recommended for general use



### Example Input
`const sandboxArray = new Array(46, 75, 92, 8, 11, 0, 64, 79, 17, 50)`

### Process Bubble Sort

Array Sorting Step-by-Step with Bubble

Example Array Original:  `[46,75,92,8,11,0,64,79,17,50]` 

Bubble Compares the First 2 Elements: 46, and 75
46 < 75, So we DON'T need to change them

Example Array `[46,75,92,8,11,0,64,79,17,50]`

Bubble Compares the next 2 Elements: 75, and 92
75 < 92, So we DON'T need to change them

Example Array `[46,75,92,8,11,0,64,79,17,50]` 

Bubble Compares the next 2 Elements: 92, and 8
92 > 8, So we DO need to change them

Example Array `[46,75,"[",8,92,"]",11,0,64,79,17,50]`

Bubble Compares the next 2 Elements: 92, and 11
92 > 11, So we DO need to change them

Example Array `[46,75,8,"[",11,92,"]",0,64,79,17,50]`

Bubble Compares the next 2 Elements: 92, and 0
92 > 0, So we DO need to change them

Example Array `[46,75,8,11,"[",0,92,"]",64,79,17,50]`

Bubble Compares the next 2 Elements: 92, and 64
92 > 64, So we DO need to change them

Example Array `[46,75,8,11,0,"[",64,92,"]",79,17,50]`

Bubble Compares the next 2 Elements: 92, and 79
92 > 79, So we DO need to change them

Example Array `[46,75,8,11,0,64,"[",79,92,"]",17,50]`

Bubble Compares the next 2 Elements: 92, and 17
92 > 17, So we DO need to change them

Example Array `[46,75,8,11,0,64,79,"[",17,92,"]",50]`

Bubble Compares the next 2 Elements: 92, and 50
92 > 50, So we DO need to change them

You'll notice 92 started in a low position and is BUBBLING UP the positions of the array to the end

Bubble Sort repeats this process until done

### Outputs Bubble Sort
```
>>>>>>> 14a6f79115551bbbaefa6d3cb22cca248cbe0d9d

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

<<<<<<< HEAD
=======

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

### Process Selection Sort

Array Sorting Step-by-Step with Selection Sort

Example Array Original:  `[46,75,92,8,11,0,64,79,17,50]`

We first temporarily hold the first value of the array. 46

Selection Sort next finds the minimum value in the array. 0

This value goes into the first position. 46, and 0 are Swapped.

Selection sort then repeatedly scans until left to right we have smallest to largest

This sorting method is often quick

### Outputs Selection Sort
```

>>>>>>> 14a6f79115551bbbaefa6d3cb22cca248cbe0d9d
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

<<<<<<< HEAD
function mergeSort(ArrayToBeSorted: number[], left: number, right: number) { 
     if ( left >= right) { 
         return; // Returns recursively 
     } 
     var middle = left + parseInt((right - left)/2); 
     mergeSort(ArrayToBeSorted, left, middle); 
     mergeSort(ArrayToBeSorted, middle+1, right); 
     merge(ArrayToBeSorted, left, middle, right); 
}
```
=======

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
>>>>>>> 14a6f79115551bbbaefa6d3cb22cca248cbe0d9d
