# ConsumingHttpServices

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## OnInit interface 

OnInit interface is a lifecycle hook.
There are multiple lifecycle hooks in angular, such as 
- OnInit
- OnChanges
- DoCheck
- AfterContentInit
....
each of these interface has a method with same prefixed - "ng"
It does not need to be declared before all the method. 
Regardless of wherever we have declared it in the class, angular 
will call it while it is initializing the component.
we add ... implements OnInit {...}, this implement keyword adds a 
compile time checking.

Doing services at contructor is expensive.
So if we need to initialization, use ngOnInit 

## Separation of Concerns

Our classes should be responsible for only one thing. A class that 
handles too many things, violates the principle called separation of
Concerns and is hard to maintain and hard to test.
