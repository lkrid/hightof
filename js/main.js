var display = new SegmentDisplay("display");
		  var value=0;
		  display.pattern         = "####";
		  display.cornerType      = 2;
		  display.displayType     = 7;
		  display.displayAngle    = 9;
		  display.digitHeight     = 100;
		  display.digitWidth      = 50;
		  display.digitDistance   = 10;
		  display.segmentWidth    = 10;
		  display.segmentDistance = 1;
		  display.colorOn         = "rgba(30, 200, 255, 0.8)";
		  display.colorOff        = "rgba(0, 0, 0, 0.1)";
					$(document).on('pageshow', '.selector', function(){
			  $('#popupBasic').popup('reposition', 'positionTo: window');
			});
		
       function inc(c) {
        var svalue;
		value+=c;
		svalue=value.toString() 
		if(svalue < 10) svalue='   '+svalue;
		if(svalue>=10&&svalue<100) svalue='  '+svalue;
		if(svalue >= 100&&svalue<1000) svalue=' '+ svalue;
         if(svalue >= 1000) svalue=''+ svalue;           
		display.setValue(svalue);
		       
      } 
	  function init()
	  {
		value=0;
		display.setValue('   '+value.toString());
	  }
		 		 
		
		//var ipAddress=window.location.search.match(/\=([^&]+)/)[1];
		
		xmlhttp=new XMLHttpRequest();
		
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		
					
		var position,effect,delay,speed;
			function sendData(p,e,s,d)
			{
				var arr = [p,e,s,d];
				xmlhttp.open("post",'http://127.0.0.1:8080',true);
				xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xmlhttp.send(arr);
			}
			function sendScore(s)
			{
				xmlhttp.open("post",'http://127.0.0.1:8080',true);
				xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
				xmlhttp.send(s);
			}
			function getData()
			{
				delay=document.getElementById('delay_slider').value;
				speed=document.getElementById('speed_slider').value;
				if(effect==null){alert('please select an effect');$('#popupBasic').popup('open');}
				else{
					sendData(position,effect,speed,delay);
				}
			}
			function pop(id)
				{
					var ids=new Array("a1","a2","a3","a4","a5","a6","b1","b2","b3","b4","b5","b6","c1","c2","c3","c4",
					"c5","c6","d1","d2","d3","d4","d5","d6","e1","e2","e3","e4","e5","e6");
					for(i=0;i<30;i++)
						{
							if(id!=ids[i])
							document.getElementById(ids[i]).src = "img/click.png";
						}
						document.getElementById(id).src = "img/ball.png";
						position=id;

				}
			function changeImg(id)
				{
					effect=id;
					document.getElementById("flat").src = "img/flat.png";
					document.getElementById("top").src = "img/top.png";
					document.getElementById("back").src = "img/back.png";
					document.getElementById("lob").src = "img/lob.png";
					if(id=="flat")    { document.getElementById(id).src = "img/flat_on.png";}
					else if(id=="top"){ document.getElementById(id).src = "img/top_on.png";  }
					else if(id=="back"){document.getElementById(id).src = "img/back_on.png";}
					else if(id=="lob"){ document.getElementById(id).src = "img/lob_on.png";  }
				}
