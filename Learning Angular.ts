Learning Angular, Fourth Edition
packtpub.com
Packt
Aristeidis Bampakos, Pablo Deelema
bampakoa
https://www.packtpub.com/product/learning-angular-fourth-edition/9781803240602
https://github.com/PacktPublishing/Learning-Angular-Fourth-Edition
cd /media/tcma/SeagateBackupPlusDrive/angular15/Learning-Angular-Fourth-Edition-main

Angular 15.0.0
1 Building Your First Angular application
2 Introduction to TypeScript
3 Organizing Application into Modules
4 Enabling User Experience with Components
5 Enrich Applications using Pipes and Directives
6 Managing Complex Tasks with Services
7 Being Reactive using Observables and RxJS
8 Communicating with Data Services over HTTP
9 Navigate through Application with Routing
10 Collecting User Data with Forms
11 Introduction to Angular Material
12 Unit Test an Angular Application
13 Bringing Application to Production
14 Handling Errors and Application Debugging
Early Access
March 2023



ch05

@ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

@Input() product: Product | undefined;
@Output() bought = new EventEmitter();

  constructor(private tmplRef: TemplateRef<any>, private vc: ViewContainerRef) { }



ElementRef : Use with caution
