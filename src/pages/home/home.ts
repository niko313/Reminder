
import { Component, OnInit } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NavController, AlertController, IonicPage } from 'ionic-angular';
import moment from 'moment';

interface IAlarm {
  title: string;
  alertTime: {
    minutes: number;
    hours: number;
  };
}

class Alarm implements IAlarm {
  title: string;
  alertTime: {
    minutes: number;
    hours: number;
  };

  constructor(title?: string, alertTime?) {
    this.title = title || '';
    this.alertTime = alertTime || { minutes: 0, hours: 0};
  }
}

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
})
export class HomePage {
  private time;
  private alarms: Alarm[] = [];

	constructor(public navCtrl: NavController, public alertCtrl: AlertController,private localNotifications: LocalNotifications) {}
  
	ngOnInit() {
    var Myupdate = setInterval(() => {
      var currentDate = new Date();
      this.alarms.forEach((alarm: Alarm) => {
        console.log("l'alarm :");
        //alarm.alertTime = new Date(alarm.alertTime);
        console.log(alarm);
        if(currentDate.getHours() === alarm.alertTime.hours && currentDate.getMinutes() === alarm.alertTime.minutes) {
        /*if (
          currentDate.getHours() === alarm.alertTime.getHours()
          //&& currentDate.getMinutes() === 34
        )*/ 
          this.alert(alarm);
          console.log(currentDate);
        }
      });
    },1000);
	}

  alert(alarm){
    this.localNotifications.schedule({
      title: alarm.title,
      text: 'Time Out',
      led: 'FF0000'
      
    });
  }

  onTimeChange(alarm){
    console.log("this time ", this.time);
//    this.time = moment(this.time, "HH:mm");
    let test = this.time.split(":");
    let testH = parseInt(test[0]); 
    let testM = parseInt(test[1]);
    alarm.alertTime.hours = testH;
    alarm.alertTime.minutes = testM;
    console.log(alarm);
  }
/*
	clock() {
		this.time = moment().format('h:mm:ss a');
  }
 */ 
	add(alarm) {
		let prompt = this.alertCtrl.create({
			title: 'Add reminder',
			inputs: [
				{
          name: 'title',
          placeholder: 'Enter a title',
        }/*,
        {
          label: 'Monday',type: 'radio',
          
        },
        {
          type: 'radio',
          label: 'Tuesday'
        },
        {
          type: 'radio',
          label: 'Wednesday'
        },
        {
          type: 'radio',
          label: 'Thursday'
        },
        {
          type: 'radio',
          label: 'Friday'
        },
        {
          type: 'radio',
          label: 'Saturday'
        },
        {
          type: 'radio',
          label: 'Sunday'
        }*/
			],
			buttons: [
				{
					text: 'Cancel',
				},
				{
					text: 'Add',
					handler: data => {
						this.alarms.push(new Alarm(data.title));
					},
				},
			],
    });
		prompt.present();
	}

	edit(alarm) {
		let prompt = this.alertCtrl.create({
			title: 'Edit reminder',
			inputs: [
				{
          name: 'title',
          placeholder: 'Edit the title'
        }/*,
        {
          type: 'radio',
          label: 'Monday'
        },
        {
          type: 'radio',
          label: 'Tuesday'
        },
        {
          type: 'radio',
          label: 'Wednesday'
        },
        {
          type: 'radio',
          label: 'Thursday'
        },
        {
          type: 'radio',
          label: 'Friday'
        },
        {
          type: 'radio',
          label: 'Saturday'
        },
        {
          type: 'radio',
          label: 'Sunday'
        }*/
      ],
			buttons: [
				{
					text: 'Cancel',
				},
				{
					text: 'Save',
					handler: data => {
						let index = this.alarms.indexOf(alarm);

						if (index > -1) {
							this.alarms[index] = new Alarm(data.title);
						}
					},
				},
			],
		});
		prompt.present();
	}

	delete(alarm) {
		let index = this.alarms.indexOf(alarm);
		if (index > -1) {
			this.alarms.splice(index, 1);
		}
	}
}

