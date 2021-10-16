package RetailDefinition;

import static org.junit.Assert.fail;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.*;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Action;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import org.testng.asserts.SoftAssert;

import Hooks.hooksClass;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import net.bytebuddy.implementation.MethodCall.WithoutSpecifiedTarget;

public class TestDefination {

	//WebDriver driver;
	WebDriver driver = hooksClass.driver;

	@Given("User is on the login page")
	public void user_is_on_the_login_page() {

		//System.setProperty("webdriver.chrome.driver", "E:\\CapgeminiWorkspace\\CapgDay1\\chromedriver_win32\\chromedriver.exe");
		

		//driver = new ChromeDriver();
		//driver.get("http://retailm1.upskills.in/admin/");
		// driver.manage().window().maximize();
		System.out.println("User is on log in page");

	}

	@When("User enter username and password")
	public void user_enter_username_and_password() {
		try {
			driver.findElement(By.id("input-username")).sendKeys("admin");
			Thread.sleep(3000);
			driver.findElement(By.id("input-password")).sendKeys("admin@123");
			Thread.sleep(3000);

		} catch (Exception e) {
			System.out.println("Not able to enter credentials" + e);
			
		}

	}

	@Then("User clicks the login button")
	public void user_clicks_the_login_button() {
		try {
			driver.findElement(By.xpath("//*[@class='btn btn-primary']")).click();
		} catch (Exception e) {
			System.out.println("user unble to register" + e);
		}

	}

	@Then("User is on the dashboard")
	public void user_is_on_the_dashboard() {
		try {
			String title = driver.getTitle();
			String expected = "Dashboard";
			if (title.equals(expected)) {
				System.out.println("User is on the dashboard page");
			} else {
				System.out.println("User is not on the right page");
			}
		} catch (Exception e) {
			System.out.println("Title not found: error" + e);
		}
	}

	@When("User clicks the marketing option")
	public void user_clicks_the_marketing_option() {
		try {

			driver.findElement(By.id("button-menu")).click();
			Thread.sleep(3000);
			driver.findElement(By.xpath("//span[contains(text(),'Marketing')]")).click();
			Thread.sleep(2000);

		} catch (Exception e) {
			System.out.println("user unble to register" + e);
		}

	}

	@Then("User clicks the affiliates option")
	public void user_clicks_the_affiliates_option() {
		try {
			Thread.sleep(2000);
			driver.findElement(By.xpath("//a[contains(text(),'Affiliates')]")).click();
		} catch (Exception e) {
			System.out.println("No Affiliates Option Found: Error " + e);
		}
	}

	@Then("User is in the affiliates page")
	public void user_is_in_the_affiliates_page() {
		try {
			String title = driver.getTitle();
			String expectedA = "Affiliates";
			if (title.equals(expectedA)) {
				System.out.println("User is on the Affiliates page");
			} else {
				System.out.println("User is not on the right page");
			}
		} catch (Exception e) {
			System.out.println("Title not found: error" + e);
		}
	}

	@Given("Admin is on the Affiliate page")
	public void admin_is_on_the_Affiliate_page() {
		try {
			String title = driver.getTitle();
			String expectedA = "Affiliates";
			if (title.equals(expectedA)) {
				System.out.println("User is on the Affiliates page");
			} else {
				System.out.println("User is not on the right page");
			}
		} catch (Exception e) {
			System.out.println("Title not found: error" + e);
		}
	}

	@When("Admin clicks the add new button")
	public void admin_clicks_the_add_new_button() {
		try {
			driver.findElement(By.xpath("//a[@class='btn btn-primary' and @data-original-title='Add New']")).click();
			System.out.println("User is on the add new user page");
		} catch (Exception e) {
			System.out.println("Admin not able to click the button "+e);
		}
	}

	@Then("Admin should see add user details")
	public void admin_should_see_add_user_details() {
		try {
			String head = driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
			String expected = "Add Affiliate";
			if (head.equals(expected)) {
				System.out.println("User is on the add new user page");
			} else {
				System.out.println("User is not on corect page");
			}
		} catch (Exception e) {
			System.out.println("Admin is not able to see the details "+e);
		}
	}

