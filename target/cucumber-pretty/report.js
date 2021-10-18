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
        "Sachine",
        "roy",
        "new@gmail.com",
        "1234567894561345612345456424665789",
        "1234567894561345612345456424665789",
        "pqr",
        "pqr",
        "Enabled",
        "Capgemini",
        "capg.com",
        "Kolkata",
        "Behala",
        "gppp",
        "3456",
        "India",
        "West Bengal",
        "6",
        "1234",
        "paypal",
        "",
        "qwerty123@gmail.xom",
        "SBI",
        "45612",
        "7894561345",
        "Sachine",
        "78945613287"
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
  "name": "Admin enters all the credentials firstname\"Sachine\", lastname\"roy\", email\"new@gmail.com\", telephone\"1234567894561345612345456424665789\", fax\"1234567894561345612345456424665789\", password\"pqr\", confirmpassword\"pqr\"",
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
  "name": "Admin enters all the credentials company\"Capgemini\", website\"capg.com\", address1\"Kolkata\", address2\"Behala\", city\"gppp\", postcode\"3456\"",
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
  "name": "Admin enters the commission\"6\", taxid\"1234\"",
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
  "name": "Admin selects paypal then enters paypalmail\"qwerty123@gmail.xom\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_selects_paypal_then_enters_paypalmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects bank then enters BankName\"SBI\", branchnumber\"45612\", swift\"7894561345\", accname\"Sachine\", accnum\"78945613287\"",
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
formatter.scenarioOutline({
  "name": "Search a user using Affiliate Name field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_name"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Affiliates Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Clicks the Affiliate Name field",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin enters the name\"\u003caname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks the filter button",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin fetch the result",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "aname"
      ]
    },
    {
      "cells": [
        "Hukomuko"
      ]
    },
    {
      "cells": [
        "123456"
      ]
    },
    {
      "cells": [
        "@#$%!"
      ]
    },
    {
      "cells": [
        "fghiy2234"
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
  "name": "Search a user using Affiliate Name field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_name"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_is_on_the_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the Affiliate Name field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_Affiliate_Name_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the name\"Hukomuko\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_the_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch the result",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_the_result()"
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
  "name": "Search a user using Affiliate Name field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_name"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_is_on_the_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the Affiliate Name field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_Affiliate_Name_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the name\"123456\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_the_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch the result",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_the_result()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.fail(Assert.java:106)\r\n\tat RetailDefinition.TestDefination.admin_fetch_the_result(TestDefination.java:476)\r\n\tat ✽.Admin fetch the result(file:src/test/java/RetailFeature/Retail.feature:49)\r\n",
  "status": "failed"
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
  "name": "Search a user using Affiliate Name field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_name"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_is_on_the_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the Affiliate Name field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_Affiliate_Name_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the name\"@#$%!\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_the_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch the result",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_the_result()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.fail(Assert.java:106)\r\n\tat RetailDefinition.TestDefination.admin_fetch_the_result(TestDefination.java:476)\r\n\tat ✽.Admin fetch the result(file:src/test/java/RetailFeature/Retail.feature:49)\r\n",
  "status": "failed"
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
  "name": "Search a user using Affiliate Name field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_name"
    }
  ]
});
formatter.step({
  "name": "Admin is on the Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_is_on_the_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the Affiliate Name field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_Affiliate_Name_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the name\"fghiy2234\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_the_name(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch the result",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_the_result()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.fail(Assert.java:106)\r\n\tat RetailDefinition.TestDefination.admin_fetch_the_result(TestDefination.java:476)\r\n\tat ✽.Admin fetch the result(file:src/test/java/RetailFeature/Retail.feature:49)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search a user using Affiliate Email field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_email"
    }
  ]
});
formatter.step({
  "name": "Admin is in the Affiliates Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Clicks the Affiliate Email field",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin enters the email\"\u003caemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks the filter button to search",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin fetch the result of a user",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "aemail"
      ]
    },
    {
      "cells": [
        "hasbona@yagoo.com"
      ]
    },
    {
      "cells": [
        "1236@gmail.com"
      ]
    },
    {
      "cells": [
        "adchkiu"
      ]
    },
    {
      "cells": [
        "!@$%^^^@gmail.com"
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
  "name": "Search a user using Affiliate Email field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_email"
    }
  ]
});
formatter.step({
  "name": "Admin is in the Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_is_in_the_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the Affiliate Email field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_Affiliate_Email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the email\"hasbona@yagoo.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_the_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button to search",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button_to_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch the result of a user",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_the_result_of_a_user()"
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
  "name": "Search a user using Affiliate Email field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_email"
    }
  ]
});
formatter.step({
  "name": "Admin is in the Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_is_in_the_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the Affiliate Email field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_Affiliate_Email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the email\"1236@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_the_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button to search",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button_to_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch the result of a user",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_the_result_of_a_user()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.fail(Assert.java:106)\r\n\tat RetailDefinition.TestDefination.admin_fetch_the_result_of_a_user(TestDefination.java:551)\r\n\tat ✽.Admin fetch the result of a user(file:src/test/java/RetailFeature/Retail.feature:64)\r\n",
  "status": "failed"
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
  "name": "Search a user using Affiliate Email field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_email"
    }
  ]
});
formatter.step({
  "name": "Admin is in the Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_is_in_the_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the Affiliate Email field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_Affiliate_Email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the email\"adchkiu\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_the_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button to search",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button_to_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch the result of a user",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_the_result_of_a_user()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.fail(Assert.java:106)\r\n\tat RetailDefinition.TestDefination.admin_fetch_the_result_of_a_user(TestDefination.java:551)\r\n\tat ✽.Admin fetch the result of a user(file:src/test/java/RetailFeature/Retail.feature:64)\r\n",
  "status": "failed"
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
  "name": "Search a user using Affiliate Email field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_email"
    }
  ]
});
formatter.step({
  "name": "Admin is in the Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_is_in_the_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the Affiliate Email field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_Affiliate_Email_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin enters the email\"!@$%^^^@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_enters_the_email(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button to search",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button_to_search()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch the result of a user",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_the_result_of_a_user()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.fail(Assert.java:106)\r\n\tat RetailDefinition.TestDefination.admin_fetch_the_result_of_a_user(TestDefination.java:551)\r\n\tat ✽.Admin fetch the result of a user(file:src/test/java/RetailFeature/Retail.feature:64)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search a user using status field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_status"
    }
  ]
});
formatter.step({
  "name": "Admin is in Affiliates Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Clicks the status field",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin selects the option\"\u003caoption\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks the filter button to search the user",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin fetch the result of the user",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "aoption"
      ]
    },
    {
      "cells": [
        "Disabled"
      ]
    },
    {
      "cells": [
        "Enabled"
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
  "name": "Search a user using status field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_status"
    }
  ]
});
formatter.step({
  "name": "Admin is in Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_is_in_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the status field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_status_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the option\"Disabled\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button to search the user",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button_to_search_the_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch the result of the user",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_the_result_of_the_user()"
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
  "name": "Search a user using status field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_status"
    }
  ]
});
formatter.step({
  "name": "Admin is in Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_is_in_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the status field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_status_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the option\"Enabled\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_option(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button to search the user",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button_to_search_the_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch the result of the user",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_the_result_of_the_user()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search a user using Approved field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter3_by_approved"
    }
  ]
});
formatter.step({
  "name": "Admin checks the Affiliates Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Clicks the approved field",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin selects the one optionn\"\u003caoptionn\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks the filter button to search the users",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin fetch the result of the users",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "aoptionn"
      ]
    },
    {
      "cells": [
        "No"
      ]
    },
    {
      "cells": [
        "Yes"
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
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.fail(Assert.java:106)\r\n\tat RetailDefinition.TestDefination.user_clicks_the_marketing_option(TestDefination.java:105)\r\n\tat ✽.User clicks the marketing option(file:src/test/java/RetailFeature/Retail.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks the affiliates option",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_clicks_the_affiliates_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is in the affiliates page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_is_in_the_affiliates_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search a user using Approved field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter3_by_approved"
    }
  ]
});
formatter.step({
  "name": "Admin checks the Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_checks_the_Affiliates_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Clicks the approved field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_approved_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin selects the one optionn\"No\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_one_optionn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks the filter button to search the users",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button_to_search_the_users()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin fetch the result of the users",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_the_result_of_the_users()"
});
formatter.result({
  "status": "skipped"
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
  "name": "Search a user using Approved field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter3_by_approved"
    }
  ]
});
formatter.step({
  "name": "Admin checks the Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_checks_the_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the approved field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_approved_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the one optionn\"Yes\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_one_optionn(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button to search the users",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button_to_search_the_users()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch the result of the users",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_the_result_of_the_users()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search a user using date field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_date"
    }
  ]
});
formatter.step({
  "name": "Admin checks that Affiliates Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Clicks the date added field",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin selects the date\"\u003cadate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Admin clicks the filter button to search the users by date",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin fetch all the result of the users",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "adate"
      ]
    },
    {
      "cells": [
        "17/10/2021"
      ]
    },
    {
      "cells": [
        "11/10/2021"
      ]
    },
    {
      "cells": [
        "05/11/2021"
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
  "name": "Search a user using date field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_date"
    }
  ]
});
formatter.step({
  "name": "Admin checks that Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_checks_that_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the date added field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_date_added_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the date\"17/10/2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button to search the users by date",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button_to_search_the_users_by_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch all the result of the users",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_all_the_result_of_the_users()"
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
  "name": "Search a user using date field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_date"
    }
  ]
});
formatter.step({
  "name": "Admin checks that Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_checks_that_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the date added field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_date_added_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the date\"11/10/2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button to search the users by date",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button_to_search_the_users_by_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch all the result of the users",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_all_the_result_of_the_users()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.fail(Assert.java:106)\r\n\tat RetailDefinition.TestDefination.admin_fetch_all_the_result_of_the_users(TestDefination.java:797)\r\n\tat ✽.Admin fetch all the result of the users(file:src/test/java/RetailFeature/Retail.feature:105)\r\n",
  "status": "failed"
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
  "name": "Search a user using date field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@filter_by_date"
    }
  ]
});
formatter.step({
  "name": "Admin checks that Affiliates Page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestDefination.admin_checks_that_Affiliates_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks the date added field",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.clicks_the_date_added_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin selects the date\"05/11/2021\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_selects_the_date(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the filter button to search the users by date",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_filter_button_to_search_the_users_by_date()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin fetch all the result of the users",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_fetch_all_the_result_of_the_users()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.fail(Assert.java:106)\r\n\tat RetailDefinition.TestDefination.admin_fetch_all_the_result_of_the_users(TestDefination.java:797)\r\n\tat ✽.Admin fetch all the result of the users(file:src/test/java/RetailFeature/Retail.feature:105)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Admin approve the user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@approve"
    }
  ]
});
formatter.step({
  "name": "Admin matches the user then approved\"\u003capprove\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "approve"
      ]
    },
    {
      "cells": [
        "qwerty"
      ]
    },
    {
      "cells": [
        "pqr"
      ]
    },
    {
      "cells": [
        "hukomuko"
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
  "name": "Admin approve the user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@approve"
    }
  ]
});
formatter.step({
  "name": "Admin matches the user then approved\"qwerty\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_matches_the_user_then_approved(String)"
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
  "name": "Admin approve the user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@approve"
    }
  ]
});
formatter.step({
  "name": "Admin matches the user then approved\"pqr\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_matches_the_user_then_approved(String)"
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
  "name": "Admin approve the user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@approve"
    }
  ]
});
formatter.step({
  "name": "Admin matches the user then approved\"hukomuko\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_matches_the_user_then_approved(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Admin edit the user details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@edit"
    }
  ]
});
formatter.step({
  "name": "Admin clicks the edit button\"\u003cuseredit\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin visits the Edit Affiliate page",
  "keyword": "And "
});
formatter.step({
  "name": "Admin changed the firstname\"\u003cename\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin clicks the save button",
  "keyword": "And "
});
formatter.step({
  "name": "Admin gets the success message",
  "keyword": "Then "
});
formatter.step({
  "name": "Admin checks the two values\"\u003cnvalue\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "useredit",
        "ename",
        "nvalue"
      ]
    },
    {
      "cells": [
        "Abcd",
        "Tom",
        "Tom"
      ]
    },
    {
      "cells": [
        "pqr",
        "abc",
        "abc"
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
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.fail(Assert.java:106)\r\n\tat RetailDefinition.TestDefination.user_enter_username_and_password(TestDefination.java:58)\r\n\tat ✽.User enter username and password(file:src/test/java/RetailFeature/Retail.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks the login button",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_clicks_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is on the dashboard",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.user_is_on_the_dashboard()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks the marketing option",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.user_clicks_the_marketing_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User clicks the affiliates option",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_clicks_the_affiliates_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is in the affiliates page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_is_in_the_affiliates_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Admin edit the user details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@edit"
    }
  ]
});
formatter.step({
  "name": "Admin clicks the edit button\"Abcd\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_edit_button(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin visits the Edit Affiliate page",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_visits_the_Edit_Affiliate_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin changed the firstname\"Tom\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_changed_the_firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin clicks the save button",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin gets the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_gets_the_success_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Admin checks the two values\"Tom\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_checks_the_two_values(String)"
});
formatter.result({
  "status": "skipped"
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
  "name": "Admin edit the user details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@edit"
    }
  ]
});
formatter.step({
  "name": "Admin clicks the edit button\"pqr\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_edit_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin visits the Edit Affiliate page",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_visits_the_Edit_Affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin changed the firstname\"abc\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_changed_the_firstname(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the save button",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_save_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets the success message",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_gets_the_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin checks the two values\"abc\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_checks_the_two_values(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.fail(Assert.java:106)\r\n\tat RetailDefinition.TestDefination.admin_checks_the_two_values(TestDefination.java:1001)\r\n\tat ✽.Admin checks the two values\"abc\"(file:src/test/java/RetailFeature/Retail.feature:130)\r\n",
  "status": "failed"
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
  "name": "Admin cancels the add new user",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@cancel"
    }
  ]
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
  "name": "Admin navigates to the add affiliate page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_navigates_to_the_add_affiliate_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the cancel button",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_cancel_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin again navigates to the Affiliate List page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_again_navigates_to_the_Affiliate_List_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Admin selects the checkbox",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@checkbox"
    }
  ]
});
formatter.step({
  "name": "admin wants to select all checkbox or multiple checkboxes\"\u003ccheckbox\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "checkbox"
      ]
    },
    {
      "cells": [
        "all"
      ]
    },
    {
      "cells": [
        "Apple"
      ]
    },
    {
      "cells": [
        "Ramgoru, Hukomuko"
      ]
    },
    {
      "cells": [
        "abcdef"
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
  "name": "Admin selects the checkbox",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@checkbox"
    }
  ]
});
formatter.step({
  "name": "admin wants to select all checkbox or multiple checkboxes\"all\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_wants_to_select_all_checkbox_or_multiple_checkboxes(String)"
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
  "error_message": "java.lang.AssertionError: null\r\n\tat org.testng.Assert.fail(Assert.java:99)\r\n\tat org.testng.Assert.fail(Assert.java:106)\r\n\tat RetailDefinition.TestDefination.user_clicks_the_marketing_option(TestDefination.java:105)\r\n\tat ✽.User clicks the marketing option(file:src/test/java/RetailFeature/Retail.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User clicks the affiliates option",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_clicks_the_affiliates_option()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User is in the affiliates page",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.user_is_in_the_affiliates_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Admin selects the checkbox",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@checkbox"
    }
  ]
});
formatter.step({
  "name": "admin wants to select all checkbox or multiple checkboxes\"Apple\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_wants_to_select_all_checkbox_or_multiple_checkboxes(String)"
});
formatter.result({
  "status": "skipped"
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
  "name": "Admin selects the checkbox",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@checkbox"
    }
  ]
});
formatter.step({
  "name": "admin wants to select all checkbox or multiple checkboxes\"Ramgoru, Hukomuko\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_wants_to_select_all_checkbox_or_multiple_checkboxes(String)"
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
  "name": "Admin selects the checkbox",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@checkbox"
    }
  ]
});
formatter.step({
  "name": "admin wants to select all checkbox or multiple checkboxes\"abcdef\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_wants_to_select_all_checkbox_or_multiple_checkboxes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Admin deletes the user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "admin wants to select all checkbox or multiple checkboxes\"\u003ccheckbox\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Admin clicks the delete button",
  "keyword": "When "
});
formatter.step({
  "name": "Admin clicks the ok option in the alertbox",
  "keyword": "And "
});
formatter.step({
  "name": "Admin gets the message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "checkbox"
      ]
    },
    {
      "cells": [
        "Abcd"
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
  "name": "Admin deletes the user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@delete"
    }
  ]
});
formatter.step({
  "name": "admin wants to select all checkbox or multiple checkboxes\"Abcd\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_wants_to_select_all_checkbox_or_multiple_checkboxes(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the delete button",
  "keyword": "When "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_delete_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin clicks the ok option in the alertbox",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_clicks_the_ok_option_in_the_alertbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Admin gets the message",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDefination.admin_gets_the_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});