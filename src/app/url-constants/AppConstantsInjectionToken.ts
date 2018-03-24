import { AppUrls } from './app.url.interface';
import { InjectionToken} from '@angular/core';
import { AppConstants } from './app.constants';

export const AppConstantsInjectionToken = new InjectionToken<AppConstants>('app.constants.values.ts');