
// référencement du formulaire dans notre code Js 
var theForm = document.forms["pricingPlantes"]; 

// Variables prix unitaire des plantes 
    var pricesU = new Array();
        pricesU["babyPlante"] = 1;
        pricesU["teenagePlante"] = 3;
        pricesU["tombantePlante"] = 4;
        pricesU["daddyPlante"] = 5;
        pricesU["giantPlante"] = 12; 

    var coutEntLocU = new Array();
        coutEntLocU["babyPlante"] = 2;
        coutEntLocU["teenagePlante"] = 3;
        coutEntLocU["tombantePlante"] = 3;
        coutEntLocU["daddyPlante"] = 4;
        coutEntLocU["giantPlante"] = 5; 


var fullTotalPrice; 
var prixEntretien; 
var coutLocationPlantes; 
  
// Choix Offres => prix plantesU
$(document).ready(function() {
    $('input:radio[name=selectedOffer]').on("keyup change", function() {

        document.getElementById('babyPlanteU').value = pricesU["babyPlante"];
        document.getElementById('teenagePlanteU').value = pricesU["teenagePlante"];
        document.getElementById('tombantePlanteU').value = pricesU["tombantePlante"];
        document.getElementById('daddyPlanteU').value = pricesU["daddyPlante"];
        document.getElementById('giantPlanteU').value = pricesU["giantPlante"]; 

        calculatePricePots();
        calculateTotalPrice();

        if (this.value == 'Achat')  {
            document.getElementById('coutLoc').style.display = "none"; 
            document.getElementById('coutEnt').style.display = "none";
            document.getElementById('coutPlantes').style.display = "none";
        }
        else if (this.value == 'AchatEtEntretien') {
            document.getElementById('coutPlantes').style.display = "flex";  
            document.getElementById('coutLoc').style.display = "none"; 
            document.getElementById('coutEnt').style.display = "flex";
            document.getElementById('coutPlantes').style.display = "none";
            }        
        else { 
            document.getElementById('coutLoc').style.display = "none";
            document.getElementById('coutEnt').style.display = "flex";  
            document.getElementById('coutPlantes').style.display = "none";
            }
        })
});

// Choix Pots => prix plantesU
$(document).ready(function() {
    $('input:radio[name=selectedPots]').on("keyup change" , function() {


        // if($('input:radio[name=selectedOffer]'.val() == "Location")) {
        //     document.getElementById('coutPlantes').style.display = "none";
        // }   

        if (this.value == 'TerreCuite') {
                document.getElementById('babyPlantePots').value = pricesU["babyPlante"] + 1;
                document.getElementById('teenagePlantePots').value = pricesU["teenagePlante"] + 2;
                document.getElementById('tombantePlantePots').value = pricesU["tombantePlante"] + 2; 
                document.getElementById('daddyPlantePots').value = pricesU["daddyPlante"] + 4; 
                document.getElementById('giantPlantePots').value = pricesU["giantPlante"] + 7;
                document.getElementById('coutPlantes').style.display = "flex";
                calculatePricePots();
                calculateTotalPrice();
            }
            
        else if (this.value == 'Reservoirdeau') {
                document.getElementById('babyPlantePots').value =  pricesU["babyPlante"] + 3;
                document.getElementById('teenagePlantePots').value = pricesU["teenagePlante"] + 3;
                document.getElementById('tombantePlantePots').value = pricesU["tombantePlante"] + 3; 
                document.getElementById('daddyPlantePots').value = pricesU["daddyPlante"] + 4; 
                document.getElementById('giantPlantePots').value = pricesU["giantPlante"] + 9;
                document.getElementById('coutPlantes').style.display = "flex";
                calculatePricePots();
                calculateTotalPrice();
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
    // Cout entretien Achat et Entretien : 
        var coutEntretien = 0;
            if (document.getElementById('offerAchatEntretien').checked) {
                document.getElementById('coutEntretienT').value = (parseInt(nombreOfPlantes) + 20) * 2; 
                coutEntretien = document.getElementById('coutEntretienT').value;
        }

        coutEntretien = document.getElementById('coutEntretienT').value;

    // Cout Entretien Location 
    if (document.getElementById('offerLocation').checked) {
        var babyPlanteEntLoc = coutEntLocU["babyPlante"];
        console.log("cout ent loc u " + babyPlanteEntLoc);
        var teenagePlanteEntLoc = coutEntLocU["teenagePlante"];
        var tombantePlanteEntLoc = coutEntLocU["tombantePlante"];
        var daddyPlanteEntLoc = coutEntLocU["daddyPlante"];
        var giantPlanteEntLoc = coutEntLocU["giantPlante"];

        var coutEntLocBaby = ($("#babyPlanteQty").val() * babyPlanteEntLoc);
        var coutEntLocTeenage= ($("#teenagePlanteQty").val() * teenagePlanteEntLoc);  
        var coutEntLocTombante = ($("#tombantePlanteQty").val() * tombantePlanteEntLoc); 
        var coutEntLocdaddy = ($("#daddyPlanteQty").val() * daddyPlanteEntLoc); 
        var coutEntLocGiant = ($("#giantPlanteQty").val() * giantPlanteEntLoc); 
        
        var coutEntLocTotal = coutEntLocBaby + coutEntLocTombante + coutEntLocTeenage + coutEntLocdaddy + coutEntLocGiant; 
        document.getElementById('coutEntretienT').value = parseInt(coutEntLocTotal + 20) * 2; 

        console.log('cout entretien location : ' + coutEntLocTotal);
    } 
    // ------------- calcul cout location ------------------------ 
    // var coutLocation = 0; 
    // if(document.getElementById('offerLocation').checked) {
    //     coutLocation = parseInt(nombreOfPlantes) + 40; 
    // }
    // document.getElementById('coutLocationT').value = coutLocation; 
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

    let totalPricing = totalPrices.coutEntretien + totalPrices.coutPlantesPots + totalPrices.LivraisonInstallation;

    console.log(totalPricing); 

    document.getElementById('totalPrice').value = totalPricing;
};

$(function() {
    $(".qty").on("change keyup", calculatePricePots);
    $('input:radio').on("change keyup", numberOfPlantes);
    $('input:radio').on("change keyup", calculatePricePots);
    $(".qty").on("change keyup", calculateTotalPrice);

    // $('input:radio[name=selectedPots]' || 'input:radio[name=selectedOffer]').on("change keyup", calculateTotalPrice);

})

$(function()
 {
    $(".qty").on("change keyup",numberOfPlantes)
})