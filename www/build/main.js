webpackJsonp([0],{

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_local_notifications__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Alarm = (function () {
    function Alarm(title, alertTime) {
        this.title = title || '';
        this.alertTime = alertTime || { minutes: 0, hours: 0 };
    }
    return Alarm;
}());
var HomePage = (function () {
    function HomePage(navCtrl, alertCtrl, localNotifications) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.localNotifications = localNotifications;
        this.alarms = [];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        var Myupdate = setInterval(function () {
            var currentDate = new Date();
            _this.alarms.forEach(function (alarm) {
                console.log("l'alarm :");
                //alarm.alertTime = new Date(alarm.alertTime);
                console.log(alarm);
                if (currentDate.getHours() === alarm.alertTime.hours && currentDate.getMinutes() === alarm.alertTime.minutes) {
                    /*if (
                      currentDate.getHours() === alarm.alertTime.getHours()
                      //&& currentDate.getMinutes() === 34
                    )*/
                    _this.alert(alarm);
                    console.log(currentDate);
                }
            });
        }, 1000);
    };
    HomePage.prototype.alert = function (alarm) {
        this.localNotifications.schedule({
            title: alarm.title,
            text: 'Time Out',
            led: 'FF0000'
        });
    };
    HomePage.prototype.onTimeChange = function (alarm) {
        console.log("this time ", this.time);
        //    this.time = moment(this.time, "HH:mm");
        var test = this.time.split(":");
        var testH = parseInt(test[0]);
        var testM = parseInt(test[1]);
        alarm.alertTime.hours = testH;
        alarm.alertTime.minutes = testM;
        console.log(alarm);
    };
    /*
        clock() {
            this.time = moment().format('h:mm:ss a');
      }
     */
    HomePage.prototype.add = function (alarm) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Add reminder',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Enter a title',
                } /*,
                {
                  label: 'Monday',type: 'radio',
                  
                },
                {
                  type: 'radio',
                  label: 'Tuesday'
                },
                {
                  type: 'radio',
                  label: 'Wednesday'
                },
                {
                  type: 'radio',
                  label: 'Thursday'
                },
                {
                  type: 'radio',
                  label: 'Friday'
                },
                {
                  type: 'radio',
                  label: 'Saturday'
                },
                {
                  type: 'radio',
                  label: 'Sunday'
                }*/
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Add',
                    handler: function (data) {
                        _this.alarms.push(new Alarm(data.title));
                    },
                },
            ],
        });
        prompt.present();
    };
    HomePage.prototype.edit = function (alarm) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Edit reminder',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Edit the title'
                } /*,
                {
                  type: 'radio',
                  label: 'Monday'
                },
                {
                  type: 'radio',
                  label: 'Tuesday'
                },
                {
                  type: 'radio',
                  label: 'Wednesday'
                },
                {
                  type: 'radio',
                  label: 'Thursday'
                },
                {
                  type: 'radio',
                  label: 'Friday'
                },
                {
                  type: 'radio',
                  label: 'Saturday'
                },
                {
                  type: 'radio',
                  label: 'Sunday'
                }*/
            ],
            buttons: [
                {
                    text: 'Cancel',
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var index = _this.alarms.indexOf(alarm);
                        if (index > -1) {
                            _this.alarms[index] = new Alarm(data.title);
                        }
                    },
                },
            ],
        });
        prompt.present();
    };
    HomePage.prototype.delete = function (alarm) {
        var index = this.alarms.indexOf(alarm);
        if (index > -1) {
            this.alarms.splice(index, 1);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nicolas/Desktop/reminder/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Reminder\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="outer-content">\n  <ion-list>\n    <ion-item-sliding *ngFor="let alarm of alarms">\n      <ion-item>\n        <ion-label>{{alarm.title}}</ion-label>\n        <ion-datetime displayFormat="HH:mm" [(ngModel)]="time" (ngModelChange)="onTimeChange(alarm)"></ion-datetime>\n        <ion-toggle value="foo" checked=""></ion-toggle>\n      </ion-item>\n      <ion-item-options side="right">\n        <button (click)=\'edit(alarm)\' ion-button color="primary">\n          <ion-icon name="text"></ion-icon>\n         Edit\n        </button>\n      </ion-item-options>\n\n      <ion-item-options side="left">\n        <button (click)=\'delete(alarm)\' ion-button color="danger">\n          <ion-icon name="delete"></ion-icon>\n          Delete\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n  <ion-fab center bottom>\n    <button (click)=\'add(alarm)\' ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/nicolas/Desktop/reminder/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_local_notifications__["a" /* LocalNotifications */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_background_mode__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_background_mode__["a" /* BackgroundMode */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_local_notifications__["a" /* LocalNotifications */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(195);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, backgroundMode) {
        var _this = this;
        this.backgroundMode = backgroundMode;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.backgroundMode.enable();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nicolas/Desktop/reminder/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/nicolas/Desktop/reminder/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_background_mode__["a" /* BackgroundMode */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map