function home(){
    var homepage = document.getElementsByClassName("homepage");
    var calculate = document.getElementsByClassName("calculate");
    var recipes = document.getElementsByClassName("recipes");
    var info = document.getElementsByClassName("info");
    var soups = document.getElementsByClassName("soups");
    var soup1 = document.getElementsByClassName("soup1");
        
    homepage[0].style.display = "block";
    calculate[0].style.display = "none";
    recipes[0].style.display = "none";
    info[0].style.display = "none";
    soups[0].style.display = "none"; 
    soup1[0].style.display = "none";
}
       
function calculate(){
    var homepage = document.getElementsByClassName("homepage");
    var calculate = document.getElementsByClassName("calculate");
    var recipes = document.getElementsByClassName("recipes");
    var info = document.getElementsByClassName("info");
    var soups = document.getElementsByClassName("soups");
    var soup1 = document.getElementsByClassName("soup1");
        
    homepage[0].style.display = "none";
    calculate[0].style.display = "block";
    recipes[0].style.display = "none";
    info[0].style.display = "none";
    soups[0].style.display = "none";
    soup1[0].style.display = "none";
}
       
function recipes(){
    var homepage = document.getElementsByClassName("homepage");
    var calculate = document.getElementsByClassName("calculate");
    var recipes = document.getElementsByClassName("recipes");
    var info = document.getElementsByClassName("info");
    var soups = document.getElementsByClassName("soups");
    var soup1 = document.getElementsByClassName("soup1");
        
    homepage[0].style.display = "none";
    calculate[0].style.display = "none";
    recipes[0].style.display = "block";
    info[0].style.display = "none";
    soups[0].style.display = "none";  
    soup1[0].style.display = "none";                
}

function soups(){
    var homepage = document.getElementsByClassName("homepage");
    var calculate = document.getElementsByClassName("calculate");
    var recipes = document.getElementsByClassName("recipes");
    var info = document.getElementsByClassName("info");
    var soups = document.getElementsByClassName("soups");
    var soup1 = document.getElementsByClassName("soup1");
        
    homepage[0].style.display = "none";
    calculate[0].style.display = "none";
    recipes[0].style.display = "none";
    info[0].style.display = "none";    
    soups[0].style.display = "block";
    soup1[0].style.display = "none";     
}

function soup1(){
    var homepage = document.getElementsByClassName("homepage");
    var calculate = document.getElementsByClassName("calculate");
    var recipes = document.getElementsByClassName("recipes");
    var info = document.getElementsByClassName("info");
    var soups = document.getElementsByClassName("soups");
    var soup1 = document.getElementsByClassName("soup1");
        
    homepage[0].style.display = "none";
    calculate[0].style.display = "none";
    recipes[0].style.display = "none";
    info[0].style.display = "none";    
    soups[0].style.display = "none"; 
    soup1[0].style.display = "block";     
}
       
function info(){        
    var homepage = document.getElementsByClassName("homepage");
    var calculate = document.getElementsByClassName("calculate");
    var recipes = document.getElementsByClassName("recipes");
    var info = document.getElementsByClassName("info");
    var soups = document.getElementsByClassName("soups");
    var soup1 = document.getElementsByClassName("soup1");
        
    homepage[0].style.display = "none";
    calculate[0].style.display = "none";
    recipes[0].style.display = "none";
    info[0].style.display = "block";
    soups[0].style.display = "none";
    soup1[0].style.display = "none";
}


function plus(){
    var input = parseInt(document.getElementById("inputNumber").value, 10);
            
    var total = input+1;       
          
    //alert(total);
            
    document.getElementById("inputNumber").value = total;            
}
               
function minus(){
    var input = parseInt(document.getElementById("inputNumber").value, 10);         
            
    var total = input-1;          
          
    //alert(total);
            
    document.getElementById("inputNumber").value = total;            
}


