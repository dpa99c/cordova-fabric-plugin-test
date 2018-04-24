function onDeviceReady(){
    console.log("deviceready");
    checkInit();
}
$(document).on('deviceready', onDeviceReady);


function init(){
    window.fabric.core.initialize();
}

function checkInit(){
    window.fabric.core.isInitialized(function(initialized){
        if(initialized){
            $('body').addClass('initialized');
        }
    });
}

function sendFatalCrash(){
    window.fabric.Crashlytics.addLog("about to send a crash for testing!");
    window.fabric.Crashlytics.sendCrash();
}

function sendNonFatalCrash(){
    window.fabric.Crashlytics.addLog("about to send a non fatal crash for testing!");
    window.fabric.Crashlytics.sendNonFatalCrash("Error message");
}