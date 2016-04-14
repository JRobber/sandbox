function calorieTracker(baselineCalories){
  //totalCalories today
  var totalCaloriesToday = 0;
  var totalDays = 0;
  //totalCalories all time
  var totalCaloriesAllTime = 0;
  //personalBaselineCalories
    //In the parameters
  
  //addCalories()
  function reportEating(totalCaloriesConsumed){
    totalCaloriesToday += totalCaloriesConsumed;
  }
  //startNewDay()
  function startNewDay(){
    totalCaloriesAllTime += totalCaloriesToday;
    totalCaloriesToday = 0;
    totalDays++;
  }
  //estimated weight loss today()
  function getTodaysWeightLoss(){
    //3500cal = 1 lb
    //today - baseline / 3500
    return (totalCaloriesToday - baselineCalories) / 3500;
  }
  //estimated weight loss all time()
  function getAllTimeWeightLoss(){
    //3500cal = 1 lb
    //today - baseline / 3500
    return (totalCaloriesAllTime - (baselineCalories * totalDays)) / 3500;
  }
  
  return {
    reportEating: reportEating,
    startNewDay: startNewDay,
    getTodaysWeightLoss: getTodaysWeightLoss,
    getAllTimeWeightLoss: getAllTimeWeightLoss
  }
}

var wuansTracker = calorieTracker(2300);
var pingsTracker = calorieTracker(1800);
var sumoTracker = calorieTracker(8500);

wuansTracker.reportEating(3000);
wuansTracker.startNewDay();
wuansTracker.reportEating(2400);

console.log("Wuan today: " + wuansTracker.getTodaysWeightLoss());
console.log("Wuan all time: " + wuansTracker.getAllTimeWeightLoss());

sumoTracker.reportEating(12000);
sumoTracker.startNewDay();
sumoTracker.reportEating(18000);
sumoTracker.startNewDay();
sumoTracker.reportEating(18000);
sumoTracker.startNewDay();
sumoTracker.reportEating(18000);
sumoTracker.startNewDay();
sumoTracker.reportEating(18000);
sumoTracker.startNewDay();
sumoTracker.reportEating(18000);
sumoTracker.startNewDay();
sumoTracker.reportEating(18000);
sumoTracker.startNewDay();
sumoTracker.reportEating(18000);

console.log("Sumo today: " + sumoTracker.getTodaysWeightLoss());
console.log("Sumo all time: " + sumoTracker.getAllTimeWeightLoss());




// var bands = [
//   {
//     name: "Joe",
//     email: "Joe@Icansingreallyhigh.com",
//     artist: "Queen"
//   },
//   {
//     artist: "LedZepplin",
//     email: "DeadMepplin@gmail.com",
//     name: "Dead Mepplin"
//   },
//   {
//     artist: "DavidBowie",
//     name: "Johnny Depp",
//     email: "Imnotreallyhim@johnnydeppfan.com"
//   },
//   {
//     name: "Joe",
//     email: "Joe@Icansingreallyhigh.com",
//     artist: "Queen"
//   },
//   {
//     artist: "LedZepplin",
//     email: "DeadMepplin@gmail.com",
//     name: "Dead Mepplin"
//   },
//   {
//     artist: "DavidBowie",
//     name: "Johnny Depp",
//     email: "Imnotreallyhim@johnnydeppfan.com"
//   },
//   {
//     name: "Joey",
//     email: "Joe@Icansingreallyhigh.com",
//     artist: "BritneySpears"
//   },
//   {
//     artist: "LedZepplin",
//     email: "DeadMepplin@gmail.com",
//     name: "Dead Mepplin"
//   },
//   {
//     artist: "DavidBowie",
//     name: "Johnny Mepp",
//     email: "Imnotreallyhim@johnnydeppfan.com"
//   },
//    {
//     artist: "DavidBowie",
//     name: "Johnny Gepp",
//     email: "Imnotreallyhim@johnnydeppfan.com"
//   },
//    {
//     artist: "DavidBowie",
//     name: "Johnny Smepp",
//     email: "Imnotreallyhim@johnnydeppfan.com"
//   }
// ];