window.onload = function(){            
    var product_select= document.getElementById("product_select");

    var products = ["85% Chocolate", "Apple" , "Banana", "Cereals", "Cheese", "Cocoa/milk drinks", "Dressings", "Dried milk products", "Fish", "Frozen meals", "Fruit juice", "Gravy", "Mayonnaise, remoulade", "Meat, poultry", "Milk", "Pear", "Potato products/salad", "Ready meals", "Rye bread, crispbread", "Soft drinks", "Whole grain bread, buns"   ];
    
    for(var i = 0; i < products.length; i++){      
        var options = products[i];        
        var option = document.createElement("option");
        
        option.textContent = options;
        option.value = options;
        
        product_select.appendChild(option);    
    } 
}

function add(option){                     
    window.onload = add;
    
    var product_select= document.getElementById("product_select");

    var selection = product_select.options[product_select.selectedIndex].value;
    
    var output = document.getElementById("output");
    
   // output.innerHTML = selection;
    
    var table = document.getElementById("table");
    
    var tbody = document.getElementById("tbody");
    
    var inputNumber = document.getElementById("inputNumber").value;
  
    if (selection==0){       
       let productDanger = document.getElementById("productDanger");
        
        productDanger.style="display:block";

    } else if (inputNumber <= 0) {
            let danger = document.getElementById("danger");
            productDanger.style="display:none";
        
            danger.style="display:block";

        } else if (document.getElementById(selection)){
                var productExists = document.getElementById("sameProductDanger");
                
                productExists.style="display:block";
              
            } else {
                    var productExists = document.getElementById("sameProductDanger");
                    productExists.style="display:none";

                    danger.style="display:none";
                    productDanger.style.display="none";

                    var tr = document.createElement('tr');
    
                    tbody.appendChild(tr);
    
    
                    var sugarTd = tr.appendChild(document.createElement('td'));
                    var fatTd = tr.appendChild(document.createElement('td'));
                    var productTd = tr.appendChild(document.createElement('td'));
                    var fiberTd = tr.appendChild(document.createElement('td'));
                    var amountTd = tr.appendChild(document.createElement('td'));
                    var deleteTd = tr.appendChild(document.createElement('td'));
                    
                    var sugarClass =  sugarTd.setAttribute("class", "sugar");
                    var fatClass =  fatTd.setAttribute("class", "fat");
                    var fiberClass =  fiberTd.setAttribute("class", "fiber");
    
                    var setId =  tr.setAttribute("id", selection);
    
                    var productName = tr.appendChild(productTd).innerHTML=selection;
                    var productFat =  tr.appendChild(fatTd).innerHTML="fat";
                    var productSugar = tr.appendChild(sugarTd).innerHTML="sugar";
                    var productFiber = tr.appendChild(fiberTd).innerHTML="fiber";
                    var amount = tr.appendChild(amountTd).innerHTML=inputNumber;
                    var deleteIcon = tr.appendChild(deleteTd).innerHTML="Delete";
    
                    var sumFat = document.getElementById("sumFat");
                    var sumSugar = document.getElementById("sumSugar");
                    var sumFiber = document.getElementById("sumFiber");
                                    
                    var rowCount = document.getElementById('table').rows.length;
                    
                    var rows = parseInt(rowCount) - 3;
   
                    var b=document.getElementsByClassName("sugar").length;
                  
                    for (var a = rows; a<b; a++) {
                        //  alert(a);
       
                        var fatSum =  document.getElementsByClassName("fat")[a].innerText;
                        var sugarSum =  document.getElementsByClassName("sugar")[a].innerText;
                        var fiberSum =  document.getElementsByClassName("fiber")[a].innerText;
    
                        //parseFloat(document.getElementsByClassName("sugar")[1].innerText) + parseFloat(document.getElementsByClassName("sugar")[2].innerText);
                        
                        console.log(sugarSum + fatSum + fiberSum);
                        
                        let sugarCount = parseFloat(document.getElementsByClassName("sugar")[a].innerText);
                        let fatCount = parseFloat(document.getElementsByClassName("fat")[a].innerText);
                        let fiberCount = parseFloat(document.getElementsByClassName("fiber")[a].innerText);

                        //  var sumSum = parseFloat(sugarSum);
       
                        console.log("loop a: " + a);
                        /* console.log("loop sugar length: " + b);
                        console.log("row count: " + rows);*/
                        console.log("sugar sum: " + sugarSum);
                        
                        // alert(sugarSum);
                    
                        //  alert(sumo);
       
                        sumFat.innerHTML = fatCount;
                        sumSugar.innerHTML = sugarCount;
                        //console.log(sugarCount);
                        sumFiber.innerHTML = fiberCount;
                        
                        // alert(sumSugar)
                        
                        //  sumFat.innerHTML = "productFat[0]";
                    }
    
                        switch(selection){
                            case "85% Chocolate":
            
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML=Math.round(inputNumber/100 * 14 *100) /100 + "g"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 47 *100) /100 + "g";       
                            productFiber = tr.appendChild(fiberTd).innerHTML=Math.round(inputNumber/100 * 17 *100) /100 + "g";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
                            
                            case "Apple":
            
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";   
                            productSugar = tr.appendChild(sugarTd).innerHTML=Math.round(inputNumber/100 * 10 *100) /100 + "g";     
                            productFat =  tr.appendChild(fatTd).innerHTML= "-";
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break; 
        
                            case "Banana":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";    
                            productSugar = tr.appendChild(sugarTd).innerHTML=Math.round(inputNumber/100 * 23 *100) /100 + "g";      
                            productFat =  tr.appendChild(fatTd).innerHTML= "-";
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
            
                            case "Cereals":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML=Math.round(inputNumber/100 * 13 *100) /100 + "g"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 8 *100) /100 + "g";       
                            productFiber = tr.appendChild(fiberTd).innerHTML=Math.round(inputNumber/100 * 8 *100) /100 + "g";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
            
            
                            case "Cheese":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML="-"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 17 *100) /100 + "g";       
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                             break;
            
                            case "Cocoa/milk drinks":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML=Math.round(inputNumber/100 * 6 *100) /100 + "g"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 0.7 *100) /100 + "g";       
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
                                    
                            case "Dressings":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML="-"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 5 *100) /100 + "g";       
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
                                    
                            case "Dried milk products":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML=Math.round(inputNumber/100 * 6 *100) /100 + "g"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 1.5 *100) /100 + "g";       
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
            
            
                            case "Fish":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML="-"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= "-";       
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
                                    
                            case "Frozen meals":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML="-"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 10 *100) /100 + "g";       
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
                                    
                            case "Fruit juice":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML=Math.round(inputNumber/100 * 2 *100) /100 + "g"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= "-";       
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
            
                            case "Gravy":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML="-"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 5 *100) /100 + "g";       
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;                                    
                                    
                            case "Mayonnaise, remoulade":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML="-"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 10 *100) /100 + "g";       
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;                                    
                                    
                            case "Meat, poultry":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML="-"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 10 *100) /100 + "g";       
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;                               
                                                                        
                            case "Milk":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML="-"; 
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 0.7 *100) /100 + "g";       
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;                                    
               
                            case "Pear":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML=Math.round(inputNumber/100 * 10 *100) /100 + "g";   
                            productFat =  tr.appendChild(fatTd).innerHTML= "-";       
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
                                    
                            case "Potato products/salad":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML="-";   
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 5 *100) /100 + "g";     
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
                                    
            
                            case "Ready meals":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML="-";   
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 5 *100) /100 + "g";     
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
                                                                        
                            case "Rye bread, crispbread":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML=Math.round(inputNumber/100 * 5 *100) /100 + "g";;   
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 7 *100) /100 + "g";     
                            productFiber = tr.appendChild(fiberTd).innerHTML=Math.round(inputNumber/100 * 8 *100) /100 + "g";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
                                    
                            case "Soft drinks":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML=Math.round(inputNumber/100 * 1 *100) /100 + "g";;   
                            productFat =  tr.appendChild(fatTd).innerHTML= "-";     
                            productFiber = tr.appendChild(fiberTd).innerHTML="-";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;
            
                            case "Whole grain bread, buns":
                            amount = tr.appendChild(amountTd).innerHTML=inputNumber + "g";  
                            productSugar = tr.appendChild(sugarTd).innerHTML=Math.round(inputNumber/100 * 5 *100) /100 + "g";;   
                            productFat =  tr.appendChild(fatTd).innerHTML= Math.round(inputNumber/100 * 7 *100) /100 + "g";     
                            productFiber = tr.appendChild(fiberTd).innerHTML=Math.round(inputNumber/100 * 5 *100) /100 + "g";
                            deleteIcon= tr.appendChild(deleteTd).innerHTML='<i class="fas fa-times-circle" onclick="removeProduct(this)"></i>';
                            break;            
                        }
                }
}

