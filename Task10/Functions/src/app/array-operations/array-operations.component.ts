import { Component } from '@angular/core';

@Component({
  selector: 'app-array-operations',
  standalone: true,
  imports: [],
  templateUrl: './array-operations.component.html',
  styleUrl: './array-operations.component.css'
})
export class ArrayOperationsComponent {

}

let myArray: string[] = [];

function parseArray() {
    const input = document.getElementById('array-input') as HTMLInputElement;
    myArray = input.value.split(',').map(item => item.trim());
    updateOutput();
}

function getArrayLength() {
    alert(Array Length: ${myArray.length});
}

function arrayToString() {
    alert(Array toString: ${myArray.toString()});
}

function arrayPop() {
    const poppedItem = myArray.pop();
    updateOutput(Pop item: ${poppedItem});
}

function addItem() {
    const newItem = prompt('new:');
    myArray.push(newItem || '');
    updateOutput(Item added: ${newItem});
}

function arrayShift() {
    const shiftedItem = myArray.shift();
    updateOutput(Shifted one: ${shiftedItem});
}

function addFrontItem() {
    const newItem = prompt('Enter new item:');
    myArray.unshift(newItem || '');
    updateOutput(Item added at the front: ${newItem});
}

function joinArray() {
    const separator = prompt('Join with:');
    const joinedArray = myArray.join(separator || '');
    updateOutput(Joined array: ${joinedArray});
}

function deleteItem() {
    const index = prompt('Index to delete:');
    if (index !== null && !isNaN(Number(index))) {
        delete myArray[Number(index)];
        updateOutput(Deleted item at index ${index});
    }
}

function concatArray() {
    const input = prompt('Enter comma-separated values:');
    const newArray = input.split(',').map(item => item.trim());
    myArray = myArray.concat(newArray);
    updateOutput(New array: ${newArray.join(', ')});
}

function flatArray() {
    const depth = prompt('Enter depth:');
    myArray = myArray.flat(parseInt(depth) || 1);
    updateOutput(Array flattened to depth ${depth});
}

function spliceArray() {
    const start = prompt('Start index:');
    const deleteCount = prompt('Number of items to delete:');
    const itemsToAdd = prompt('Items to add (comma-separated):');
    const itemsToAddArray = itemsToAdd.split(',').map(item => item.trim());
    const removedItems = myArray.splice(parseInt(start) || 0, parseInt(deleteCount) || 0, ...itemsToAddArray);
    updateOutput(Spliced array, removed: ${removedItems.join(', ')}, added: ${itemsToAddArray.join(', ')});
}

function sliceArray() {
    const start = prompt('Start index:');
    const end = prompt('End index:');
    const slicedArray = myArray.slice(parseInt(start) || 0, parseInt(end) || myArray.length);
    updateOutput(Sliced array: ${slicedArray.join(', ')});
}

function updateOutput(message?: string) {
    const outputBox = document.getElementById('output-box') as HTMLDivElement;
    myArray = myArray.filter(Boolean);
    outputBox.innerText = Array: ${myArray.join(', ')}\n${message || ''};
}