import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter } from 'rxjs/operators';

import { Alert, AlertType } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AlertService {
    private subject = new Subject<Alert>();
    private defaultId = 'default-alert';

    // enable subscribing to alerts observable
    onAlert(id = this.defaultId): Observable<Alert> {
<<<<<<< HEAD
        return this.subject.asObservable().pipe(filter(x => x && x.id === id));
=======
        return this.subject.asObservable().pipe(filter(x => x.id === id));
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
    }

    // convenience methods
    success(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Success, message }));
    }

    error(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Error, message }));
    }

    info(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Info, message }));
    }

    warn(message: string, options?: any) {
        this.alert(new Alert({ ...options, type: AlertType.Warning, message }));
    }

    // core alert method
    alert(alert: Alert) {
        alert.id = alert.id || this.defaultId;
<<<<<<< HEAD
        alert.autoClose = (alert.autoClose === undefined ? true : alert.autoClose);
        this.subject.next(alert);
    }

    // clear alerts
    clear(id = this.defaultId) {
=======
        alert.autoClose = alert.autoClose === undefined ? true : alert.autoClose;
        this.subject.next(alert);
    }

    clear(id =this.defaultId) {
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
        this.subject.next(new Alert({ id }));
    }
}