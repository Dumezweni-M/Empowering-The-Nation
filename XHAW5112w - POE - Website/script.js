// Contact Page
function validateform(){  
  var name=document.myform.fname.value;  
  var lastName=document.myform.lname.value; 
  var email=document.myform.email.value;
    
  if (name==null || name==""){  
    alert("First Name is required");  
    return false;
  }
    if (lastName==null || lastName==""){  
    alert("Lastname is required");  
    return false;  
    
  }
      if (email.length==0){  
    alert("Email is required");  
    return false;
      }if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){  
    alert("You have entered an invalid email address!");  
    return false;  
    }  
  } 
  

// Calculator
function calculateTotalFees() { 
    
    // Get the total cost of each course.
    var firstAidCost = 1500;
    var sewingCost = 1500;
    var landscapingCost = 1500;
    var lifeSkillsCost = 1500;
    var childMindingCost = 750;
    var cookingCost = 750;
    var gardenMaintenanceCost = 750;

  
  
    // Get the number of courses that the user has selected.
    var firstAid = document.getElementById("first_aid").checked;
    var sewing = document.getElementById("sewing").checked;
    var landscaping = document.getElementById("landscaping").checked;
    var lifeSkills = document.getElementById("life_skills").checked;
    var childMinding = document.getElementById("child_minding").checked;
    var cooking = document.getElementById("cooking").checked;
    var gardenMaintenance = document.getElementById("garden_maintenance").checked;
    
  
    // Calculate the total cost of the courses.
    var totalCost = 0;
    if (firstAid) {
      totalCost += firstAidCost;
    }
    if (sewing) {
      totalCost += sewingCost;
    }
    if (landscaping) {
      totalCost += landscapingCost;
    }
    if (lifeSkills) {
      totalCost += lifeSkillsCost;
    }
    if (childMinding) {
      totalCost += childMindingCost;
    }
    if (cooking) {
      totalCost += cookingCost;
    }
    if (gardenMaintenance) {
      totalCost += gardenMaintenanceCost;
    }
  
    // Calculate the number of courses that the user has selected.
    var numCourses = 0;
    if (firstAid) {
      numCourses++;
    }
    if (sewing) {
      numCourses++;
    }
    if (landscaping) {
      numCourses++;
    }
    if (lifeSkills) {
      numCourses++;
    }
    if (childMinding) {
      numCourses++;
    }
    if (cooking) {
      numCourses++;
    }
    if (gardenMaintenance) {
      numCourses++;
    }
  
    // Calculate the discount amount.
    var discountAmount = 0;
    if (numCourses === 1) {
      discountAmount = 0;
    } else if (numCourses === 2) {
      discountAmount = totalCost * 0.05;
    } else if (numCourses === 3) {
      discountAmount = totalCost * 0.10;  
    } else if (numCourses > 3) {
      discountAmount = totalCost * 0.15;
    }

    // Calculate the Sub Total Amount.
    var subAmount = totalCost - discountAmount;
  
    // Calculate the VAT amount.
    var vatAmount = subAmount * 0.15;
  
    // Calculate the total cost, including VAT and discount.
    var totalCostWithVatAndDiscount = subAmount + vatAmount;
  
    // Display the total cost, including VAT and discount, in a visible element on the page.
    document.getElementById("name").textContent;
    document.getElementById("course_selected").textContent = "R" + totalCost.toFixed(2);
    document.getElementById("discount_amount").textContent = "R"+ discountAmount.toFixed(2);
    document.getElementById("sub_total").textContent = "R" + subAmount.toFixed(2);
    document.getElementById("total_fee").textContent = "Total cost, including VAT: R" + totalCostWithVatAndDiscount.toFixed(2);
  }
  