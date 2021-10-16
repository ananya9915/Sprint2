$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/RetailFeature/Retail.feature");
formatter.feature({
  "name": "Affiliate Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add a new user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@newuser"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Affiliate page",
  "keyword": "Given "
});
formatter.step({
  "name": "Admin clicks the add new button",
  "keyword": "When "
});
formatter.step({
  "name": "Admin should see add user details",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin enters all the credentials firstname\"\u003cfirstname\u003e\", lastname\"\u003clastname\u003e\", email\"\u003cemail\u003e\", telephone\"\u003ctelephone\u003e\", fax\"\u003cfax\u003e\", password\"\u003cpassword\u003e\", confirmpassword\"\u003cconfirmpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin selects the Status field\"\u003cstatus\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin enters all the credentials company\"\u003ccompany\u003e\", website\"\u003cwebsite\u003e\", address1\"\u003caddress1\u003e\", address2\"\u003caddress2\u003e\", city\"\u003ccity\u003e\", postcode\"\u003cpostcode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin selects the country\"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin selects the region/state\"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin navigates to the payment section",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin is on the payment tab",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin enters the commission\"\u003ccommission\u003e\", taxid\"\u003ctaxid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin selects a  payment option\"\u003coption\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin selects cheque then enters ChequeName\"\u003cchequename\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin selects paypal then enters paypalmail\"\u003cpaypalmail\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin selects bank then enters BankName\"\u003cbank\u003e\", branchnumber\"\u003cbranchnumber\u003e\", swift\"\u003cswift\u003e\", accname\"\u003caccname\u003e\", accnum\"\u003caccnum\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin saves the new user",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin verifies the success message",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstname",
        "lastname",
        "email",
        "telephone",
        "fax",
        "password",
        "confirmpassword",
        "status",
        "company",
        "website",
        "address1",
        "address2",
        "city",
        "postcode",
        "country",
        "state",
        "commission",
        "taxid",
        "option",
        "chequename",
        "paypalmail",
        "bank",
        "branchnumber",
        "swift",
        "accname",
        "accnum"
      ]
    },
    {
      "cells": [
        "RamGorurer",
        "Chana",
        "hasbona@yagoo.com",
        "7965482310",
        "025896314789",
        "ananya123",
        "ananya123",
        "Disabled",
        "Capgemini",
        "capg.com",
        "Bandra",
        "Mumbai",
        "Mumbai City",
        "852697",
        "India",
        "West Bengal",
        "10",
        "1234",
        "paypal",
        "",
        "chadvfgv@tyu.com",
        "",
        "",
        "",
        "",
        ""
      ]
    },
    {
      "cells": [
        "Shsja1234",
        "df356",
        "123456@gmail.com",
        "1123456789",
        "2345678",
        "anan",
        "anan",
        "Enabled",
        "Capgemini",
        "capg.com",
        "Bandra",
        "Mumbai",
        "Mumbai City",
        "3456",
        "India",
        "West Bengal",
        "7",
        "1234",
        "paypal",
        "",
        "chadvfgv@tyu.com",
        "",
        "",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "Login functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.user_is_on_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the marketing option",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.user_clicks_the_marketing_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the affiliates option",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_clicks_the_affiliates_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in the affiliates page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_is_in_the_affiliates_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a new user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@newuser"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Affiliate page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_is_on_the_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the add new button",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should see add user details",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_should_see_add_user_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters all the credentials firstname\"RamGorurer\", lastname\"Chana\", email\"hasbona@yagoo.com\", telephone\"7965482310\", fax\"025896314789\", password\"ananya123\", confirmpassword\"ananya123\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_all_the_credentials_firstname_lastname_email_telephone_fax_password_confirmpassword(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the Status field\"Disabled\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_Status_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters all the credentials company\"Capgemini\", website\"capg.com\", address1\"Bandra\", address2\"Mumbai\", city\"Mumbai City\", postcode\"852697\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_all_the_credentials_company_website_address_address_city_postcode(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the country\"India\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_country(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the region/state\"West Bengal\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_region_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the payment section",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_navigates_to_the_payment_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the payment tab",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_is_on_the_payment_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the commission\"10\", taxid\"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_the_commission_taxid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects a  payment option\"paypal\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_a_payment_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects cheque then enters ChequeName\"\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_selects_cheque_then_enters_ChequeName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects paypal then enters paypalmail\"chadvfgv@tyu.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_selects_paypal_then_enters_paypalmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects bank then enters BankName\"\", branchnumber\"\", swift\"\", accname\"\", accnum\"\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_selects_bank_then_enters_BankName_branchnumber_swift_accname_accnum(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin saves the new user",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_saves_the_new_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin verifies the success message",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_verifies_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Login functionality",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.user_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_clicks_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.user_is_on_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the marketing option",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.user_clicks_the_marketing_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks the affiliates option",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_clicks_the_affiliates_option()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is in the affiliates page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_is_in_the_affiliates_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add a new user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@newuser"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Affiliate page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_is_on_the_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the add new button",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_add_new_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin should see add user details",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_should_see_add_user_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters all the credentials firstname\"Shsja1234\", lastname\"df356\", email\"123456@gmail.com\", telephone\"1123456789\", fax\"2345678\", password\"anan\", confirmpassword\"anan\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_all_the_credentials_firstname_lastname_email_telephone_fax_password_confirmpassword(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the Status field\"Enabled\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_Status_field(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters all the credentials company\"Capgemini\", website\"capg.com\", address1\"Bandra\", address2\"Mumbai\", city\"Mumbai City\", postcode\"3456\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_all_the_credentials_company_website_address_address_city_postcode(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the country\"India\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_country(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the region/state\"West Bengal\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_region_state(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin navigates to the payment section",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_navigates_to_the_payment_section()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin is on the payment tab",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_is_on_the_payment_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the commission\"7\", taxid\"1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_the_commission_taxid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects a  payment option\"paypal\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_a_payment_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects cheque then enters ChequeName\"\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_selects_cheque_then_enters_ChequeName(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects paypal then enters paypalmail\"chadvfgv@tyu.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_selects_paypal_then_enters_paypalmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects bank then enters BankName\"\", branchnumber\"\", swift\"\", accname\"\", accnum\"\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_selects_bank_then_enters_BankName_branchnumber_swift_accname_accnum(String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin saves the new user",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_saves_the_new_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin verifies the success message",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_verifies_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});