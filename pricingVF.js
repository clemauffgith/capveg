// référencement du formulaire dans notre code Js 
var theForm = document.forms["pricingPlantes"]; 

// Variables utilisées pour déterminer le prix plantesU 
var babyPlantePriceU = new Array();
    babyPlantePriceU["Achat"]=8;
    babyPlantePriceU["AchatEtEntretien"]=8;
    babyPlantePriceU["Location"]=1;

var teenagePlantePriceU = new Array();
    teenagePlantePriceU["Achat"]=35;
    teenagePlantePriceU["AchatEtEntretien"]=35;
    teenagePlantePriceU["Location"]=4;

var tombantePlantePriceU = new Array();
    tombantePlantePriceU["Achat"]=35;
    tombantePlantePriceU["AchatEtEntretien"]=35;
    tombantePlantePriceU["Location"]=4;   

var daddyPlantePriceU = new Array();
    daddyPlantePriceU["Achat"]=65;
    daddyPlantePriceU["AchatEtEntretien"]=65;
    daddyPlantePriceU["Location"]=7;   

var giantPlantePriceU = new Array();
    giantPlantePriceU["Achat"]=145;
    giantPlantePriceU["AchatEtEntretien"]=145;
    giantPlantePriceU["Location"]=15;   

var coutEntLocU = new Array();
    coutEntLocU["babyPlante"] = 2;
    coutEntLocU["teenagePlante"] = 3;
    coutEntLocU["tombantePlante"] = 3;
    coutEntLocU["daddyPlante"] = 4;
    coutEntLocU["giantPlante"] = 5; 


// Choix Offres :
// Soit: Achat / AchatEtEntretien / Location => prix plantesU
$(document).ready(function() {
    $('input:radio[name=selectedOffer]').on("keyup change", function() {


        if (this.value == 'Achat')  {
            $("#prixPlantesT").text("Cout plantes avec pots HT :");
            document.getElementById('babyPlanteU').value = babyPlantePriceU["Achat"];
            document.getElementById('teenagePlanteU').value = teenagePlantePriceU["Achat"];
            document.getElementById('tombantePlanteU').value = tombantePlantePriceU["Achat"];
            document.getElementById('daddyPlanteU').value = daddyPlantePriceU["Achat"];
            document.getElementById('giantPlanteU').value = giantPlantePriceU["Achat"]; 
            document.getElementById('coutPlantes').style.display = "none"; 
            document.getElementById('coutRempotage').style.display = "block"; 
            document.getElementById('coutEnt').style.display = "block";
            document.getElementById('coutPlantes').style.display = "block";
            calculatePricePots();
            calculateTotalPrice();
        }
        else if (this.value == 'AchatEtEntretien') {
            $("#prixPlantesT").text("Cout plantes avec pots HT :");
            document.getElementById('babyPlanteU').value = babyPlantePriceU["AchatEtEntretien"];
            document.getElementById('teenagePlanteU').value = teenagePlantePriceU["AchatEtEntretien"];
            document.getElementById('tombantePlanteU').value = tombantePlantePriceU["AchatEtEntretien"];
            document.getElementById('daddyPlanteU').value = daddyPlantePriceU["AchatEtEntretien"];
            document.getElementById('giantPlanteU').value = giantPlantePriceU["AchatEtEntretien"];
            document.getElementById('coutPlantes').style.display = "none";  
            document.getElementById('coutRempotage').style.display = "block"; 
            document.getElementById('coutEnt').style.display = "block";
            document.getElementById('coutPlantes').style.display = "none";
            calculatePricePots();
            calculateTotalPrice();
            }        
        else {
            $("#prixPlantesT").text("Cout location par mois : ");
            document.getElementById('babyPlanteU').value = babyPlantePriceU["Location"];
            document.getElementById('teenagePlanteU').value = teenagePlantePriceU["Location"];
            document.getElementById('tombantePlanteU').value = tombantePlantePriceU["Location"];
            document.getElementById('daddyPlanteU').value = daddyPlantePriceU["Location"];
            document.getElementById('giantPlanteU').value = giantPlantePriceU["Location"];  
            document.getElementById('coutPlantes').style.display = "none"; 
            document.getElementById('coutRempotage').style.display = "block"; 
            document.getElementById('coutEnt').style.display = "block";  
            calculatePricePots();
            calculateTotalPrice();
            }
        })
});

