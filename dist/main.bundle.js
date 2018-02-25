webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* AppComponent's private CSS styles */\r\nh1 {\r\n    font-size: 1.2em;\r\n    color: #999;\r\n    margin-bottom: 0;\r\n  }\r\nh2 {\r\n    font-size: 2em;\r\n    margin-top: 0;\r\n    padding-top: 0;\r\n  }\r\nnav a {\r\n    padding: 5px 10px;\r\n    text-decoration: none;\r\n    margin-top: 10px;\r\n    display: inline-block;\r\n    background-color: #eee;\r\n    border-radius: 4px;\r\n  }\r\nnav a:visited, a:link {\r\n    color: #607D8B;\r\n  }\r\nnav a:hover {\r\n    color: #039be5;\r\n    background-color: #CFD8DC;\r\n  }\r\nnav a.active {\r\n    color: #039be5;\r\n  }\r\n/*\r\n  Copyright 2017-2018 Google Inc. All Rights Reserved.\r\n  Use of this source code is governed by an MIT-style license that\r\n  can be found in the LICENSE file at http://angular.io/license\r\n  */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<h1>\n    Welcome to {{ title }}!\n</h1>\n  \n  <router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__url_constants_AppUrlValues__ = __webpack_require__("../../../../../src/app/url-constants/AppUrlValues.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url_constants_AppUrlValuesInjectionToken__ = __webpack_require__("../../../../../src/app/url-constants/AppUrlValuesInjectionToken.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tictactoe_tictactoe_component__ = __webpack_require__("../../../../../src/app/tictactoe/tictactoe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__sudoku_sudoku_component__ = __webpack_require__("../../../../../src/app/sudoku/sudoku.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tictactoe_tictactoe_service__ = __webpack_require__("../../../../../src/app/tictactoe/tictactoe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tictactoe_model_game_with_fields_mapper__ = __webpack_require__("../../../../../src/app/tictactoe/model/game-with-fields-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: 'tictactoe', component: __WEBPACK_IMPORTED_MODULE_8__tictactoe_tictactoe_component__["a" /* TictactoeComponent */] },
    { path: 'sudoku', component: __WEBPACK_IMPORTED_MODULE_10__sudoku_sudoku_component__["a" /* SudokuComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tictactoe_tictactoe_component__["a" /* TictactoeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__sudoku_sudoku_component__["a" /* SudokuComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_9__angular_router__["b" /* RouterModule */].forRoot(routes, { enableTracing: false })
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_4__url_constants_AppUrlValuesInjectionToken__["a" /* AppUrlValuesInjectionToken */], useValue: __WEBPACK_IMPORTED_MODULE_3__url_constants_AppUrlValues__["a" /* AppUrlValues */] },
                __WEBPACK_IMPORTED_MODULE_11__tictactoe_tictactoe_service__["a" /* TicTacToeService */],
                __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_12__tictactoe_model_game_with_fields_mapper__["a" /* GameWithFieldsMapper */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@CHARSET \"ISO-8859-1\";\r\n\r\n:root {\r\n\t--size: 200px;\r\n}\r\n\r\nbody {\r\n\tpadding: 0;\r\n \tmargin: 0;\r\n}\r\n\r\n/* Welcome bar */\r\n\r\n.bar {\r\n\tmargin: 2% 0px 2% 0px;\r\n\tbackground-color: #5c616b;\r\n\tpadding: 5px;\r\n\tcolor: white;\r\n}\r\n\r\n/* Thumbnails */\r\n\r\n.thumbnail-item {\r\n\tdisplay:inline-block;\r\n}\r\n\r\n.thumbnail-bar>.thumbnail-item img {\r\n\twidth: var(--size);\r\n\theight: var(--size);\r\n}\r\n\r\n.thumbnail-bar>.thumbnail-item .button-box {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n}\r\n\r\n.thumbnail-bar>.thumbnail-item .button-box>button {\r\n\t-webkit-box-flex: 1;\r\n\t    -ms-flex: 1;\r\n\t        flex: 1;\r\n}\r\n\r\n/* Infotext */\r\n\r\n.infobox {\r\n\tmargin: 10px;\r\n\tmin-width: 30px;\r\n\tdisplay: inline-block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class = \"bar\">Welcome to the game portal test</div>\n\n<div class = \"thumbnail-bar\">\n\t<div class = \"thumbnail-item\">\n\t\t<a><img src=\"./assets/sudoku-thumbnail.PNG\" alt=\"sudoku\" (mouseenter)=\"createSudokuInfo()\" (mouseleave)=\"clearInfo()\"/></a>\n\t\t<div class = \"button-box\">\n   \t\t\t<button class=\"play-sudoku\" (click)=\"playSudoku()\">Play</button>\n\t\t</div>\n\t</div>\n\t<div class = \"thumbnail-item\">\n\t\t<a><img src=\"./assets/tictactoe-thumbnail.PNG\" alt=\"thumbnail\" (mouseenter)=\"createTicTacToeInfo()\" (mouseleave)=\"clearInfo()\"/></a>\n\t\t<div class = \"button-box\">\n      \t\t<button class=\"play-tictactoe\" (click)=\"playTicTacToe()\">Play</button>\n\t\t</div>\n\t</div>\n</div>\n\n<div class = \"infobox\" >{{description}}</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__url_constants_AppUrlValuesInjectionToken__ = __webpack_require__("../../../../../src/app/url-constants/AppUrlValuesInjectionToken.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(dashboardService, router, config) {
        this.dashboardService = dashboardService;
        this.router = router;
        this.config = config;
        this.description = "";
    }
    DashboardComponent.prototype.createTicTacToeInfo = function () {
        var _this = this;
        this.dashboardService.getDescriptionForTicTacToe(this.config.descriptionTictactoe).subscribe(function (description) { return _this.setDescriptionWithDelay(description); });
    };
    DashboardComponent.prototype.playTicTacToe = function () {
        this.navigate(this.config.playTicTacToe);
    };
    DashboardComponent.prototype.createSudokuInfo = function () {
        var _this = this;
        this.dashboardService.getDescriptionForSudoku(this.config.descriptionSudoku).subscribe(function (description) { return _this.setDescriptionWithDelay(description); });
    };
    DashboardComponent.prototype.playSudoku = function () {
        this.navigate(this.config.playSudoku);
    };
    DashboardComponent.prototype.clearInfo = function () {
        this.description = "";
    };
    DashboardComponent.prototype.getDescription = function () {
        return this.description;
    };
    DashboardComponent.prototype.setDescriptionWithDelay = function (description) {
        var _this = this;
        setTimeout(function () {
            _this.description = description;
        }, 700);
    };
    DashboardComponent.prototype.navigate = function (url) {
        this.router.navigate([url]);
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__url_constants_AppUrlValuesInjectionToken__["a" /* AppUrlValuesInjectionToken */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], Object])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__description__ = __webpack_require__("../../../../../src/app/dashboard/description.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardService = /** @class */ (function () {
    function DashboardService(httpClient) {
        this.httpClient = httpClient;
    }
    DashboardService.prototype.getDescriptionForSudoku = function (url) {
        return this.fetchDescription(url);
    };
    DashboardService.prototype.getDescriptionForTicTacToe = function (url) {
        return this.fetchDescription(url);
    };
    DashboardService.prototype.fetchDescription = function (url) {
        var _this = this;
        return this.httpClient.get(url).
            map(function (res) { return new __WEBPACK_IMPORTED_MODULE_3__description__["a" /* Description */](res['name'], res['numberOfPlayers']); }).
            map(function (description) { return _this.descriptionAsText(description); });
    };
    DashboardService.prototype.descriptionAsText = function (description) {
        return "This game is called " + description.getName() + " and the number of players is " + description.getNumberOfPlayers();
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "../../../../../src/app/dashboard/description.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Description; });
var Description = /** @class */ (function () {
    function Description(name, numberOfPlayers) {
        this.name = name;
        this.numberOfPlayers = numberOfPlayers;
        this.name = name;
        this.numberOfPlayers = numberOfPlayers;
    }
    Description.prototype.getName = function () {
        return this.name;
    };
    Description.prototype.getNumberOfPlayers = function () {
        return this.numberOfPlayers;
    };
    return Description;
}());



/***/ }),

