Blockly.Blocks["touchpad_checkkeypad"] = {
  init: function() {
    this.jsonInit({
      "type": "touchpad_checkkeypad",
      "message0": Blockly.Msg.TOUCHPAD_CHECKKEYPAD_MESSAGE0,
      "output": null,
      "colour": "#e63022",
      "tooltip": Blockly.Msg.TOUCHPAD_CHECKKEYPAD_TOOLTIP,
      "helpUrl": Blockly.Msg.TOUCHPAD_CHECKKEYPAD_HELPURL
    });
  }
};

Blockly.Python["touchpad_checkkeypad"] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  Blockly.Python.definitions_["import_i2c"] = "from machine import Pin, I2C";
  Blockly.Python.definitions_["import_mpr121"] = "from keypad121 import MPR121";
  Blockly.Python.definitions_["import_keypad"] = "keypad = MPR121(I2C(-1, scl=Pin(22), sda=Pin(21)))";
  // TODO: Assemble Python into code variable.
  var code ="keypad.check_keypad()";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['touchpad_istouch'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "touchpad_istouch",
        "message0": Blockly.Msg.TOUCHPAD_ISTOUCHED_MESSAGE0,
        "args0": [
          {"type": "field_dropdown",
          "name": "touch",
          "options": [
            [
              "1",
              "'1'"
            ],
            [
              "2",
              "'2'"
            ],
            [
              "3",
              "'3'"
            ],
            [
              "4",
              "'4'"
            ],
            [
              "5",
              "'5'"
            ],
            [
              "6",
              "'6'"
            ],
            [
              "7",
              "'7'"
            ],
            [
              "8",
              "'8'"
            ],
            [
              "9",
              "'9'"
            ],
            [
              "*",
              "'*'"
            ],
            [
              "0",
              "'0'"
            ],
            [
              "#",
              "'#'"
            ]
          ]}
        ],
        "output": "Boolean",
        "colour": "#e63022",
        "tooltip": Blockly.Msg.TOUCHPAD_ISTOUCHED_TOOLTIP,
        "helpUrl": Blockly.Msg.TOUCHPAD_ISTOUCHED_HELPURL
      }
    );
  }
};

Blockly.Python['touchpad_istouch'] = function(block) {
  Blockly.Python.definitions_["import_yolobit"] = "from yolobit import *";
  Blockly.Python.definitions_["import_i2c"] = "from machine import Pin, I2C";
  Blockly.Python.definitions_["import_mpr121"] = "from keypad121 import MPR121";
  Blockly.Python.definitions_["import_keypad"] = "keypad = MPR121(I2C(-1, scl=Pin(22), sda=Pin(21)))";
  var dropdown_touch = block.getFieldValue('touch');
  // TODO: Assemble Python into code variable.
  // TODO: Change ORDER_NONE to the correct strength.
  var code = 'keypad.check_keypad() == ' + dropdown_touch;
  return [code, Blockly.Python.ORDER_NONE];
};