// Choix Offres Pots => Ajout sur le prixPlantesU => prix plantesPots
$(document).ready(function() {
    $('input:radio[name=selectedPots]').on("keyup change", function() {


        if (this.value == 'TerreCuite') {
            if (document.getElementById('offerLocation').checked) {
                $("#prixPlantesT").text("Cout location par mois : ");
                document.getElementById('babyPlantePots').value = parseInt(document.getElementById('babyPlanteU').value) + 1;
                document.getElementById('teenagePlantePots').value = parseInt(document.getElementById('teenagePlanteU').value) + 3;
                document.getElementById('tombantePlantePots').value = parseInt(document.getElementById('tombantePlanteU').value) + 3; 
                document.getElementById('daddyPlantePots').value = parseInt(document.getElementById('daddyPlanteU').value) + 4; 
                document.getElementById('giantPlantePots').value = parseInt(document.getElementById('giantPlanteU').value) + 7;
                document.getElementById('coutPlantes').style.display = "block";
                calculatePricePots();
                calculateTotalPrice();
            }
            else {
                document.getElementById('babyPlantePots').value = parseInt(document.getElementById('babyPlanteU').value) + 8;
                document.getElementById('teenagePlantePots').value = parseInt(document.getElementById('teenagePlanteU').value) + 23;
                document.getElementById('tombantePlantePots').value = parseInt(document.getElementById('tombantePlanteU').value) + 23;
                document.getElementById('daddyPlantePots').value = parseInt(document.getElementById('daddyPlanteU').value) + 37;
                document.getElementById('giantPlantePots').value = parseInt(document.getElementById('giantPlanteU').value) + 69; 
                document.getElementById('coutPlantes').style.display = "block";
                $("#prixPlantesT").text("Cout plantes avec pots HT :");
                calculatePricePots();
                calculateTotalPrice();
            }
        }
        else if (this.value == 'Reservoirdeau') {

            if (document.getElementById('offerLocation').checked)  {
                $("#prixPlantesT").text("Cout location par mois : ");
                document.getElementById('babyPlantePots').value = parseInt(document.getElementById('babyPlanteU').value) + 3;
                document.getElementById('teenagePlantePots').value = parseInt(document.getElementById('teenagePlanteU').value) + 5;
                document.getElementById('tombantePlantePots').value = parseInt(document.getElementById('tombantePlanteU').value) + 5; 
                document.getElementById('daddyPlantePots').value = parseInt(document.getElementById('daddyPlanteU').value) + 5; 
                document.getElementById('giantPlantePots').value = parseInt(document.getElementById('giantPlanteU').value) + 9;
                document.getElementById('coutPlantes').style.display = "block";
                calculatePricePots();
                calculateTotalPrice();
            }

            else {
                $("#prixPlantesT").text("Cout plantes avec pots HT :");
                document.getElementById('babyPlantePots').value = parseInt(document.getElementById('babyPlanteU').value) + 28; 
                document.getElementById('teenagePlantePots').value = parseInt(document.getElementById('teenagePlanteU').value) + 44;
                document.getElementById('tombantePlantePots').value = parseInt(document.getElementById('tombantePlanteU').value) + 44;
                document.getElementById('daddyPlantePots').value = parseInt(document.getElementById('daddyPlanteU').value) + 44;
                document.getElementById('giantPlantePots').value = parseInt(document.getElementById('giantPlanteU').value) + 83; 
                document.getElementById('coutPlantes').style.display = "block";
                calculatePricePots();
                calculateTotalPrice();
            }
        }    
    });
});

// function + - des inputs quantités de plantes 
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


// Fonction calcul Nombre de plantes 
// ===> détermine Cout entretien / Cout EntLocation / Cout rempotage / 
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
                document.getElementById('coutEntretienT').value = parseInt(nombreOfPlantes) + 30; 
                coutEntretien = document.getElementById('coutEntretienT').value;
        }

        coutEntretien = document.getElementById('coutEntretienT').value;

    // Cout Entretien Location 
    if (document.getElementById('offerLocation').checked) {
        // var babyPlanteEntLoc = coutEntLocU["babyPlante"];
        // console.log("cout ent loc u " + babyPlanteEntLoc);
        // var teenagePlanteEntLoc = coutEntLocU["teenagePlante"];
        // var tombantePlanteEntLoc = coutEntLocU["tombantePlante"];
        // var daddyPlanteEntLoc = coutEntLocU["daddyPlante"];
        // var giantPlanteEntLoc = coutEntLocU["giantPlante"];

        // var coutEntLocBaby = ($("#babyPlanteQty").val() * babyPlanteEntLoc);
        // var coutEntLocTeenage= ($("#teenagePlanteQty").val() * teenagePlanteEntLoc);  
        // var coutEntLocTombante = ($("#tombantePlanteQty").val() * tombantePlanteEntLoc); 
        // var coutEntLocdaddy = ($("#daddyPlanteQty").val() * daddyPlanteEntLoc); 
        // var coutEntLocGiant = ($("#giantPlanteQty").val() * giantPlanteEntLoc); 
        
        // var coutEntLocTotal = coutEntLocBaby + coutEntLocTombante + coutEntLocTeenage + coutEntLocdaddy + coutEntLocGiant; 
        // document.getElementById('coutEntretienT').value = parseInt(coutEntLocTotal + 30); 
        document.getElementById('coutEntretienT').value = parseInt(nombreOfPlantes) + 30; 

        // console.log('cout entretien location : ' + coutEntLocTotal);
    } 

    // ------------- calcul cout rempotage ------------------------ 
    var coutRempotage = 0; 
    coutRempotage = (parseInt(nombreOfPlantes) * 5);
    document.getElementById('coutRempotageT').value = coutRempotage;
}; 




