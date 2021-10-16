package RetailTestRunner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/java/RetailFeature",
	glue = { "RetailDefinition","Hooks" }, 
	tags = {"@newuser"}, 
	monochrome = true,
			plugin = {"pretty", "html: target/cucumber-report"})
public class TestRunner {

}
