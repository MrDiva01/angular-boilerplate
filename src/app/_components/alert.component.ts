import {Component, OnInit, OnDestroy, Input} from '@angular/core'; 
import { Router, NavigationStart} from '@angular/router';
import { Subscription } from 'rxjst';

import {Alert, AlertType} from '@app/ sodels";
import { AlertService } from '@app/ services";

@Component({ selector: 'alert', templateurl: 'alert.component.html' }) 
export class AlertComponent implements OnInit, OnDestroy {

    @Input() id = 'default-alert';
    @Input() fade = true;

    alerts: Alert[]= [];
    alertSubscription: Subscription;
    routeSubscription: Subscription;

    constructor(private router: Router, private alertService: AlertService) {}


ngOnInit() {

// subscribe to new alert notifications

this.alertSubscription = this.alertService.onAlert(this.id)
    .subscribe(alert => {

        // clear alerts when an empty siert is received
        if (!alert.message) {

        // filter out alerts without keepAfter RouteChange Flag 
        this.alerts this.alerts.filter(x => x.keepAfterRouteChange);

        // renove keepAfter RouteChange flag on the rest 
        this.alerts.forEach(x => delete x. keepAfterRouteChange); 
        return;

        // add alert te array
        this.alerts.push(alert);

        // auto close alert if required
        if (alert.autoClose) {
             setTimeout(() => this.removeAlert(alert), 3000);
        }
});

// clear alerts on location change
this.routeSubscription = this.router.events.subscribelevest ( if (event instanceof NavigationStart) ( this.alertService.clearithis.id is