// En gros : on prend la valeur de chaque input qui ont le name = 'value' et on le multiplie par sa valeur de qty 
// ensuite on ajoute le tout 
// Il faut pas oublier de mettre à jour chaque changement de quantité // ou de valeur 
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

    // Calcul cout installation ==> déterminé par le prix HT des pots     
        // Formule = si totalPrixPots > 1450 => 10% du total HT 
        // Si totalPrixPots < 1450 ==> 145euros d'Installation. 
        var coutInstallation = 0;
        // if($("#prixPlantesPots").val() < 1450) {
        //     coutInstallation = 145;
        //     // document.getElementById("coutInstallationT").value = coutInstallation; 
        //     } else if ($("#prixPlantesPots").val() > 1450) {
        coutInstallation = Math.round(($("#prixPlantesPots").val() * 10) / 100);
            // document.getElementById("coutInstallationT").value = coutInstallation;
            // }
        document.getElementById('coutInstallationT').value = coutInstallation; 

}

// Calcul du Cout Total 
function calculateTotalPrice() {
    
    let totalPrices = {
        coutEntretien : parseInt(document.getElementById('coutEntretienT').value),
        coutPlantesPots : parseInt(document.getElementById('prixPlantesPots').value),
        livraison : 120,
        coutRempotage : parseInt(document.getElementById('coutRempotageT').value),
        coutInstallation : parseInt(document.getElementById('coutInstallationT').value), 
    };
    console.log('mon total prices : ' + totalPrices); 

    let totalPricing = totalPrices.coutEntretien + totalPrices.coutPlantesPots + totalPrices.livraison + totalPrices.coutRempotage + totalPrices.coutInstallation;

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


// Partie formulaire + swal alert 
      
      // informations présentes dans le formulaire de contact
      var contactForm = document.getElementById('testForm'); 
      var firstName = document.getElementById('firstName');
      var companyName = document.getElementById('companyName'); 
      var phoneNumber = document.getElementById('phoneNumber'); 
      var email = document.getElementById('email'); 
      var submitButton = document.getElementById('submitButton');

      // variable de l'offre selectionnée qui ira dans le sheet 
      var offreSelectionnee; 

      $(document).ready(function() {
        $('input:radio[name=selectedOffer]').on("keyup change", function() {

          if (this.value == 'Achat') {
            offreSelectionnee = 'Achat';
          }
          else if (this.value == 'AchatEtEntretien') {
            offreSelectionnee = 'AchatEtEntretien';
          }
          else {
            offreSelectionnee = 'Location';
          }
        }
      )});

      var nbPlantes = document.getElementById('totalPlanteQty');
      var nbBabyPlantes = document.getElementById('babyPlanteQty');
      var nbTeenagePlantes = document.getElementById('teenagePlanteQty');
      var nbTombantePlantes = document.getElementById('tombantePlanteQty');
      var nbDaddyPlantes = document.getElementById('daddyPlanteQty');
      var nbGiantPlantes = document.getElementById('giantPlanteQty');
      var montant = document.getElementById('totalPrice'); 

function afterSubmit(e) {
  e.preventDefault(); 

  var infoClient = {
      name : firstName.value,
      companyName : companyName.value,
      telephone : phoneNumber.value,
      emailAdress : email.value,
      choixOffre : offreSelectionnee,
      montant : montant.value,
      nbPlantes : nbPlantes.value,
      qtyOfBabyPlantes : nbBabyPlantes.value,
      qtyOfTeenagePlantes : nbTeenagePlantes.value,
      qtyOfTombantePlantes : nbTombantePlantes.value,
      qtyOfDaddyPlantes : nbDaddyPlantes.value,
      qtyOfGiantPlantes : nbGiantPlantes.value
  };

  var url = "https://script.google.com/macros/s/AKfycbxfNvhj1owoM-3A6aH6NBYoouVW3wyS3QQRaNlJGezTvYNflrE/exec";
  
  fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      mode: 'no-cors',
      redirect: 'follow',
      body: JSON.stringify(infoClient)
  })
  .then(res => res.json())
  .then(res => {
      console.log(res);
      finalForm.reset();
  })
  .catch(err => {
      console.log(err);
      finalForm.reset();
      contactForm.reset();
      console.log('something went wrong ....');
  });

};

contactForm.addEventListener("submit", afterSubmit);

contactForm.addEventListener("submit", function(){
        Swal.fire({
        width: 400,
        padding: '3em',
        color: '#416a5a',
        title: 'Merci !',
        html: 'Vous serez recontactez rapidement par nos équipes!',
        icon: 'success',
        confirmButtonColor:'#416a5a',
        confirmButtonText: 'Valider'
    })
})
