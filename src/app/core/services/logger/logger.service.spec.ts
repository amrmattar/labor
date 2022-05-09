import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { LogLevel } from './log-level.enum';

import { LoggerService } from './logger.service';

describe('Logger Service', () => {
  let service: LoggerService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [LoggerService]
    });

    service = TestBed.inject(LoggerService);
  });
  // End beforeEach

  it('Should isProductionLogger return true if enviroment is Production', () => {

    const loggerService = (service as any);
    environment.production = true;
    expect(loggerService.isProductionLogger()).toBeTruthy();
  });

  it('Should isProductionLogger return false if enviroment is Development', () => {

    const loggerService = (service as any);
    environment.production = false;
    expect(loggerService.isProductionLogger()).toBeFalsy();
  });

  it("Should logEntry return valid object even it didn't take Exra Info", () => {

    const loggerService = (service as any);

    loggerService.logWithDate = false;

    let returnVal = {
      Date: '',
      Type: 'Error',
      Message: 'Hi, Its test case',
      extraInfo: new Array()
    }

    expect(loggerService.logEntry('Hi, Its test case', LogLevel.Error)).toEqual(returnVal);
  });

  it("Should logEntry return False if method take message as null", () => {

    const loggerService = (service as any);

    loggerService.logWithDate = false;

    let returnVal = {
      Date: '',
      Type: 'Error',
      Message: null,
      extraInfo: new Array()
    }

    expect(loggerService.logEntry(null, LogLevel.Error)).toBeFalsy(returnVal);
  });

  it("Should logEntry return False if method take level as null", () => {

    const loggerService = (service as any);

    loggerService.logWithDate = false;

    expect(loggerService.logEntry(null, LogLevel.Error)).toBeFalsy();
  });

  it("Should logEntry return False if method take level out of scoupe log level", () => {

    const loggerService = (service as any);

    loggerService.logWithDate = false;

    expect(loggerService.logEntry('test with message', 10)).toBeFalsy();
  });

  it('Should SholdLog Method check If Get less that default level ( 0 => all )', () => {
    const loggerService = (service as any);
    expect(loggerService.shouldLog(-1)).toBeFalse();
  });

  it('Should SholdLog Method check If level number is out of scoup level', () => {
    const loggerService = (service as any);
    expect(loggerService.shouldLog(1000)).toBeFalse();
  });

  it("Should writeToLog method take message and level for minmum required", () => {

    const loggerService = (service as any);

    loggerService.logWithDate = false;

    expect(loggerService.writeToLog('test with message', 10)).toBeFalsy();
  });

  it("Should writeToLog method return False if method take level out of scoupe log level", () => {

    const loggerService = (service as any);

    loggerService.logWithDate = false;

    expect(loggerService.writeToLog('test with message', 10)).toBeFalsy();
  });

  it("Should log method return False if no message", () => {

    const loggerService = (service as any);

    loggerService.logWithDate = false;

    expect(loggerService.log('test with message')).toBeFalsy();
  });

  it("Should debug method return False if no message", () => {

    const loggerService = (service as any);

    loggerService.logWithDate = false;

    expect(loggerService.debug('test with message')).toBeFalsy();
  });

  it("Should info method return False if no message", () => {

    const loggerService = (service as any);

    loggerService.logWithDate = false;

    expect(loggerService.info('test with message')).toBeFalsy();
  });

  it("Should warning method return False if no message", () => {

    const loggerService = (service as any);

    loggerService.logWithDate = false;

    expect(loggerService.warning('test with message')).toBeFalsy();
  });

  it("Should error method return False if no message", () => {

    const loggerService = (service as any);

    loggerService.logWithDate = false;

    expect(loggerService.error('test with message')).toBeFalsy();
  });

  it("Should fatal method return False if no message", () => {

    const loggerService = (service as any);

    loggerService.logWithDate = false;

    expect(loggerService.fatal('test with message')).toBeFalsy();
  });
});