	@Then("Admin enters all the credentials firstname{string}, lastname{string}, email{string}, telephone{string}, fax{string}, password{string}, confirmpassword{string}")
	public void admin_enters_all_the_credentials_firstname_lastname_email_telephone_fax_password_confirmpassword(
			String firstname, String lastname, String email, String telephone, String fax, String password,
			String confirmpassword) {
		try {
			Thread.sleep(1000);
			driver.findElement(By.id("input-firstname")).sendKeys(firstname);
			Thread.sleep(1000);
			driver.findElement(By.id("input-lastname")).sendKeys(lastname);
			Thread.sleep(1000);
			driver.findElement(By.id("input-email")).sendKeys(email);
			Thread.sleep(1000);
			driver.findElement(By.id("input-telephone")).sendKeys(telephone);
			Thread.sleep(1000);
			driver.findElement(By.id("input-fax")).sendKeys(fax);
			Thread.sleep(1000);
			driver.findElement(By.id("input-password")).sendKeys(password);
			Thread.sleep(1000);
			driver.findElement(By.id("input-confirm")).sendKeys(confirmpassword);
			Thread.sleep(1000);

		} catch (Exception e) {
			System.out.println("Admin is not able to enter all the details "+e);

		}
	}

	@Then("Admin selects the Status field{string}")
	public void admin_selects_the_Status_field(String status) {
		try {
			Select s = new Select(driver.findElement(By.id("input-status")));
			Thread.sleep(1000);
			s.selectByVisibleText(status);

		} catch (Exception e) {
			System.out.println("Not able to select the status field "+e);
		}
	}

	@And("Admin enters all the credentials company{string}, website{string}, address1{string}, address2{string}, city{string}, postcode{string}")
	public void admin_enters_all_the_credentials_company_website_address_address_city_postcode(String company,
			String website, String address1, String address2, String city, String postcode)
			throws InterruptedException {
		try {
			Thread.sleep(1000);
			driver.findElement(By.id("input-company")).sendKeys(company);
			Thread.sleep(1000);
			driver.findElement(By.id("input-website")).sendKeys(website);
			Thread.sleep(1000);
			driver.findElement(By.id("input-address-1")).sendKeys(address1);
			Thread.sleep(1000);
			driver.findElement(By.id("input-address-2")).sendKeys(address2);
			Thread.sleep(1000);
			driver.findElement(By.id("input-city")).sendKeys(city);
			Thread.sleep(1000);
			driver.findElement(By.id("input-postcode")).sendKeys(postcode);
			Thread.sleep(1000);
		} catch (Exception e) {
			System.out.println("Admin is not able to enter all the details "+e);
		}

	}

	@And("Admin selects the country{string}")
	public void admin_selects_the_country(String country) {
		try {

			Select country1 = new Select(driver.findElement(By.id("input-country")));
			Thread.sleep(1000);

			country1.selectByVisibleText(country);

		} catch (Exception e) {
			System.out.println("Not able to select the country field "+e);
		}
	}

	@And("Admin selects the region\\/state{string}")
	public void admin_selects_the_region_state(String state) {
		try {
			Select zone = new Select(driver.findElement(By.id("input-zone")));
			Thread.sleep(5000);
			zone.selectByVisibleText(state);

		} catch (Exception e) {
			System.out.println("Not able to select the states field "+e);
		}
	}

