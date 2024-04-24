export class Alert {
<<<<<<< HEAD
=======

>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
    id: string;
    type: AlertType;
    message: string;
    autoClose: boolean;
    keepAfterRouteChange: boolean;
    fade: boolean;

<<<<<<< HEAD
    constructor(init?:Partial<Alert>) {
        Object.assign(this, init);
    }
}

export enum AlertType {
    Success,
    Error,
    Info,
    Warning
}
=======
    constructor(init?: Partial<Alert>) {
        Object.assign(this, init);
    
    }
}
    
    export enum AlertType {
        Success,
        Error,
        Info,
        Warning
    }
    
>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
