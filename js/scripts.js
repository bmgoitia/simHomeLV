
window.onload = function() {

 outputFlag = false;
 fechaSet = false;
 

let data = [];


  $("#plantAp2").click(function(){
    $("#chP1").toggleClass("col-4 col-8");
    $("#chP2").toggleClass("col-8 col-4");
  })

  $("#plantAp1").click(function(){
    $("#chP1").toggleClass("col-4 col-8");
    $("#chP2").toggleClass("col-8 col-4");
  })



    $("#bExtra").click(function(){

        $("#extraBlocks").toggle()

    })

    $("#bOutput").click(function(){

        $("#output").css("display", "block")



        moment.locale("ca");
        let fecha = moment().add(1,'days').format("LL");

        if(!fechaSet){
            $("#output h3").append(`<span> ${fecha} </span>`)
        }
        
        fechaSet = true;
         


        if(outputFlag){
            $("#outTable").empty()
            data = [];
        }
        
        let allText = $("p")
        console.log(allText);

        for(var ele of allText){ 
            var newObj = {}; 
            newObj['id'] = ele.id; 
            newObj['value'] = ele.innerText; 
            data.push(newObj);  
         } 


        outputFlag = true;

         let allCheck = $("input[type='checkbox']")

         //console.log(allCheck);

         for(var ele of allCheck){ 
            if(ele.checked) { 

                for(var elem of data){ 
                    if(elem["id"] == ele.nextElementSibling.id){
                        elem.checked = true;
                        //console.log(data)
                    }
                  } 
            } 
         } 
    

        // for(let i=0; i <data.length; i++){
        //     if(data[i].checked){
        //         $("#outTable").append(`<tr> <td> ${data[i].id} </td> <td> ${data[i].value} <span> <strong> -- PREMIUM </span> </strong> </td> </tr>`)
        //     }else if(data[i].value){
        //         $("#outTable").append(`<tr> <td> ${data[i].id} </td> <td> ${data[i].value} </td> </tr>`)
        //     }else{
        //         $("#outTable").append(`<tr> <td> ${data[i].id} </td> </tr>`)
        //     }           
            
        // }

        let notes = $("#notesText")[0].value;
        
        
            $("#notesOutT").text(`${notes}`)
        
        

        


        for(let i=0; i <data.length; i++){
            if(data[i].value == "Lorem ipsum dolor sit amet consectetur adipisicing elit"  || data[i].value == "Titular de apertura a 3 líneas"){
                $("#outTable").append(`<tr> <td> ${data[i].id} </td> <td> <i> Pendiente de asignar </i> </td> </tr>`)
            }else{
                $("#outTable").append(`<tr> <td> ${data[i].id} </td> <td> ${data[i].value} </td> </tr>`)
            }           
            
        }


        $("tr:nth-of-type(2)").after( "<tr> <td>  <td> </tr>" );
        $("tr:nth-of-type(7)").after( "<tr> <td>  <td> </tr>" );
        $("tr:nth-of-type(10)").after( "<tr> <td>  <td> </tr>" );
        $("tr:nth-of-type(16)").after( "<tr> <td>  <td> </tr>" );
        $("tr:nth-of-type(20)").after( "<tr> <td>  <td> </tr>" );
        

        

    })
 
 
    
    $("#generateP button").click(function(){
        let selAllText =  $("textarea");
        let selAllCheck = $("input[type='checkbox']")

        for(var ele of selAllText){ 
             ele.value="";
         } 

         for(var ele of selAllCheck){ 
            ele.checked=false;
        } 

        data=[];

        console.log(data)

        $("#output").css("display", "none")

      })
   










};