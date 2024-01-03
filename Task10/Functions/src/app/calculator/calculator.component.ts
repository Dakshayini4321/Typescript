import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

}

function appendToInput(value: string): void {
  const firstNumberInput = document.getElementById("firstNumber") as HTMLInputElement;
  firstNumberInput.value += value;
}

function calculate(): void {
  const input = (document.getElementById("firstNumber") as HTMLInputElement).value;
  const result = eval(input);
  document.getElementById("result")!.innerText = result.toString();
}

function clearInput(): void {
  const firstNumberInput = document.getElementById("firstNumber") as HTMLInputElement;
  const resultElement = document.getElementById("result")!;
  
  firstNumberInput.value = "";
  resultElement.innerText = "0";
}