/***/ "../../../../../src/app/sudoku/sudoku.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sudoku/sudoku.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not yet implemented\n</p>\n\n<button class=\"button-back\" (click)=\"goToDashboard()\">Go to dashboard</button>"

/***/ }),

/***/ "../../../../../src/app/sudoku/sudoku.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SudokuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__url_constants_AppUrlValuesInjectionToken__ = __webpack_require__("../../../../../src/app/url-constants/AppUrlValuesInjectionToken.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var SudokuComponent = /** @class */ (function () {
    function SudokuComponent(router, config) {
        this.router = router;
        this.config = config;
    }
    SudokuComponent.prototype.goToDashboard = function () {
        this.router.navigate([this.config.dashboard]);
    };
    SudokuComponent.prototype.ngOnInit = function () {
    };
    SudokuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sudoku',
            template: __webpack_require__("../../../../../src/app/sudoku/sudoku.component.html"),
            styles: [__webpack_require__("../../../../../src/app/sudoku/sudoku.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__url_constants_AppUrlValuesInjectionToken__["a" /* AppUrlValuesInjectionToken */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], Object])
    ], SudokuComponent);
    return SudokuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tictactoe/model/game-with-fields-mapper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameWithFieldsMapper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game_with_fields__ = __webpack_require__("../../../../../src/app/tictactoe/model/game-with-fields.ts");

var GameWithFieldsMapper = /** @class */ (function () {
    function GameWithFieldsMapper() {
    }
    ;
    GameWithFieldsMapper.prototype.asEntity = function (wrapper) {
        return new __WEBPACK_IMPORTED_MODULE_0__game_with_fields__["a" /* GameWithFields */](wrapper.game.id, wrapper.game.lastModified, wrapper.game.description, wrapper.game.status, wrapper.fields);
    };
    return GameWithFieldsMapper;
}());



/***/ }),

