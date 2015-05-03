//noprotect
// Welcome to the metro journey planner.
// users will select :-
// 1) an embarcation line
// 2) a disembarcation line
// 3) an embarcation station
// 4) a disembarcation station
// this routine will determine the number of stops for the users journey
// the routine will request the user for a station until 'q' is entered
// the interchange is hard coded.
// to quit the program.

//define stations on each line
var metroLines = {
  'lineN' : ['Times Square','34th','28th','23rd','Union Square','8th'],
  'lineL' : ['8th','6th','Union Square','3rd','1st'],
  'line6' : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  };
// list of metro lines
var metroLineKeys = ['n','l','6'];

var stationChoice;
var toStation;
var fromStation;

// F U N C T I O N S

var getLine = function (description,keys) {
  var lineChoice = prompt(description+keys+" or 'q'uit" );
  return lineChoice;
};

var getStation = function (line) {
  var stationChoice = prompt("Choose a Station "+line+" or 'q'uit" );
  var stationIndex = line.indexOf(stationChoice);
  return [stationIndex, stationChoice];
}; 

var getInterchange = function (line) {
  var stationChoice = 'Union Square';
  var stationIndex = line.indexOf(stationChoice);
  return [stationIndex, stationChoice];
};
// I am wrongly using switch to get the line.. Have just figured I can add lines to the associative array. Am gonna try and rework.
var getLineStation = function (lineChoice) {
   switch (lineChoice) {
     case "l":
       stationChoice = getStation(metroLines.lineL);
       lineChoice = 'metroLines.lineL';
       break;
     case "n":
       stationChoice = getStation(metroLines.lineN);
       lineChoice = 'metroLines.lineN';
       break;
     case "6":
       stationChoice = getStation(metroLines.line6);
       lineChoice = 'metroLines.line6';
       break;
     default:
       alert("We are sorry that you don't wish to travel with us!");
   }
  return stationChoice;
};

var getLineInterchange = function (lineChoice) {
   switch (lineChoice) {
// this is not DRY and need to figure how to improve this.
     case "l":
       stationChoice = getInterchange(metroLines.lineL);
       lineChoice = 'metroLines.lineL';
       break;
     case "n":
       stationChoice = getInterchange(metroLines.lineN);
       lineChoice = 'metroLines.lineN';
       break;
     case "6":
       stationChoice = getInterchange(metroLines.line6);
       lineChoice = 'metroLines.line6';
       break;
     default:
   }
  return stationChoice;
};

// end of F U N C T I O N S

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//
// Program body starts here

while (metroLine !== 'q') {
    var stationCount = 0;  
    // choose the start line
    var startLineChoice = getLine("Select embarcation line ",metroLineKeys);
    var metroLine = startLineChoice;
    var metroStation = "";
    if (metroLine !== "q") {
        getLineStation(metroLine);
        // choose the destination line
        var endLineChoice = getLine("Select disembarcation line ",metroLineKeys);
        var metroLine = endLineChoice;
        if (startLineChoice === endLineChoice) {
            fromStation = Number(stationChoice[0]);
            getLineStation(metroLine);
            toStation = Number(stationChoice[0]);
            stationCount += Math.abs(fromStation-toStation);
            alert('Stops travelled on your journey = '+ stationCount);          
        } else {
            fromStation = Number(stationChoice[0]);
            //hardcode interchange - var toStation = Number(stationChoice[0]);
            getLineInterchange(metroLine);
            toStation = Number(stationChoice[0]);
            stationCount += Math.abs(fromStation-toStation);
            fromStation = Number(stationChoice[0]);
            getLineStation(metroLine);
            toStation = Number(stationChoice[0]);
            stationCount += Math.abs(fromStation-toStation);
            alert('Stops travelled on your journey = '+ stationCount);        
        }
        alert('We hope you enjoyed your journey');
        metroLine = startLineChoice;        
    } else {
        metroLine = startLineChoice;
    }
}