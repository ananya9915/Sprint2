$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/RetailFeature/Retail.feature");
formatter.feature({
  "name": "Affiliate Page",
  "description": "",
  "keyword": "Feature"
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
        "Hukomuko",
        "Ananya",
        "Ananya"
      ]
    }
  ]
});
formatter.background({
  "name": "Login functionality",
  "description": "",
  "keyword": "Background"
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
  "name": "Admin clicks the edit button\"Hukomuko\"",
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
  "name": "Admin changed the firstname\"Ananya\"",
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
  "name": "Admin checks the two values\"Ananya\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestDefination.admin_checks_the_two_values(String)"
});
formatter.result({
  "status": "passed"
});
});sed"
});
});