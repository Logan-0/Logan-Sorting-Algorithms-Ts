/**
* 
* Logan's Simple Array Sorter
* Date Started: 08/12/22
* Date Last Updated: 09/15/24
* Last Updated By: Logan-0
* 
*/

/**
 * The SWAP function
 * 
 * Starting Values, TEMP = Null, 1 = *1, 2 = *2
 * 
 * 
 * The idea is we make a TEMP, and put first element in it
 * TEMP = *1, then 
 * we put the second element in the first location
 * 1 = *2, then 
 * we can thank TEMP and use the value it held
 * 2 = *TEMP
 * 
 * 
 * 3 Arguments - The Array, The first element, and the second element
 * You need 3 arguments instead of just two for a implied placeholder
 * 
 * Otherwise the code gets NOT LONG, BUT UGLY ENOUGH YOU WISH IT WERE LONGER
 * Use This Way
 * 
 */
function swap(ArrayNeedingElementsSwapped: number[], firstPosition: number, secondPosition: number) {

    // TEMP = *1
    var tempVariableAsExtraSpace = ArrayNeedingElementsSwapped[firstPosition];

    // 1 = *2
    ArrayNeedingElementsSwapped[firstPosition] = ArrayNeedingElementsSwapped[secondPosition];

    // 2 = *TEMP
    ArrayNeedingElementsSwapped[secondPosition] = tempVariableAsExtraSpace;
}

/**
 * A Function To Print the Array with Purpose
 * 
 * Exaggerated Purpose
 * 
 */
function prettyPrintingArray(ArrayToBePrinted: number[]) {

    for (let i = 0; i < ArrayToBePrinted.length - 1; i++) {

        console.log("Element Position: " + i + ", Element Value: " + ArrayToBePrinted[i], "\n");

    }

}


/**
 * Bubble Sort
 * You know what's up
 * Level 1 Algorithm
 * 
 * Best Case is for Teaching
 * Just don't unless you must
 */

function bubbleSortExample(ArrayToBeSorted: number[]) {

    console.log("Bubble Sort Code (Swap Included in Package):\n")
    console.log("function bubblesort(ArrayToBeSorted: number[]) {")
    console.log(" for ( let i = 0; i < ArrayToBeSorted.size - 1; i++; )")
    console.log(" {")
    console.log("     for ( let j = 0; j < ArrayToBeSorted - ArrayToBeSorted.size - 1; j++ )")
    console.log("     {")
    console.log("         if (ArrayToBeSorted[j] > ArrayToBeSorted[j+1]) ")
    console.log("         {")
    console.log("             Swap (ArrayToBeSorted , j , j+1) ")
    console.log("         }")
    console.log("     }")
    console.log(" }")
    console.log("}")


    for (let i = 0; i < ArrayToBeSorted.length; i++) {
        for (let j = 0; j < ArrayToBeSorted.length - i - 1; j++) {
            if (ArrayToBeSorted[j] > ArrayToBeSorted[j + 1]) {
                swap(ArrayToBeSorted, j, j + 1)
            }
        }
    }

    console.log("\n")

    console.log("Your sorted array by position using bubble sort:\n")
    console.log(prettyPrintingArray(ArrayToBeSorted))


    return ArrayToBeSorted;
}


function selectionSortExample(ArrayToBeSorted: number[]) {

    console.log("Selection Sort Code (Swap Included in Package):\n")
    console.log("function selectionSort(ArrayToBeSorted: number[]) {")
    console.log(" var i, j, min ")
    console.log(" var n = ArrayToBeSorted.length;")
    console.log(" for ( i = 0; i < n; i++; ) {")
    console.log("    min = i; ")
    console.log("    for ( j = i+1; j < n; j++) {")
    console.log("        if ( ArrayToBeSorted[j] < ArrayToBeSorted[min]) {")
    console.log("            min = j;")
    console.log("        }")
    console.log("    }")
    console.log("    if (min != i) {")
    console.log("        swap(ArrayToBeSorted, i, min)")
    console.log("    }")
    console.log(" }")
    console.log("}")

    var n = ArrayToBeSorted.length;

    for (let i = 0; i < n; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (ArrayToBeSorted[j] < ArrayToBeSorted[min]) {

                min = j;

            }
        }
        if (min != i) {

            swap(ArrayToBeSorted, min, i);

        }
    }

    console.log("\n")
    console.log("Your sorted array by position using selection sort:\n")
    console.log(prettyPrintingArray(ArrayToBeSorted))


    return ArrayToBeSorted;

}


export = { prettyPrintingArray, swap, bubbleSortExample, selectionSortExample }