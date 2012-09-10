#! /bin/bash
cordova/debug
adb uninstall com.intel.dpd
adb install bin/calculator-debug.apk 
adb shell am start -a android.intent.action.MAIN -n com.intel.dpd/.calculator
