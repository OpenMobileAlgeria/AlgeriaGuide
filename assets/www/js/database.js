 
var db = window.openDatabase("Database", "1.0", "Algeria Guide", 200000);

var currentCatName;

/*
 */
function contactbycat(idcat,name)
{
	currentCatName=name;
	db.transaction(function (tx) {
tx.executeSql('SELECT * FROM contact where category=?',[idcat],  contactbycatSuccess, errorCB)			
	});
	
	
}


function contactbycatSuccess(tx, results) {

	
	$('#category-title').text(currentCatName);	

    var len = results.rows.length;

    $('#contact-list').html("");
    for (var i=0; i<len; i++){                
          $('<li>')                      
          .attr('id',results.rows.item(i).id) 
          .attr('class','contact-link') 
          .html('<a >'+results.rows.item(i).name+'</a>')        
          .appendTo('#contact-list')  ;
      }
      $('#contact-list').listview('refresh');
   
}


/*
 * 
 */
function contactdetail(id)
{
	db.transaction(function (tx) {
tx.executeSql('SELECT * FROM contact where id=?',[id], contactDetailSuccess, errorCB)			
	});
}

function contactDetailSuccess(tx, results) {
    var len = results.rows.length;
    if(len!=0)
    	{
    	
    	
    	$('#contact-title').html(results.rows.item(0).name);

    	$('#contact-detail').html("");   
                
          $('<li>')                      
          .attr('id','wilaya') 
          .html('<span> Wilaya :  </span><span>'+results.rows.item(0).wilaya +'</span>')        
          .appendTo('#contact-detail')  ;
      
          $('<li>')                      
          .attr('id','address') 
          .html('<span> Adresse :  </span><span>'+results.rows.item(0).address +'</span>')        
          .appendTo('#contact-detail')  ;
          
          $('<li>')                      
          .attr('id','tel1') 
         .html('<span>tel1 : </span><span><a href="tel:'+results.rows.item(0).tel1 +'">'+results.rows.item(0).tel1 +'</a></span>')        
          .appendTo('#contact-detail')  ;
      
          $('<li>')                      
          .attr('id','tel2') 
          .html('<span>tel2 : </span><span><a href="tel:'+results.rows.item(0).tel2 +'">'+results.rows.item(0).tel2 +'</a></span>')        
          .appendTo('#contact-detail')  ;
          
          $('<li>')                      
          .attr('id','tel3') 
         .html('<span>tel3 : </span><span><a href="tel:'+results.rows.item(0).tel3 +'">'+results.rows.item(0).tel3 +'</a></span>')              
          .appendTo('#contact-detail')  ;
          
          $('<li>')                      
          .attr('id','email') 
         .html('<span>E-mail : </span><span><a href="mailto:'+results.rows.item(0).email +'">'+results.rows.item(0).email +'</a></span>')              
          .appendTo('#contact-detail')  ;
          
          $('<li>')                      
          .attr('id','website') 
         .html('<span>Site web : </span><span><a href="#" class="link" rel="='+results.rows.item(0).website +'">'+results.rows.item(0).website +'</a></span>')              
          .appendTo('#contact-detail')  ;
          
          $('<li>')                      
          .attr('id','map') 
         .html('<div id="map_canvas"></div>')              
          .appendTo('#contact-detail')  ;
          
          $("#map_canvas").width($(document).width()-60);  
          $("#map_canvas").height(  
      
       ($(window).height()- $('#map_canvas').outerHeight()- $("div.ui-header").outerHeight())/2  
          );  
          initialize(45.7452, 4.8418);
          
      $('#contact-detail').listview('refresh');
    	}
    
}


/*
 * 
 */

function categoryDB(tx) {
    tx.executeSql('SELECT * FROM category', [], categorySuccess, errorCB);
}

function categorySuccess(tx, results) {
    var len = results.rows.length;
//    console.log("CAREGORY table: " + len + " rows found.");
    for (var i=0; i<len; i++){
//        console.log("Row = " + i + " ID = " + results.rows.item(i).id + " Data =  " + results.rows.item(i).name);
        
        $('<li>') 
         .attr('class','category-link') 
        .attr('id',results.rows.item(i).id) 
        .html('<a >'+results.rows.item(i).name+'</a>')        
        .appendTo('#category-list')  ;
    }
    $('#category-list').listview('refresh');
}



/*
 * 
 */

function createdb() {
        db.transaction(populateDB, errorCB, successCB);

}


// Transaction error callback
//
function errorCB(tx, err) {
    alert("Error processing SQL: "+err);
}

// Transaction success callback
//
function successCB() {
//	  alert("Success");
	db.transaction(categoryDB, errorCB);
}

   