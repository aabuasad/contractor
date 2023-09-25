function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZqT98sM2OC":
        Script1();
        break;
  }
}

function Script1()
{
  var today = new Date();
var fulldate = today.toDateString();
var fulltime = today.toLocaleTimeString();
var player = GetPlayer();
player.SetVar("date",fulldate);
player.SetVar("time",fulltime);
}

