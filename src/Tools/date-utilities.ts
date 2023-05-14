export class DateUtilities{

  static isWeekEnd():boolean{
    const today = new Date();
    return today.getDay() === 0 || today.getDay() === 6
  }

  static getDayOfMonth(): number{
    const today = new Date();
    return today.getDay()+1
  }

  static isDayEven(): boolean{
    return this.getDayOfMonth() %2 == 0
  }

  static isDayOdd(): boolean{
    return !this.isDayEven()
  }
}