// function countCoverBands(coverRequests){
//   /*
//     var bands = {}
    
//     var artist
//     var artistCoutn
    
//     for coverRequests
//       increment artistCount
  
  
//     return bands
//   */
  
//   var bands = {}
  
//   for(var i = 0; i < coverRequests.length; i++){
//     var request = coverRequests[i];
    
//     if(bands.hasOwnProperty(request.artist)){
//         bands[request.artist] += 1;    
//     } else {
//         bands[request.artist] = 1;
//     }
//   }
  
//   return bands;
// }

// var totalResults = countCoverBands(bands);

// console.log("total", totalResults)


// function countCoverBands2(coverRequests){
//   var bands = []
  
//   for(var i = 0; i < coverRequests.length; i++){
//     var request = coverRequests[i];
    
//     var existingBand = null;
//     for(var j = 0; j < bands.length; j++){
//         if(bands[j].artist === request.artist){
//             existingBand = bands[j];
//             break;
//         }
//     }
    
//     if(existingBand){
//         existingBand.count += 1;    
//     } else {
//         bands.push({
//             artist: request.artist,
//             count: 1
//         });
//     }
//   }
  
//   return bands;
// }



// /*
//   {
//     Queen: 2,
//     LedZepplin: 3,
//     DavidBowie: 5,
//     BritneySpears: 1
//   }

// [
//     {
//         artist: "DavidBowie",
//         count: 5
//     },
//     {
//         artist: "LedZepplin",
//         count: 3
//     }
// ]
// */








// var bands = [
//   {
//     name: "Joe",
//     email: "Joe@Icansingreallyhigh.com",
//     artist: "Queen"
//   },
//   {
//     artist: "LedZepplin",
//     email: "DeadMepplin@gmail.com",
//     name: "Dead Mepplin"
//   },
//   {
//     artist: "DavidBowie",
//     name: "Johnny Depp",
//     email: "Imnotreallyhim@johnnydeppfan.com"
//   },
//   {
//     name: "Joe",
//     email: "Joe@Icansingreallyhigh.com",
//     artist: "Queen"
//   },
//   {
//     artist: "LedZepplin",
//     email: "DeadMepplin@gmail.com",
//     name: "Dead Mepplin"
//   },
//   {
//     artist: "DavidBowie",
//     name: "Johnny Depp",
//     email: "Imnotreallyhim@johnnydeppfan.com"
//   },
//   {
//     name: "Joey",
//     email: "Joe@Icansingreallyhigh.com",
//     artist: "BritneySpears"
//   },
//   {
//     artist: "LedZepplin",
//     email: "DeadMepplin@gmail.com",
//     name: "Dead Mepplin"
//   },
//   {
//     artist: "DavidBowie",
//     name: "Johnny Mepp",
//     email: "Imnotreallyhim@johnnydeppfan.com"
//   },
//    {
//     artist: "DavidBowie",
//     name: "Johnny Gepp",
//     email: "Imnotreallyhim@johnnydeppfan.com"
//   },
//    {
//     artist: "DavidBowie",
//     name: "Johnny Smepp",
//     email: "Imnotreallyhim@johnnydeppfan.com"
//   }
// ];


// // Using an object to track our counts
// // function countCoverBands(arrayOfRequests){
// //   var counts = {}
// //   //Loop arrayOfRequests
// //   for(var i = 0; i < arrayOfRequests.length; i++){
// //     //If artist not in counts 
// //     var currentArtist = arrayOfRequests[i];
// //     var artistName = currentArtist.artist;
// //     if(!counts.hasOwnProperty(artistName)){
// //       // then add to counts = 1
// //       counts[artistName] = 1;
// //     } else {
// //     //else
// //       // increment artist by 1
// //       counts[artistName]++  //"Queen"
// //     }
// //   }
// //   return counts;
// // }

// // var bandCounts = countCoverBands(bands);
// // console.log(bandCounts)


// /*
//   {
//     Queen: 2,
//     LedZepplin: 3,
//     DavidBowie: 5,
//     BritneySpears: 1
//   }

