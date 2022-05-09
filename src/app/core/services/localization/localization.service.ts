import { Injectable, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StorageService } from '..';
import { LanguagesLocalization } from './languages-localization.enum';

@Injectable({
  providedIn: 'root',
})
export class LocalizationService {
  private systemAvilabelLang: string[] = [];
  private isArabic$ = new BehaviorSubject<boolean>(false);
  isArabic = this.isArabic$.asObservable();

  constructor(
    private translate: TranslateService,
    private storageLocal: StorageService
  ) {
    this.init();
    this.systemAvilabelLang = this.translate.getLangs();
  }

  /**
   * @returns the default lang for app
   **/
  defaultLanguage(): string {
    return this.translate.defaultLang;
  }

  /**
   * @returns the current used lang in app
   **/
  selectedLang(): string {
    return this.translate.currentLang;
  }

  /**
   * @returns " An EventEmitter to listen to lang change events.
   * A LangChangeEvent is an object with the properties lang: string & translations: any (an object containing your translations) ".
   **/
  checkOnChangeLang(): EventEmitter<any> {
    return this.translate.onLangChange;
  }

  /**
   * @returns Returns an array of currently available langs.
   **/
  listOfLangs(): string[] {
    return this.translate.getLangs();
  }

  /**
   * To check If the current lang is arabic or no,
   * Also after checked lang is update observable isArabic with current value
   **/
  private checkIsArabic(): void {
    switch (this.selectedLang()) {
      case LanguagesLocalization.AR:
        this.isArabic$.next(true);
        break;
      case LanguagesLocalization.EN:
        this.isArabic$.next(false);
        break;
    }
  }

  /**
   * The Init Method is used to
   * - check if localstorage have lang if not set "en" as default
   **/
  private init(): void {
    let localStorageLang = this.storageLocal.getLang();
    this.setLang(localStorageLang);
    this.checkIsArabic();
  }

  /**
   * Use to set Chooses lang as current lang and save selected lang in localstorage
   * @param lang An identifying name for selected lang, should be string
   **/
  setLang(lang: string): void {
    this.translate.use(lang).subscribe((_) => {
      this.storageLocal
        .setItem('lang', lang)
        .subscribe((res) => console.log(res));
    });
    this.checkIsArabic();
  }

  /**
   * Use to set Chooses lang as default lang
   * @param lang An identifying name for selected lang, should be string
   **/
  addDefaultLang(lang: string): void {
    this.translate.setDefaultLang(lang);
  }

  /**
   * Gets an object of translations for a given language
   * @param lang An identifying name for selected lang, should be string
   * @returns Observable contain object of selected lang
   **/
  listOfTranslations(lang: string): Observable<any> {
    return this.translate.getTranslation(lang);
  }

  /**
   * Manually sets an object of translations for a given language,
   * set shouldMerge to true if you want to append the translations instead of replacing them
   **/
  addTranslation(
    lang: string,
    translations: Object,
    shouldMerge: boolean = false
  ) {
    this.translate.setTranslation(lang, translations, shouldMerge);
  }

  /**
   * @returns  Gets the translated value of a key (or an array of keys) or the key if the value was not found
   **/
  getTranslate(
    key: string | Array<string>,
    interpolateParams?: Object
  ): Observable<string | Object> {
    return this.translate.get(key, interpolateParams);
  }

  translateIT(key: string): string {
    return this.translate.instant(key);
  }

  /**
   * Toggle the current language
   */
  toggleLanguage(): void {
    const toggleLang = this.isEnglish() ? 'ar' : 'en';
    document.body.classList.remove('lang-en', 'lang-ar');
    document.body.classList.add(toggleLang === 'en' ? 'lang-en' : 'lang-ar');
    this.setLang(toggleLang);
  }

  /**
   * Check the Current Language if english or not
   * @returns True if the current language is english
   */
  isEnglish(): boolean {
    return this.selectedLang() === 'en';
  }

  getStringWithCurrentLang(value): string {
    let valWithLang;
    this.isArabic.subscribe((res) => {
      valWithLang = res ? value + 'Ar' : value + 'En';
    });
    return valWithLang;
  }
}
