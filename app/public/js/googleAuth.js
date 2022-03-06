

// load html
var xmlhttp = new XMLHttpRequest();
fetch("/googleAuth.html").then((res)=>{
  return res.text();
}).then((data)=>{
  document.body.innerHTML=data;
})
// xmlhttp.send(null);


// URLを取得
var url = new URL(window.location.href);
// URLSearchParamsオブジェクトを取得
var params = url.searchParams;
var modeStop=params.get("stop");

// load googleAuth
const script=document.createElement("script");
script.src="https://apis.google.com/js/api.js";
script.onload=()=>{
  handleClientLoad();
}
function handleClientLoad() {
  console.log("handle client load.");

  // Load the API client and auth2 library
  gapi.load('client:auth2', initClient);
  console.log("load gapi.")
}

document.body.appendChild(script);

console.log("add google auth");
// https://github.com/google/google-api-javascript-client/blob/master/samples/authSample.html
//https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow#js-client-library


function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    console.log("signined.");
  }
  var user = GoogleAuth.currentUser.get();
  console.log(user);
}


function handleAuthClick() {
  console.log("click auth.");
  // Listen for sign-in state changes.
  GoogleAuth.signIn();

  loadData();
}

function handleSignoutClick() {
  GoogleAuth = gapi.auth2.getAuthInstance();
  GoogleAuth.signOut();
  GoogleAuth.getAuthInstance().disconnect();
  deleteToken();
}

// https://qiita.com/kenken1981/items/9d738687c5cfb453be19

//https://developers.google.com/sheets/api/quickstart/js?hl=ja
// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4",'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'];
// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";


var GoogleAuth; // Google Auth object.
function initClient() {
  gapi.client.init({
      'apiKey': 'AIzaSyCnh8Pp1Z14e-GFU3N_jmlx_vHdVMKfZ9k',
      'clientId': '776435756096-l59dhhfdrsao4lvtptkqk05qc0uvlev4.apps.googleusercontent.com',
      'scope': SCOPES,
      'discoveryDocs': DISCOVERY_DOCS
  }).then(function () {
      console.log("setup GA instance.")
      GoogleAuth = gapi.auth2.getAuthInstance();

      if(modeStop)return;
      loadData();

      GoogleAuth.isSignedIn.listen(updateSigninStatus); 

  });
}


console.log("google auth initialized.")



function checkToken(){
  if(gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().access_token!=null){
      return true;
      document.cookie
  }
  return false;
}

function loadData(){
  if(!checkToken())return;

  gapi.client.sheets.spreadsheets.values.get({
    spreadsheetId: '1ub7YSRagS4kBO_chNAzA2YUxZY7uq_7HIgKnvanNEBc',
    range: 'Token!A1',
  }).then(function(response) {
    var range = response.result;
    if (range.values.length > 0) {
      // save to local strage.
      window.location.href="run?token="+range.values[0][0];
    } else {
      console.log("can't get data.");
      deleteToken();
    }
  }, function(response) {
    appendPre('Error: ' + response.result.error.message);
  });
}
