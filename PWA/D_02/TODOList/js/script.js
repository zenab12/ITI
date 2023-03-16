const apps = (() => {
    const notifyBtn = document.getElementById("enableNotify")
    var addTaskBtn = document.getElementById("AddTask")
    var taskName , taskHour ,taskMin ,Day ,month,year ,notified="NO"
    var tasks=[]
    
   // check for notification support
    if(!('Notification' in window)){
        console.log('This browser does not support notification')
        return
    }
    //request permission to show notifications on click notifyBtn
  notifyBtn.addEventListener('click', () => {
    Notification.requestPermission(status => {
        console.log('Notification permission status' , status)
    })
    notifyBtn.style.display = "none"
  })
    function displayNotification(task){
        if(Notification.permission == 'granted'){
            navigator.serviceWorker.getRegistration().then(reg => {
                const options = {
                    //body:task,
                    data:{
                        //dateOfArrival: Date().now,
                        primaryKey:1
                       
                    }, 
                }
                reg.showNotification(task,options)
            })
        }
    }
    //console.log(taskName,taskHour,taskMin,Day,month,year)
    addTaskBtn.addEventListener("click", setInfo);
    //Set Info Todo
    function setInfo(){
        taskName = document.getElementById("TaskTitle").value;
        taskHour = document.getElementById("Hours").value;
        taskMin = document.getElementById("Mins").value;
        Day = document.getElementById("Days").value;
        month = document.getElementById("Months").value;
        year = document.getElementById("Years").value;
        console.log(taskName,taskHour,taskMin,Day,month,year)
        if(taskName == '' || taskHour == '' || taskMin==' '){
          console.log("plz enter your complete Info")
          return;
        }
        const timeConvert = Date.parse(`${Day} ${month} ${year} ${taskHour}:${taskMin}`);
   
      ///indexDB add Task
      idbApp.addTasks(
        {
            "taskTitle":taskName , 
            "hours":taskHour,
            "minutes" : taskMin,
            "day" :Day ,
            "month" : month ,
            "year" : year ,
            "notified" : notified
        }
         
      )
      //indexDB display task
      console.log(document.getElementById(taskName))
      
      var diffTime = timeConvert-Date.now()
      idbApp.displayByName()
     
      console.log(diffTime)
      if(diffTime>0){
        setTimeout(() => {
            displayNotification(taskName);
            document.getElementById(taskName).parentNode.style.textDecoration = "line-through"   
           idbApp.updateByName(taskName)
        }, diffTime);
      }
    
         document.getElementById("TaskTitle").value = ' ';
         document.getElementById("Hours").value = ' ';
         document.getElementById("Mins").value = ' ';
         document.getElementById("Days").value = "01";
         document.getElementById("Months").value ="Janaury";
         document.getElementById("Years").value = 2023;
    }
  
    
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          // console.log('Service Worker and Push is supported');
          navigator.serviceWorker.register('sw.js')
          .then(swReg => {
            console.log('Service Worker is registered', swReg);
    
            swRegistration = swReg;
    
            // TODO 3.3a - call the initializeUI() function
          })
          .catch(err => {
            console.error('Service Worker Error', err);
          });
        });
      }
})()


  
