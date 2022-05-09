import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from 'src/app/app.module';
import { LocalizationService } from './localization.service';

describe('LocalizationService', () => {
  let localization: LocalizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        TranslateModule.forRoot({
          defaultLanguage: 'en',
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          },
        })
      ],
      providers: [
        LocalizationService
      ],

    });
    localization = TestBed.inject(LocalizationService);
  });

  it('should be init set lang on localstorage  ', () => {
    const serviceLocalization = (localization as any);
    serviceLocalization.init();
    localStorage.setItem('userLang', 'en');
    let langOnLocalstorage = localStorage.getItem('userLang');
    expect(langOnLocalstorage).toEqual('en');
  });

  it('should be init call checkIsArabic method to update observable isArabic', () => {
    const serviceLocalization = (localization as any);
    serviceLocalization.init();
    let isArabicVal: boolean = true;
    localization.isArabic.subscribe((res) => {
      isArabicVal = res;
    })

    expect(isArabicVal).toBeFalsy();
  })

  it('should be defaultLang return default lang', () => {
    expect(localization.defaultLanguage()).toEqual('en');
  })

  it('should be currentLang return currentLang lang', () => {
    expect(localization.selectedLang()).toEqual('en');
  })

  it('should be checkIsArabic update observable isArabic', () => {
    let isArabicVal: boolean = true;
    localization.isArabic.subscribe((res) => {
      isArabicVal = res;
    })

    expect(isArabicVal).toBeFalsy();
  })

  it('should be setLang method update lang in localstorage and call checkIsArabic method to update isArabic observable ', () => {
    localization.setLang('en');
    let isArabicLang: boolean = false;
    localization.isArabic.subscribe(res => {
      isArabicLang = res
    })
    expect(localStorage.getItem('userLang')).toEqual('en');
    expect(isArabicLang).toBeFalsy();
  })

  it('should be addDefaultLang method setDefault lang', () => {
    localization.addDefaultLang('en');
    expect(localization.defaultLanguage()).toEqual('en');
  })

  it('should be listOfTranslations method get transilation object depende on lang', () => {
    let transilationObject;
    localization.listOfTranslations('en').subscribe(response => {
      transilationObject = response;
    });
    expect(transilationObject).toBeTruthy(typeof transilationObject === 'object');
  })
});
