/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        $('#section-bio').css('font-family', 'papyrus');
        $('body').css('background', 'green');
        $('#section-quotes').css('font-size', '15px').css('font-weight', 'bold');
        
        //create li item, add txt to it, once have txt -> add it to unordered list
        
        // uncomment this to inspect all available data; delete when done //
        // console.log(data);
        
        // EXAMPLE: Looping over top rated recordings; replace with your code //
        let topRated = data.discography.topRated;
        let billies = data.images.billy;
        _.map(topRated, function(e, i, c){
            $('<li>').text(e.title).appendTo('#list-top-rated').on('click', function(event){
                $('#top-rated-container').attr('src', e.art);
            });
        });
        
        let $section = $('<section>').attr('id','section-recordings').appendTo('#sidebar');
        let $ul = $('<ul>').attr('id','recordings-list').appendTo('#section-recordings').text('Recordings');
        let recordings = data.discography.recordings;
        _.forEach(recordings, function(e, i, c){
            $('<li>').attr("class", "recording"+i).appendTo('#recordings-list').on('click', function(event) {
                $('#recordings-container').attr('src', e.art);
            });
            $('<div>').text('Title: ' + e.title).appendTo('.recording' + i), $('<div>').text('Artist: ' + e.artist).appendTo('.recording' + i), $('<div>').text('Release: ' + e.release).appendTo('.recording' + i), $('<div>').text('Year: ' + e.year).appendTo('.recording' + i);
            
        });
        
        
        $('#section-recordings').prepend('<img id="recordings-container" src="images/album/eastern-rebellion.jpg" />');
        $('#section-top-rated').prepend('<img id="top-rated-container" src="images/album/voice-in-the-night.jpg" />');
        
        
         
        $('#image-billy').click(function(event){
          let i =  $(event.target).attr('i');
           i = parseFloat(i);
            $(event.target).attr('i', i += 1);
        
           if(i > billies.length-1) {
                i = -1;
               $(event.target).attr('i', i += 1); 
            }
            
          // console.log(i);
            $('#image-billy').attr('src', billies[i]);
        });
        let $riders = data.rider;
        $('<section>').attr('id', 'bottom-rider').appendTo("#sections");
        var createTable = function(riders){
    var createRow = function(rider){
        var $row = $("<tr>");
        var $type = $("<td>").text(rider.type);
        var $desc = $("<td>").text(rider.desc);
        $row.append($type);
        $row.append($desc);
        return $row;
    }
    var $table = $("<table>");
    var $rows = riders.map(createRow);
    $table.append($rows);
    return $table;
};
createTable($riders).appendTo($('#bottom-rider'));
        
        
        
            
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});



