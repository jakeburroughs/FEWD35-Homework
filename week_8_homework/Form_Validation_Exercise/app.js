// $(document).on("submit", "form", function(event) {
//     alert("Form Submitted");
// });


// COULDNT GET THE FORM VALIDATION WITH CUSTOM JS TO WORK SO I USED PARSELY.JS

$(document).on("submit", "form", function(event) {
  event.preventDefault();

      var formInfo = {
        firstname: $("input[name='firstname']").val(),
        lastname: $("input[name='lastname']").val(), 
        email: $("input[name='emailaddress']").val(),
        address: $("input[name='address']").val(),
        addressline2: $("input[name='addressline2']").val(),
        city: $("input[name='city']").val(),
        state: $("select[name='state']").val(),
        country: $("select[name='country']").val()
    };

    console.log(formInfo.firstname);
    console.log(formInfo.lastname);
    console.log(formInfo.email);
    console.log(formInfo.address);
    console.log(formInfo.city);

    for (field in formInfo) {
        if (formInfo [field] === "" && field !== "addressline2") {
            alert("Please fill in all fields!");
            return false;
        }
    }
    //CAN SUBMIT FORM HERE  (this doesnt seem to be working)
    // $("form")[0].submit();

    alert("Form Submitted");
});
