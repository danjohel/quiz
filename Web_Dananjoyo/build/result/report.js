$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/pokemon.feature");
formatter.feature({
  "name": "Search Bulbapedia",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search pokemon about Pikachu on Bulbapedia",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User open bulbapedia homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.pokemonStepDefinition.userOpenBulbapediaHomepage()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat demo.pages.HomePage.openHomePage(HomePage.java:10)\r\n\tat demo.steps.pokemonStepDefinition.userOpenBulbapediaHomepage(pokemonStepDefinition.java:16)\r\n\tat ✽.User open bulbapedia homepage(file:///C:/Users/ASUS/IdeaProjects/Web_Dananjoyo/src/test/resources/features/pokemon.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User input search \"Pikachu\" on homepage",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.pokemonStepDefinition.userInputSearchOnHomepage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see article with title \"Pikachu (Pokémon)\" and number \"#025\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.pokemonStepDefinition.userSeeArticleWithTitleAndNumberOnArticlePage(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search pokemon about Bulbasaur on Bulbapedia",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User open bulbapedia homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.pokemonStepDefinition.userOpenBulbapediaHomepage()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat demo.pages.HomePage.openHomePage(HomePage.java:10)\r\n\tat demo.steps.pokemonStepDefinition.userOpenBulbapediaHomepage(pokemonStepDefinition.java:16)\r\n\tat ✽.User open bulbapedia homepage(file:///C:/Users/ASUS/IdeaProjects/Web_Dananjoyo/src/test/resources/features/pokemon.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User input search \"Bulbasaur\" on homepage",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.pokemonStepDefinition.userInputSearchOnHomepage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see article with title \"Bulbasaur (Pokémon)\" and number \"#001\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.pokemonStepDefinition.userSeeArticleWithTitleAndNumberOnArticlePage(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search pokemon about Charizard on Bulbapedia",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User open bulbapedia homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "demo.steps.pokemonStepDefinition.userOpenBulbapediaHomepage()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\r\n\tat demo.pages.HomePage.openHomePage(HomePage.java:10)\r\n\tat demo.steps.pokemonStepDefinition.userOpenBulbapediaHomepage(pokemonStepDefinition.java:16)\r\n\tat ✽.User open bulbapedia homepage(file:///C:/Users/ASUS/IdeaProjects/Web_Dananjoyo/src/test/resources/features/pokemon.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User input search \"Charizard\" on homepage",
  "keyword": "When "
});
formatter.match({
  "location": "demo.steps.pokemonStepDefinition.userInputSearchOnHomepage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User see article with title \"Charizard (Pokémon)\" and number \"#006\" on article page",
  "keyword": "Then "
});
formatter.match({
  "location": "demo.steps.pokemonStepDefinition.userSeeArticleWithTitleAndNumberOnArticlePage(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
});