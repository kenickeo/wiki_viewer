
/*Retrieves Wikipedia API data based on a search entry*/
function getWiki(){


var wikientry = $('#wikientry').val();
var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + wikientry + "&format=json&callback=wikiCallback";





$.ajax({

    type: "GET",
    url: url,
    dataType: "jsonp",

	success: function(data){

       
     /*Searches each index of data in the json array and appends the data to the display element*/
      for (var i = 0; i < data[1].length; i++) {
          
        var entry = data[1][i]; 
        var description = data[2][i];
        var link = data[3][i];
        var $display = $('.display');
       $display.append('<p class = "text">' + '<a href =' + '"' + link + '"' + 'style = "text-decoration: none" id = "remove">' + entry  + '</a>' + '</p>' + '<br/>' + '<p class = "description">' + description + '</p>').hide().fadeIn(200);
      
       }
        

       
    }

   });
}


$(document).ready(function(){

/*When enter is pressed, links and additional info about the link are displayed in the results*/
$('#wikientry').on('keypress',function(){

    if (event.which == 13){

         getWiki();

      }


});

/*When the close button is pressed, the links and link info are cleared from the screen*/
$('.fa-close').on('click', function(){

    wikientry.value = '';
    $('.text').html('');
    $('.description').html('');
    $('.display').html('');
   
});

});