package demo.pages;

import demo.webdriver.WebDriverInstance;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

public class PokemonPage {
    public String getName(){
        WebElement pokemonName = WebDriverInstance.driver.findElement(By.id("firstHeading"));
        String name = pokemonName.getText();
        return name;
    }
    public String getNumber(){
        WebElement pokemonNumber = WebDriverInstance.driver.findElement(By.xpath("//span[contains(text(),'#025')]"));
        String number = pokemonNumber.getText();
        return number;
    }
}
