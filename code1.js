gdjs.StartScreenCode = {};
gdjs.StartScreenCode.localVariables = [];
gdjs.StartScreenCode.GDLoginObjects1= [];
gdjs.StartScreenCode.GDLoginObjects2= [];
gdjs.StartScreenCode.GDLobbyObjects1= [];
gdjs.StartScreenCode.GDLobbyObjects2= [];
gdjs.StartScreenCode.GDPlayObjects1= [];
gdjs.StartScreenCode.GDPlayObjects2= [];
gdjs.StartScreenCode.GDNewLightObjects1= [];
gdjs.StartScreenCode.GDNewLightObjects2= [];
gdjs.StartScreenCode.GDMenuBackgroundObjects1= [];
gdjs.StartScreenCode.GDMenuBackgroundObjects2= [];
gdjs.StartScreenCode.GDStaticEnemyLookLeftObjects1= [];
gdjs.StartScreenCode.GDStaticEnemyLookLeftObjects2= [];
gdjs.StartScreenCode.GDStaticEnemyLookRightObjects1= [];
gdjs.StartScreenCode.GDStaticEnemyLookRightObjects2= [];


gdjs.StartScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Lobby"), gdjs.StartScreenCode.GDLobbyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartScreenCode.GDLobbyObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDLobbyObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartScreenCode.GDLobbyObjects1[k] = gdjs.StartScreenCode.GDLobbyObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDLobbyObjects1.length = k;
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

gdjs.copyArray(runtimeScene.getObjects("Login"), gdjs.StartScreenCode.GDLoginObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartScreenCode.GDLoginObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDLoginObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartScreenCode.GDLoginObjects1[k] = gdjs.StartScreenCode.GDLoginObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDLoginObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.StartScreenCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartScreenCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.StartScreenCode.GDPlayObjects1[i].IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.StartScreenCode.GDPlayObjects1[k] = gdjs.StartScreenCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.StartScreenCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.StartScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartScreenCode.GDLoginObjects1.length = 0;
gdjs.StartScreenCode.GDLoginObjects2.length = 0;
gdjs.StartScreenCode.GDLobbyObjects1.length = 0;
gdjs.StartScreenCode.GDLobbyObjects2.length = 0;
gdjs.StartScreenCode.GDPlayObjects1.length = 0;
gdjs.StartScreenCode.GDPlayObjects2.length = 0;
gdjs.StartScreenCode.GDNewLightObjects1.length = 0;
gdjs.StartScreenCode.GDNewLightObjects2.length = 0;
gdjs.StartScreenCode.GDMenuBackgroundObjects1.length = 0;
gdjs.StartScreenCode.GDMenuBackgroundObjects2.length = 0;
gdjs.StartScreenCode.GDStaticEnemyLookLeftObjects1.length = 0;
gdjs.StartScreenCode.GDStaticEnemyLookLeftObjects2.length = 0;
gdjs.StartScreenCode.GDStaticEnemyLookRightObjects1.length = 0;
gdjs.StartScreenCode.GDStaticEnemyLookRightObjects2.length = 0;

gdjs.StartScreenCode.eventsList0(runtimeScene);

return;

}

gdjs['StartScreenCode'] = gdjs.StartScreenCode;
