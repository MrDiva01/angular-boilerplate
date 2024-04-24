<<<<<<< HEAD
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { Alert, AlertType } from '@app/_models';
import { AlertService } from '@app/_services';

@Component({ selector: 'alert', templateUrl: 'alert.component.html' })
export class AlertComponent implements OnInit, OnDestroy {
    @Input() id = 'default-alert';
    @Input() fade = true;

    alerts: Alert[] = [];
=======
import { Component, OnInit, OnDestroy, Input} from '@angular/core'; 
import { Router, NavigationStart} from '@angular/router';
import { Subscription } from 'rxjs';
import {Alert, AlertType} from '@app/ models";
import { AlertService } from '@app/ services";

@Component({ selector: 'alert', templateurl: 'alert.component.html' }) 
export class AlertComponent implements OnInit, OnDestroy {

    @Input() id = 'default-alert';
    @Input() fade = true;

    alerts: Alert[]= [];
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
    alertSubscription: Subscription;
    routeSubscription: Subscription;

    constructor(private router: Router, private alertService: AlertService) { }

<<<<<<< HEAD
    ngOnInit() {
        // subscribe to new alert notifications
        this.alertSubscription = this.alertService.onAlert(this.id)
            .subscribe(alert => {
                // clear alerts when an empty alert is received
                if (!alert.message) {
                    // filter out alerts without 'keepAfterRouteChange' flag
                    this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);

                    // remove 'keepAfterRouteChange' flag on the rest
                    this.alerts.forEach(x => delete x.keepAfterRouteChange);
                    return;
                }

                // add alert to array
                this.alerts.push(alert);

                // auto close alert if required
                if (alert.autoClose) {
                    setTimeout(() => this.removeAlert(alert), 3000);
                }
           });

        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
=======

ngOnInit() {

// subscribe to new alert notifications

this.alertSubscription = this.alertService.onAlert(this.id)
    .subscribe(alert => {

        // clear alerts when an empty siert is received
        if (!alert.message) {

        // filter out alerts without keepAfter RouteChange Flag 
        this.alerts = this.alerts.filter(x => x.keepAfterRouteChange);

        // renove keepAfter RouteChange flag on the rest 
        this.alerts.forEach(x => delete x. keepAfterRouteChange); 
        return;

        }

        // add alert te array
        this.alerts.push(alert);

        // auto close alert if required
        if (alert.autoClose) {
             setTimeout(() => this.removeAlert(alert), 3000);
        }
    });

        // clear alerts on location change
        this.routeSubscription = this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) { 
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
                this.alertService.clear(this.id);
            }
        });
    }

<<<<<<< HEAD
    ngOnDestroy() {
        // unsubscribe to avoid memory leaks
        this.alertSubscription.unsubscribe();
        this.routeSubscription.unsubscribe();
    }

    removeAlert(alert: Alert) {
        // check if already removed to prevent error on auto close
        if (!this.alerts.includes(alert)) return;

        if (this.fade) {
            // fade out alert
            alert.fade = true;

            // remove alert after faded out
            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        } else {
            // remove alert
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }

    cssClasses(alert: Alert) {
        if (!alert) return;

        const classes = ['alert', 'alert-dismissable'];
                
=======
        ngOnDestroy() {
            //unsubscribe to avoid memory leaks
            this.alertSubscription.unsubscribe();
            this.routeSubscription.unsubscribe();
    }

    removeAlert(alert: Alert) {

        //check if already remove to prevent error on auto close
        if(!this.alerts.includes(alert)) return;

        if (this.fade) {
        // fade out alert
        alert.fade = true;

        // remove alert after faded out 
        setTimeout(() => {
            this.alerts = this.alerts.filter(x => x !== alert);
        },250);
    } else {
        // remove alert
        this.alerts = this.alerts.filter(x => x !== alert);
    }
    }
    cssClasses(alert: Alert){
        if (!alert) return;

        const classes = ['alert', 'alert-dismissable'];

>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
        const alertTypeClass = {
            [AlertType.Success]: 'alert alert-success',
            [AlertType.Error]: 'alert alert-danger',
            [AlertType.Info]: 'alert alert-info',
<<<<<<< HEAD
            [AlertType.Warning]: 'alert alert-warning'
=======
            [AlertType.Warning]: 'alert alert-Warning',
            
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
        }

        classes.push(alertTypeClass[alert.type]);

<<<<<<< HEAD
        if (alert.fade) {
            classes.push('fade');
        }

        return classes.join(' ');
=======
        if (alert.fade){
            classes.push('fade');
        }

        return classes.join('');

>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
    }
}