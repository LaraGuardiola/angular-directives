import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})

//ng generate directive class (for generating this stuff)

export class ClassDirective {

  //@Input() backgroundColor: string | undefined
  //this way you can access the element that gets the selector appClass as a property

  constructor(private element: ElementRef) { 

    //NOT RECOMMENDED WAY, JUST A WORKAROUND
    /*setTimeout(() => {
      this.element.nativeElement.style.backgroundColor = this.backgroundColor
    },50)*/
  }

  /*@Input() set backgroundColor(color: string){
    this.element.nativeElement.style.backgroundColor = color
  }*/

  //other way to do it without the need to specify the property name on the html tag
  /*@Input('appClass') set backgroundColor(color: string){
    this.element.nativeElement.style.backgroundColor = color
  }*/

  @Input('appClass') set classNames(classObj: any){
    for(let key in classObj){
      if(classObj[key]){
        this.element.nativeElement.classList.add(key)
      }else{
        this.element.nativeElement.classList.remove(key)
      }
    }
  }

}
