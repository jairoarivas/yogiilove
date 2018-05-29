"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/Rx");
var Observable_1 = require("rxjs/Observable");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var MembersService = /** @class */ (function () {
    function MembersService(_http) {
        this._http = _http;
        this._baseURL = 'api/members';
        this._pointURL = 'api/addPoint';
        this._removeURL = 'api/removePoint';
    }
    MembersService.prototype.read = function (userId) {
        return this._http
            .get(this._baseURL + "/" + userId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MembersService.prototype.pointList = function () {
        return this._http
            .get(this._pointURL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MembersService.prototype.addPoint = function (user) {
        return this._http
            .put(this._pointURL + "/" + user._id, user)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MembersService.prototype.removePoint = function (user) {
        return this._http
            .put(this._removeURL + "/" + user._id, user)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MembersService.prototype.update = function (user) {
        return this._http
            .put(this._baseURL + "/" + user._id, user)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MembersService.prototype.delete = function (userId) {
        return this._http
            .delete(this._baseURL + "/" + userId)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MembersService.prototype.list = function () {
        return this._http
            .get(this._baseURL)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    MembersService.prototype.handleError = function (error) {
        return Observable_1.Observable.throw(error.json().message || 'Server error');
    };
    MembersService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], MembersService);
    return MembersService;
}());
exports.MembersService = MembersService;
//# sourceMappingURL=members.service.js.map