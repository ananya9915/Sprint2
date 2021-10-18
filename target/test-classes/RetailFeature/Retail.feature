Feature: Affiliate Page

  Background: Login functionality
    Given User is on the login page
    When User enter username and password
    Then User clicks the login button
    And User is on the dashboard
    When User clicks the marketing option
    Then User clicks the affiliates option
    Then User is in the affiliates page

  @newuser
  Scenario Outline: Add a new user
    Given Admin is on the Affiliate page
    When Admin clicks the add new button
    Then Admin should see add user details
    And Admin enters all the credentials firstname"<firstname>", lastname"<lastname>", email"<email>", telephone"<telephone>", fax"<fax>", password"<password>", confirmpassword"<confirmpassword>"
    And Admin selects the Status field"<status>"
    And Admin enters all the credentials company"<company>", website"<website>", address1"<address1>", address2"<address2>", city"<city>", postcode"<postcode>"
    And Admin selects the country"<country>"
    And Admin selects the region/state"<state>"
    Then Admin navigates to the payment section
    Then Admin is on the payment tab
    And Admin enters the commission"<commission>", taxid"<taxid>"
    And Admin selects a  payment option"<option>"
    When Admin selects cheque then enters ChequeName"<chequename>"
    When Admin selects paypal then enters paypalmail"<paypalmail>"
    When Admin selects bank then enters BankName"<bank>", branchnumber"<branchnumber>", swift"<swift>", accname"<accname>", accnum"<accnum>"
    Then Admin saves the new user
    And Admin verifies the success message

    Examples: 
      | firstname  | lastname | email             | telephone                          | fax                                | password  | confirmpassword | status   | company   | website  | address1 | address2 | city        | postcode | country | state       | commission | taxid | option | chequename | paypalmail          | bank | branchnumber | swift      | accname | accnum      |
      | RamGorurer | Chana    | hasbona@yagoo.com |                         7965482310 |                       025896314789 | ananya123 | ananya123       | Disabled | Capgemini | capg.com | Bandra   | Mumbai   | Mumbai City |   852697 | India   | West Bengal |         10 |  1234 | paypal |            | chadvfgv@tyu.com    |      |              |            |         |             |
      #| Shsja1234  | df356      | 123456@gmail.com     |                         1123456789 |                            2345678 | anan      | anan            | Enabled  | Capgemini | capg.com | Bandra   | Mumbai   | Mumbai City |     3456 | India   | West Bengal |          7 |  1234 | cheque | Ananya Ghosal |                     |      |              |            |               |             |
      #| Abcd       | qwer       | qwer@gmail.com       |                          123456789 |                          123455678 | ananya    | ananya          | Enabled  | Capgemini | capg.com | Bandra   | Mumbai   | Mumbai City |     3456 | India   | West Bengal |          7 |  1234 | bank   |               |                     | HDFC |        45612 | 7894561345 | Ananya Ghosal | 78945613287 |
      #| cat        | dog        | cat@dog.com          |                          123456789 |                          123455678 | meow      | meow            | Enabled  | Capgemini | capg.com |          | howrah   | gppp        |     3456 | India   | West Bengal |          6 |  1234 | bank   |               |                     |      |        45612 | 7894561345 | mini          | 78945613287 |
      #| choco      | kit        | choco@gmail.com      |                          123456789 |                          123455678 | choco1    | choco2          | Enabled  | Capgemini | capg.com | Kolkata  | howrah   | gppp        |     3456 | India   | West Bengal |          6 |  1234 | bank   |               |                     |      |        45612 | 7894561345 |               | 78945613287 |
      #| sourav     | ganguly    |                      |                          123456789 |                          123455678 | meow      | meow            | Enabled  | Capgemini | capg.com | Kolkata  | Behala   | gppp        |     3456 | India   | West Bengal |          6 |  1234 | bank   |               |                     | SBI  |        45612 | 7894561345 | mini          | 78945613287 |
      #| !@6$%^     | !@$%^&><,. | %$//:;;;^&@gmail.com |                          123456789 |                          123455678 | meow      | meow            | Enabled  | Capgemini | capg.com | Kolkata  | Behala   | gppp        |     3456 | India   | West Bengal |          6 |  1234 | paypal |               | qwerty@gmail.xom    |      |        45612 | 7894561345 |               | 78945613287 |
      | Sachine    | roy      | new@gmail.com     | 1234567894561345612345456424665789 | 1234567894561345612345456424665789 | pqr       | pqr             | Enabled  | Capgemini | capg.com | Kolkata  | Behala   | gppp        |     3456 | India   | West Bengal |          6 |  1234 | paypal |            | qwerty123@gmail.xom | SBI  |        45612 | 7894561345 | Sachine | 78945613287 |

  @filter_by_name
  Scenario Outline: Search a user using Affiliate Name field
    Given Admin is on the Affiliates Page
    Then Clicks the Affiliate Name field
    And Admin enters the name"<aname>"
    Then Admin clicks the filter button
    And Admin fetch the result

    Examples: 
      | aname     |
      | Hukomuko  |
      |    123456 |
      | @#$%!     |
      | fghiy2234 |

  @filter_by_email
  Scenario Outline: Search a user using Affiliate Email field
    Given Admin is in the Affiliates Page
    Then Clicks the Affiliate Email field
    And Admin enters the email"<aemail>"
    Then Admin clicks the filter button to search
    And Admin fetch the result of a user

    Examples: 
      | aemail            |
      | hasbona@yagoo.com |
      | 1236@gmail.com    |
      | adchkiu           |
      | !@$%^^^@gmail.com |

  @filter_by_status
  Scenario Outline: Search a user using status field
    Given Admin is in Affiliates Page
    Then Clicks the status field
    And Admin selects the option"<aoption>"
    Then Admin clicks the filter button to search the user
    And Admin fetch the result of the user

    Examples: 
      | aoption  |
      | Disabled |
      | Enabled  |

  @filter3_by_approved
  Scenario Outline: Search a user using Approved field
    Given Admin checks the Affiliates Page
    Then Clicks the approved field
    And Admin selects the one optionn"<aoptionn>"
    Then Admin clicks the filter button to search the users
    And Admin fetch the result of the users

    Examples: 
      | aoptionn |
      | No       |
      | Yes      |

  @filter_by_date
  Scenario Outline: Search a user using date field
    Given Admin checks that Affiliates Page
    Then Clicks the date added field
    And Admin selects the date"<adate>"
    Then Admin clicks the filter button to search the users by date
    And Admin fetch all the result of the users

    Examples: 
      | adate      |
      | 17/10/2021 |
      | 11/10/2021 |
      | 05/11/2021 |

  @approve
  Scenario Outline: Admin approve the user
    When Admin matches the user then approved"<approve>"

    Examples: 
      | approve  |
      | qwerty   |
      | pqr      |
      | hukomuko |

  @edit
  Scenario Outline: Admin edit the user details
    When Admin clicks the edit button"<useredit>"
    And Admin visits the Edit Affiliate page
    Then Admin changed the firstname"<ename>"
    And Admin clicks the save button
    Then Admin gets the success message
    And Admin checks the two values"<nvalue>"

    Examples: 
      | useredit | ename | nvalue |
      | Abcd     | Tom   | Tom    |
      | pqr      | abc   | abc    |

  @cancel
  Scenario: Admin cancels the add new user
    When Admin clicks the add new button
    Then Admin navigates to the add affiliate page
    And Admin clicks the cancel button
    Then Admin again navigates to the Affiliate List page

  @checkbox
  Scenario Outline: Admin selects the checkbox
    When admin wants to select all checkbox or multiple checkboxes"<checkbox>"

    Examples: 
      | checkbox          |
      | all               |
      | Apple             |
      | Ramgoru, Hukomuko |
      | abcdef            |

  @delete
  Scenario Outline: Admin deletes the user
    When admin wants to select all checkbox or multiple checkboxes"<checkbox>"
    When Admin clicks the delete button
    And Admin clicks the ok option in the alertbox
    Then Admin gets the message

    Examples: 
      | checkbox |
      | Abcd     |
