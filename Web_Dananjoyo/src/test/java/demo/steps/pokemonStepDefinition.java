package demo.steps;

import demo.pages.HomePage;
import demo.pages.PokemonPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class pokemonStepDefinition {
    private PokemonPage pokemonPage = new PokemonPage();
    private HomePage homePage = new HomePage();
    @Given("User open bulbapedia homepage")
    public void userOpenBulbapediaHomepage() {
        homePage.openHomePage();
    }

    @When("User input search {string} on homepage")
    public void userInputSearchOnHomepage(String keyword) {
        homePage.inputSearch(keyword);
    }

    @Then("User see article with title {string} and number {string} on article page")
    public void userSeeArticleWithTitleAndNumberOnArticlePage(String keyword, String number) {
        String actualName = pokemonPage.getName();
        String actualNumber = pokemonPage.getNumber();

        //membandingkan nama input dengan nama actual
        Assert.assertEquals(keyword, actualName);
        //membandingkan nomer pokemon input dengan nomer pokemon actual
        Assert.assertEquals(number, actualNumber);
    }
}
