"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log('Departnemt: ' + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmploeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Department;
}());
exports.Department = Department;
//private keyword služi da proglasi dati property privatnim, što znači da se on može koristiti direktno samo unutar klase, ne i unutar klasa koje ga nasleđuju. (znači možemo ga pozvati samo iz metoda njegove klase)
//protected radi isto što i private samo omogućava pristup metodu/propertiju i u klasama koje ga nasleđuju.
//readonly keyword služi da označi dati property readonly, što znači da se ne može menjati, samo se može čitati. 
//Inheritance
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id) || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var accounting = new ITDepartment('d1', ['Max']);
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id) || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employees.push(name);
    };
    AccountingDepartment.prototype.addReport = function (text) {
        this.reports.push(text);
    };
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found');
        },
        enumerable: false,
        configurable: true
    });
    return AccountingDepartment;
}(Department));
