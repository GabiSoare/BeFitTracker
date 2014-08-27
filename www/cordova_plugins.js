cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.megster.cordova.bluetoothserial/www/bluetoothSerial.js",
        "id": "com.megster.cordova.bluetoothserial.bluetoothSerial",
        "clobbers": [
            "bluetoothSerial"
        ]
    },
    {
        "file": "plugins/nl.x-services.plugins.calendar/www/Calendar.js",
        "id": "nl.x-services.plugins.calendar.Calendar",
        "clobbers": [
            "Calendar"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.megster.cordova.bluetoothserial": "0.2.2",
    "nl.x-services.plugins.calendar": "3.2"
}
// BOTTOM OF METADATA
});