// */

// // Using a foreach
// // function countCoverBands(arrayOfRequests){
// //   var counts = {}
// //   //Loop arrayOfRequests
// //   arrayOfRequests.forEach(function(band){
// //     var currentArtist = band;
// //     var artistName = currentArtist.artist;
// //     if(!counts.hasOwnProperty(artistName)){
// //       // then add to counts = 1
// //       counts[artistName] = 1;
// //     } else {
// //     //else
// //       // increment artist by 1
// //       counts[artistName]++  //"Queen"
// //     }
// //   });
// //     //If artist not in counts 
   
// //   return counts;
// // }

// function countCoverBands(arrayOfRequests){
//   var counts = []
//   //Loop arrayOfRequests
//   arrayOfRequests.forEach(function(band){
//     var currentArtist = band;
//     var artistName = currentArtist.artist;
    
//     var match = null;
//     for(var i = 0; i < counts.length; i++){
//         if(counts[i].artist === artistName) {
//             match = counts[i];
//         }
//     }
    
//     if(!match){
//       // then add to counts = 1
//       counts.push({
//           artist: artistName,
//           count: 1  
//       })
//     } else {
//     //else
//       // increment artist by 1
//       match.count++  //"Queen"
//     }
//   });
//     //If artist not in counts 
   
//   return counts;
// }


// var bandCounts = countCoverBands(bands);
// console.log(bandCounts)



// // function number(num){
// //   console.log(num)
// // }

// // var three = 3;

// // number(++three);
// // three = 3;
// // number(three++);
// // console.log(three)

// // function createTeam(){
// //   var players = [];
// //   return {
// //     addPlayer: function(newPlayer){
// //       players.push(newPlayer)
// //     },
// //     getPlayers: function(){
// //       return players;
// //     }
// //   }
// // }

// // //Is Making a closure for us
// // var cardinals = createTeam()
// // cardinals.addPlayer("Larry");
// // console.log(cardinals.getPlayers());
// // cardinals.addPlayer("Carson");
// // console.log(cardinals.getPlayers());
// // cardinals.addPlayer("Patrick");
// // console.log(cardinals.getPlayers());

// // //Is Making a 2nd closure for us
// // var jazz = createTeam()
// // jazz.addPlayer("Gordon");
// // console.log(jazz.getPlayers());
// // jazz.addPlayer("Rootie");
// // console.log(jazz.getPlayers());
// // jazz.addPlayer("Alec");
// // console.log(jazz.getPlayers());



// // // function indexesOf(string) {
// // //   var parts = [];
// // //   var intro = "";
  
// // //   var rows = string.split("\n");
  
// // //   for(var i = 0; i < rows.length; i++){
// // //     var str = rows[i],
// // //          k = 0;
// // //     while(k < str.length && str[k] === "#") k++;
    
// // //     var lastPart = parts[parts.length - 1];
    
// // //     if(k === 2){
// // //       parts.push({
// // //         part_title: str.substring(2),
// // //         steps:[""]
// // //       })
// // //       continue;
// // //     } else if(k === 3){
// // //       lastPart.steps.push(str.substring(3));
// // //       continue;
// // //     }
// // //     if(parts.length > 0){
// // //       lastPart.steps[lastPart.steps.length - 1] += "\n" + str;
// // //     } else {
// // //       intro = intro.concat("\n",str);
// // //     }
// // //   }
  
// // //   return {
// // //     intro: intro,
// // //     parts: parts
// // //   };
// // // }

// // // var idxs = indexesOf(`#Test 
// // // ##Testing
// // // ###Test3
// // // ###Test3.2
// // // Words
// // // ###Test3.3
// // // Stuff
// // // ##Testing2
// // // ###Testing3.4
// // // THings
// // // Yeah
// // // what
// // // huh
// // // ####Really
// // // ###Testing3.5
// // // Something else
// // // ##Testing3
// // // ###Testing3.6
// // // mmk
// // // ###Testing3.7
// // // fine
// // // `);

// // // console.log(idxs);