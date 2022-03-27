
// référencement du formulaire dans notre code Js 
    var theForm = document.forms["pricingPlantes"]; 

// Variables prix plantesU
    var babyPlantePriceU = new Array();
        babyPlantePriceU["Achat"]=8;
        babyPlantePriceU["AchatEtEntretien"]=8;
        babyPlantePriceU["Location"]=1;

    var teenagePlantePriceU = new Array();
        teenagePlantePriceU["Achat"]=30;
        teenagePlantePriceU["AchatEtEntretien"]=30;
        teenagePlantePriceU["Location"]=3;

    var tombantePlantePriceU = new Array();
        tombantePlantePriceU["Achat"]=35;
        tombantePlantePriceU["AchatEtEntretien"]=35;
        tombantePlantePriceU["Location"]=4;   
    
    var daddyPlantePriceU = new Array();
        daddyPlantePriceU["Achat"]=50;
        daddyPlantePriceU["AchatEtEntretien"]=50;
        daddyPlantePriceU["Location"]=5;   

    var giantPlantePriceU = new Array();
        giantPlantePriceU["Achat"]=120;
        giantPlantePriceU["AchatEtEntretien"]=120;
        giantPlantePriceU["Location"]=12;   
 
// les valeurs Achat ou Achat Entretien sont les mêmes ==> Achat || AchatEntretien {}  // 
// ELSE => Location 



// 
// Choix Offres => prix plantesU
$(document).ready(function() {
    $('input:radio[name=selectedOffer]').on("keyup change", function() {

        if (this.value == 'Achat')  {
            document.getElementById('babyPlanteU').value = babyPlantePriceU["Achat"];
            document.getElementById('teenagePlanteU').value = teenagePlantePriceU["Achat"];
            document.getElementById('tombantePlanteU').value = tombantePlantePriceU["Achat"];
            document.getElementById('daddyPlanteU').value = daddyPlantePriceU["Achat"];
            document.getElementById('giantPlanteU').value = giantPlantePriceU["Achat"]; 
            document.getElementById('coutPlantes').style.display = "flex"; 
            document.getElementById('coutLoc').style.display = "none"; 
            document.getElementById('coutRempotage').style.display = "none"; 
            document.getElementById('coutEnt').style.display = "none";
            document.getElementById('coutPlantes').style.display = "none";
        }
        else if (this.value == 'AchatEtEntretien') {
            document.getElementById('babyPlanteU').value = babyPlantePriceU["AchatEtEntretien"];
            document.getElementById('teenagePlanteU').value = teenagePlantePriceU["AchatEtEntretien"];
            document.getElementById('tombantePlanteU').value = tombantePlantePriceU["AchatEtEntretien"];
            document.getElementById('daddyPlanteU').value = daddyPlantePriceU["AchatEtEntretien"];
            document.getElementById('giantPlanteU').value = giantPlantePriceU["AchatEtEntretien"];
            document.getElementById('coutPlantes').style.display = "flex";  
            document.getElementById('coutRempotage').style.display = "none"; 
            document.getElementById('coutLoc').style.display = "none"; 
            document.getElementById('coutEnt').style.display = "flex";
            document.getElementById('coutPlantes').style.display = "none";
            }        
        else {
            document.getElementById('babyPlanteU').value = babyPlantePriceU["Location"];
            document.getElementById('teenagePlanteU').value = teenagePlantePriceU["Location"];
            document.getElementById('tombantePlanteU').value = tombantePlantePriceU["Location"];
            document.getElementById('daddyPlanteU').value = daddyPlantePriceU["Location"];
            document.getElementById('giantPlanteU').value = giantPlantePriceU["Location"];  
            document.getElementById('coutPlantes').style.display = "none"; 
            document.getElementById('coutLoc').style.display = "flex";
            document.getElementById('coutEnt').style.display = "flex";  
            document.getElementById('coutPlantes').style.display = "none";
            }
        })
});

