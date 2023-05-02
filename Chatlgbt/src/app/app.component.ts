import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputText: string = '';
  outputText: string = '';
  apiKey: string = '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';

  constructor(private http: HttpClient) { }

  generateText() {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.apiKey);

    const data = {
      prompt: this.inputText,
      temperature: 0.5,
      max_tokens: 50,
      model: 'text-davinci-002'
    };

    this.http.post<any>('https://api.openai.com/v1/chat/completions', data, { headers })
      .subscribe(response => {
        this.outputText = response.choices[0].text;
      });
  }


}
