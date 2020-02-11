class team{
    players = [
        {0:"dhoni","runs":0,"ballsfaced":0,"fours":0,"sixes":0},
        {1:"kohli","runs":0,"ballsfaced":0,"fours":0,"sixes":0},
        {2:"raina","runs":0,"ballsfaced":0,"fours":0,"sixes":0},
        {3:"shewag","runs":0,"ballsfaced":0,"fours":0,"sixes":0},
        {4:"bumrah","runs":0,"ballsfaced":0,"fours":0,"sixes":0},
        {5:"jadeja","runs":0,"ballsfaced":0,"fours":0,"sixes":0},
        {6:"zaheer","runs":0,"ballsfaced":0,"fours":0,"sixes":0},
        {7:"pant","runs":0,"ballsfaced":0,"fours":0,"sixes":0},
        {8:"nehra","runs":0,"ballsfaced":0,"fours":0,"sixes":0},
        {9:"sachin","runs":0,"ballsfaced":0,"fours":0,"sixes":0},
        {10:"yuvaraj","runs":0,"ballsfaced":0,"fours":0,"sixes":0}

    ]
   set_player_score(){
       
       var k = 0;
       for(var i=0;i<=30;i++){
           var score = Math.floor(Math.random()*7);
           if (score == 0){
               this.players[k]["runs"]=this.players[k]["runs"]+score;
               this.players[k]["ballsfaced"]+=1
               k += 1
           }
           else if (score == 4){
              this.players[k]["runs"]+= score;
               this.players[k]["ballsfaced"]+= 1; 
               this.players[k]["fours"]+= 1

           }
           else if (score == 6){
               this.players[k]["runs"] += score;
               this.players[k]["ballsfaced"] += 1;
               this.players[k]["sixes"] += 1;
           }
           else{
               this.players[k]["runs"]+= score;
               this.players[k]["balls"]+= 1;
           }
       }
   }
   
   get_teamscore(){
       var totalscore = 0
        for(var i=0;i<11;i++){
            totalscore += this.players[i]["runs"];
        }
        return totalscore;

   }
   get_team_Summary()
    {

        for(var i=0;i<11;i++)
        {
            console.log("PlayerID: "+this.players[i][i],"runs: "+this.players[i]["runs"],"Ballsfaced: "+this.players[i]["ballsfaced"],"Fours: "+this.players[i]["fours"],"Sixes: "+this.players[i]["sixes"])
        }
    }
    
}
var teamA = new team();
teamA.set_player_score();
var teamAscore = teamA.get_teamscore();
teamA.get_team_Summary();
console.log("TeamA Score:",teamAscore);
var teamB = new team();
teamB.set_player_score();
var teamBscore = teamB.get_teamscore();
teamB.get_team_Summary();
console.log("TeamB score:",teamBscore);
if (teamAscore > teamBscore){
    console.log("TeamA winnss");
} 
else{
    console.log("TeamB winnss");
}
