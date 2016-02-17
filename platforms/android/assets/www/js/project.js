var project = {
 // Get all projects and populate list
    getProjects: function(token){

        $.ajax( {
                url: 'http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/',
                type: 'GET',
                headers: {
                   "Authorization" : "Token "+ token
                },
                success: function( response ) {
                   console.log(JSON.stringify(response));
                   for(var i in response)
                   {
                      //alert(response[i].title);
                      $("ul#myList").append("<li><a href='projectDetail.html?token="+token+"&pk="+response[i].pk+"' '>"+response[i].title+"</a></li>");
                   }
                },
                error : function (data, errorThrown) {
                  alert(3);
                }
            } );
    },

    // Get project PK
    getProjectbypk: function(token, pk){

        $.ajax( {
                url: 'http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/'+pk+'/',
                type: 'GET',
                headers: {
                   "Authorization" : "Token " + token
                },
                success: function( response ) {
                   console.log(JSON.stringify(response));
                    $('#pk').val(response.pk);
                    $('#title').val(response.title);
                    $('#desc').val(response.description);
                    $('#st_date').val(response.start_date);
 
                },
                error : function (data, errorThrown) {
                  alert(3);
                }
            } );
    },

    // edit project and submit
    editProject: function(token){

        $.ajax( {   
                url: 'http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/'+$( "#pk" ).val()+'/',
                type: 'PUT',
                headers: {
                   "Authorization" : "Token "+ token
                },
                data: {
                  pk : $( "#pk" ).val(),
                  title: $( "#title" ).val(),
                  description : $( "#desc" ).val(),
                  start_date: $( "#st_date" ).val(),
                },
                success: function( response ) {
                   console.log(JSON.stringify(response));
                   window.open("projectList.html?token="+token);
 
                },
                error : function (data, errorThrown) {
                  alert(3);
                }
            } );
    },
}