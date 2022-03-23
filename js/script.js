// Copyright (c) 2022 Rory Mackay All rights reserved
//
// Created by: Rory Mackay
// Created on: Sep 2022
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets user's first name and age and displays it back to user

  // get first name from text field
  let firstName = document.getElementById("first-name").value
	// get age from text field and cast it to integer
  let userAge = parseInt(document.getElementById("age-entered").value)

  // display name and age back to user
  document.getElementById('user-info').innerHTML = "To confirm, your address is  " + firstName + " and your social security number is " + userAge + ", enter again to confirm."
}