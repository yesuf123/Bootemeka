package bdd.bdd;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Zoopla {
	WebDriver driver;
	private Test01 key;
	
	@Given("^I render the widget$")
	public void i_render_the_widget() throws Throwable {

		
		System.setProperty("webdriver.chrome.driver", "/Users/macssd/Desktop/selenium/chromedriver");
		driver = new ChromeDriver();
		
		driver.get("https://www.zoopla.co.uk");
		key = new Test01(); 
		key.enterName();
//	    Test01 d = new Test01();
//	    d.enterName();

	}

	@When("^I click on signin$")
	public void i_click_on_signin() throws Throwable {
		
		driver.findElement(By.xpath("//*[@id=\"main-nav\"]/ul[1]/li[3]/a")).click();

	}

	@When("^I click on registration$")
	public void i_click_on_registration() throws Throwable {
		driver.findElement(By.xpath("//*[@id=\"signin_register_tab_register\"]")).click();

	}
 
	@Then("^I should be able to see the sign up form$")
	public void i_should_be_able_to_see_the_sign_up_form() throws Throwable {
		String message = "About me";
		if(message.equals(driver.findElement(By.xpath("//*[@id=\"register_form\"]/fieldset/ol/li[3]/label")).getText())) {
			System.out.println("Test has pass");
		}
		else {
			System.out.println("Test has fail");
		}
	}

	@Then("^I should be allow to populate the fiels successfully$")
	public void i_should_be_allow_to_populate_the_fiels_successfully() throws Throwable {
	
		driver.findElement(By.name("register_email")).sendKeys("test082@yahoo.co.uk");
		driver.findElement(By.name("register_password")).sendKeys("Abubakar134");
		//Assert.assertEquals("About me", driver.findElement(By.xpath("//*[@id=\"register_form\"]/fieldset/ol/li[3]/label")).getText());
		
		// select an item from the list
		
		Select s = new Select(driver.findElement(By.name("sender_property_status")));
		s.selectByValue("buyer_not_first_time");
		//select list of item using the keyboard functiom
		//Actions actions = new Actions(driver);
		//actions.keyDown(Keys.CONTROL).sendKeys(Keys.ARROW_DOWN).perform();
        driver.findElement(By.xpath("//*[@id=\"register_form\"]/fieldset/ol/li[4]/fieldset/fieldset[1]/div[1]/label")).click();
        driver.findElement(By.xpath("//*[@id=\"register_form\"]/fieldset/ol/li[4]/fieldset/fieldset[2]/div[1]/label")).click();
        driver.findElement(By.id("register_submit")).click();
        TimeUnit.SECONDS.sleep(3);
	}

	@Then("^I should see a Thank you message$")
	public void i_should_see_a_Thank_you_message() throws Throwable {
		String drive = "Registration successful";
		if(drive.equals(driver.findElement(By.xpath("//*[@id=\"fancybox-content\"]/div/div/h1")).getText())){
			System.out.println("Test has passed");
		}
		else {
			System.out.println("Test has Failed");
			
	}

}
	
	@When("^I enter my username and password$")
	public void i_enter_my_username_and_password() throws Throwable {
	
	}

	@Then("^I should be able to sign in successfully$")
	public void i_should_be_able_to_sign_in_successfully() throws Throwable {
	   
	}

}


