import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
    name: 'textCutting'
})
export class TextCutting implements PipeTransform {
  transform(text: string): string {
    return text.substring(0, 200) + "...";
  }
} 