$(document).ready(function(){
  $("form#transportation_survey").submit(function(event){
    event.preventDefault();
    $("#work-responses").show();

    var userResponses = [];


    $("input:checkbox[name=work-transportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      userResponses.push(workTransportationMode);

    });

    $("#fun-responses").show();

    var user2Responses = [];

    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      user2Responses.push(funTransportationMode);


    });

    alert(userResponses);
    $("#transportation_survey").hide();

  });
});
