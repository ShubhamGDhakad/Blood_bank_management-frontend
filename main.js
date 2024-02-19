
document.getElementById('date').innerHTML=Date();
document.getElementById('date-1').innerHTML=new Date("2023-01-01");
document.getElementById('date-2').innerHTML= Date();

function plasma(){
    what_is_it = document.getElementById('what');
    who_can_donate = document.getElementById('who');
    use_for = document.getElementById('user_for');
    Lasts_for = document.getElementById('lasts');
    How_long = document.getElementById('howlong');
    How_often = document.getElementById('often');
    btn_plasma = document.getElementById('btn_plasma').style.backgroundColor="white";
    btn_platelets = document.getElementById('btn_platelets').style.backgroundColor="";
    btn_redbloodcells = document.getElementById('btn_redblood').style.backgroundColor="silver";

    what_is_it.innerHTML="The straw-coloured liquid in which red blood cells, white blood <br><br>cells, and platelets float in is called plasma.Contains special <br><br>nutrients which can be used to create 18 different type of medical <br><br>products to treat many different medical conditions. Plasma can be <br><br>obtained from the collected whole blood after red blood cells and <br><br>platelets have been separated. Additionally, it can also be <br><br>collected using an apheresis equipment where other components <br><br>are returned to the donor. The former is a common method of <br><br>plasma preparation in our country.";
    who_can_donate.innerHTML="The donation criteria is similar to that of red blood cell. However, <br><br>for apheresis plasma collection minimum weight is 50 kgs.";
    use_for.innerHTML="Used for bleeding patients with coagulation factor deficiency such <br><br>as hemophilia A and B, von willibrand disease etc. also used in <br><br>cases of blood loss due to trauma";
    Lasts_for.innerHTML="Plasma after separation if frozen below -30 degrees can be stored <br><br>up to one year.";
    How_long.innerHTML="15-30 minutes to donate including the pre-donation check-up.";
    How_often.innerHTML="similar to the red cell donation.";
    hwork.innerHTML=""
    work.innerHTML="";
}

function platelets(){
    what_is_it1 = document.getElementById('what');
    who_can_donate1 = document.getElementById('who');
    use_for1 = document.getElementById('user_for');
    Lasts_for1 = document.getElementById('lasts');
    How_long1 = document.getElementById('howlong');
    How_often1 = document.getElementById('often');
    btn_platelets = document.getElementById('btn_platelets').style.backgroundColor="white";
    btn_plasma = document.getElementById('btn_plasma').style.backgroundColor="";
    btn_redbloodcells = document.getElementById('btn_redblood').style.backgroundColor="silver";
    hwork = document.getElementById('hwork');
    work = document.getElementById('works');

    what_is_it1.innerHTML="These are cellular elements in blood which wedge together to help <br><br>to clot and reduce bleeding. Always in high demand, Vital for <br><br>people with low platelet count, like hematology and cancer <br><br>patients.";
    who_can_donate1.innerHTML="One can donate whole blood from which the blood centre will <br><br>separate platelets from other components. Criteria similar to whole <br><br>blood donation apply. Alternatively, one can donate using <br><br>apheresis equipment where only platelets are collected and rest <br><br>components are returned back to donate. One need to satisfy <br><br>whole blood criteria and pre- donation screening which include <br><br>negative infectious markers and platelet count >1,50,000 per <br><br>microlitre of blood. Weight should be >50kgs.";
    use_for1.innerHTML="Conditions with very low platelet count such as Cancer, blood <br><br>diseases, trauma, dengue etc.";
    Lasts_for1.innerHTML="can be stored for 5 days at 20-24 degree celsius.";
    How_long1.innerHTML="45-60 minutes to donate. 2-3 hours for pre-donation screening.";
    How_often1.innerHTML="Every 2 weeks but should not exceed more than 24 times in a <br><br>year.";
    hwork.innerHTML="How does it works?"
    work.innerHTML="We collect your blood, keep platelet and return rest to you by <br><br>apheresis donation.";
}

function redbloodcells(){
    what_is_it2 = document.getElementById('what');
    who_can_donate2 = document.getElementById('who');
    use_for2 = document.getElementById('user_for');
    Lasts_for2 = document.getElementById('lasts');
    How_long2 = document.getElementById('howlong');
    How_often2 = document.getElementById('often');
    btn_platelets = document.getElementById('btn_platelets').style.backgroundColor="";
    btn_plasma = document.getElementById('btn_plasma').style.backgroundColor="";
    btn_redbloodcells = document.getElementById('btn_redblood').style.backgroundColor="white";

    what_is_it2.innerHTML="Blood collected straight from the donor into a blood bag and mixed <br><br>with an anticoagnulant is called as whole blood.This collected <br><br>whole blood is then centrifuged and red cells, platelates and <br><br>plasma are seperated. The seperated Red cells are mixed with a <br><br>preservative to be called as packed red blood cells. ";
    who_can_donate2.innerHTML="You need to be 18-65 years old,weight 45kg or more and be<br><br> fit and healthy.";
    use_for2.innerHTML="correction of severe anemia in a number of conditions and blood <br><br>loss in case of child birth, sergery or trauma settings.";
    Lasts_for2.innerHTML="Red cells can be stored for 42 days at 2-6 degree celsius.";
    How_long2.innerHTML="15-30 minutes to donate. including the pre-donation check-up.";
    How_often2.innerHTML="male donars can donate again after 90 days and female donars <br><br>can donate again after 120 days";
    hwork.innerHTML=""
    work.innerHTML="";
}