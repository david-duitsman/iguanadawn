gdjs.LeaderboardBackgroundCode = {};
gdjs.LeaderboardBackgroundCode.localVariables = [];
gdjs.LeaderboardBackgroundCode.GDLoadingObjects1= [];
gdjs.LeaderboardBackgroundCode.GDLoadingObjects2= [];
gdjs.LeaderboardBackgroundCode.GDError_9595Loading_9595LeaderboardObjects1= [];
gdjs.LeaderboardBackgroundCode.GDError_9595Loading_9595LeaderboardObjects2= [];


gdjs.LeaderboardBackgroundCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10709332);
}
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "b9f1a03b-3886-4cfa-9f5d-e141c49d1b1c", true);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isLeaderboardViewLoaded());
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


{



}


{



}


{



}


};

gdjs.LeaderboardBackgroundCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardBackgroundCode.GDLoadingObjects1.length = 0;
gdjs.LeaderboardBackgroundCode.GDLoadingObjects2.length = 0;
gdjs.LeaderboardBackgroundCode.GDError_9595Loading_9595LeaderboardObjects1.length = 0;
gdjs.LeaderboardBackgroundCode.GDError_9595Loading_9595LeaderboardObjects2.length = 0;

gdjs.LeaderboardBackgroundCode.eventsList0(runtimeScene);
gdjs.LeaderboardBackgroundCode.GDLoadingObjects1.length = 0;
gdjs.LeaderboardBackgroundCode.GDLoadingObjects2.length = 0;
gdjs.LeaderboardBackgroundCode.GDError_9595Loading_9595LeaderboardObjects1.length = 0;
gdjs.LeaderboardBackgroundCode.GDError_9595Loading_9595LeaderboardObjects2.length = 0;


return;

}

gdjs['LeaderboardBackgroundCode'] = gdjs.LeaderboardBackgroundCode;
