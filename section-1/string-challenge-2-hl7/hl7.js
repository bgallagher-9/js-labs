var PIDParser = {

  name: function(data) {
    var a = [];
    var b = '';
    // var c = [];
    a = data.split('||');
    // console.log(a.length);
    // console.log(a[2]);
    // var pidArr = a[0];
    // var padIdArr = a[1];
    // var nameArr = a[2];
    // var dobArr = a[3];
    // var addPhoneArr = a[4];
    // var marArr = a[5];
    // var pidSsnArr = a[6];
    return a[2];

  },

  birthYear: function(data) {
    var a = [];
    var b = [];
    var c = [];
    a = data.split('||');
    // b = a.split('||');
    var pidArr = a[0];
    var padIdArr = a[1];
    var nameArr = a[2];
    var dobArr = a[3];
    var addPhoneArr = a[4];
    var marArr = a[5];
    var pidSsnArr = a[6];
    // console.log(a);
    // console.log(b);
    return a[3].substr(0,4);
  },

  birthMonth: function(data) {
    var a = [];
    var b = '';
    var c = [];
    a = data.split('||');
    var pidArr = a[0];
    var padIdArr = a[1];
    var nameArr = a[2];
    var dobArr = a[3];
    var addPhoneArr = a[4];
    var marArr = a[5];
    var pidSsnArr = a[6];
    // console.log(a[3]);
    return a[3].substr(4,2);
  },

  birthDay: function(data) {
    var a = [];
    a = data.split('||');
    return a[3].substr(6,2);

  }
}

var MSHParser = {

  type: function(data) {
    var a = [];
    // var b = []
    a = data.split('|');
    return a[8];
  },

  sendingApplication: function(data) {
    var a = [];
    a = data.split('|');
    return a[2];
  },

  sendingFacility: function(data) {
    var a = [];
    a = data.split('|');
    return a[3];
  },

  receveivingApplication: function(data) {
    var a = [];
    a = data.split('|');
    return a[4];
  },

  receivingFacility: function(data) {
    var a = [];
    a = data.split('|');
    return a[5];
  }

}
