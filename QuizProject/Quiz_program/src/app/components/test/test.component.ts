import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { questions } from '../../questions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent/* implements OnInit */{
  questions = questions;
  qId = 0;
  answerChecked = new FormControl();
  answerChecked2 = new FormControl();
  answerChecked3 = new FormControl();
  answerChecked4 = new FormControl();
  points = 0;
  answers = [];

  saveAnswers() {
    this.answerChecked.value ? questions[this.qId].userAnswers.push(this.answerChecked.value) : questions[this.qId].userAnswers.push(false);
    this.answerChecked2.value ? questions[this.qId].userAnswers.push(this.answerChecked2.value) : questions[this.qId].userAnswers.push(false);
    this.answerChecked3.value ? questions[this.qId].userAnswers.push(this.answerChecked3.value) : questions[this.qId].userAnswers.push(false);
    this.answerChecked4.value ? questions[this.qId].userAnswers.push(this.answerChecked4.value) : questions[this.qId].userAnswers.push(false);
    
    this.answerChecked.reset();
    this.answerChecked2.reset();
    this.answerChecked3.reset();
    this.answerChecked4.reset();
    
    var temp = true;
    for (let index = 0; index < questions[this.qId].solution.length; index++) {
      if(this.questions[this.qId].solution[index] != this.questions[this.qId].userAnswers[index]) {
        temp = false;
      }
    }
    if(temp) {
      this.points++;
    }
  }

  nextQuestion(id: number) {
    if (this.qId == questions.length - 2) {
      document.getElementById('next').innerText = "Leadás";
      this.saveAnswers();
      this.qId++;
    } else if (this.qId == questions.length) { 
      this.saveAnswers();
      this.qId++;
    } else {
      this.saveAnswers();
      this.qId++;
    }
  }

  chosen(i, j) {
    if (questions[i].userAnswers[j])
      return "chosen";
    else
      return "";
  }
}