	@Then("Admin navigates to the payment section")
	public void admin_navigates_to_the_payment_section() throws InterruptedException {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//a[@data-toggle='tab' and @href='#tab-payment']")).click();
			System.out.println("Admin is switching to Payment Tab");
		} catch (Exception ex) {
			System.out.println("Admin is not able to switching to Payment Tab"+ex);
		}
	}

	@Then("Admin is on the payment tab")
	public void admin_is_on_the_payment_tab() {
		try {
			String boo = driver.findElement(By.xpath("//a[@data-toggle='tab' and @href='#tab-payment']"))
					.getAttribute("aria-expanded");
			System.out.println(boo);
			if (boo.equals("true")) {
				System.out.println("Admin is in the payment tab");
			} else {
				System.out.println("Admin in not in payment tab");
			}
		} catch (Exception e) {
			System.out.println("Admin in not able to navigates to the payment tab"+e);
		}
	}

	@Then("Admin enters the commission{string}, taxid{string}")
	public void admin_enters_the_commission_taxid(String commission, String taxid) {
		try {
			driver.findElement(By.id("input-commission")).clear();
			driver.findElement(By.id("input-commission")).sendKeys(commission);
			Thread.sleep(3000);
			driver.findElement(By.id("input-tax")).sendKeys(taxid);
			Thread.sleep(3000);
		} catch (Exception e) {
			System.out.println("Admin is not able to enter all the details "+e);
		}
	}

	@Then("Admin selects a  payment option{string}")
	public void admin_selects_a_payment_option(String option) {
		try {
			Thread.sleep(3000);
			if (option.equals("cheque")) {
				driver.findElement(By.xpath("//input[@name='payment' and @value='cheque']")).click();

			} else if (option.equals("paypal")) {
				driver.findElement(By.xpath("//input[@name='payment' and @value='paypal']")).click();
			} else if (option.equals("bank")) {
				driver.findElement(By.xpath("//input[@name='payment' and @value='bank']")).click();
			}
		} catch (Exception e) {
			System.out.println("Not able to selects the payment options "+e);
		}
	}

	@When("Admin selects cheque then enters ChequeName{string}")
	public void admin_selects_cheque_then_enters_ChequeName(String ChequeName) {
		try {
			Thread.sleep(3000);
			if (driver.findElement(By.xpath("//input[@name='payment' and @value='cheque']")).isSelected()) {
				driver.findElement(By.id("input-cheque")).sendKeys(ChequeName);
			} else {
				System.out.println("Cheque Not selected");
			}
		} catch (Exception e) {
			System.out.println("Not able to selects the cheque options "+e);
		}
	}

	@When("Admin selects paypal then enters paypalmail{string}")
	public void admin_selects_paypal_then_enters_paypalmail(String paypalmail) {
		try {
			Thread.sleep(3000);
			if (driver.findElement(By.xpath("//input[@name='payment' and @value='paypal']")).isSelected()) {
				driver.findElement(By.id("input-paypal")).sendKeys(paypalmail);
			} else {
				System.out.println(" Paypal Not selected");
			}
		} catch (Exception e) {
			System.out.println("Not able to enters the paypalmail "+e);
		}
	}

	@When("Admin selects bank then enters BankName{string}, branchnumber{string}, swift{string}, accname{string}, accnum{string}")
	public void admin_selects_bank_then_enters_BankName_branchnumber_swift_accname_accnum(String bankname,
			String branchnumber, String swift, String accname, String accnum) {
		try {
			if (driver.findElement(By.xpath("//input[@name='payment' and @value='bank']")).isSelected()) {
				Thread.sleep(1000);
				driver.findElement(By.id("input-bank-name")).sendKeys(bankname);
				Thread.sleep(1000);
				driver.findElement(By.id("input-bank-branch-number")).sendKeys(branchnumber);
				Thread.sleep(1000);
				driver.findElement(By.id("input-bank-swift-code")).sendKeys(swift);
				Thread.sleep(1000);
				driver.findElement(By.id("input-bank-account-name")).sendKeys(accname);
				Thread.sleep(1000);
				driver.findElement(By.id("input-bank-account-number")).sendKeys(accnum);
			} else {
				System.out.println("Bank Not selected");
			}
		} catch (Exception e) {
			System.out.println("Admin is not able to enter all the details "+e);
		}
	}

	@Then("Admin saves the new user")
	public void admin_saves_the_new_user() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//button[@class='btn btn-primary']")).click();
		} catch (Exception e) {
			System.out.println("Admin is not able to clicks the save user"+e);
		}
	}

	@Then("Admin verifies the success message")
	public void admin_verifies_the_success_message() {
		try {
			String out1 = driver.findElement(By.xpath("//body[1]/div[1]/div[1]/div[2]/div[1]")).getAttribute("class");
			if (out1.equals("alert alert-success")) {
				System.out.println("The User Is Saved Properly");
			} else if (out1.equals("alert alert-danger")) {
				System.out.println("User Already Exists");
			} else {
				System.out.println("Error");
			}
		} catch (Exception e) {
			System.out.println(e);
		}
	}

	@Given("Admin is on the Affiliates Page")
	public void admin_is_on_the_Affiliates_Page() {
		try {
			String head = driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
			String expected = "Affiliate List";
			if (head.equals(expected)) {
				System.out.println("User is on the affiliate search page");
			} else {
				System.out.println("User is not on corect page");
			}
		} catch (Exception e) {
			System.out.println("Admin is in the wrong page "+e);
		}
	}

	@Then("Clicks the Affiliate Name field")
	public void clicks_the_Affiliate_Name_field() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@id='input-name']")).click();
		} catch (Exception e) {
			System.out.println("Admin is not able to clicks the name field"+e);
		}
	}

	@Then("Admin enters the name{string}")
	public void admin_enters_the_name(String name) {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@id='input-name']")).sendKeys(name);

		} catch (Exception e) {
			System.out.println("Admin is not able to enters the name "+e);
		}
	}

	@Then("Admin clicks the filter button")
	public void admin_clicks_the_filter_button() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//button[@id='button-filter']")).click();

		} catch (Exception e) {
			System.out.println("Admin is not able to clicks the filter button"+e);
		}
	}

	@Then("Admin fetch the result")
	public void admin_fetch_the_result() {
		try {
			String text = driver.findElement(By.xpath("//div[@class='col-sm-6 text-right']")).getText();
			String no = text.substring(18, 19);
			int i = Integer.parseInt(no);
			if (i > 0) {
				System.out.println("User Found");
			} else {
				System.out.println("user not found");
			}

		} catch (Exception e) {
			System.out.println("Admin is not able to fetch the result "+e);
		}
	}

	@Given("Admin is in the Affiliates Page")
	public void admin_is_in_the_Affiliates_Page() {
		try {
			String head = driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
			String expected = "Affiliate List";
			if (head.equals(expected)) {
				System.out.println("User is on the affiliate search page");
			} else {
				System.out.println("User is not on corect page");
			}
		} catch (Exception e) {
			System.out.println("User is not on corect page"+e);
		}

	}

	@Then("Clicks the Affiliate Email field")
	public void clicks_the_Affiliate_Email_field() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@id='input-email']")).click();
		} catch (Exception e) {
			System.out.println("Admin is not able to clicks the email field"+e);
		}

	}

	@Then("Admin enters the email{string}")
	public void admin_enters_the_email(String aemail) {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@id='input-email']")).sendKeys(aemail);

		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}

	}

	@Then("Admin clicks the filter button to search")
	public void admin_clicks_the_filter_button_to_search() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//button[@id='button-filter']")).click();

		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Then("Admin fetch the result of a user")
	public void admin_fetch_the_result_of_a_user() {
		try {
			String text = driver.findElement(By.xpath("//div[@class='col-sm-6 text-right']")).getText();
			String no = text.substring(18, 19);
			int i = Integer.parseInt(no);
			if (i > 0) {
				System.out.println("User Found");
			} else {
				System.out.println("user not found");
			}

		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Given("Admin is in Affiliates Page")
	public void admin_is_in_Affiliates_Page() {
		try {
			String head = driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
			String expected = "Affiliate List";
			if (head.equals(expected)) {
				System.out.println("User is on the affiliate search page");
			} else {
				System.out.println("User is not on corect page");
			}
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}

	}

	@Then("Clicks the status field")
	public void clicks_the_status_field() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//select[@id=\"input-status\" and @name=\"filter_status\"]")).click();
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
			
		}
	}

	@Then("Admin selects the option{string}")
	public void admin_selects_the_option(String option) {
		try {
			
			//driver.findElement(By.id("input-status")).click();
			Select s = new Select(driver.findElement(By.xpath("//select[@id=\"input-status\" and @name=\"filter_status\"]")));
			Thread.sleep(1000);
			if (option.equals("Enabled") || option.equals("Disabled")) {
				s.selectByVisibleText(option);
			} else {
				System.out.println("Wrong input");
			}
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
			Assert.fail();
		}
	}

	@Then("Admin clicks the filter button to search the user")
	public void admin_clicks_the_filter_button_to_search_the_user() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//button[@id='button-filter']")).click();

		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}

	}

	@Then("Admin fetch the result of the user")
	public void admin_fetch_the_result_of_the_user() {
		try {
			String text = driver.findElement(By.xpath("//div[@class='col-sm-6 text-right']")).getText();
			String no = text.substring(18, 19);
			int i = Integer.parseInt(no);
			if (i > 0) {
				System.out.println("User Found");
			} else {
				System.out.println("user not found");
			}
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Given("Admin checks the Affiliates Page")
	public void admin_checks_the_Affiliates_Page() {
		try {
			String head = driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
			String expected = "Affiliate List";
			if (head.equals(expected)) {
				System.out.println("User is on the affiliate search page");
			} else {
				System.out.println("User is not on corect page");
			}
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Then("Clicks the approved field")
	public void clicks_the_approved_field() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//*[@id='input-approved']")).click();
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Then("Admin selects the one optionn{string}")
	public void admin_selects_the_one_optionn(String optionn) {
		try {
			//driver.findElement(By.id("input-approved")).click();
			Select s = new Select(driver.findElement(By.xpath("//*[@id='input-approved']")));
			Thread.sleep(1000);
			if (optionn.equalsIgnoreCase("Yes") || optionn.equalsIgnoreCase("No")) {
				s.selectByVisibleText(optionn);
			} else {
				System.out.println("Wrong input");
			}
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Then("Admin clicks the filter button to search the users")
	public void admin_clicks_the_filter_button_to_search_the_users() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//button[@id='button-filter']")).click();

		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Then("Admin fetch the result of the users")
	public void admin_fetch_the_result_of_the_users() {
		try {
			String text = driver.findElement(By.xpath("//div[@class='col-sm-6 text-right']")).getText();
			String no = text.substring(18, 19);
			int i = Integer.parseInt(no);
			if (i > 0) {
				System.out.println("User Found");
			} else {
				System.out.println("user not found");
			}
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Given("Admin checks that Affiliates Page")
	public void admin_checks_that_Affiliates_Page() {
		try {
			String head = driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
			String expected = "Affiliate List";
			if (head.equals(expected)) {
				System.out.println("User is on the affiliate search page");
			} else {
				System.out.println("User is not on corect page");
			}
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Then("Clicks the date added field")
	public void clicks_the_date_added_field() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//input[@id='input-date-added']")).click();
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Then("Admin selects the date{string}")
	public void admin_selects_the_date(String adate) {
		try {
			SimpleDateFormat formatter = new SimpleDateFormat("dd/mm/yyyy");
			SimpleDateFormat parser = new SimpleDateFormat("yyyy-mm-dd");
			String dateString = adate;
			try {
				Date date = formatter.parse(dateString);
				System.out.println(parser.format(date));
				driver.findElement(By.xpath("//input[@id='input-date-added']")).sendKeys(parser.format(date));

			} catch (Exception e) {
				System.out.println("Exception Message     "+e);
			}

		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Then("Admin clicks the filter button to search the users by date")
	public void admin_clicks_the_filter_button_to_search_the_users_by_date() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//button[@id='button-filter']")).click();

		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Then("Admin fetch all the result of the users")
	public void admin_fetch_all_the_result_of_the_users() {
		try {
			String text = driver.findElement(By.xpath("//div[@class='col-sm-6 text-right']")).getText();
			String no = text.substring(18, 19);
			int i = Integer.parseInt(no);
			if (i > 0) {
				System.out.println("User Found");
			} else {
				System.out.println("user not found");
			}
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@When("Admin matches the user then approved{string}")
	public void admin_matches_the_user_then_approved(String approved) {
		try {
			boolean found = false;
			for (int i = 0; i < 50; i++) {
				List<WebElement> ele = driver.findElements(By.tagName("td"));				
				for (int j = 0; j < ele.size(); j++) {
					String listOfValues = ele.get(j).getText();

					if (listOfValues.contains(approved)) {
						found = true;
						try {
							driver.findElement(
									By.xpath("//a[@class='btn btn-success' and @data-original-title='Approve']")).click();
									

							System.out.println("User Is Approved Succesfully");
						} catch (Exception e) {
							System.out.println("Already Approved"+e);
						}
						break;
					} else {
						continue;
					}
				}
				if (found) {
					break;
				}
// 				else {
//					System.out.println("User Is Not Found and Not  Approved Succesfully");
//				}

			}
			if(found==false)
				System.out.println("User Not Found");
					
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@When("Admin clicks the edit button{string}")
	public void admin_clicks_the_edit_button(String useredit) {
		try {
			boolean found = false; 
			
				List<WebElement> ele = driver.findElements(By.xpath("//*[@id='form-affiliate']/div/table//tr"));
				//System.out.println(ele.size());

				for (int i = 0; i < 10; i++) {
					int j;
				for (j=1;j < ele.size();j++) {
					
						//System.out.println(j);
						String listOfValues = ele.get(j).getText();
						//System.out.println(listOfValues);
						if (listOfValues.contains(useredit)) {
							try{
							String x = "//*[@id=\"form-affiliate\"]/div/table/tbody/tr[";
							String y = "]/td[7]/a";
							driver.findElement(By.xpath(x+j+y)).click();

							System.out.println("User Edited");
						} catch (Exception e) {
							System.out.println("Not Edited");
						}
			
						break;
					} else {
						continue;
					}
						
				}
				if (found) {
					break;
				}
			}
		} catch (Exception e) {
			//System.out.println("Error");
		}
	}

	@When("Admin visits the Edit Affiliate page")
	public void admin_visits_the_Edit_Affiliate_page() {
		try {
			String head = driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
			String expected = "Edit Affiliate";
			if (head.equals(expected)) {
				System.out.println("User is on the affiliate edit page");
			} else {
				System.out.println("User is not on corect page");
			}
		} catch (Exception e) {
			System.out.println("User is not on corect page");
		}
	}
	
	@Then("Admin changed the firstname{string}")
	public void admin_changed_the_firstname(String ename) {
	  try
	  {
//		  Thread.sleep(3000);
		  driver.findElement(By.id("input-firstname")).clear();
		  System.out.println("Cleared");
//		  Thread.sleep(2000);
		  driver.findElement(By.id("input-firstname")).sendKeys(ename);
	  }
	  catch(Exception e)
	  {
		  System.out.println("User is not on the edit page");
	  }
	}

	@Then("Admin clicks the save button")
	public void admin_clicks_the_save_button() {
	 try {
//		    Thread.sleep(3000);
//		 	System.out.println("Save Button ");
			driver.findElement(By.xpath("//button[@class='btn btn-primary']")).click();
			System.out.println("Save Button Clicked");
	 } catch (Exception e) {
		System.out.println("User is not edited or user not found");
	}  
	}

	@Then("Admin gets the success message")
	public void admin_gets_the_success_message() {
		try {
			String out1 = driver.findElement(By.xpath("//body[1]/div[1]/div[1]/div[2]/div[1]")).getAttribute("class");
			if (out1.equals("alert alert-success")) {
				System.out.println("The User Is Saved Properly");
			} else if (out1.equals("alert alert-danger")) {
				System.out.println("User Not Saved");
			} else {
				System.out.println("User Doesent Exists");
			}
		} catch (Exception e) {
			//System.out.println("User Doesent Exists");
		}
	}

	@Then("Admin checks the two values{string}")
	public void admin_checks_the_two_values(String nvalue) {
		try {
			boolean found = false; 
			
				List<WebElement> ele = driver.findElements(By.xpath("//*[@id='form-affiliate']/div/table//tr"));
				//System.out.println(ele.size());

				for (int i = 0; i < 10; i++) {
					int j = 0;
					while (j < ele.size()) {
						//System.out.println(j);
						String listOfValues = ele.get(j).getText();
						//System.out.println(myList.get(i));
						if (listOfValues.contains(nvalue)) {
							try{
							String x = "//*[@id=\"form-affiliate\"]/div/table/tbody/tr[";
							String y = "]/td[7]/a";
							String s = driver.findElement(By.xpath(x+j+y)).getText();
							if(s.equals(nvalue))
								System.out.println("User is Edited Successfully" );
							else
								System.out.println("User Not Edited");
						} catch (Exception e) {
							System.out.println("Exception Message:"+e);
						}
			
						break;
					} else {
						continue;
					}
				}
				if (found) {
					break;
				}
			}
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}


	@Then("Admin navigates to the add affiliate page")
	public void admin_navigates_to_the_add_affiliate_page() {
		try {
			Thread.sleep(3000);
			String head = driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
			String expected = "Add Affiliate";
			if (head.equals(expected)) {
				System.out.println("User is on the add affiliate page");
			} else {
				System.out.println("User is not on corect page");
			}

		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Then("Admin clicks the cancel button")
	public void admin_clicks_the_cancel_button() {
		try {
			Thread.sleep(3000);
			driver.findElement(By.xpath("//a[@class='btn btn-default' and @data-original-title='Cancel']")).click();
			System.out.println("Admin clicked the back button");
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@Then("Admin again navigates to the Affiliate List page")
	public void admin_again_navigates_to_the_Affiliate_List_page() {
		try {
			Thread.sleep(3000);
			String head = driver.findElement(By.xpath("//h3[@class='panel-title']")).getText();
			String expected = "Affiliate List";
			if (head.equals(expected)) {
				System.out.println("User is on the affiliate search page");
			} else {
				System.out.println("User is not on corect page");
			}
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

	@When("admin wants to select all checkbox or multiple checkboxes{string}")
	public void admin_wants_to_select_all_checkbox_or_multiple_checkboxes(String checkbox) {
		try {
			if (checkbox.equalsIgnoreCase("all")) {
				driver.findElement(By.xpath("//*[@id=\"form-affiliate\"]/div/table/thead/tr/td[1]/input")).click();
				System.out.println("all");
			} else {
				String[] myArray = checkbox.trim().split(", ");
				List<String> myList = new ArrayList<String>();
				for (String str : myArray) {
					myList.add(str);
				}
				//System.out.println(myList.size());

				List<WebElement> ele = driver.findElements(By.xpath("//*[@id='form-affiliate']/div/table//tr"));
				//System.out.println(ele.size());

				for (int i = 0; i < myList.size(); i++) {
					int j = 0;
					while (j < ele.size()) {
						//System.out.println(j);
						String listOfValues = ele.get(j).getText();
						//System.out.println(myList.get(i));
						if (listOfValues.contains(myList.get(i))) {
							{
								String x = "//*[@id=\"form-affiliate\"]/div/table/tbody/tr[";
								String x1 = "]//input";
								
								driver.findElement(By.xpath(x + j + x1)).click();
								
								break;
							}
						}
						j++;
					}

				}

			}
		} catch (Exception e) {
			System.out.println("Exception Message:"+e);
		}
	}

		@When("Admin clicks the delete button")
		public void admin_clicks_the_delete_button() {
			try {
				Thread.sleep(3000);
				driver.findElement(By.xpath("//*[@class='btn btn-danger']")).click();
				System.out.println("User Is Deleted");
			} catch (Exception e) {
				System.out.println("Exception Message:"+e);
			}
		}
		
		@When("Admin clicks the ok option in the alertbox")
		public void admin_clicks_the_ok_option_in_the_alertbox() {
			try
			{
				Alert alert = driver.switchTo().alert();
				Thread.sleep(3000);
				alert.accept();
			}
			catch(Exception e)
			{
				System.out.println("Exception Message:"+e);
			}
		    
		}
		
		@Then("Admin gets the message")
		public void admin_gets_the_message() {
			try {
				String out1 = driver.findElement(By.xpath("//*[@id=\"content\"]/div[2]/div[1]")).getAttribute("class");
				if (out1.equals("alert alert-success")) {
					System.out.println("The User Is Deleted Successfully");
				}
			 else {
					System.out.println("Error");
				}
			} catch (Exception e) {
				System.out.println("Exception Message:"+e);
			}
		}

}
