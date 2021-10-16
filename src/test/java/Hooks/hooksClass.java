package Hooks;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class hooksClass {

    public static WebDriver driver;
	
		@Before
		public void initialization() 
		{
			System.setProperty("webdriver.chrome.driver","C:\\Users\\ananya\\Documents\\chromedriver_win32\\chromedriver.exe");
			driver = new ChromeDriver();
			driver.get("http://retailm1.upskills.in/admin/");
			driver.manage().window().maximize();
	
		}
		
		@After
		public void ending() 
		{
			
			driver.quit();
			System.out.println("Browser successfully closed");
		}
	}
	
