gdjs.StartScreenCode = {};
gdjs.StartScreenCode.localVariables = [];
gdjs.StartScreenCode.GDLogin_9595ButtonObjects1= [];
gdjs.StartScreenCode.GDLogin_9595ButtonObjects2= [];
gdjs.StartScreenCode.GDLobby_9595ButtonObjects1= [];
gdjs.StartScreenCode.GDLobby_9595ButtonObjects2= [];
gdjs.StartScreenCode.GDPlay_9595ButtonObjects1= [];
gdjs.StartScreenCode.GDPlay_9595ButtonObjects2= [];
gdjs.StartScreenCode.GDNewLightObjects1= [];
gdjs.StartScreenCode.GDNewLightObjects2= [];
gdjs.StartScreenCode.GDMenuBackgroundObjects1= [];
gdjs.StartScreenCode.GDMenuBackgroundObjects2= [];
gdjs.StartScreenCode.GDStaticEnemyLookLeftObjects1= [];
gdjs.StartScreenCode.GDStaticEnemyLookLeftObjects2= [];
gdjs.StartScreenCode.GDStaticEnemyLookRightObjects1= [];
gdjs.StartScreenCode.GDStaticEnemyLookRightObjects2= [];
gdjs.StartScreenCode.GDLeaderboard_9595ButtonObjects1= [];
gdjs.StartScreenCode.GDLeaderboard_9595ButtonObjects2= [];


gdjs.StartScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Lobby_Button"), gdjs.StartScreenCode.GDLobby_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartScreenCode.GDLobby_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDLobby_9595ButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartScreenCode.GDLobby_9595ButtonObjects1[k] = gdjs.StartScreenCode.GDLobby_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDLobby_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Login_Button"), gdjs.StartScreenCode.GDLogin_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartScreenCode.GDLogin_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDLogin_9595ButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartScreenCode.GDLogin_9595ButtonObjects1[k] = gdjs.StartScreenCode.GDLogin_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDLogin_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play_Button"), gdjs.StartScreenCode.GDPlay_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartScreenCode.GDPlay_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDPlay_9595ButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartScreenCode.GDPlay_9595ButtonObjects1[k] = gdjs.StartScreenCode.GDPlay_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDPlay_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Leaderboard_Button"), gdjs.StartScreenCode.GDLeaderboard_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartScreenCode.GDLeaderboard_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDLeaderboard_9595ButtonObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartScreenCode.GDLeaderboard_9595ButtonObjects1[k] = gdjs.StartScreenCode.GDLeaderboard_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDLeaderboard_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "b9f1a03b-3886-4cfa-9f5d-e141c49d1b1c", true);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.StartScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartScreenCode.GDLogin_9595ButtonObjects1.length = 0;
gdjs.StartScreenCode.GDLogin_9595ButtonObjects2.length = 0;
gdjs.StartScreenCode.GDLobby_9595ButtonObjects1.length = 0;
gdjs.StartScreenCode.GDLobby_9595ButtonObjects2.length = 0;
gdjs.StartScreenCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.StartScreenCode.GDPlay_9595ButtonObjects2.length = 0;
gdjs.StartScreenCode.GDNewLightObjects1.length = 0;
gdjs.StartScreenCode.GDNewLightObjects2.length = 0;
gdjs.StartScreenCode.GDMenuBackgroundObjects1.length = 0;
gdjs.StartScreenCode.GDMenuBackgroundObjects2.length = 0;
gdjs.StartScreenCode.GDStaticEnemyLookLeftObjects1.length = 0;
gdjs.StartScreenCode.GDStaticEnemyLookLeftObjects2.length = 0;
gdjs.StartScreenCode.GDStaticEnemyLookRightObjects1.length = 0;
gdjs.StartScreenCode.GDStaticEnemyLookRightObjects2.length = 0;
gdjs.StartScreenCode.GDLeaderboard_9595ButtonObjects1.length = 0;
gdjs.StartScreenCode.GDLeaderboard_9595ButtonObjects2.length = 0;

gdjs.StartScreenCode.eventsList0(runtimeScene);
gdjs.StartScreenCode.GDLogin_9595ButtonObjects1.length = 0;
gdjs.StartScreenCode.GDLogin_9595ButtonObjects2.length = 0;
gdjs.StartScreenCode.GDLobby_9595ButtonObjects1.length = 0;
gdjs.StartScreenCode.GDLobby_9595ButtonObjects2.length = 0;
gdjs.StartScreenCode.GDPlay_9595ButtonObjects1.length = 0;
gdjs.StartScreenCode.GDPlay_9595ButtonObjects2.length = 0;
gdjs.StartScreenCode.GDNewLightObjects1.length = 0;
gdjs.StartScreenCode.GDNewLightObjects2.length = 0;
gdjs.StartScreenCode.GDMenuBackgroundObjects1.length = 0;
gdjs.StartScreenCode.GDMenuBackgroundObjects2.length = 0;
gdjs.StartScreenCode.GDStaticEnemyLookLeftObjects1.length = 0;
gdjs.StartScreenCode.GDStaticEnemyLookLeftObjects2.length = 0;
gdjs.StartScreenCode.GDStaticEnemyLookRightObjects1.length = 0;
gdjs.StartScreenCode.GDStaticEnemyLookRightObjects2.length = 0;
gdjs.StartScreenCode.GDLeaderboard_9595ButtonObjects1.length = 0;
gdjs.StartScreenCode.GDLeaderboard_9595ButtonObjects2.length = 0;


return;

}

gdjs['StartScreenCode'] = gdjs.StartScreenCode;
