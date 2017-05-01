import { AnalyticsService, AppModule } from "./app.module";
export function PageTracking( pageName : string ) {

  return function ( constructor : any ) {
    const analyticsService = AppModule.injector.get(AnalyticsService);

    const ngOnInit = constructor.prototype.ngOnInit;

    constructor.prototype.ngOnInit = function ( ...args ) {
      analyticsService.visit(pageName);
      ngOnInit && ngOnInit.apply(this, args);
    }

    const ngOnDestroy = constructor.prototype.ngOnDestroy;

    constructor.prototype.ngOnDestroy = function ( ...args ) {
      analyticsService.leave(pageName);
      ngOnDestroy && ngOnDestroy.apply(this, args);
    }

  }
}