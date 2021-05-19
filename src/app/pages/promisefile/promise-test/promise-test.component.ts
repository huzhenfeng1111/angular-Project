import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-promise-test',
  templateUrl: './promise-test.component.html',
  styleUrls: ['./promise-test.component.scss']
})
export class PromiseTestComponent implements OnInit {

  consoleLogData: any = []
  constructor() { }

  ngOnInit(): void {
    //不使用Promise
    // this.task1()
    // this.task2()

    //使用Promise
    // this.task3()

    // 使用forkJoin
    this.task6()
  }


  task1() {
    this.consoleLogData.push({ content: "开始前往公司", date: new Date(), id: "1" })
    setTimeout(() => {
      this.consoleLogData.push({ content: "3000毫秒后，到达公司", date: new Date(), id: "1" })
    }, 3000);
  }

  task2() {
    this.consoleLogData.push({ content: "开始打开电脑", date: new Date(), id: "2" })
    setTimeout(() => {
      this.consoleLogData.push({ content: "5000毫秒后，电脑已开启", date: new Date(), id: "2" })
    }, 5000);
  }

  /**
   * Promise的简单实用方式
   * 通过resolve、reject 参数，来判断进入成功、失败回调
   */
  task3() {
    let promise = new Promise((resolve, reject) => {
      this.task4(resolve, reject)
    }).then(data => {    //成功
      this.consoleLogData.push(
        { content: "任务4调用成功，返回的参数：" + JSON.stringify(data), date: new Date(), id: "3" }
      )
      this.task5()
    }).catch(err => {
      this.consoleLogData.push(
        { content: "任务4调用失败，返回的参数：" + JSON.stringify(err), date: new Date(), id: "3" }
      )
    })
    return promise
  }

  /**
   * 执行任务
   * @param resolve 成功回调
   * @param reject 失败回调
   */
  task4(resolve: { (value: unknown): void; (arg0: string): any; }, reject: (reason?: any) => void) {
    this.consoleLogData.push({ content: "开始前往公司", date: new Date(), id: "4" })
    setTimeout(() => {
      this.consoleLogData.push({ content: "3000毫秒后，到达公司", date: new Date(), id: "4" })
      return resolve("历经3000毫秒，到达公司。")
      // return reject("公司停电了，无法到达公司。")
    }, 3000);
  }

  task4_1(resolve: (arg0: string) => any, reject: any) {
    this.consoleLogData.push({ content: "开始吃早饭", date: new Date(), id: "41" })
    setTimeout(() => {
      this.consoleLogData.push({ content: "6000毫秒后，早饭已吃完", date: new Date(), id: "41" })
      return resolve("历经6000毫秒，吃了一碗热干面")
    }, 6000);
  }

  /**
   * 执行任务
   */
  task5() {
    this.consoleLogData.push({ content: "开启电脑", date: new Date(), id: "5" })
    setTimeout(() => {
      this.consoleLogData.push({ content: "5000毫秒后，电脑已开启", date: new Date(), id: "5" })
    }, 5000);
  }


  /**
   * forkJoin使用：
   * 需要等待执行的任务执行完成，且未返回异常，则可继续往下执行。
   * 如果返回异常，则不会往下执行
   */
  task6() {
    let that = this;
    forkJoin([this.task7(), this.task8()]).subscribe((e) => {
      that.consoleLogData.push({ content: "task7、task8任务执行回调参数：" + JSON.stringify(e), date: new Date(), id: "7" })
      that.task9()
    })
  }


  async task7() {
    return new Promise<any>((r, j) => {
      this.consoleLogData.push({ content: "开始前往公司", date: new Date(), id: "7" })
      setTimeout(() => {
        this.consoleLogData.push({ content: "3000毫秒后，到达公司", date: new Date(), id: "7" })
        r("到达公司")
      }, 3000);
    });
  }

  async task8() {
    return new Promise<any>((r, j) => {
      this.consoleLogData.push({ content: "买早饭", date: new Date(), id: "8" })
      setTimeout(() => {
        this.consoleLogData.push({ content: "5000毫秒后，吃完早餐", date: new Date(), id: "8" })
        r("吃完早饭")
      }, 5000);
    })
  }


  task9() {
    this.consoleLogData.push({ content: "打开电脑", date: new Date(), id: "9" })
    setTimeout(() => {
      this.consoleLogData.push({ content: "5000毫秒后，电脑已开启", date: new Date(), id: "9" })
    }, 5000);
  }

}