function qone() {
    var qonebox = document.getElementsByClassName("qonebox");

    if (qonebox[0].style.display == "none"){
        qonebox[0].style.display = "block";
    } else {
            qonebox[0].style.display = "none";
        }
}

function qtwo() {
    var qtwobox = document.getElementsByClassName("qtwobox");

    if (qtwobox[0].style.display == "none"){
        qtwobox[0].style.display = "block";
    } else {
            qtwobox[0].style.display = "none";
        }
}

function qthree() {
    var qthreebox = document.getElementsByClassName("qthreebox");

    if (qthreebox[0].style.display == "none"){
        qthreebox[0].style.display = "block";
    } else {
            qthreebox[0].style.display = "none";
        }
}

function tone() {
    var tonebox = document.getElementsByClassName("tonebox");

    if (tonebox[0].style.display == "none"){
        tonebox[0].style.display = "block";
    } else {
            tonebox[0].style.display = "none";
        }
}

function ttwo() {
    var ttwobox = document.getElementsByClassName("ttwobox");

    if (ttwobox[0].style.display == "none"){
        ttwobox[0].style.display = "block";
    } else {
            ttwobox[0].style.display = "none";
        }
}

function tthree() {
    var tthreebox = document.getElementsByClassName("tthreebox");

    if (tthreebox[0].style.display == "none"){
        tthreebox[0].style.display = "block";
    } else {
            tthreebox[0].style.display = "none";
        }
}

