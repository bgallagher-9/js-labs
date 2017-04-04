var PIDParser = {

  name: function(data) {
    var a = data.split('|');
    return a[5];
  },

  birthYear: function(data) {
    var a = data.split('|');
    return a[7].substr(0,4);
  },

  birthMonth: function(data) {
    var a = data.split('|');
    return a[7].substr(4,2);
  },

  birthDay: function(data) {
    var a = data.split('|');
    return a[7].substr(6,2);
  }
}

var MSHParser = {

  type: function(data) {
    var a = data.split('|');
    return a[8];
  },

  sendingApplication: function(data) {
    var a = data.split('|');
    return a[2];
  },

  sendingFacility: function(data) {
    var a = data.split('|');
    return a[3];
  },

  receveivingApplication: function(data) {
    var a = data.split('|');
    return a[4];
  },

  receivingFacility: function(data) {
    var a = data.split('|');
    return a[5];
  }
}