// Choix Pots => prix plantesU
$(document).ready(function() {
    $('input:radio[name=selectedPots]').on("keyup change" , function() {

        if (this.value == 'TerreCuite') {
            if (document.getElementById('offerLocation').checked) {
                document.getElementById('babyPlantePots').value = parseInt(document.getElementById('babyPlanteU').value) + 1;
                document.getElementById('teenagePlantePots').value = parseInt(document.getElementById('teenagePlanteU').value) + 2;
                document.getElementById('tombantePlantePots').value = parseInt(document.getElementById('tombantePlanteU').value) + 2; 
                document.getElementById('daddyPlantePots').value = parseInt(document.getElementById('daddyPlanteU').value) + 4; 
                document.getElementById('giantPlantePots').value = parseInt(document.getElementById('giantPlanteU').value) + 7;
                document.getElementById('coutPlantes').style.display = "flex";
            }
            else {
                document.getElementById('babyPlantePots').value = parseInt(document.getElementById('babyPlanteU').value) + 5;
                document.getElementById('teenagePlantePots').value = parseInt(document.getElementById('teenagePlanteU').value) + 16;
                document.getElementById('tombantePlantePots').value = parseInt(document.getElementById('tombantePlanteU').value) + 16;
                document.getElementById('daddyPlantePots').value = parseInt(document.getElementById('daddyPlanteU').value) + 31;
                document.getElementById('giantPlantePots').value = parseInt(document.getElementById('giantPlanteU').value) + 69; 
                document.getElementById('coutPlantes').style.display = "flex";
            }
        }
        else if (this.value == 'Reservoirdeau') {

            if (document.getElementById('offerLocation').checked)  {
                document.getElementById('babyPlantePots').value = parseInt(document.getElementById('babyPlanteU').value) + 3;
                document.getElementById('teenagePlantePots').value = parseInt(document.getElementById('teenagePlanteU').value) + 3;
                document.getElementById('tombantePlantePots').value = parseInt(document.getElementById('tombantePlanteU').value) + 3; 
                document.getElementById('daddyPlantePots').value = parseInt(document.getElementById('daddyPlanteU').value) + 4; 
                document.getElementById('giantPlantePots').value = parseInt(document.getElementById('giantPlanteU').value) + 9;
                document.getElementById('coutPlantes').style.display = "flex";
            }

            else {
                document.getElementById('babyPlantePots').value = parseInt(document.getElementById('babyPlanteU').value) + 25; 
                document.getElementById('teenagePlantePots').value = parseInt(document.getElementById('teenagePlanteU').value) + 25;
                document.getElementById('tombantePlantePots').value = parseInt(document.getElementById('tombantePlanteU').value) + 25;
                document.getElementById('daddyPlantePots').value = parseInt(document.getElementById('daddyPlanteU').value) + 39;
                document.getElementById('giantPlantePots').value = parseInt(document.getElementById('giantPlanteU').value) + 83; 
                document.getElementById('coutPlantes').style.display = "flex";
            }
        }    
    });


    // + - des inputs quantités de plantes 
    function wcqib_refresh_quantity_increments() {
        jQuery("div.quantity:not(.buttons_added), td.quantity:not(.buttons_added)").each(function(a, b) {
            var c = jQuery(b);
            c.addClass("buttons_added"), c.children().first().before('<input type="button" value="-" class="minus" />'), c.children().last().after('<input type="button" value="+" class="plus" />')
        })
    }
    String.prototype.getDecimals || (String.prototype.getDecimals = function() {
        var a = this,
            b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0
    }), jQuery(document).ready(function() {
        wcqib_refresh_quantity_increments()
    }), jQuery(document).on("updated_wc_div", function() {
        wcqib_refresh_quantity_increments()
    }), jQuery(document).on("click", ".plus, .minus", function() {
        var a = jQuery(this).closest(".quantity").find(".qty"),
            b = parseFloat(a.val()),
            c = parseFloat(a.attr("max")),
            d = parseFloat(a.attr("min")),
            e = a.attr("step");
        b && "" !== b && "NaN" !== b || (b = 0), "" !== c && "NaN" !== c || (c = ""), "" !== d && "NaN" !== d || (d = 0), "any" !== e && "" !== e && void 0 !== e && "NaN" !== parseFloat(e) || (e = 1), jQuery(this).is(".plus") ? c && b >= c ? a.val(c) : a.val((b + parseFloat(e)).toFixed(e.getDecimals())) : d && b <= d ? a.val(d) : b > 0 && a.val((b - parseFloat(e)).toFixed(e.getDecimals())), a.trigger("change")
    });   
});


    /// OK en local ---> Nombre de plantes détermine Cout entretien / Cout Location / Cout rempotage 
function numberOfPlantes(){
    var arrayOfQuantity = document.getElementsByName('quantity');
    var qtyOfPlantes = 0; 

    for (var i = 0; i < arrayOfQuantity.length; i++) {
            if(parseInt(arrayOfQuantity[i].value))
            qtyOfPlantes += parseInt(arrayOfQuantity[i].value);
    }
    document.getElementById('totalPlanteQty').value = qtyOfPlantes; 

    // ------------ valeur de base de calcul ------------------- 
    var nombreOfPlantes = document.getElementById('totalPlanteQty').value; 

    // -------------  calcul cout entretien --------------------- 
    var coutEntretien = 0; 
    if(document.getElementById('offerAchatEntretien').checked || (document.getElementById('offerLocation').checked)) {
        coutEntretien = parseInt(nombreOfPlantes) + 60; 
    }; 
    document.getElementById('coutEntretienT').value = coutEntretien; 

    // ------------- calcul cout location ------------------------ 
    var coutLocation = 0; 
    if(document.getElementById('offerLocation').checked) {
        coutLocation = parseInt(nombreOfPlantes) + 60; 
    }
    document.getElementById('coutLocationT').value = coutLocation; 

    // ------------- calcul cout rempotage ------------------------ 
    var coutRempotage = 0; 
    if(document.getElementById('offerAchatEntretien').checked || (document.getElementById('offerLocation').checked)) {
        coutRempotage = parseInt(nombreOfPlantes);
    }
    document.getElementById('coutRempotageT').value = coutRempotage;



// A chaque fois qu'il y a un changement sur les inputs de quantité de plantes, alors tu joues la fonction 
// Penser à calculer le totalPots depuis un tableau => tableau avec quantity * prix pour chaque ligne 
// couple valeur = [Quantité , prix U ] => a chaque fois on push ces chiffres et on les multiplie 
// var arrayOfQuantity = document.getElementsByName('quantity'); 
// var totalPots = 0; 

}; 