function tfour() {
    var tfourbox = document.getElementsByClassName("tfourbox");

    if (tfourbox[0].style.display == "none"){
        tfourbox[0].style.display = "block";
    } else {
            tfourbox[0].style.display = "none";
        }
}

function tfive() {
    var tfivebox = document.getElementsByClassName("tfivebox");

    if (tfivebox[0].style.display == "none"){
        tfivebox[0].style.display = "block";
    } else {
            tfivebox[0].style.display = "none";
        }
}

function tsix() {
    var tsixbox = document.getElementsByClassName("tsixbox");

    if (tsixbox[0].style.display == "none"){
        tsixbox[0].style.display = "block";
    } else {
            tsixbox[0].style.display = "none";
        }
}

function catmil() {
    let catmiltr = document.getElementById("catmiltr");
    let buttonplusmil = document.querySelector(".buttonplusmil > p");
    let addthis = document.getElementById("addthis");
    let catmiltab = document.getElementById("catmiltab");

    if (catmiltab.style.display == "none" && addthis.style.display == "none") {
        catmiltr.style.display = "block";
        catmiltab.style.display = "block";
        buttonplusmil.innerHTML = "-";

    } else if (catmiltab.style.display == "none" && addthis.style.display == "contents"){
        catmiltab.style.display = "block";            
        catmiltr.style.display = "none";
        buttonplusmil.innerHTML = "-";
        } else {
            catmiltab.style.display = "none";
            catmiltr.style.display = "none";
                buttonplusmil.innerHTML = "+";
            }
}

function catmiladd() {
    let addthis = document.getElementById("addthis");
    let catmiltr = document.getElementById("catmiltr");

    addthis.style.display = "contents";
    catmiltr.style.display = "none";
}

function prototypedel() {
    let addthis = document.getElementById("addthis");

    addthis.style.display = "none";
}

    /*new:
        1. added a soup page

        2. soups page's display added to every page but it's nice only in the function soups():
        var soups = document.getElementsByClassName("soups");
        soups[0].style.display = "block"; 
        
        3. added a function sortby();

     comment:
        1. The function sortby() is not working properly, it opens the list but doesn't closes it.
         
    */