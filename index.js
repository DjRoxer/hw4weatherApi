$( document ).ready( function () {

var proxy = 'https://cors-anywhere.herokuapp.com/';

var lat;
var lng;
var color= "red";
var tem = 81;
var states= Object.keys(state_info);
var urlsky;
var request;

var key ='74bcf457560833bb4642b5918b3acb02';
var site = 'https://api.darksky.net/forecast/';
states.forEach(function(state)

{
	//window.alert(temp);

	lat =state_info[state].lat;
	lng =state_info[state].lng;
	urlsky = site + key +'/'+lat+','+lng;
	$.ajax({url:urlsky, dataType: "jsonp"}).then(function(data){
		console.log(data);


	        var temp = data.currently.temperature;

                console.log(data.currently.temperature);

//	window.alert(temp);
        if(temp<=10)
        {
                color='blue';
        }
        if(temp > 10 && temp <= 30)
        {
                color='cyan';
        }
        if(temp > 30 && temp <= 50)
        {
                color='green';
        }
        if(temp > 50 && temp <=80)
        {
                color='orange';
        }
        if(temp>80)
        {
                color='red';
       	}


	$('#'+state).css('fill', color);
	})

})
}

)
