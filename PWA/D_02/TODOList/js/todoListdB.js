/*
Copyright 2016 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
var idbApp = (function () {
  "use strict";

  if (!"indexedDB" in window) {
    console.log("this browser does not support indexdb");
    return;
  }

  var dbPromise = idb.open("versions-n", 2, function (upgradeDB) {
    switch (upgradeDB.oldVersion) {
      case 0:
      case 1:
        console.log("creating TodoTasks table");
        upgradeDB.createObjectStore("ToDOList", { keyPath: "taskTitle" });
        break;
    }
  });

  // add Tasks
  function addTasks(task) {
    dbPromise.then(function (db) {
      var tx = db.transaction("ToDOList", "readwrite");
      var store = tx.objectStore("ToDOList");

      return new Promise(() => store.add(task))
        .catch(() => {
          tx.abort();
        })
        .then(() => console.log("task Added"));
    });
  }

  //get method to get an object by name
  function getByName(title) {
    return dbPromise.then(function (db) {
      var tx = db.transaction("ToDOList", "readonly");
      var store = tx.objectStore("ToDOList");
      return store.get(title);
    });
  }
  function delElem(event) {
    var delTask = document.getElementById(event).parentNode;
    delTask.style.display = "none";
    deleteTask(event);
  }
  function deleteTask(event) {
    return dbPromise.then(function (db) {
      // const dataTask = event.target.getAttribute('data-task');
      console.log("deleted");
      var tx = db.transaction("ToDOList", "readwrite");
      var store = tx.objectStore("ToDOList");
      console.log(event);
      store.delete(event);
    });
  }
  //display task
  function displayByName() {
    var taskTitle = document.getElementById("TaskTitle").value;
    console.log(taskTitle);
    // if(taskTitle === ''){return;}
    var str = "";
    return getByName(taskTitle).then(function (object) {
      if (!object) {
        return;
      }
      //console.log(object)
      str = `<h2>${object.taskTitle} - ${object.hours}:${object.minutes} , ${object.month} ${object.day} ${object.year} <span data-task=${object.taskTitle} id="${object.taskTitle}" onclick="idbApp.delElem('${object.taskTitle}')"> &#10006 </span></h2>`;

      document.getElementById("results").innerHTML += str;
      return str;
      console.log(document.getElementById(taskTitle).parentNode);
    });
  }

  function updateByName(title) {
    return getByName(title).then(function (object) {
      if (!object) {
        return;
      }
      var updatedItem = object;
      return dbPromise.then(function (db) {
        var tx = db.transaction("ToDOList", "readwrite");
        var store = tx.objectStore("ToDOList");

        console.log(updatedItem.notified);
        updatedItem.notified = "Yes";
        console.log(updatedItem.notified);
        console.log(updatedItem);
        return store.put(updatedItem);
      });
    });
  }

  return {
    dbPromise: dbPromise,
    addTasks: addTasks,
    getByName: getByName,
    displayByName: displayByName,
    deleteTask: deleteTask,
    delElem: delElem,
    updateByName: updateByName,
  };
})();
