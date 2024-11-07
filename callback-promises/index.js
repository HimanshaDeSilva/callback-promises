// Four tasks to complete with same completion time(without setTimeout)

// function taskOne(){
//     console.log("Task One is completed");
// }
// function taskTwo(){
//     console.log("Task Two is completed");
// }
// function taskThree(){
//     console.log("Task Three is completed");
// }
// function taskFour(){
//     console.log("Task Four is completed");
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour();

// output
// Task One is completed
// Task Two is completed
// Task Three is completed
// Task Four is completed

//-------------Each tasks with different completion time---------------------

// function taskOne() {
//   setTimeout(() => {
//     console.log("Task One is completed");
//   },2000);
// }
// function taskTwo() {
//   setTimeout(() => {
//     console.log("Task Two is completed");
//   },1000);
// }
// function taskThree() {
//   setTimeout(() => {
//     console.log("Task Three is completed");
//   },4000);
// }
// function taskFour() {
//   setTimeout(() => {
//     console.log("Task Four is completed");
//   },3000);
// }

// taskOne();
// taskTwo();
// taskThree();
// taskFour();

// output
// Task Two is completed
// Task One is completed
// Task Four is completed
// Task Three is completed

//------------Solution Callback function----------------------

// function taskOne(callback) {
//   setTimeout(() => {
//     console.log("Task One is completed");
//     callback(); // task two
//   },2000);
// }
// function taskTwo(callback) {
//   setTimeout(() => {
//     console.log("Task Two is completed");
//     callback(); // task three
//   },1000);
// }
// function taskThree(callback) {
//   setTimeout(() => {
//     console.log("Task Three is completed");
//     callback(); // task four
//   },4000);
// }
// function taskFour(callback) {
//   setTimeout(() => {
//     console.log("Task Four is completed");
//     callback(); // for completed clg 
//   },3000);
// }

// taskOne(()=>{
//   taskTwo(()=>{
//     taskThree(()=>{
//       taskFour(()=>{
//         console.log("All tasks are completed")
//       })
//     })
//   });
  
// })

// output
// Task One is completed
// Task Two is completed
// Task Three is completed
// Task Four is completed
// All tasks are completed
//When you make a lot of callbacks, it becomes difficult to read. This is what's called callback hell.

//------------Solution Promises----------------------

function taskOne(){
  return new Promise ((resolve, reject)=>{
    const canCompleteOne = true;
    setTimeout(() => {
    if(canCompleteOne){
      resolve("Task One is Completed")
    }
    else{
      reject("Cannot complete Task One")
    }
  },2000)
});
}

function taskTwo(){
  return new Promise ((resolve, reject)=>{
    const canCompleteTwo = true;
    setTimeout(() => {
    if(canCompleteTwo){
      resolve("Task Two is Completed")
    }
    else{
      reject("Cannot complete Task Two")
    }
  },1000)
});
}

function taskThree(){
  return new Promise ((resolve, reject)=>{
    const canCompleteThree = true;
    setTimeout(() => {
    if(canCompleteThree){
      resolve("Task Three is Completed")
    }
    else{
      reject("Cannot complete Task Three")
    }
  },4000)
});
}

function taskFour(){
  return new Promise ((resolve, reject)=>{
    const canCompleteFour = true;
    setTimeout(() => {
    if(canCompleteFour){
      resolve("Task Four is Completed")
    }
    else{
      reject("Cannot complete Task Four")
    }
  },3000)
});
}

taskOne().then((value)=>{
  console.log(value);
  return taskTwo();
}).then((value)=>{
  console.log(value);
  return taskThree();
}).then((value)=>{
  console.log(value);
  return taskFour();
}).then((value)=>{
  console.log(value);
}).catch((error) => {
  console.log(error);
}).finally(()=>{
  console.log('Tasks for the day is done')
})

// output
// Task One is Completed
// Task Two is Completed
// Task Three is Completed
// Task Four is Completed
// Tasks for the day is done

// set const canCompleteThree = false;
// output
// Task One is Completed
// Task Two is Completed
// Cannot complete Task Three
// Tasks for the day is done

// without catch part and set const canCompleteThree = false;
// Task One is Completed
// Task Two is Completed
// Tasks for the day is done
// Uncaught (in promise) Cannot complete Task Three