/***/ "../../../../../src/app/tictactoe/model/game-with-fields.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameWithFields; });
var GameWithFields = /** @class */ (function () {
    function GameWithFields(_id, _lastModified, _description, _status, _fields) {
        this._id = _id;
        this._lastModified = _lastModified;
        this._description = _description;
        this._status = _status;
        this._fields = _fields;
    }
    Object.defineProperty(GameWithFields.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameWithFields.prototype, "fields", {
        get: function () {
            return this._fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameWithFields.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    return GameWithFields;
}());



/***/ }),

/***/ "../../../../../src/app/tictactoe/tictactoe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tictactoe/tictactoe.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  tictactoe works!\n</p>\n\n<button class = \"button-back\" (click)=\"goToDashboard()\">Go to dashboard</button>\n"

/***/ }),

/***/ "../../../../../src/app/tictactoe/tictactoe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TictactoeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__url_constants_AppUrlValuesInjectionToken__ = __webpack_require__("../../../../../src/app/url-constants/AppUrlValuesInjectionToken.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tictactoe_service__ = __webpack_require__("../../../../../src/app/tictactoe/tictactoe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TictactoeComponent = /** @class */ (function () {
    function TictactoeComponent(router, config, service) {
        this.router = router;
        this.config = config;
        this.service = service;
    }
    TictactoeComponent.prototype.goToDashboard = function () {
        this.router.navigate([this.config.dashboard]);
    };
    TictactoeComponent.prototype.ngOnInit = function () {
        this.service.fetchNewGame(this.config.newgame).subscribe(function (res) {
            console.log(res);
        });
    };
    TictactoeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-tictactoe',
            template: __webpack_require__("../../../../../src/app/tictactoe/tictactoe.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tictactoe/tictactoe.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__url_constants_AppUrlValuesInjectionToken__["a" /* AppUrlValuesInjectionToken */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], Object, __WEBPACK_IMPORTED_MODULE_3__tictactoe_service__["a" /* TicTacToeService */]])
    ], TictactoeComponent);
    return TictactoeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tictactoe/tictactoe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicTacToeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_game_with_fields_mapper__ = __webpack_require__("../../../../../src/app/tictactoe/model/game-with-fields-mapper.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TicTacToeService = /** @class */ (function () {
    function TicTacToeService(http, mapper) {
        this.http = http;
        this.mapper = mapper;
        this.HTTP_STATUS_OK = 200;
    }
    TicTacToeService.prototype.fetchNewGame = function (url) {
        var _this = this;
        return this.http.get(url, { observe: 'response' }).map(function (httpResponse) {
            if (httpResponse.status !== _this.HTTP_STATUS_OK) {
                throw new Error("response does not have HttpStatus 200 but " + httpResponse.status + ". " + httpResponse.statusText);
            }
            ;
            var res = httpResponse.body;
            return _this.mapper.asEntity(res);
        });
    };
    TicTacToeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__model_game_with_fields_mapper__["a" /* GameWithFieldsMapper */]])
    ], TicTacToeService);
    return TicTacToeService;
}());



/***/ }),

/***/ "../../../../../src/app/url-constants/AppUrlValues.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUrlValues; });
var AppUrlValues = {
    url1: "some-url",
    descriptionSudoku: "./assets/description-sudoku.json",
    descriptionTictactoe: "./assets/description-tictactoe.json",
    playSudoku: 'sudoku',
    playTicTacToe: 'tictactoe',
    dashboard: 'dashboard',
    newgame: 'http://localhost:8080/gameportal/game/load-tictactoe'
};


/***/ }),

/***/ "../../../../../src/app/url-constants/AppUrlValuesInjectionToken.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppUrlValuesInjectionToken; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");

var AppUrlValuesInjectionToken = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('AppUrlValues.ts');


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map