// En gros : on prend la valeur de chaque input qui ont le name = 'value' et on le multiplie par sa valeur de qty 
// ensuite on ajoute le tout // Il faut pas oublier de mettre à chaque changement de quantité // ou de valeur 
function calculatePricePots() {
    
    let unit_price = {
        babyPlante : parseInt(document.getElementById('babyPlantePots').value),
        teenagePlante : parseInt(document.getElementById('teenagePlantePots').value),
        planteTombante : parseInt(document.getElementById('tombantePlantePots').value),
        daddyPlante : parseInt(document.getElementById('daddyPlantePots').value),
        giantPlante : parseInt(document.getElementById('giantPlantePots').value)
    };

    console.log(unit_price);

    let item_price = {};

    item_price.babyPlante = ($("#babyPlanteQty").val() * unit_price.babyPlante);
    item_price.teenagePlante = ($("#teenagePlanteQty").val() * unit_price.teenagePlante);
    item_price.planteTombante = ($("#tombantePlanteQty").val() * unit_price.planteTombante); 
    item_price.daddyPlante = ($("#daddyPlanteQty").val() * unit_price.daddyPlante);
    item_price.giantPlante = ($("#giantPlanteQty").val() * unit_price.giantPlante);

    console.log(item_price);


    let totalPrixPots = item_price.babyPlante + item_price.teenagePlante + item_price.planteTombante + item_price.daddyPlante + item_price.giantPlante;

    console.log(totalPrixPots);

    
    document.getElementById('prixPlantesPots').value = totalPrixPots;
    // $("#prixPlantesPots") = totalPrixPots;
}

function calculateTotalPrice() {
    
    let totalPrices = {
        coutRempotage : parseInt(document.getElementById('coutRempotageT').value),
        coutLocation : parseInt(document.getElementById('coutLocationT').value),
        coutEntretien : parseInt(document.getElementById('coutEntretienT').value),
        coutPlantesPots : parseInt(document.getElementById('prixPlantesPots').value),
        LivraisonInstallation : 89
    };
    console.log('mon total prices : ' + totalPrices); 
     
    

    // if($("input[name=selectedOffer]:checked").val() == "Achat") {
    //     totalPricing = totalPrices.coutPlantesPots + totalPrices.LivraisonInstallation;
    //     document.getElementById('totalPrice').value = totalPricing;
    // }
    //  else if ($("input[name=selectedOffer]:checked").val() == "Achat&Entretien") {
    //     totalPricing = totalPrices.coutEntretien + totalPrices.coutPlantesPots + totalPrices.LivraisonInstallation;
    //     document.getElementById('totalPrice').value = totalPricing;
    // }
    // else if ($("input[name=selectedOffer]:checked").val() == "Location") {
    //     totalPricing = totalPrices.coutPlantesPots + totalPrices.coutRempotage + totalPrices.coutLocation + totalPrices.LivraisonInstallation;
        
    // }

    let totalPricing = totalPrices.coutRempotage + totalPrices.coutLocation + totalPrices.coutEntretien + totalPrices.coutPlantesPots + totalPrices.LivraisonInstallation;

    console.log(totalPricing); 

    document.getElementById('totalPrice').value = totalPricing;

    // faire isNaN pour prixPlantesPots && totalPrice 
    // if(isNaN("#totalPrice")) {
    //     console.log('isNan is true');
    // } 
    // else {
    //     parseInt(document.getElementById('totalPrice').value) = totalPricing;
    // }
};

$(function() {
    $(".qty").on("change keyup", calculatePricePots);
    $('input:radio').on("change keyup", numberOfPlantes);
    $('input:radio').on("change keyup", calculatePricePots);
    $(".qty").on("change keyup", calculateTotalPrice);

    $('input:radio[name=selectedPots]' || 'input:radio[name=selectedOffer]').on("change keyup", calculateTotalPrice);
})

$(function()
 {
    $(".qty").on("change keyup",numberOfPlantes)
})