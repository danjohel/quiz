Feature: Search Bulbapedia

  Scenario: Search pokemon about Pikachu on Bulbapedia
    Given User open bulbapedia homepage
    When User input search "Pikachu" on homepage
    Then User see article with title "Pikachu (Pokémon)" and number "#025" on article page

  Scenario: Search pokemon about Bulbasaur on Bulbapedia
    Given User open bulbapedia homepage
    When User input search "Bulbasaur" on homepage
    Then User see article with title "Bulbasaur (Pokémon)" and number "#001" on article page

  Scenario: Search pokemon about Charizard on Bulbapedia
    Given User open bulbapedia homepage
    When User input search "Charizard" on homepage
    Then User see article with title "Charizard (Pokémon)" and number "#006" on article page