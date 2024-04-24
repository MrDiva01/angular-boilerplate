import { AccountService } from '@app/_services';

export function appInitializer(accountService: AccountService) {
    return () => new Promise(resolve => {
<<<<<<< HEAD
        // attempt to refresh token on app start up to auto authenticate
        accountService.refreshToken()
            .subscribe()
            .add(resolve);
    });
=======
        //attempt to refresh token on app start up to auto authenticate
        accountService.refreshToken()
            .subscribe()
            .add(resolve)
    });

>>>>>>> 8737253b6f94c40d5e82e5e5bf8d234883a9f455
}